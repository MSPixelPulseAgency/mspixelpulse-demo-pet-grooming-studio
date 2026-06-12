import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection.jsx';
import PageHero from '../components/PageHero.jsx';
import SEO from '../components/SEO.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { petsCovered, services } from '../data/services.js';

export default function Services() {
  return (
    <>
      <SEO
        title="Services | Stephy Dog, Cat & Puppy Grooming Demo"
        description="Explore image-led demo services for a Canadian pet grooming website, including dog grooming, cat grooming, puppy grooming, bath and brush, nails, de-shedding, and mobile grooming ready sections."
      />
      <PageHero
        eyebrow="Grooming Services"
        title="Rich service cards for a premium pet salon website."
        text="Each card includes a pet-care image, icon, best-for detail, duration estimate, starting price, and booking cue for a high-end pet grooming demo."
      />
      <AnimatedSection className="section">
        <div className="section-inner">
          <div className="card-grid three">
            {services.map((service) => <ServiceCard key={service.title} service={service} />)}
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection className="section section-tint">
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
      </AnimatedSection>
      <section className="final-cta">
        <div className="section-inner final-cta-inner glass-cta">
          <h2>Need this adapted for a mobile groomer or pet salon?</h2>
          <Link className="button" to="/contact">Book Grooming Demo</Link>
        </div>
      </section>
    </>
  );
}
