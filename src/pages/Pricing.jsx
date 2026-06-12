import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection.jsx';
import PageHero from '../components/PageHero.jsx';
import PricingCard from '../components/PricingCard.jsx';
import SEO from '../components/SEO.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { priceReasons, pricing } from '../data/pricing.js';

export default function Pricing() {
  return (
    <>
      <SEO
        title="Pricing | Stephy Pet Grooming Website Canada Demo"
        description="Premium demo pricing cards for a pet salon website, including nail trim, bath and brush, dog grooming, cat grooming, puppy grooming, and grooming add-ons."
      />
      <PageHero
        eyebrow="Demo Pricing"
        title="Premium pricing cards that pet parents can scan quickly."
        text="Starter demo prices for a Canadian pet grooming website. Real salons can customize every package and add-on."
      />
      <AnimatedSection className="section">
        <div className="section-inner">
          <SectionHeading eyebrow="Featured Package" title="A soft spotlight for the most useful demo package." />
          <div className="featured-package glass-card">
            <div>
              <p className="eyebrow">Most Demo-Friendly</p>
              <h2>Medium Dog Groom</h2>
              <p>Bath, haircut, blow dry, brush-out, tidy finish, and clear booking cues for a real pet salon website.</p>
            </div>
            <strong>From $75</strong>
            <Link className="button" to="/contact">Request Demo Booking</Link>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection className="section section-tint">
        <div className="section-inner">
          <SectionHeading eyebrow="Pricing Menu" title="Demo grooming prices." />
          <div className="pricing-grid">
            {pricing.map((item) => <PricingCard item={item} key={item.service} />)}
          </div>
          <p className="notice">
            These are demo prices only. Real pricing should be confirmed after reviewing pet size, coat condition,
            service needs, and business policy.
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection className="section">
        <div className="section-inner">
          <SectionHeading eyebrow="Why Prices Vary" title="Transparent details make pricing feel trustworthy." />
          <div className="reason-grid">
            {priceReasons.map((reason) => <span className="glass-card" key={reason}>{reason}</span>)}
          </div>
        </div>
      </AnimatedSection>
      <section className="final-cta">
        <div className="section-inner final-cta-inner glass-cta">
          <h2>Make pricing easy to understand before clients book.</h2>
          <Link className="button" to="/contact">Book Grooming Demo</Link>
        </div>
      </section>
    </>
  );
}
