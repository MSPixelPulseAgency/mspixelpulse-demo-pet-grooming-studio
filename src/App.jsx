import { Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import RouteFocus from "./components/RouteFocus.jsx";
import PageHero from "./components/PageHero.jsx";
import SEO from "./components/SEO.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Gallery from "./pages/Gallery.jsx";
import Pricing from "./pages/Pricing.jsx";
import FAQ from "./pages/FAQ.jsx";
import Contact from "./pages/Contact.jsx";
export default function App() {
  return (
    <div className="site-shell">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <RouteFocus />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <>
                <SEO
                  title="Page not found | Stephy"
                  description="Find your way back to Stephy Pet Grooming."
                  noindex
                />
                <PageHero
                  eyebrow="A little detour"
                  title="This page has wandered off."
                  text="Let’s find your way back to the services, gallery or answers you need."
                />
                <div className="section-inner section">
                  <Link className="button" to="/">
                    Back to home
                  </Link>
                </div>
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
