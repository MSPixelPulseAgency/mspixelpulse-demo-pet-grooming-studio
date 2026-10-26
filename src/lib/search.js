import { services } from "../data/services.js";
import { pricing } from "../data/pricing.js";
import { faqs } from "../data/faqs.js";
import { navItems } from "../data/site.js";
export const searchIndex = [
  ...services.map((s) => ({
    title: s.title,
    text: `${s.description} ${s.bestFor}`,
    type: "Service",
    url: `/services#${s.id}`,
  })),
  ...pricing.map((p) => ({
    title: p.service,
    text: `${p.detail} ${p.price}`,
    type: "Package",
    url: `/pricing#${p.id}`,
  })),
  ...faqs.map((f) => ({
    title: f.question,
    text: f.answer,
    type: "FAQ",
    url: `/faq#${f.id}`,
  })),
  ...navItems.map((p) => ({
    title: p.label,
    text: p.label,
    type: "Page",
    url: p.to,
  })),
];
const normalize = (s) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
export function searchContent(query) {
  const tokens = normalize(query).split(" ").filter(Boolean);
  if (!tokens.length)
    return searchIndex.filter((s) => s.type === "Service").slice(0, 4);
  return searchIndex
    .map((item) => ({
      ...item,
      score: tokens.reduce(
        (sum, token) =>
          sum +
          (normalize(item.title).includes(token)
            ? 4
            : normalize(item.text).includes(token)
              ? 1
              : 0),
        0,
      ),
      matches: tokens.every((token) =>
        normalize(`${item.title} ${item.text}`).includes(token),
      ),
    }))
    .filter((i) => i.matches)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
}
