import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import SEO from '../components/SEO.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { pricing } from '../data/pricing.js';

export default function Pricing() {
  return (
    <>
      <SEO
        title="Pricing | Pet Grooming Website Canada Demo"
        description="Clean demo pricing cards for a pet salon website, including nail trim, bath and brush, dog grooming, cat grooming, puppy grooming, and grooming add-ons."
      />
      <PageHero
        eyebrow="Demo Pricing"
        title="Simple pricing cards that pet parents can scan quickly."
        text="Starter demo prices for a Canadian pet grooming website. Real salons can customize every package and add-on."
      />
      <section className="section">
        <div className="section-inner">
          <SectionHeading eyebrow="Pricing Menu" title="Demo grooming prices." />
          <div className="pricing-grid">
            {pricing.map((item) => (
              <article className="price-card detailed" key={item.service}>
                <h3>{item.service}</h3>
                <strong>{item.price}</strong>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
          <p className="notice">
            These are demo prices only. Real pricing should be confirmed after reviewing pet size, coat condition,
            service needs, and business policy.
          </p>
        </div>
      </section>
      <section className="final-cta">
        <div className="section-inner final-cta-inner">
          <h2>Make pricing easy to understand before clients book.</h2>
          <Link className="button" to="/contact">Book Grooming Demo</Link>
        </div>
      </section>
    </>
  );
}
