import AnimatedSection from "../components/AnimatedSection.jsx";
import PageHero from "../components/PageHero.jsx";
import SEO from "../components/SEO.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import SmartSearch from "../components/SmartSearch.jsx";
import ContactCTA from "../components/ContactCTA.jsx";
import { services } from "../data/services.js";
export default function Services() {
  return (
    <>
      <SEO
        title="Grooming services | Dogs, cats & coat care | Stephy"
        description="Explore Stephy’s illustrative menu of dog grooming, cat care, puppy introductions, bathing, brushing and finishing touches."
      />
      <PageHero
        eyebrow="THE GROOMING MENU"
        title={
          <>
            A fresh start,
            <br />
            <em>from nose to tail.</em>
          </>
        }
        text="Explore grooming, bath-time favourites and the little finishing touches. This is a concept menu; service availability, prices and timings are not yet confirmed."
      />
      <section className="section section-top-small">
        <div className="section-inner">
          <div className="page-search">
            <SmartSearch />
          </div>
          <h2 className="sr-only">Explore the service menu</h2>
          <div className="card-grid three">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
