import test, { after, before } from "node:test";
import assert from "node:assert/strict";
import { build } from "esbuild";
import { JSDOM } from "jsdom";
import React, { act } from "react";
import { createRoot } from "react-dom/client";
import { pathToFileURL } from "node:url";
import path from "node:path";
let HeroBackground;
const originals = new Map();
before(async () => {
  const outfile = path.resolve("node_modules/.cache/stephy-hero-test.mjs");
  await build({
    entryPoints: ["src/components/HeroBackground.jsx"],
    outfile,
    bundle: true,
    platform: "node",
    format: "esm",
    packages: "external",
    jsx: "automatic",
  });
  HeroBackground = (await import(pathToFileURL(outfile).href)).default;
});
after(() => {
  for (const [key, descriptor] of originals) {
    if (descriptor) Object.defineProperty(globalThis, key, descriptor);
    else delete globalThis[key];
  }
});
async function mount({
  reduced = false,
  mobile = true,
  saveData = false,
  effectiveType = "4g",
  blocked = false,
  visible = true,
} = {}) {
  const dom = new JSDOM(
    '<!doctype html><html><body><div id="root"></div></body></html>',
    { url: "http://localhost/", pretendToBeVisual: true },
  );
  const listeners = new Set();
  const motion = {
    matches: reduced,
    addEventListener: (_type, fn) => listeners.add(fn),
    removeEventListener: (_type, fn) => listeners.delete(fn),
  };
  const connection = { saveData, effectiveType };
  Object.defineProperty(dom.window.navigator, "connection", {
    value: connection,
  });
  Object.defineProperty(dom.window.document, "visibilityState", {
    configurable: true,
    value: "visible",
  });
  const calls = { play: 0, pause: 0, load: 0 };
  let observer;
  class Observer {
    constructor(fn) {
      this.fn = fn;
      observer = this;
    }
    observe() {
      this.emit(visible);
    }
    emit(isIntersecting) {
      this.fn([{ isIntersecting }]);
    }
    disconnect() {
      this.disconnected = true;
    }
  }
  dom.window.IntersectionObserver = Observer;
  dom.window.HTMLMediaElement.prototype.play = function () {
    calls.play++;
    if (blocked) return Promise.reject(new Error("Autoplay blocked"));
    this.dispatchEvent(new dom.window.Event("playing"));
    return Promise.resolve();
  };
  dom.window.HTMLMediaElement.prototype.pause = () => {
    calls.pause++;
  };
  dom.window.HTMLMediaElement.prototype.load = () => {
    calls.load++;
  };
  const bindings = {
    window: dom.window,
    document: dom.window.document,
    navigator: dom.window.navigator,
    IntersectionObserver: Observer,
    matchMedia: (query) =>
      query.includes("reduced-motion") ? motion : { matches: mobile },
    IS_REACT_ACT_ENVIRONMENT: true,
  };
  for (const [key, value] of Object.entries(bindings)) {
    if (!originals.has(key))
      originals.set(key, Object.getOwnPropertyDescriptor(globalThis, key));
    Object.defineProperty(globalThis, key, {
      configurable: true,
      writable: true,
      value,
    });
  }
  const root = createRoot(dom.window.document.getElementById("root"));
  await act(async () => root.render(React.createElement(HeroBackground)));
  return {
    doc: dom.window.document,
    window: dom.window,
    video: dom.window.document.querySelector("video"),
    calls,
    motion,
    listeners,
    observer,
    async cleanup() {
      await act(async () => root.unmount());
      dom.window.close();
    },
  };
}
test("hero selects one mobile rendition and sets silent inline autoplay/loop without native controls", async () => {
  const app = await mount();
  try {
    assert.match(app.video.getAttribute("src"), /640\.mp4$/);
    assert.equal(app.video.autoplay, true);
    assert.equal(app.video.muted, true);
    assert.equal(app.video.loop, true);
    assert.equal(app.video.playsInline, true);
    assert.equal(app.video.controls, false);
    assert.ok(app.video.poster.endsWith("hero-grooming-poster.webp"));
    assert.ok(app.doc.querySelector(".hero-background.has-frame"));
    await act(async () => app.doc.querySelector("button").click());
    assert.match(app.doc.querySelector("button").textContent, /Resume/);
    await act(async () => app.doc.querySelector("button").click());
    assert.match(app.doc.querySelector("button").textContent, /Pause/);
  } finally {
    await app.cleanup();
  }
});
test("desktop uses the 720p rendition while 3G uses the smaller clip", async () => {
  for (const [effectiveType, expected] of [
    ["4g", "1280.mp4"],
    ["3g", "640.mp4"],
  ]) {
    const app = await mount({ mobile: false, effectiveType });
    try {
      assert.ok(app.video.getAttribute("src").endsWith(expected));
    } finally {
      await app.cleanup();
    }
  }
});
test("reduced motion, data saver and 2G keep the poster without assigning a video source", async () => {
  for (const setting of [
    { reduced: true },
    { saveData: true },
    { effectiveType: "2g" },
    { effectiveType: "slow-2g" },
  ]) {
    const app = await mount(setting);
    try {
      assert.equal(app.video.hasAttribute("src"), false);
      assert.equal(app.calls.play, 0);
      assert.ok(app.doc.querySelector(".hero-background-poster"));
      assert.equal(app.doc.querySelector("button"), null);
    } finally {
      await app.cleanup();
    }
  }
});
test("hero pauses offscreen/hidden and unloads when reduced motion is enabled", async () => {
  const app = await mount();
  try {
    const pauses = app.calls.pause;
    await act(async () => app.observer.emit(false));
    assert.ok(app.calls.pause > pauses);
    const plays = app.calls.play;
    await act(async () => app.observer.emit(true));
    assert.ok(app.calls.play > plays);
    const beforeHidden = app.calls.pause;
    Object.defineProperty(app.doc, "visibilityState", {
      configurable: true,
      value: "hidden",
    });
    await act(async () =>
      app.doc.dispatchEvent(new app.window.Event("visibilitychange")),
    );
    assert.ok(app.calls.pause > beforeHidden);
    app.motion.matches = true;
    await act(async () => {
      for (const listener of app.listeners) listener();
    });
    assert.equal(app.video.hasAttribute("src"), false);
    assert.equal(app.doc.querySelector(".hero-background.has-frame"), null);
  } finally {
    await app.cleanup();
  }
  assert.equal(app.observer.disconnected, true);
});
test("blocked autoplay leaves the poster and does not continuously retry", async () => {
  const app = await mount({ blocked: true });
  try {
    assert.equal(app.doc.querySelector(".hero-background.has-frame"), null);
    assert.match(app.doc.querySelector("button").textContent, /Resume/);
    const plays = app.calls.play;
    await act(async () => app.observer.emit(true));
    assert.equal(app.calls.play, plays);
  } finally {
    await app.cleanup();
  }
});

test("a media error restores the poster and prevents automatic retries", async () => {
  const app = await mount();
  try {
    await act(async () =>
      app.video.dispatchEvent(new app.window.Event("error")),
    );
    assert.equal(app.doc.querySelector(".hero-background.has-frame"), null);
    assert.equal(app.doc.querySelector("button"), null);
    const plays = app.calls.play;
    await act(async () => app.observer.emit(true));
    assert.equal(app.calls.play, plays);
    assert.equal(app.video.hasAttribute("src"), false);
  } finally {
    await app.cleanup();
  }
});

test("an initially offscreen hero does not request video until it enters the viewport", async () => {
  const app = await mount({ visible: false });
  try {
    assert.equal(app.video.hasAttribute("src"), false);
    assert.equal(app.calls.play, 0);
    await act(async () => app.observer.emit(true));
    assert.ok(app.video.getAttribute("src").endsWith("640.mp4"));
    assert.ok(app.calls.play > 0);
  } finally {
    await app.cleanup();
  }
});
