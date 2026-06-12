import { galleryItems } from '../data/gallery.js';

export default function GalleryGrid({ limit }) {
  const items = limit ? galleryItems.slice(0, limit) : galleryItems;

  return (
    <div className="gallery-grid">
      {items.map((item) => (
        <article className="gallery-card" key={item.title}>
          <img src={item.image} alt={item.alt} />
          <div>
            <h3>{item.title}</h3>
          </div>
        </article>
      ))}
    </div>
  );
}
