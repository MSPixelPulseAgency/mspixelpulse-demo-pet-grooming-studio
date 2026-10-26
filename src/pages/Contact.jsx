import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Photo from "../components/Photo.jsx";
import { photos } from "../data/media.js";
import { services } from "../data/services.js";
import { pricing } from "../data/pricing.js";
const serviceOptions = [
  ...new Set([
    ...services.map((s) => s.title),
    ...pricing.map((p) => p.service),
  ]),
];
import { Heart, MessageCircle, ShieldCheck } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection.jsx";
import PageHero from "../components/PageHero.jsx";
import SEO from "../components/SEO.jsx";
import { submitInquiry } from "../lib/mspInquiry";

const CONSENT_LABEL =
  "I agree to be contacted about this request. This is a demo website; no booking, order or appointment is created.";
const hiddenStyle = {
  position: "absolute",
  left: "-9999px",
  width: "1px",
  height: "1px",
  overflow: "hidden",
};

const trustBadges = [
  { title: "Your details, with care", icon: ShieldCheck },
  { title: "A conversation first", icon: MessageCircle },
  { title: "Your pet’s needs matter", icon: Heart },
];

export default function Contact({
  preview = import.meta.env?.STEPHY_PREVIEW === true,
}) {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const pending = useRef(false);
  const confirmation = useRef(null);
  const [params] = useSearchParams();
  const chosenService = params.get("service") || "";
  const [selectedService, setSelectedService] = useState("");
  const [minDate, setMinDate] = useState("");
  useEffect(() => {
    setSelectedService(
      serviceOptions.includes(chosenService) ? chosenService : "",
    );
  }, [chosenService]);
  useEffect(() => {
    const today = new Date();
    setMinDate(
      `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`,
    );
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (pending.current) return;
    pending.current = true;
    const data = new FormData(event.currentTarget);
    const v = (key) => String(data.get(key) || "");
    setStatus("loading");
    setError("");
    if (preview) {
      setStatus("preview");
      pending.current = false;
      requestAnimationFrame(() => confirmation.current?.focus());
      return;
    }
    const result = await submitInquiry({
      formType: "booking",
      name: v("name"),
      email: v("email"),
      phone: v("phone"),
      service: v("service"),
      message: v("message") || "Grooming booking request (demo).",
      details: {
        petName: v("petName"),
        petType: v("petType"),
        petSize: v("petSize"),
        preferredDate: v("date"),
      },
      consent: data.get("consent") === "on",
      honeypot: v("company_website"),
    });
    if (result.ok) {
      setStatus("sent");
      requestAnimationFrame(() => confirmation.current?.focus());
    } else {
      setStatus("error");
      setError(result.error);
    }
    pending.current = false;
  }

  return (
    <>
      <SEO
        title="Start an enquiry | Stephy Pet Grooming"
        description="Share pet-care questions or enquire about the Stephy concept. Requests go to MSPixelPulse; submitting this form does not create a grooming appointment."
      />
      <PageHero
        eyebrow="LET’S START WITH HELLO"
        title={
          <>
            A little hello.
            <br />
            <em>A thoughtful next step.</em>
          </>
        }
        text={
          preview
            ? "Preview rehearsal: explore the form and its validation. Nothing entered here is sent, and no appointment is created."
            : "Share what you have in mind. This concept website sends enquiries to MSPixelPulse; it cannot book a grooming appointment."
        }
      />
      <AnimatedSection className="section">
        <div className="section-inner contact-grid">
          <div className="contact-visual glass-card">
            <Photo photo={photos.puppy} />
            <div className="contact-card">
              <p className="eyebrow">BEFORE YOU SEND</p>
              <h2>A conversation, with care.</h2>
              <p>
                {preview
                  ? "This preview validates the form locally. It does not send enquiries to MSPixelPulse or store your details."
                  : "Your enquiry is sent to MSPixelPulse, the agency behind this concept."}
              </p>
              <p>
                Studio address, phone, hours, prices and appointment
                availability are awaiting verification. Please do not use this
                form for urgent pet-care needs.
              </p>
            </div>
            <div className="contact-badges">
              {trustBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <span key={badge.title}>
                    <Icon size={16} /> {badge.title}
                  </span>
                );
              })}
            </div>
          </div>
          {status === "sent" || status === "preview" ? (
            <div
              className="contact-form glass-card form-confirmation"
              role="status"
              ref={confirmation}
              tabIndex={-1}
            >
              <h2>
                {status === "preview"
                  ? "Preview checked. Nothing was sent."
                  : "Request received"}
              </h2>
              <p>
                {status === "preview"
                  ? "The form passed its local validation. This was a preview rehearsal only: no enquiry was submitted, no details were stored and no appointment was created."
                  : "Your enquiry was accepted by MSPixelPulse’s intake service. No grooming appointment has been created."}
              </p>
            </div>
          ) : (
            <form
              className="contact-form glass-card"
              onSubmit={handleSubmit}
              aria-busy={status === "loading"}
            >
              <h2 className="full">Tell us a little about your pet.</h2>
              <label>
                Name
                <input
                  name="name"
                  type="text"
                  maxLength={200}
                  required
                  autoComplete="name"
                  placeholder="Your name"
                />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  maxLength={254}
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </label>
              <label>
                Phone
                <input
                  name="phone"
                  type="tel"
                  maxLength={40}
                  autoComplete="tel"
                  placeholder="Your phone number (optional)"
                />
              </label>
              <label>
                Pet Name
                <input
                  name="petName"
                  type="text"
                  maxLength={200}
                  placeholder="Pet name"
                />
              </label>
              <label>
                Pet Type
                <select name="petType" defaultValue="">
                  <option value="" disabled>
                    Select pet type
                  </option>
                  <option>Dog</option>
                  <option>Cat</option>
                  <option>Puppy</option>
                  <option>Senior Pet</option>
                  <option>Other</option>
                </select>
              </label>
              <label>
                Pet Size
                <select name="petSize" defaultValue="">
                  <option value="" disabled>
                    Select pet size
                  </option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                  <option>Extra Large</option>
                </select>
              </label>
              <label>
                Preferred Service
                <select
                  name="service"
                  value={selectedService}
                  onChange={(event) => setSelectedService(event.target.value)}
                >
                  <option value="" disabled>
                    Select service
                  </option>
                  {serviceOptions.map((service) => (
                    <option key={service}>{service}</option>
                  ))}
                  <option>Other</option>
                </select>
              </label>
              <label>
                Preferred Date
                <input
                  name="date"
                  type="date"
                  min={minDate}
                  aria-describedby="date-help"
                />
                <small id="date-help">
                  A preference only; no time is reserved.
                </small>
              </label>
              <label className="full">
                Message
                <textarea
                  name="message"
                  maxLength={10000}
                  rows="5"
                  placeholder="Tell us about the pet, coat, and service needs."
                />
              </label>
              <div style={hiddenStyle} aria-hidden="true">
                <label>
                  Company website
                  <input
                    name="company_website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>
              <label
                className="full"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.6rem",
                }}
              >
                <input
                  name="consent"
                  type="checkbox"
                  required
                  style={{ width: "auto", marginTop: "0.25rem" }}
                />
                <span>
                  {preview
                    ? "I understand this preview does not send an enquiry or book an appointment."
                    : CONSENT_LABEL}
                </span>
              </label>
              {status === "error" && (
                <p
                  className="form-helper full"
                  role="alert"
                  style={{ color: "#9b2c2c" }}
                >
                  {error}
                </p>
              )}
              <p className="form-helper full">
                {preview
                  ? "Preview rehearsal only. This form does not send any data. Production uses the existing MSPixelPulse enquiry service."
                  : "Demo website: your request is received by MSPixelPulse and answered by email. No grooming appointment is booked."}
              </p>
              <button
                className="button full"
                type="submit"
                disabled={status === "loading"}
              >
                {status === "loading"
                  ? "Sending…"
                  : preview
                    ? "Check preview enquiry"
                    : "Send enquiry"}
              </button>
            </form>
          )}
        </div>
      </AnimatedSection>
    </>
  );
}
