import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { photos, videos } from "../src/data/media.js";
import { galleryItems } from "../src/data/gallery.js";
const sources = [
  ...Object.values(photos).map((p) => p.src),
  ...Object.values(videos).flatMap((v) => [v.src, v.poster]),
  ...galleryItems.map((p) => p.src),
];
for (const src of sources)
  assert.ok(existsSync(`public${src}`), `Missing media: ${src}`);
for (const photo of Object.values(photos))
  assert.ok(existsSync(`public${photo.src.replace("-960", "-480")}`));
assert.ok(
  !/stephypetgrooming\.com|From \$|Certified-style/.test(
    readFileSync("dist/index.html", "utf8"),
  ),
);
for (const route of [
  "about",
  "services",
  "gallery",
  "pricing",
  "faq",
  "contact",
])
  assert.ok(
    existsSync(`dist/${route}/index.html`),
    `Missing prerender ${route}`,
  );
const headers = JSON.parse(readFileSync("vercel.json", "utf8"));
assert.equal(headers.outputDirectory, "dist");
console.log(
  "Local media, responsive variants, rendered routes and deployment configuration verified.",
);
