import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
export default function RouteFocus() {
  const { pathname, hash, key } = useLocation();
  const previousPath = useRef(pathname);
  useEffect(() => {
    let transition;
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
      const main = document.getElementById("main-content");
      if (
        previousPath.current !== pathname &&
        !matchMedia("(prefers-reduced-motion: reduce)").matches &&
        typeof main?.animate === "function"
      ) {
        transition = main.animate(
          [
            { opacity: 0.7, transform: "translateY(5px)" },
            { opacity: 1, transform: "none" },
          ],
          { duration: 220, easing: "cubic-bezier(.2,.7,.2,1)" },
        );
      }
      previousPath.current = pathname;
      if (target) {
        if (target.tagName === "DETAILS") target.open = true;
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
        if (id) target.scrollIntoView({ block: "start" });
        else window.scrollTo(0, 0);
      }
    });
    return () => {
      cancelAnimationFrame(timer);
      transition?.cancel();
    };
  }, [pathname, hash, key]);
  return null;
}
