import { useState } from 'react';
import { Mail, MapPin, Phone, ShieldCheck, Smartphone, Sparkles } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection.jsx';
import PageHero from '../components/PageHero.jsx';
import SEO from '../components/SEO.jsx';
import { submitInquiry } from '../lib/mspInquiry';

const CONSENT_LABEL = 'I agree to be contacted about this request. This is a demo website; no booking, order or appointment is created.';
const hiddenStyle = { position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' };

const trustBadges = [
  { title: 'Demo booking flow', icon: Sparkles },
  { title: 'Pet-parent friendly', icon: ShieldCheck },
  { title: 'Mobile-ready contact page', icon: Smartphone },
];

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const v = (key) => String(data.get(key) || '');
    setStatus('loading');
    setError('');
    const result = await submitInquiry({
      formType: 'booking',
      name: v('name'),
      email: v('email'),
      phone: v('phone'),
      service: v('service'),
      message: v('message') || 'Grooming booking request (demo).',
      details: { petName: v('petName'), petType: v('petType'), petSize: v('petSize'), preferredDate: v('date') },
      consent: data.get('consent') === 'on',
      honeypot: v('company_website'),
    });
    if (result.ok) {
      setStatus('sent');
    } else {
      setStatus('error');
      setError(result.error);
    }
  }

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
          {status === 'sent' ? (
            <div className="contact-form glass-card" role="status">
              <h2>Request received</h2>
              <p>Your demo grooming request was received by MSPixelPulse and someone will reply by email. No appointment or booking has been created.</p>
            </div>
          ) : (
          <form className="contact-form glass-card" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" type="text" required autoComplete="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" />
            </label>
            <label>
              Phone
              <input name="phone" type="tel" autoComplete="tel" placeholder="+1 (000) 000-0000" />
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
            <div style={hiddenStyle} aria-hidden="true">
              <label>
                Company website
                <input name="company_website" type="text" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <label className="full" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
              <input name="consent" type="checkbox" required style={{ width: 'auto', marginTop: '0.25rem' }} />
              <span>{CONSENT_LABEL}</span>
            </label>
            {status === 'error' && (
              <p className="form-helper full" role="alert" style={{ color: '#9b2c2c' }}>{error}</p>
            )}
            <p className="form-helper full">
              Demo website: your request is received by MSPixelPulse and answered by email. No grooming appointment is booked.
            </p>
            <button className="button full" type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending…' : 'Request Grooming Demo'}
            </button>
          </form>
          )}
        </div>
      </AnimatedSection>
    </>
  );
}
