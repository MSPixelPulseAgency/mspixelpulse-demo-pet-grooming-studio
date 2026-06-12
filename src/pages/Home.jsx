import { Link } from 'react-router-dom';
import { ArrowRight, CalendarCheck, CheckCircle2, HeartHandshake, PawPrint, Sparkles } from 'lucide-react';
import SEO from '../components/SEO.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import GalleryGrid from '../components/GalleryGrid.jsx';
import { serviceHighlights } from '../data/services.js';
import { pricing } from '../data/pricing.js';
import { faqs } from '../data/faqs.js';

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

const testimonials = [
  {
    name: 'Pet Parent Review',
    text: 'The website feels warm, organized, and easy to use. It makes the grooming experience feel calm before booking.',
  },
  {
    name: 'Local Client Review',
    text: 'The services and pricing are clear, and the gallery gives the business a friendly neighbourhood feel.',
  },
  {
    name: 'Grooming Client Review',
    text: 'A polished demo that would help a small pet salon look trustworthy online from day one.',
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="MS PixelPulse Pet Grooming Studio | Pet Grooming Website Canada Demo"
        description="A cute, premium Toronto pet grooming demo for dog grooming website template, cat grooming website template, pet salon website, and mobile pet grooming website projects."
      />
      <section className="hero">
        <div className="section-inner hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Toronto Pet Grooming Demo</p>
            <h1>Gentle grooming care for pets who deserve to look and feel their best.</h1>
            <p>
              A modern pet grooming demo website designed for Canadian pet salons, mobile groomers, dog spas,
              cat grooming studios, and local pet care businesses.
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
            <img
              src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=1100&q=80"
              alt="Happy dog after a gentle grooming appointment"
            />
            <div className="floating-note">
              <PawPrint size={20} />
              <span>Warm, booking-ready pet salon website</span>
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

      <section className="section">
        <div className="section-inner split">
          <div>
            <p className="eyebrow">About The Demo</p>
            <h2>A clean pet salon website built to help grooming businesses get trusted faster.</h2>
          </div>
          <p>
            MS PixelPulse Pet Grooming Studio is a demo for grooming businesses that want a polished website with
            services, pricing, gallery photos, reviews, and a clear contact flow. It is built to feel local,
            trustworthy, and easy for pet parents to scan on any device.
          </p>
        </div>
      </section>

      <section className="section section-tint">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Services Preview"
            title="Grooming services for dogs, cats, puppies, and coat care."
            text="A flexible service layout for pet grooming website Canada searches and real salon booking flows."
          />
          <div className="card-grid three">
            {serviceHighlights.map((service) => <ServiceCard key={service.title} service={service} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionHeading eyebrow="Why Choose Us" title="Friendly details that make the demo feel real." />
          <div className="feature-grid">
            {choiceCards.map((card, index) => (
              <article className="mini-card" key={card}>
                <span>{index % 2 === 0 ? <HeartHandshake size={20} /> : <Sparkles size={20} />}</span>
                <h3>{card}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="section-inner">
          <SectionHeading eyebrow="Pricing Preview" title="Starter demo prices with clear expectations." />
          <div className="pricing-grid">
            {pricing.slice(1, 7).map((item) => (
              <article className="price-card" key={item.service}>
                <h3>{item.service}</h3>
                <strong>{item.price}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionHeading eyebrow="Gallery Preview" title="Cute grooming visuals for a warm first impression." />
          <GalleryGrid limit={6} />
        </div>
      </section>

      <section className="section section-tint">
        <div className="section-inner">
          <SectionHeading eyebrow="Demo Reviews" title="Friendly testimonials for presentation use." />
          <div className="card-grid three">
            {testimonials.map((review) => (
              <article className="card quote-card" key={review.name}>
                <p>“{review.text}”</p>
                <h3>{review.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionHeading eyebrow="FAQ Preview" title="Common questions pet parents ask before booking." />
          <div className="faq-list preview">
            {faqs.slice(0, 4).map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="section-inner final-cta-inner">
          <h2>Ready to build a pet grooming website that feels friendly and professional?</h2>
          <Link className="button" to="/contact">Contact MS PixelPulse</Link>
        </div>
      </section>
    </>
  );
}
