import { Link } from "react-router-dom";
import { ArrowUpRight, PawPrint } from "lucide-react";
import { navItems, site } from "../data/site.js";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-inner footer-grid">
        <div>
          <Link className="brand footer-brand" to="/">
            <PawPrint size={28} aria-hidden="true" />
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
        </div>
        <div>
          <h2>Take a look around</h2>
          <div className="footer-links">
            {navItems
              .filter((p) => p.to !== "/")
              .map((p) => (
                <Link to={p.to} key={p.to}>
                  {p.label}
                </Link>
              ))}
          </div>
        </div>
        <div>
          <h2>A thoughtful start</h2>
          <p>Have a question about the concept or a service on the menu?</p>
          <Link className="text-link" to="/contact">
            Start a conversation <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
      <div className="section-inner footer-bottom">
        <p>{site.disclosure}</p>
        <a href="/media-credits.html">Media & licensing</a>
      </div>
    </footer>
  );
}
