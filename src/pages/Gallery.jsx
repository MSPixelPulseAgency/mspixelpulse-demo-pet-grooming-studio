import GalleryGrid from '../components/GalleryGrid.jsx';
import PageHero from '../components/PageHero.jsx';
import SEO from '../components/SEO.jsx';

export default function Gallery() {
  return (
    <>
      <SEO
        title="Gallery | Pet Salon Website Demo Photos"
        description="A responsive gallery page for a Toronto pet grooming demo, using safe placeholder imagery for dog grooming, cat care, bath time, nail care, and pet portraits."
      />
      <PageHero
        eyebrow="Gallery"
        title="A friendly visual gallery for pet grooming businesses."
        text="Placeholder grooming imagery shows how a real pet salon website can build trust with before-and-after photos, studio moments, and happy pet portraits."
      />
      <section className="section">
        <div className="section-inner">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
