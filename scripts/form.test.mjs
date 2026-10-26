import test, { after, before } from "node:test";
import assert from "node:assert/strict";
import { build } from "esbuild";
import { JSDOM } from "jsdom";
import React, { act } from "react";
import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import { pathToFileURL } from "node:url";
import path from "node:path";
let Contact;
const originals = new Map();
const originalFetch = globalThis.fetch;
before(async () => {
  const outfile = path.resolve("node_modules/.cache/stephy-form-test.mjs");
  await build({
    entryPoints: ["src/pages/Contact.jsx"],
    outfile,
    bundle: true,
    platform: "node",
    format: "esm",
    packages: "external",
    jsx: "automatic",
  });
  Contact = (await import(pathToFileURL(outfile).href)).default;
});
after(() => {
  for (const [key, descriptor] of originals) {
    if (descriptor) Object.defineProperty(globalThis, key, descriptor);
    else delete globalThis[key];
  }
  globalThis.fetch = originalFetch;
});
async function mount(query = "", props = {}) {
  const dom = new JSDOM(
    '<!doctype html><html><head></head><body><div id="root"></div></body></html>',
    { url: "http://localhost/contact" + query, pretendToBeVisual: true },
  );
  const bindings = {
    window: dom.window,
    document: dom.window.document,
    location: dom.window.location,
    FormData: dom.window.FormData,
    HTMLElement: dom.window.HTMLElement,
    requestAnimationFrame: dom.window.requestAnimationFrame.bind(dom.window),
    cancelAnimationFrame: dom.window.cancelAnimationFrame.bind(dom.window),
    matchMedia: () => ({ matches: true }),
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
  await act(async () => {
    root.render(
      React.createElement(
        MemoryRouter,
        { initialEntries: ["/contact" + query] },
        React.createElement(Contact, props),
      ),
    );
  });
  const doc = dom.window.document;
  const submit = () =>
    doc
      .querySelector("form")
      .dispatchEvent(
        new dom.window.Event("submit", { bubbles: true, cancelable: true }),
      );
  function fill() {
    doc.querySelector("[name=name]").value = "Local test";
    doc.querySelector("[name=email]").value = "test@example.invalid";
    doc.querySelector("[name=consent]").checked = true;
  }
  async function cleanup() {
    await act(async () => root.unmount());
    dom.window.close();
    globalThis.fetch = originalFetch;
  }
  return { doc, submit, fill, cleanup };
}
test("form keeps native validation, enquiry disclosure and package preselection", async () => {
  const app = await mount("?service=Medium%20Dog%20Groom");
  try {
    assert.equal(
      app.doc.querySelector("[name=service]").value,
      "Medium Dog Groom",
    );
    assert.equal(app.doc.querySelector("form").checkValidity(), false);
    assert.ok(app.doc.querySelector("[name=date]").min);
    assert.match(
      app.doc.querySelector("form").textContent,
      /No grooming appointment is booked/,
    );
    assert.ok(
      [
        ...app.doc.querySelectorAll(
          'input:not([tabindex="-1"]), select, textarea',
        ),
      ].every((field) => field.labels.length),
    );
  } finally {
    await app.cleanup();
  }
});
test("form guards duplicate pending submissions and accepts only mocked backend success", async () => {
  const app = await mount();
  let calls = 0,
    release;
  globalThis.fetch = () => {
    calls++;
    return new Promise((resolve) => {
      release = resolve;
    });
  };
  try {
    app.fill();
    await act(async () => {
      app.submit();
      app.submit();
    });
    assert.equal(calls, 1);
    assert.equal(app.doc.querySelector("[type=submit]").disabled, true);
    await act(async () => {
      release({
        ok: true,
        status: 200,
        json: async () => ({ inquiryId: "local-only" }),
      });
    });
    assert.match(
      app.doc.querySelector("[role=status]").textContent,
      /accepted by MSPixelPulse/,
    );
    assert.match(
      app.doc.querySelector("[role=status]").textContent,
      /No grooming appointment has been created/,
    );
  } finally {
    await app.cleanup();
  }
});
test("form presents server errors and permits a successful retry without real network traffic", async () => {
  const app = await mount();
  let calls = 0;
  globalThis.fetch = async () => {
    calls++;
    return {
      ok: calls > 1,
      status: calls > 1 ? 200 : 429,
      json: async () =>
        calls > 1
          ? { inquiryId: "local-only" }
          : { error: "Please wait before trying again." },
    };
  };
  try {
    app.fill();
    await act(async () => app.submit());
    assert.match(
      app.doc.querySelector("[role=alert]").textContent,
      /Please wait/,
    );
    assert.equal(app.doc.querySelector("[type=submit]").disabled, false);
    await act(async () => app.submit());
    assert.equal(calls, 2);
    assert.ok(app.doc.querySelector("[role=status]"));
  } finally {
    await app.cleanup();
  }
});

test("preview validates locally without calling the production intake or claiming acceptance", async () => {
  const app = await mount("", { preview: true });
  globalThis.fetch = () => {
    throw new Error("Preview must never send data");
  };
  try {
    app.fill();
    await act(async () => app.submit());
    assert.match(
      app.doc.querySelector("[role=status]").textContent,
      /Nothing was sent/,
    );
    assert.match(
      app.doc.querySelector("[role=status]").textContent,
      /no enquiry was submitted/,
    );
    assert.doesNotMatch(
      app.doc.querySelector("[role=status]").textContent,
      /accepted by MSPixelPulse/,
    );
  } finally {
    await app.cleanup();
  }
});
