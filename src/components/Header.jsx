import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, PawPrint, X } from "lucide-react";
import { navItems } from "../data/site.js";
export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const header = useRef(null);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    if (!open) return;
    function outside(event) {
      if (!header.current?.contains(event.target)) {
        if (header.current?.contains(document.activeElement))
          toggle.current?.focus({ preventScroll: true });
        setOpen(false);
      }
    }
    const desktop = matchMedia("(min-width: 1101px)");
    const resize = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener("pointerdown", outside);
    desktop.addEventListener("change", resize);
    return () => {
      document.removeEventListener("pointerdown", outside);
      desktop.removeEventListener("change", resize);
    };
  }, [open]);
  return (
    <header ref={header} className="site-header">
      <nav
        className="nav-wrap"
        aria-label="Main navigation"
        onBlur={(event) => {
          if (
            event.relatedTarget &&
            !event.currentTarget.contains(event.relatedTarget)
          )
            setOpen(false);
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape" && open) {
            setOpen(false);
            toggle.current?.focus();
          }
        }}
      >
        <Link
          className="brand"
          to="/"
          aria-label="Stephy Pet Grooming home"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark">
            <PawPrint size={24} aria-hidden="true" />
          </span>
          <span>
            <strong>
              stephy<span className="brand-dot">.</span>
            </strong>
            <small>PET GROOMING</small>
          </span>
        </Link>
        <div className="header-actions">
          <Link
            className="mobile-enquiry"
            to="/contact"
            onClick={() => setOpen(false)}
          >
            Enquire <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
          <button
            ref={toggle}
            className={`nav-toggle icon-button ${open ? "is-open" : ""}`}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="main-navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <div
          id="main-navigation"
          className={`nav-links ${open ? "is-open" : ""}`}
        >
          {navItems
            .filter((item) => item.to !== "/" && item.to !== "/contact")
            .map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          <Link
            className="button button-small"
            to="/contact"
            onClick={() => setOpen(false)}
          >
            Appointment enquiry <ArrowUpRight size={16} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
