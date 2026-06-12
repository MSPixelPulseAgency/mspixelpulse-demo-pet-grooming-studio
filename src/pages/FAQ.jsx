import PageHero from '../components/PageHero.jsx';
import SEO from '../components/SEO.jsx';
import { faqs } from '../data/faqs.js';

export default function FAQ() {
  return (
    <>
      <SEO
        title="FAQ | Pet Grooming Website Template Questions"
        description="Common pet grooming website demo FAQs covering dogs, cats, pricing, puppy grooming, senior pets, mobile groomers, and MSPixelPulse template customization."
      />
      <PageHero
        eyebrow="FAQ"
        title="Clear answers for pet parents and demo website buyers."
        text="Simple FAQ content for a pet care business website, including grooming logistics and template customization details."
      />
      <section className="section">
        <div className="section-inner narrow">
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
