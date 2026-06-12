export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="card service-card">
      <span className="icon-chip" aria-hidden="true">
        <Icon size={22} />
      </span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </article>
  );
}
