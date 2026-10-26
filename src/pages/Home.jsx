import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  PawPrint,
  Sparkles,
} from "lucide-react";
import AnimatedSection from "../components/AnimatedSection.jsx";
import FAQAccordion from "../components/FAQAccordion.jsx";
import GalleryGrid from "../components/GalleryGrid.jsx";
import ProcessSteps from "../components/ProcessSteps.jsx";
import SEO from "../components/SEO.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import SmartSearch from "../components/SmartSearch.jsx";
import Photo from "../components/Photo.jsx";
import VideoPreview from "../components/VideoPreview.jsx";
import ContactCTA from "../components/ContactCTA.jsx";
import { faqs } from "../data/faqs.js";
import { serviceHighlights } from "../data/services.js";
import { processSteps } from "../data/processData.js";
import { photos, videos } from "../data/media.js";
export default function Home() {
  return (
    <>
      <SEO
        title="Stephy Pet Grooming | A little care. A lot of happy."
        description="Explore a thoughtful pet grooming concept: dog and cat care, coat maintenance, grooming packages and a little inspiration for happy tails."
      />
      <section className="hero">
        <div className="section-inner hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span />
              GOOD CARE. GREAT HAIR. HAPPY TAILS.
            </p>
            <h1>
              A little care.
              <br />A lot of <em>happy.</em>
            </h1>
            <p>
              Fresh coats. Soft paws. That just-groomed feeling.
              <br className="desktop-break" /> A thoughtful approach to looking
              after your favourite companion.
            </p>
            <div className="hero-actions">
              <Link className="button" to="/contact">
                Request an appointment <ArrowUpRight size={18} />
              </Link>
              <Link className="text-link" to="/services">
                Explore services <ArrowRight size={18} />
              </Link>
            </div>
            <p className="hero-disclosure">
              A Stephy concept by MSPixelPulse. Demo enquiries only.
            </p>
            <SmartSearch />
            <div className="hero-tags">
              <span>
                <PawPrint size={15} /> Dogs & cats
              </span>
              <span>
                <Heart size={15} /> Care comes first
              </span>
              <span>
                <Sparkles size={15} /> Every coat, considered
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <Photo
                photo={photos.portrait}
                priority
                sizes="(max-width: 900px) 90vw, 45vw"
              />
            </div>
            <span className="hero-stamp">
              <PawPrint size={23} />
              <span>
                For the love
                <br />
                of little paws.
              </span>
            </span>
            <div className="hero-film">
              <VideoPreview video={videos.grooming} compact />
            </div>
            <span className="orbit-note">a fresh coat & a fresh start</span>
          </div>
        </div>
      </section>
      <div className="care-ribbon">
        <div className="section-inner">
          <span>A little more comfort</span>
          <PawPrint size={17} />
          <span>A little less fur</span>
          <PawPrint size={17} />
          <span>A whole lot of love</span>
          <PawPrint size={17} />
          <span>Care for every chapter</span>
        </div>
      </div>
      <AnimatedSection className="section">
        <div className="section-inner">
          <div className="section-heading-row">
            <SectionHeading
              eyebrow="THE GROOMING MENU"
              title={
                <>
                  Good hair days,
                  <br />
                  <em>for the four-legged kind.</em>
                </>
              }
              text="From a simple freshen-up to a fuller groom, explore care for different coats and life stages."
            />
            <Link className="text-link" to="/services">
              Explore the menu <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="card-grid three">
            {serviceHighlights.map((s) => (
              <ServiceCard service={s} key={s.id} />
            ))}
          </div>
          <p className="fine-print menu-note">
            An illustrative service menu. Availability, timing and pricing
            require confirmation.
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection className="section section-sage">
        <div className="section-inner story-grid">
          <div className="story-visual">
            <Photo photo={photos.groomer} className="organic-photo" />
            <div className="story-inset">
              <Photo photo={photos.puppy} />
              <span>
                Little moments.
                <br />
                Thoughtful care.
              </span>
            </div>
          </div>
          <div className="story-copy">
            <p className="eyebrow">MORE THAN A FRESH HAIRCUT</p>
            <h2>
              Comfort is always
              <br />
              <em>a good look.</em>
            </h2>
            <p>
              A good grooming conversation starts with the pet: their coat,
              their routine, and the things that make them comfortable.
            </p>
            <p>
              Explore an approach that puts those details first, from a puppy’s
              first introduction to a coat that needs a little extra attention.
            </p>
            <div className="story-points">
              <span>
                <Heart size={20} /> Room for individual needs
              </span>
              <span>
                <PawPrint size={20} /> Practical, considered coat care
              </span>
            </div>
            <Link className="text-link" to="/about">
              Get to know the approach <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection className="section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="FROM HELLO TO HAPPY TAIL"
            title={
              <>
                A visit, <em>thoughtfully considered.</em>
              </>
            }
            text="A look at the conversations and care that can shape a grooming visit. The operating groomer will confirm the actual process."
          />
          <ProcessSteps steps={processSteps} />
        </div>
      </AnimatedSection>
      <AnimatedSection className="section film-section">
        <div className="section-inner film-grid">
          <div>
            <p className="eyebrow">THE QUIETER MOMENTS</p>
            <h2>
              A little splash.
              <br />
              <em>A softer finish.</em>
            </h2>
            <p>
              Take a closer look at the everyday care behind a fresh coat. A
              short, silent glimpse of bathing and brushing, at your pace.
            </p>
            <Link className="text-link" to="/gallery">
              Find a little inspiration <ArrowUpRight size={17} />
            </Link>
          </div>
          <VideoPreview video={videos.bathing} />
        </div>
      </AnimatedSection>
      <AnimatedSection className="section">
        <div className="section-inner">
          <div className="section-heading-row">
            <SectionHeading
              eyebrow="THE HAPPY-TAIL EDIT"
              title={
                <>
                  Soft coats. <em>Big personalities.</em>
                </>
              }
              text="A collection of licensed pet portraits and grooming moments. Inspiration, rather than client results."
            />
            <Link className="text-link" to="/gallery">
              View the full gallery <ArrowUpRight size={17} />
            </Link>
          </div>
          <GalleryGrid limit={3} />
        </div>
      </AnimatedSection>
      <AnimatedSection className="section section-lavender">
        <div className="section-inner faq-preview-grid">
          <div>
            <p className="eyebrow">A LITTLE REASSURANCE</p>
            <h2>
              Good questions.
              <br />
              <em>Clear answers.</em>
            </h2>
            <p>From the first enquiry to what’s on the menu.</p>
            <Link className="text-link" to="/faq">
              All your questions <ArrowUpRight size={17} />
            </Link>
          </div>
          <FAQAccordion items={faqs} preview />
        </div>
      </AnimatedSection>
      <ContactCTA />
    </>
  );
}
