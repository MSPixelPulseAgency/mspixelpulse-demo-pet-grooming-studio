import { Link } from "react-router-dom";
import { ArrowUpRight, PawPrint } from "lucide-react";
export default function PricingCard({ item }) {
  return (
    <article id={item.id} className="price-card glass-card">
      <PawPrint size={23} aria-hidden="true" />
      <h3>{item.service}</h3>
      <p>{item.detail}</p>
      <span className="price-pending">{item.price}</span>
      <Link
        className="text-link"
        to={`/contact?service=${encodeURIComponent(item.service)}`}
      >
        Discuss this option <ArrowUpRight size={16} />
      </Link>
    </article>
  );
}
