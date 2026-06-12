import { Heart, LayoutTemplate, Map, PackageCheck, Search, Smartphone } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection.jsx';
import PageHero from '../components/PageHero.jsx';
import SEO from '../components/SEO.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

const values = [
  { title: 'Pet-friendly experience', icon: Heart },
  { title: 'Professional grooming layout', icon: LayoutTemplate },
  { title: 'Local SEO-ready pages', icon: Search },
  { title: 'Mobile-first design', icon: Smartphone },
  { title: 'Clear service packages', icon: PackageCheck },
  { title: 'Booking-ready structure', icon: Map },
];

export default function About() {
  return (
    <>
      <SEO
        title="About | Stephy Pet Grooming Demo"
        description="Learn about Stephy Pet Grooming, a premium Canadian pet salon website demo for services, pricing, reviews, gallery photos, and booking details."
      />
      <PageHero
        eyebrow="About The Studio"
        title="A warm demo website made for pet groomers in Canada."
        text="Stephy Pet Grooming helps grooming businesses show services, pricing, reviews, gallery photos, and booking details in a professional way."
      />
      <AnimatedSection className="section">
        <div className="section-inner split visual-split">
          <div>
            <p className="eyebrow">Built For Grooming Brands</p>
            <h2>Premium enough for trust, cute enough for pet care.</h2>
            <p>
              This demo is designed for Canadian pet salons, dog grooming website template projects, cat grooming
              website template projects, and mobile pet grooming website presentations. It gives a realistic
              portfolio site that can be adapted for real pet care businesses.
            </p>
          </div>
          <div className="image-collage">
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80"
              alt="Two happy dogs with clean groomed coats"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&w=900&q=80"
              alt="Pet care product detail for a clean grooming studio"
              loading="lazy"
            />
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection className="section section-tint">
        <div className="section-inner">
          <SectionHeading eyebrow="Website Value" title="Everything a local groomer needs to look organized online." />
          <div className="feature-grid">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article className="mini-card glass-card" key={value.title}>
                  <span><Icon size={20} /></span>
                  <h3>{value.title}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
