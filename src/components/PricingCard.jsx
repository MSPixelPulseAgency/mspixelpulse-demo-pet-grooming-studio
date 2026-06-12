import { Link } from 'react-router-dom';
import { PawPrint, Sparkles } from 'lucide-react';

export default function PricingCard({ item }) {
  return (
    <article className={`price-card glass-card ${item.featured ? 'featured' : ''}`}>
      <span className="price-marker" aria-hidden="true">
        {item.featured ? <Sparkles size={20} /> : <PawPrint size={20} />}
      </span>
      {item.featured && <span className="featured-badge">Most demo-friendly</span>}
      <h3>{item.service}</h3>
      <strong>{item.price}</strong>
      <p>{item.detail}</p>
      <ul>
        <li>{item.included}</li>
        <li>Best for: {item.bestFor}</li>
      </ul>
      <Link className="text-link" to="/contact">Request demo booking</Link>
    </article>
  );
}
