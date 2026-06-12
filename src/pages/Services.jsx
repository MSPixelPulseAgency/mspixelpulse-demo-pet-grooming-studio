import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import SEO from '../components/SEO.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { petsCovered, services } from '../data/services.js';

export default function Services() {
  return (
    <>
      <SEO
        title="Services | Dog, Cat, Puppy & Mobile Pet Grooming Website Demo"
        description="Explore demo services for a Canadian pet grooming website, including dog grooming, cat grooming, puppy grooming, bath and brush, nails, de-shedding, and mobile grooming ready sections."
      />
      <PageHero
        eyebrow="Grooming Services"
        title="Detailed service cards for a modern pet salon website."
        text="Flexible copy for dog grooming, cat grooming, puppy care, de-shedding, add-ons, and mobile pet grooming website adaptations."
      />
      <section className="section">
        <div className="section-inner">
          <div className="card-grid three">
            {services.map((service) => <ServiceCard key={service.title} service={service} />)}
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Pets Covered"
            title="A flexible service menu for many pet care businesses."
            text="Service language can be adapted by breed, coat type, salon policy, and local business model."
          />
          <div className="pill-grid">
            {petsCovered.map((pet) => <span key={pet}>{pet}</span>)}
          </div>
          <p className="notice">
            Service availability, grooming duration, and pricing may vary by pet size, breed, coat condition,
            temperament, and local business policy.
          </p>
        </div>
      </section>
      <section className="final-cta">
        <div className="section-inner final-cta-inner">
          <h2>Need this adapted for a mobile groomer or pet salon?</h2>
          <Link className="button" to="/contact">Book Grooming Demo</Link>
        </div>
      </section>
    </>
  );
}
