import AnimatedSection from '../components/AnimatedSection.jsx';
import GalleryGrid from '../components/GalleryGrid.jsx';
import PageHero from '../components/PageHero.jsx';
import SEO from '../components/SEO.jsx';

export default function Gallery() {
  return (
    <>
      <SEO
        title="Gallery | Stephy Pet Salon Website Demo Photos"
        description="A responsive gallery page for a Toronto pet grooming demo, using safe placeholder imagery for dog grooming, cat care, bath time, nail care, studio details, and pet portraits."
      />
      <PageHero
        eyebrow="Gallery"
        title="A visual gallery for a warm, premium grooming brand."
        text="Placeholder grooming imagery shows how a real pet salon website can build trust with studio moments, coat care, bath care, paw care, and happy pet portraits."
      />
      <AnimatedSection className="section">
        <div className="section-inner">
          <GalleryGrid filters />
        </div>
      </AnimatedSection>
    </>
  );
}
