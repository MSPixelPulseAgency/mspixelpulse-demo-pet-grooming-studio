import { Heart, MessageCircle, Scissors } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection.jsx";
import PageHero from "../components/PageHero.jsx";
import SEO from "../components/SEO.jsx";
import Photo from "../components/Photo.jsx";
import ContactCTA from "../components/ContactCTA.jsx";
import { photos } from "../data/media.js";
export default function About() {
  return (
    <>
      <SEO
        title="Our approach | Stephy Pet Grooming"
        description="Explore Stephy’s pet-first design concept and a considered approach to grooming conversations, coat care and everyday comfort."
      />
      <PageHero
        eyebrow="OUR APPROACH"
        title={
          <>
            Care, with a little <em>more thought.</em>
          </>
        }
        text="Every pet brings a different coat, a different personality and a different idea of a good day."
      />
      <AnimatedSection className="section">
        <div className="section-inner story-grid">
          <Photo photo={photos.lifestyle} className="organic-photo" />
          <div className="story-copy">
            <p className="eyebrow">START WITH THE PET</p>
            <h2>
              The little things
              <br />
              <em>make a difference.</em>
            </h2>
            <p>
              How do they feel about the brush? What is their everyday routine?
              What would make coat care easier at home? These are useful
              conversations to have before a groom.
            </p>
            <p>
              Stephy is a pet-care concept created by MSPixelPulse. The design
              explores a warm, clear experience for pet parents. A real
              operating team, location and service policies have not been
              supplied.
            </p>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection className="section section-sage">
        <div className="section-inner card-grid three">
          {[
            {
              icon: MessageCircle,
              title: "A conversation first",
              text: "Start with the pet’s needs and the person who knows them best.",
            },
            {
              icon: Heart,
              title: "Comfort in the details",
              text: "Ask about handling needs, mobility and previous experiences.",
            },
            {
              icon: Scissors,
              title: "Care that fits everyday life",
              text: "Discuss a finish that suits the coat and its upkeep.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <article className="value-card" key={title}>
              <Icon size={27} aria-hidden="true" />
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>
      <ContactCTA />
    </>
  );
}
