import { useEffect, useRef, useState } from "react";
import { heroVideo } from "../data/media.js";

export default function HeroBackground() {
  const container = useRef(null);
  const video = useRef(null);
  const userPaused = useRef(false);
  const failed = useRef(false);
  const [hasFrame, setHasFrame] = useState(false);
  const [paused, setPaused] = useState(false);
  const [available, setAvailable] = useState(false);
  const synchronize = useRef(() => {});

  useEffect(() => {
    const node = video.current;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const connection = navigator.connection;
    let inView = !("IntersectionObserver" in window);
    let disposed = false;
    function sync() {
      const allowed =
        !motion.matches &&
        !connection?.saveData &&
        !["slow-2g", "2g"].includes(connection?.effectiveType) &&
        !failed.current;
      setAvailable(allowed);
      if (!allowed) {
        node.pause();
        if (node.hasAttribute("src")) {
          node.removeAttribute("src");
          node.load();
        }
        setHasFrame(false);
        return;
      }
      if (
        !inView ||
        document.visibilityState === "hidden" ||
        userPaused.current
      ) {
        node.pause();
        return;
      }
      if (!node.hasAttribute("src")) {
        // Choose one rendition once. Resizing never downloads a second clip.
        node.src =
          matchMedia("(max-width: 680px)").matches ||
          connection?.effectiveType === "3g"
            ? heroVideo.mobile
            : heroVideo.desktop;
      }
      node.muted = true;
      node.play()?.catch(() => {
        if (!disposed) {
          userPaused.current = true;
          setPaused(true);
          setHasFrame(false);
        }
      });
    }
    synchronize.current = sync;
    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            ([entry]) => {
              inView = entry.isIntersecting;
              sync();
            },
            { threshold: 0.01 },
          )
        : null;
    observer?.observe(container.current);
    motion.addEventListener("change", sync);
    connection?.addEventListener?.("change", sync);
    document.addEventListener("visibilitychange", sync);
    sync();
    return () => {
      disposed = true;
      observer?.disconnect();
      motion.removeEventListener("change", sync);
      connection?.removeEventListener?.("change", sync);
      document.removeEventListener("visibilitychange", sync);
      node.pause();
      node.removeAttribute("src");
      node.load();
      synchronize.current = () => {};
    };
  }, []);

  function toggleMotion() {
    userPaused.current = !userPaused.current;
    setPaused(userPaused.current);
    synchronize.current();
  }
  return (
    <div
      ref={container}
      className={`hero-background ${hasFrame ? "has-frame" : ""}`}
    >
      <img
        className="hero-background-poster"
        src={heroVideo.poster}
        alt=""
        aria-hidden="true"
        width="1280"
        height="720"
        fetchPriority="high"
      />
      <video
        ref={video}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        preload="none"
        poster={heroVideo.poster}
        aria-hidden="true"
        tabIndex={-1}
        onPlaying={() => setHasFrame(true)}
        onError={() => {
          failed.current = true;
          setHasFrame(false);
          setAvailable(false);
        }}
      />
      {available && (
        <button
          className="hero-motion-toggle"
          type="button"
          onClick={toggleMotion}
        >
          {paused ? "Resume background motion" : "Pause background motion"}
        </button>
      )}
    </div>
  );
}
