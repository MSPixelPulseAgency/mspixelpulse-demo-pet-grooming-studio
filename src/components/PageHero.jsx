export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <span className="bg-paw paw-one" aria-hidden="true">♡</span>
      <span className="bg-paw paw-two" aria-hidden="true">✦</span>
      <div className="section-inner narrow">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
