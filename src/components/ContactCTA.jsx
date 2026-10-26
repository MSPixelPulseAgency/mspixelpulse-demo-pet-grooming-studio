import { Link } from "react-router-dom";
import { ArrowUpRight, PawPrint } from "lucide-react";
export default function ContactCTA() {
  return (
    <section className="final-cta">
      <div className="section-inner final-cta-inner">
        <div>
          <p className="eyebrow">A little care starts here</p>
          <h2>
            Let’s talk about
            <br />
            <em>your favourite companion.</em>
          </h2>
        </div>
        <div>
          <Link className="button button-light" to="/contact">
            Start an enquiry <ArrowUpRight size={18} />
          </Link>
          <p className="fine-print">
            Demo enquiries go to MSPixelPulse.
            <br />
            No grooming appointment is created.
          </p>
        </div>
        <PawPrint className="cta-paw" size={180} aria-hidden="true" />
      </div>
    </section>
  );
}
