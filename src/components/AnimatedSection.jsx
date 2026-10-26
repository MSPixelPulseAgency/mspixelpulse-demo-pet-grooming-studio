import { useEffect, useRef } from "react";
export default function AnimatedSection({
  as: Tag = "section",
  className = "",
  children,
  id,
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (
      matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    node.classList.add("reveal-ready");
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <Tag id={id} ref={ref} className={`${className} reveal`}>
      {children}
    </Tag>
  );
}
