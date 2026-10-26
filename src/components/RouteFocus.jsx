import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function RouteFocus() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      let id = "";
      try {
        id = decodeURIComponent(hash.slice(1));
      } catch {
        /* Invalid fragments use normal page focus. */
      }
      const target = id
        ? document.getElementById(id)
        : document.getElementById("main-content");
      if (target) {
        if (target.tagName === "DETAILS") target.open = true;
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
        if (id) target.scrollIntoView({ block: "start" });
        else window.scrollTo(0, 0);
      }
    });
    return () => cancelAnimationFrame(timer);
  }, [pathname, hash, key]);
  return null;
}
