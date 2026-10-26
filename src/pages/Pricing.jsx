import PageHero from "../components/PageHero.jsx";
import SEO from "../components/SEO.jsx";
import PricingCard from "../components/PricingCard.jsx";
import ContactCTA from "../components/ContactCTA.jsx";
import { pricing, priceReasons } from "../data/pricing.js";
export default function Pricing() {
  return (
    <>
      <SEO
        title="Grooming packages & pricing enquiries | Stephy"
        description="Compare grooming options for different pets and coats. Prices require confirmation; no unverified starting prices or offers are displayed."
      />
      <PageHero
        eyebrow="FIND THE RIGHT FIT"
        title={
          <>
            Different coats.
            <br />
            <em>Thoughtful options.</em>
          </>
        }
        text="A simple look at what a grooming menu can include. Verified pricing has not been supplied, so all options are available to discuss without a quoted price."
      />
      <section className="section section-top-small">
        <div className="section-inner">
          <h2 className="sr-only">Explore grooming packages</h2>
          <div className="pricing-grid">
            {pricing.map((item) => (
              <PricingCard item={item} key={item.id} />
            ))}
          </div>
          <div className="pricing-note">
            <h2>What goes into a grooming quote?</h2>
            <p>
              An operating groomer should confirm the service, total price and
              any additional charges before the visit.
            </p>
            <div className="pill-grid">
              {priceReasons.map((reason) => (
                <span key={reason}>{reason}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
