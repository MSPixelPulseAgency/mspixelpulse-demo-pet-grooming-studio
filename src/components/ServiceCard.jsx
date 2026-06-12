export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="glass-card service-card">
      {service.image && (
        <div className="service-thumb">
          <img src={service.image} alt={service.alt} loading="lazy" />
        </div>
      )}
      <div className="service-card-body">
        <span className="icon-chip" aria-hidden="true">
          <Icon size={22} />
        </span>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        {service.bestFor && (
          <dl className="service-meta">
            <div>
              <dt>Best for</dt>
              <dd>{service.bestFor}</dd>
            </div>
            <div>
              <dt>Duration</dt>
              <dd>{service.duration}</dd>
            </div>
            <div>
              <dt>Starts at</dt>
              <dd>{service.price}</dd>
            </div>
          </dl>
        )}
      </div>
    </article>
  );
}
