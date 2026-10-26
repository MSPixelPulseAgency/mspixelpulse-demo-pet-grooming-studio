import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";
import { galleryCategories, galleryItems } from "../data/gallery.js";
import Photo from "./Photo.jsx";
export default function GalleryGrid({ limit, filters = false }) {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  const opener = useRef(null);
  const items = (
    active === "All"
      ? galleryItems
      : galleryItems.filter((i) => i.category === active)
  ).slice(0, limit || galleryItems.length);
  const item = selected === null ? null : items[selected];
  const isOpen = selected !== null;
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.showModal();
    return () => {
      document.body.style.overflow = previous;
      opener.current?.focus();
    };
  }, [isOpen]);
  function close() {
    dialog.current?.close();
    setSelected(null);
  }
  function next(offset) {
    setSelected((i) => (i + offset + items.length) % items.length);
  }
  return (
    <>
      {filters && (
        <div className="filter-row" role="group" aria-label="Filter gallery">
          {galleryCategories.map((category) => (
            <button
              type="button"
              aria-pressed={active === category}
              className={active === category ? "is-active" : ""}
              key={category}
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}
      {filters && (
        <p className="gallery-count" role="status">
          {items.length} {items.length === 1 ? "image" : "images"} · {active}
        </p>
      )}
      <div className="gallery-grid">
        {items.map((entry, index) => (
          <button
            type="button"
            className="gallery-card"
            key={entry.id}
            aria-label={`View ${entry.title}`}
            onClick={(event) => {
              opener.current = event.currentTarget;
              setSelected(index);
            }}
          >
            <Photo photo={entry} sizes="(max-width: 680px) 100vw, 33vw" />
            <span className="gallery-caption">
              <span>
                <small>{entry.category}</small>
                <strong>{entry.title}</strong>
              </span>
              <Maximize2 size={19} aria-hidden="true" />
            </span>
          </button>
        ))}
      </div>
      {item && (
        <dialog
          ref={dialog}
          className="lightbox"
          aria-labelledby="lightbox-title"
          aria-describedby="lightbox-description"
          onCancel={(event) => {
            event.preventDefault();
            close();
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") next(1);
            if (event.key === "ArrowLeft") next(-1);
          }}
        >
          <div className="lightbox-inner">
            <button
              autoFocus
              className="icon-button lightbox-close"
              type="button"
              aria-label="Close image"
              onClick={close}
            >
              <X />
            </button>
            <img src={item.src} alt={item.alt} width="960" height="720" />
            <div className="lightbox-bar">
              <button
                className="icon-button"
                type="button"
                aria-label="Previous image"
                onClick={() => next(-1)}
              >
                <ArrowLeft />
              </button>
              <div aria-live="polite">
                <h2 id="lightbox-title">{item.title}</h2>
                <p id="lightbox-description">
                  {selected + 1} of {items.length} · Licensed illustrative
                  photography
                </p>
              </div>
              <button
                className="icon-button"
                type="button"
                aria-label="Next image"
                onClick={() => next(1)}
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
