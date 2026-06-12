import AnimatedSection from '../components/AnimatedSection.jsx';
import FAQAccordion from '../components/FAQAccordion.jsx';
import PageHero from '../components/PageHero.jsx';
import SEO from '../components/SEO.jsx';
import { faqs } from '../data/faqs.js';

export default function FAQ() {
  return (
    <>
      <SEO
        title="FAQ | Stephy Pet Grooming Website Template Questions"
        description="Common pet grooming demo FAQs covering dogs, cats, pricing, puppy grooming, senior pets, mobile groomers, and template customization."
      />
      <PageHero
        eyebrow="FAQ"
        title="Clear answers for pet parents and demo website buyers."
        text="Simple FAQ content for a pet care business website, including grooming logistics and template customization details."
      />
      <AnimatedSection className="section">
        <div className="section-inner faq-page-grid">
          <FAQAccordion items={faqs} />
          <aside className="faq-visual glass-card">
            <img
              src="https://images.unsplash.com/photo-1601979031925-424e53b6caaa?auto=format&fit=crop&w=800&q=80"
              alt="Cute puppy sitting in a bright studio for pet grooming questions"
              loading="lazy"
            />
            <h2>Friendly, useful, demo-safe answers.</h2>
            <p>Every FAQ keeps wording general, avoids medical claims, and makes clear that this is a customizable demo website template.</p>
          </aside>
        </div>
      </AnimatedSection>
    </>
  );
}
