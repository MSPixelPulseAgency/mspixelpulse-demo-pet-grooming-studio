import { Heart, LayoutTemplate, Map, PackageCheck, Search, Smartphone } from 'lucide-react';
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
        title="About | MS PixelPulse Pet Grooming Studio Demo"
        description="Learn about this Canadian pet salon website demo for groomers who need services, pricing, reviews, gallery photos, and booking details."
      />
      <PageHero
        eyebrow="About The Studio"
        title="A warm demo website made for pet groomers in Canada."
        text="MS PixelPulse Pet Grooming Studio helps grooming businesses show services, pricing, reviews, gallery photos, and booking details in a professional way."
      />
      <section className="section">
        <div className="section-inner split">
          <div>
            <p className="eyebrow">Built For Grooming Brands</p>
            <h2>Premium enough for trust, cute enough for pet care.</h2>
          </div>
          <p>
            This demo is designed for Canadian pet salons, dog grooming website template projects, cat grooming
            website template projects, and mobile pet grooming website presentations. It gives MSPixelPulse a
            realistic portfolio site that can be adapted for real pet care businesses.
          </p>
        </div>
      </section>
      <section className="section section-tint">
        <div className="section-inner">
          <SectionHeading eyebrow="Website Value" title="Everything a local groomer needs to look organized online." />
          <div className="feature-grid">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article className="mini-card" key={value.title}>
                  <span><Icon size={20} /></span>
                  <h3>{value.title}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
