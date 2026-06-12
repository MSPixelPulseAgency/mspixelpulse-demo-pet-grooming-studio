import { Mail, MapPin, Phone, ShieldCheck, Smartphone, Sparkles } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection.jsx';
import PageHero from '../components/PageHero.jsx';
import SEO from '../components/SEO.jsx';

const trustBadges = [
  { title: 'Demo booking flow', icon: Sparkles },
  { title: 'Pet-parent friendly', icon: ShieldCheck },
  { title: 'Mobile-ready contact page', icon: Smartphone },
];

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact | Book Stephy Pet Grooming Demo in Toronto"
        description="Contact Stephy Pet Grooming, a Toronto pet grooming demo website with premium booking-ready fields for pet name, type, size, service, and preferred date."
      />
      <PageHero
        eyebrow="Contact"
        title="Book Grooming Demo"
        text="Use this placeholder contact page to show how a real pet salon website can collect booking requests and service details."
      />
      <AnimatedSection className="section">
        <div className="section-inner contact-grid">
          <div className="contact-visual glass-card">
            <img
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=80"
              alt="Clean puppy wrapped in a towel for a grooming booking page"
              loading="lazy"
            />
            <div className="contact-card">
              <h2>Demo Contact Details</h2>
              <p><MapPin size={18} /> Toronto, Ontario, Canada</p>
              <p><Phone size={18} /> +1 (000) 000-0000</p>
              <p><Mail size={18} /> hello@stephypetgrooming.com</p>
              <a href="#" aria-label="Demo social link">Social Links</a>
            </div>
            <div className="contact-badges">
              {trustBadges.map((badge) => {
                const Icon = badge.icon;
                return <span key={badge.title}><Icon size={16} /> {badge.title}</span>;
              })}
            </div>
          </div>
          <form className="contact-form glass-card">
            <label>
              Name
              <input name="name" type="text" placeholder="Your name" />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="you@example.com" />
            </label>
            <label>
              Phone
              <input name="phone" type="tel" placeholder="+1 (000) 000-0000" />
            </label>
            <label>
              Pet Name
              <input name="petName" type="text" placeholder="Pet name" />
            </label>
            <label>
              Pet Type
              <select name="petType" defaultValue="">
                <option value="" disabled>Select pet type</option>
                <option>Dog</option>
                <option>Cat</option>
                <option>Puppy</option>
                <option>Senior Pet</option>
                <option>Other</option>
              </select>
            </label>
            <label>
              Pet Size
              <select name="petSize" defaultValue="">
                <option value="" disabled>Select pet size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>Extra Large</option>
              </select>
            </label>
            <label>
              Preferred Service
              <select name="service" defaultValue="">
                <option value="" disabled>Select service</option>
                <option>Full Grooming</option>
                <option>Bath & Brush</option>
                <option>Nail Trim</option>
                <option>Cat Grooming</option>
                <option>Puppy Grooming</option>
                <option>De-shedding</option>
                <option>Other</option>
              </select>
            </label>
            <label>
              Preferred Date
              <input name="date" type="date" />
            </label>
            <label className="full">
              Message
              <textarea name="message" rows="5" placeholder="Tell us about the pet, coat, and service needs." />
            </label>
            <p className="form-helper full">
              This demo form can be connected to EmailJS, Formspree, a backend API, or a booking system.
            </p>
            <button className="button full" type="button">Book Grooming Demo</button>
          </form>
        </div>
      </AnimatedSection>
    </>
  );
}
