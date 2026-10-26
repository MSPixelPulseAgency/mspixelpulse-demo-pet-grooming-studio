import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Photo from "./Photo.jsx";
export default function ServiceCard({ service }) {
  return (
    <article id={service.id} className="service-card glass-card">
      <div className="service-thumb">
        <Photo
          photo={{ src: service.image, alt: service.alt }}
          sizes="(max-width: 680px) 100vw, 33vw"
        />
        <span className="photo-number">{service.number}</span>
      </div>
      <div className="service-card-body">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <Link
          className="text-link"
          to={`/contact?service=${encodeURIComponent(service.title)}`}
        >
          Enquire about this service <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
