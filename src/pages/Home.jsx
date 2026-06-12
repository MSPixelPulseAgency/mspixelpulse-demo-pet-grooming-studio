import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  HeartHandshake,
  MapPin,
  PawPrint,
  Sparkles,
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection.jsx';
import FAQAccordion from '../components/FAQAccordion.jsx';
import GalleryGrid from '../components/GalleryGrid.jsx';
import PetTypeCards from '../components/PetTypeCards.jsx';
import PricingCard from '../components/PricingCard.jsx';
import ProcessSteps from '../components/ProcessSteps.jsx';
import SEO from '../components/SEO.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { faqs } from '../data/faqs.js';
import { addOnServices, serviceHighlights } from '../data/services.js';
import { beforeAfterCards, canadaCities, petTypes, processSteps } from '../data/processData.js';
import { pricing } from '../data/pricing.js';
import { testimonials } from '../data/testimonialsData.js';

const trustItems = [
  'Certified-style grooming layout',
  'Calm pet-friendly experience',
  'Small, medium, and large pet services',
  'Online booking-ready website',
];

const choiceCards = [
  'Gentle Handling',
  'Clean Studio Feel',
  'Breed-Aware Grooming',
  'Easy Booking',
  'Friendly Local Brand',
  'Responsive Website',
];

export default function Home() {
  return (
    <>
      <SEO
        title="Stephy Pet Grooming | Premium Pet Grooming Demo Canada"
        description="A glassy, premium Toronto pet grooming demo for pet grooming website Canada, dog grooming website template, cat grooming website template, pet salon website, and mobile pet grooming website projects."
      />
      <section className="hero">
        <span className="decor decor-1" aria-hidden="true" />
        <span className="decor decor-2" aria-hidden="true" />
        <span className="bg-paw hero-paw" aria-hidden="true">♡</span>
        <div className="section-inner hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Toronto Pet Grooming Demo</p>
            <h1>Gentle grooming care for pets who deserve to look and feel their best.</h1>
            <p>
              Stephy Pet Grooming is a modern pet grooming demo website designed for Canadian pet salons,
              mobile groomers, dog spas, cat grooming studios, and local pet care businesses.
            </p>
            <div className="hero-actions">
              <Link className="button" to="/contact">
                Book Appointment <CalendarCheck size={18} />
              </Link>
              <Link className="button button-secondary" to="/services">
                View Services <ArrowRight size={18} />
              </Link>
            </div>
            <div className="badges" aria-label="Website highlights">
              <span>Dogs & Cats</span>
              <span>Gentle Care</span>
              <span>Canada Demo</span>
            </div>
          </div>
          <div className="hero-media" aria-label="Freshly groomed pet">
            <div className="hero-glass-panel">
              <img
                src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=1100&q=80"
                alt="Happy dog after a gentle grooming appointment"
              />
            </div>
            <div className="floating-note note-one">
              <PawPrint size={20} />
              <span>Gentle Grooming</span>
            </div>
            <div className="floating-note note-two">
              <Sparkles size={20} />
              <span>Fresh Coat</span>
            </div>
            <div className="floating-note note-three">
              <HeartHandshake size={20} />
              <span>Happy Pets</span>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="section-inner trust-grid">
          {trustItems.map((item) => (
            <span key={item}><CheckCircle2 size={18} /> {item}</span>
          ))}
        </div>
      </section>

      <AnimatedSection className="section">
        <div className="section-inner split visual-split">
          <div>
            <p className="eyebrow">About The Demo</p>
            <h2>A premium pet salon website that feels polished, warm, and easy to trust.</h2>
            <p>
              Stephy Pet Grooming is a demo for grooming businesses that want a clean website with services,
              pricing, gallery photos, reviews, and a clear booking flow. It is built to feel local, soft,
              visual, and pet-parent friendly on every device.
            </p>
          </div>
          <div className="image-collage">
            <img
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=80"
              alt="Happy clean dog smiling after grooming"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&w=900&q=80"
              alt="Clean pet care product details in a grooming studio"
              loading="lazy"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section section-tint">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Pet Personalities"
            title="Grooming care for every pet personality"
            text="Soft visual cards help pet parents quickly see that the template can speak to many breeds, ages, and comfort levels."
          />
          <PetTypeCards items={petTypes} />
        </div>
      </AnimatedSection>

      <AnimatedSection className="section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Services Preview"
            title="Image-led grooming services for dogs, cats, puppies, and coat care."
            text="A flexible service layout for pet grooming website Canada searches and real salon booking flows."
          />
          <div className="card-grid three">
            {serviceHighlights.map((service) => <ServiceCard key={service.title} service={service} />)}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section section-tint">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Grooming Journey"
            title="A simple grooming journey from hello to happy tail"
            text="A clear process section makes the website feel organized, reassuring, and booking-ready."
          />
          <ProcessSteps steps={processSteps} />
        </div>
      </AnimatedSection>

      <AnimatedSection className="section">
        <div className="section-inner">
          <SectionHeading eyebrow="Why Choose Us" title="Friendly details that make the demo feel real." />
          <div className="feature-grid">
            {choiceCards.map((card, index) => (
              <article className="mini-card glass-card" key={card}>
                <span>{index % 2 === 0 ? <HeartHandshake size={20} /> : <Sparkles size={20} />}</span>
                <h3>{card}</h3>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section section-tint">
        <div className="section-inner">
          <SectionHeading eyebrow="Add-On Services" title="Little extras that make grooming menus feel complete." />
          <div className="addon-grid">
            {addOnServices.map((item) => {
              const Icon = item.icon;
              return (
                <article className="addon-card glass-card" key={item.title}>
                  <Icon size={22} aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section">
        <div className="section-inner">
          <SectionHeading eyebrow="Pricing Preview" title="Starter demo prices with a premium card system." />
          <div className="pricing-grid">
            {pricing.slice(1, 7).map((item) => <PricingCard item={item} key={item.service} />)}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section section-tint">
        <div className="section-inner">
          <SectionHeading eyebrow="Demo Transformations" title="Fresh look, happy pet energy" />
          <div className="comparison-grid">
            {beforeAfterCards.map((item) => (
              <article className="comparison-card glass-card" key={item.before}>
                <div><span>Before</span><strong>{item.before}</strong></div>
                <div><span>After</span><strong>{item.after}</strong></div>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section">
        <div className="section-inner">
          <SectionHeading eyebrow="Gallery Preview" title="Cute grooming visuals for a warm first impression." />
          <GalleryGrid limit={6} />
        </div>
      </AnimatedSection>

      <AnimatedSection className="section section-tint">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Canada Demo SEO"
            title="Made for pet grooming businesses across Canada"
            text="Demo service-area content can inspire local SEO pages for pet salon website and mobile pet grooming website projects."
          />
          <div className="city-grid">
            {canadaCities.map((city) => (
              <span key={city}><MapPin size={16} /> {city}</span>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section">
        <div className="section-inner">
          <SectionHeading eyebrow="Demo Reviews" title="Friendly testimonials for presentation use." />
          <div className="card-grid three">
            {testimonials.map((review) => (
              <article className="glass-card quote-card" key={review.name}>
                <p>“{review.text}”</p>
                <h3>{review.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section section-tint">
        <div className="section-inner faq-preview-grid">
          <div>
            <SectionHeading eyebrow="FAQ Preview" title="Common questions pet parents ask before booking." />
            <FAQAccordion items={faqs} preview />
          </div>
          <div className="faq-visual glass-card">
            <img
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=700&q=80"
              alt="Calm cat portrait for pet grooming FAQ content"
              loading="lazy"
            />
            <p>Clear answers help pet parents feel confident before they request a grooming appointment.</p>
          </div>
        </div>
      </AnimatedSection>

      <section className="final-cta">
        <div className="section-inner final-cta-inner glass-cta">
          <h2>Ready to build a pet grooming website that feels friendly and professional?</h2>
          <Link className="button" to="/contact">Contact Stephy Pet Grooming</Link>
        </div>
      </section>
    </>
  );
}
