import { useMemo, useState } from 'react';
import { galleryCategories, galleryItems } from '../data/gallery.js';

export default function GalleryGrid({ limit, filters = false }) {
  const [active, setActive] = useState('All');
  const filteredItems = useMemo(() => {
    const items = active === 'All' ? galleryItems : galleryItems.filter((item) => item.category === active);
    return limit ? items.slice(0, limit) : items;
  }, [active, limit]);

  return (
    <>
      {filters && (
        <div className="filter-row" aria-label="Gallery filters">
          {galleryCategories.map((category) => (
            <button
              className={active === category ? 'is-active' : ''}
              key={category}
              type="button"
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}
      <div className="gallery-grid">
        {filteredItems.map((item, index) => (
          <article className={`gallery-card ${index % 5 === 0 ? 'tall' : ''}`} key={item.title}>
            <img src={item.image} alt={item.alt} loading="lazy" />
            <div className="gallery-caption">
              <span>{item.category}</span>
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
