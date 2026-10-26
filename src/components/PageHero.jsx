export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <div className="section-inner">
        <p className="eyebrow">
          <span />
          {eyebrow}
        </p>
        <h1>{title}</h1>
        <p className="page-intro">{text}</p>
      </div>
      <span className="hero-orbit" aria-hidden="true" />
    </section>
  );
}
