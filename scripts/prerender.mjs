import { build } from "esbuild";
import { pathToFileURL } from "node:url";
import path from "node:path";
import { readFile, writeFile, mkdir } from "node:fs/promises";
const routes = {
  "/": [
    "Stephy Pet Grooming | A little care. A lot of happy.",
    "Explore a thoughtful pet grooming concept: dog and cat care, coat maintenance, grooming packages and a little inspiration for happy tails.",
  ],
  "/about": [
    "Our approach | Stephy Pet Grooming",
    "Explore Stephy’s pet-first design concept and a considered approach to grooming conversations, coat care and everyday comfort.",
  ],
  "/services": [
    "Grooming services | Dogs, cats & coat care | Stephy",
    "Explore Stephy’s illustrative menu of dog grooming, cat care, puppy introductions, bathing, brushing and finishing touches.",
  ],
  "/gallery": [
    "The gallery | Pet portraits & grooming moments | Stephy",
    "Browse licensed pet portraits, bathing, brushing and grooming inspiration in Stephy’s accessible, filterable photo gallery.",
  ],
  "/pricing": [
    "Grooming packages & pricing enquiries | Stephy",
    "Compare grooming options for different pets and coats. Prices require confirmation; no unverified starting prices or offers are displayed.",
  ],
  "/faq": [
    "Your grooming questions, answered | Stephy FAQs",
    "Find clear answers about grooming enquiries, service options, pricing, gallery photography and the Stephy concept website.",
  ],
  "/contact": [
    "Start an enquiry | Stephy Pet Grooming",
    "Share pet-care questions or enquire about the Stephy concept. Requests go to MSPixelPulse; submitting this form does not create a grooming appointment.",
  ],
};
const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
const output = path.resolve("node_modules/.cache/stephy-prerender.mjs");
await build({
  stdin: {
    contents: `import React from 'react'; import { renderToString } from 'react-dom/server'; import { MemoryRouter } from 'react-router-dom'; import App from './src/App.jsx'; export function render(route) { return renderToString(React.createElement(MemoryRouter, { initialEntries: [route] }, React.createElement(App))); }`,
    resolveDir: process.cwd(),
    loader: "jsx",
  },
  outfile: output,
  bundle: true,
  platform: "node",
  format: "esm",
  packages: "external",
  jsx: "automatic",
});
const { render } = await import(pathToFileURL(output).href);
const template = await readFile("dist/index.html", "utf8");
for (const [path, [title, description]] of Object.entries(routes)) {
  const content = render(path);
  const html = template
    .replace(
      '<div id="root"></div>',
      `<div id="root" data-route="${path}">${content}</div>`,
    )
    .replace(/<title>.*?<\/title>/, `<title>${escape(title)}</title>`)
    .replace(
      /(<meta name="description" content=")[^"]*/,
      `$1${escape(description)}`,
    )
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${escape(title)}`)
    .replace(
      /(<meta property="og:description" content=")[^"]*/,
      `$1${escape(description)}`,
    )
    .replace(
      /(<meta property="og:url" content=")[^"]*/,
      `$1https://petgrooming.mspixelpulse.com${path}`,
    )
    .replace(
      /(<link rel="canonical" href=")[^"]*/,
      `$1https://petgrooming.mspixelpulse.com${path}`,
    );
  const folder = path === "/" ? "dist" : `dist${path}`;
  await mkdir(folder, { recursive: true });
  await writeFile(`${folder}/index.html`, html);
}
console.log(
  "Prerendered all seven routes with page-specific content and metadata.",
);
