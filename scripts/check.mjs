import assert from "node:assert/strict";
import { readFileSync, existsSync, statSync } from "node:fs";
import { heroVideo, photos, videos } from "../src/data/media.js";
import { galleryItems } from "../src/data/gallery.js";
const sources = [
  ...Object.values(heroVideo),
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
const contactHTML = readFileSync("dist/contact/index.html", "utf8");
const previewBuild = process.env.VERCEL_ENV === "preview";
assert.ok(
  contactHTML.includes(previewBuild ? "Check preview enquiry" : "Send enquiry"),
  "Enquiry behavior must match the deployment environment",
);
assert.ok(
  !contactHTML.includes(
    previewBuild ? ">Send enquiry<" : "Check preview enquiry",
  ),
  "Do not mix preview rehearsal and production submission",
);
const fontFiles = [
  "dm-sans-latin-variable.woff2",
  "dm-serif-display-latin-normal.woff2",
  "dm-serif-display-latin-italic.woff2",
];
let fontBytes = 0;
for (const font of fontFiles) {
  const file = `dist/fonts/${font}`;
  assert.ok(existsSync(file), `Missing self-hosted font: ${font}`);
  assert.equal(readFileSync(file).subarray(0, 4).toString(), "wOF2");
  fontBytes += statSync(file).size;
}
assert.ok(fontBytes < 100 * 1024, "Keep the complete font set below 100 KiB");
for (const family of ["DM-Sans", "DM-Serif-Display"])
  assert.ok(
    readFileSync(`dist/fonts/${family}-OFL.txt`, "utf8").includes(
      "SIL OPEN FONT LICENSE",
    ),
  );
assert.ok(contactHTML.includes("/fonts/dm-sans-latin-variable.woff2"));
assert.ok(contactHTML.includes("/fonts/dm-serif-display-latin-normal.woff2"));
const headers = JSON.parse(readFileSync("vercel.json", "utf8"));
assert.equal(headers.outputDirectory, "dist");
console.log(
  "Local media, fonts/licences, responsive variants, rendered routes and deployment configuration verified.",
);
