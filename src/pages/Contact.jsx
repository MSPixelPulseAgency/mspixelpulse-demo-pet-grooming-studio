import { Mail, MapPin, Phone } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import SEO from '../components/SEO.jsx';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact | Book Grooming Demo in Toronto"
        description="Contact MS PixelPulse Pet Grooming Studio, a Toronto pet grooming demo website with booking-ready fields for pet type, size, service, and preferred date."
      />
      <PageHero
        eyebrow="Contact"
        title="Book Grooming Demo"
        text="Use this placeholder contact page to show how a real pet salon website can collect booking requests and service details."
      />
      <section className="section">
        <div className="section-inner contact-grid">
          <div className="contact-card">
            <h2>Demo Contact Details</h2>
            <p><MapPin size={18} /> Toronto, Ontario, Canada</p>
            <p><Phone size={18} /> +1 (000) 000-0000</p>
            <p><Mail size={18} /> hello@mspixelpulse.com</p>
            <a href="#" aria-label="Demo social link">Social Links</a>
            <p className="notice compact">Placeholder details only. This is not a real grooming business.</p>
          </div>
          <form className="contact-form">
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
            <button className="button full" type="button">Book Grooming Demo</button>
          </form>
        </div>
      </section>
    </>
  );
}
