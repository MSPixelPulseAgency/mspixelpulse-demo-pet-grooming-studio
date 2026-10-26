import PageHero from "../components/PageHero.jsx";
import SEO from "../components/SEO.jsx";
import GalleryGrid from "../components/GalleryGrid.jsx";
import VideoPreview from "../components/VideoPreview.jsx";
import ContactCTA from "../components/ContactCTA.jsx";
import { videos } from "../data/media.js";
export default function Gallery() {
  return (
    <>
      <SEO
        title="The gallery | Pet portraits & grooming moments | Stephy"
        description="Browse licensed pet portraits, bathing, brushing and grooming inspiration in Stephy’s accessible, filterable photo gallery."
      />
      <PageHero
        eyebrow="THE HAPPY-TAIL EDIT"
        title={
          <>
            A little fluff.
            <br />
            <em>A lot of personality.</em>
          </>
        }
        text="Pet portraits, quiet grooming moments and everyday companionship. Licensed illustrative media, not Stephy clients, staff or transformations."
      />
      <section className="section section-top-small">
        <div className="section-inner">
          <GalleryGrid filters />
        </div>
      </section>
      <section className="section section-sage">
        <div className="section-inner film-grid">
          <div>
            <p className="eyebrow">CARE IN MOTION</p>
            <h2>
              The everyday
              <br />
              <em>brush-out.</em>
            </h2>
            <p>
              A short, silent look at a fluffy dog enjoying a brush outdoors.
              Play when you’re ready.
            </p>
          </div>
          <VideoPreview video={videos.brushing} />
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
