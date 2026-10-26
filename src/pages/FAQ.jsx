import PageHero from "../components/PageHero.jsx";
import SEO from "../components/SEO.jsx";
import FAQAccordion from "../components/FAQAccordion.jsx";
import Photo from "../components/Photo.jsx";
import ContactCTA from "../components/ContactCTA.jsx";
import { faqs } from "../data/faqs.js";
import { photos } from "../data/media.js";
export default function FAQ() {
  return (
    <>
      <SEO
        title="Your grooming questions, answered | Stephy FAQs"
        description="Find clear answers about grooming enquiries, service options, pricing, gallery photography and the Stephy concept website."
      />
      <PageHero
        eyebrow="GOOD QUESTIONS, CLEAR ANSWERS"
        title={
          <>
            A little clarity,
            <br />
            <em>before you enquire.</em>
          </>
        }
        text="Here’s what we can tell you about the service menu, the enquiry process and this pet-care concept."
      />
      <section className="section section-top-small">
        <div className="section-inner faq-page-grid">
          <FAQAccordion items={faqs} />
          <aside className="faq-aside">
            <Photo photo={photos.cat} />
            <h2>Still curious?</h2>
            <p>
              The enquiry form is a good place to start a conversation with
              MSPixelPulse about this concept.
            </p>
          </aside>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
