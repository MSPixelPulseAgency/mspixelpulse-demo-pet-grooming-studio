import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { site } from "../data/site.js";
export default function SEO({ title, description, noindex = false }) {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = title;
    function meta(selector, attrs, content) {
      let node = document.head.querySelector(selector);
      if (!node) {
        node = document.createElement("meta");
        Object.entries(attrs).forEach(([key, value]) =>
          node.setAttribute(key, value),
        );
        document.head.appendChild(node);
      }
      node.content = content;
    }
    meta('meta[name="description"]', { name: "description" }, description);
    meta(
      'meta[name="robots"]',
      { name: "robots" },
      noindex ||
        location.hostname.includes("vercel.app") ||
        location.hostname === "localhost" ||
        location.hostname === "127.0.0.1"
        ? "noindex, nofollow"
        : "index, follow",
    );
    for (const [property, content] of Object.entries({
      "og:title": title,
      "og:description": description,
      "og:url": site.url + pathname,
      "og:type": "website",
      "og:image": site.url + "/media/portrait-960.webp",
      "og:site_name": "Stephy Pet Grooming",
    }))
      meta(`meta[property="${property}"]`, { property }, content);
    meta(
      'meta[name="twitter:card"]',
      { name: "twitter:card" },
      "summary_large_image",
    );
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = site.url + pathname;
  }, [title, description, pathname, noindex]);
  return null;
}
