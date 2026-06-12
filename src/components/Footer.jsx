import { Link } from 'react-router-dom';
import { Mail, MapPin, PawPrint, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-inner footer-grid">
        <div>
          <Link className="brand footer-brand" to="/">
            <span className="brand-mark" aria-hidden="true">
              <PawPrint size={24} />
            </span>
            <span>
              <strong>MS PixelPulse</strong>
              <small>Pet Grooming Studio</small>
            </span>
          </Link>
          <p>
            A cute, premium, booking-ready pet grooming website Canada demo for salons, dog spas, cat groomers,
            and mobile pet care businesses.
          </p>
        </div>
        <div>
          <h2>Contact</h2>
          <p><MapPin size={17} /> Toronto, Ontario, Canada</p>
          <p><Phone size={17} /> +1 (000) 000-0000</p>
          <p><Mail size={17} /> hello@mspixelpulse.com</p>
        </div>
        <div>
          <h2>Demo Pages</h2>
          <Link to="/services">Services</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Book Grooming Demo</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Demo website by MSPixelPulseAgency. Not a real grooming business.</p>
      </div>
    </footer>
  );
}
