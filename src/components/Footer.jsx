import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  PawPrint,
  Phone,
} from "lucide-react";
import {
  navItems,
  site,
  businessContact,
  socialProfiles,
} from "../data/site.js";
const socialIcons = { Instagram, Facebook };
export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-inner footer-heading">
        <span className="footer-kicker">A little care goes a long way.</span>
        <PawPrint size={21} aria-hidden="true" />
      </div>
      <div className="section-inner footer-grid">
        <div className="footer-intro">
          <Link className="brand footer-brand" to="/">
            <span className="brand-mark">
              <PawPrint size={25} aria-hidden="true" />
            </span>
            <span>
              <strong>stephy.</strong>
              <small>PET GROOMING</small>
            </span>
          </Link>
          <p>
            For the love of soft coats,
            <br />
            little paws and happy tails.
          </p>
          <div className="footer-socials">
            {socialProfiles.length ? (
              <div className="social-icons">
                {socialProfiles.map((profile) => {
                  const Icon = socialIcons[profile.platform];
                  return (
                    Icon && (
                      <a
                        href={profile.url}
                        key={profile.platform}
                        aria-label={`Stephy on ${profile.platform}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Icon size={18} />
                      </a>
                    )
                  );
                })}
              </div>
            ) : (
              <>
                <div
                  className="social-icons social-unavailable"
                  aria-hidden="true"
                >
                  <span>
                    <Instagram size={18} />
                  </span>
                  <span>
                    <Facebook size={18} />
                  </span>
                </div>
                <p className="social-note">
                  Social profiles await verification.
                </p>
              </>
            )}
          </div>
        </div>
        <div>
          <h2>Explore</h2>
          <nav className="footer-links" aria-label="Footer navigation">
            {navItems
              .filter((p) => p.to !== "/")
              .map((p) => (
                <Link to={p.to} key={p.to}>
                  {p.label}
                </Link>
              ))}
          </nav>
        </div>
        <div className="footer-contact">
          <h2>Get in touch</h2>
          <Link className="footer-contact-link" to="/contact">
            <Mail size={18} aria-hidden="true" />
            <span>
              Enquire with MSPixelPulse
              <ArrowUpRight size={15} aria-hidden="true" />
            </span>
          </Link>
          <p className="footer-contact-note">
            Demo enquiries only. No grooming appointment is created.
          </p>
          {businessContact.email && (
            <a
              className="footer-contact-link"
              href={`mailto:${businessContact.email}`}
            >
              <Mail size={18} aria-hidden="true" />
              {businessContact.email}
            </a>
          )}
          {businessContact.phone && (
            <a
              className="footer-contact-link"
              href={`tel:${businessContact.phone.replace(/[^+0-9]/g, "")}`}
            >
              <Phone size={18} aria-hidden="true" />
              {businessContact.phone}
            </a>
          )}
          <div className="footer-location">
            <MapPin size={18} aria-hidden="true" />
            <p>
              {businessContact.location ||
                "Studio location & hours await verification."}
              {businessContact.hours && (
                <>
                  <br />
                  {businessContact.hours}
                </>
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="section-inner footer-bottom">
        <p>{site.disclosure}</p>
        <a href="/media-credits.html">
          Media & licensing <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
