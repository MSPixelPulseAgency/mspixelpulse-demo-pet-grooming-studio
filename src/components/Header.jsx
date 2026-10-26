import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, PawPrint, X } from "lucide-react";
import { navItems } from "../data/site.js";
export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  return (
    <header className="site-header">
      <nav
        className="nav-wrap"
        aria-label="Main navigation"
        onKeyDown={(event) => {
          if (event.key === "Escape" && open) {
            setOpen(false);
            toggle.current?.focus();
          }
        }}
      >
        <Link className="brand" to="/" aria-label="Stephy Pet Grooming home">
          <span className="brand-mark">
            <PawPrint size={26} aria-hidden="true" />
          </span>
          <span>
            <strong>
              stephy<span className="brand-dot">.</span>
            </strong>
            <small>PET GROOMING</small>
          </span>
        </Link>
        <button
          ref={toggle}
          className="nav-toggle icon-button"
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="main-navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
        <div
          id="main-navigation"
          className={`nav-links ${open ? "is-open" : ""}`}
        >
          {navItems
            .filter((item) => item.to !== "/" && item.to !== "/contact")
            .map((item) => (
              <NavLink key={item.to} to={item.to}>
                {item.label}
              </NavLink>
            ))}
          <Link className="button button-small" to="/contact">
            Appointment enquiry <ArrowUpRight size={16} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
