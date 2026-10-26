# Stephy premium redesign — review report

Date: October 26, 2026. Scope: the existing MSPixelPulseAgency/mspixelpulse-demo-pet-grooming-studio repository, based on main commit 40312d0. Production deployment and merge are deliberately excluded.

## What changed

All seven existing routes are retained and redesigned: Home (/), Our approach (/about), Services (/services), Gallery (/gallery), Packages (/pricing), FAQs (/faq) and Contact (/contact). The existing enquiry endpoint and environment configuration are preserved. The original 20 service topics and 10 package options remain available as an explicitly illustrative menu; invented prices, appointment durations, reviews, contact records, service-area claims and simulated transformations have been removed. Unused sample testimonial and decorative component code has been removed.

The visual system uses warm ivory #f8f6ef, paper #fffdf8, dark sage #263f35, muted text #5d6a62, sage tint #e7eddf, teal #355c4c and lavender #ede8f3. Georgia display typography and a local system sans-serif avoid font requests. Fluid typography, a consistent container, rounded cards, an arched hero portrait, an organic image cutout, overlapping photos and restrained frosted navigation/search create the new composition.

New reusable components: SmartSearch, Photo, VideoPreview, ContactCTA and RouteFocus. Header, Footer, GalleryGrid, FAQAccordion, PageHero, ServiceCard, PricingCard and AnimatedSection have been refined. Shared media and site data live in src/data. Five .ai-agents maintenance documents have been updated.

## Interaction and media

- Search indexes the actual service, package, FAQ and page records. Suggestions support Up/Down, Enter and Escape, selected-option scrolling, an accessible combobox/listbox, clear control, common-query suggestions and a useful no-results state. Service/package anchors resolve to the actual card; FAQ links open the matching answer.
- Gallery: nine images derived from six licensed photographs and three film posters, category filters with pressed states and result counts, smooth entry/zoom, a native modal lightbox, previous/next arrows, keyboard arrow navigation, Escape and focus return. No matching client before/after pairs were supplied, so comparisons are omitted.
- Hero grooming film, home bathing film and gallery brushing film use local silent H.264 video, 960×540, around 10–12 seconds each, with extracted WebP posters. Video source assignment and playback happen only on a Play action. Native controls, inline playback, error feedback and keyboard focus are provided. There are no autoplaying films or audio tracks.
- Photography uses 480px/960px WebP variants, descriptive alt text, object-fit and reserved aspect ratios; below-fold images are lazy loaded. The media folder totals approximately 3.6 MiB including all variants and films. No stock-CDN or font-CDN requests are made at runtime.
- Motion uses CSS and IntersectionObserver, with no animation library: reveals, gentle image scale, card/button lift, native FAQ presentation, filter transitions, a subtle scroll-linked image drift where supported, and a gentle hero shape transition. Reduced-motion CSS removes animation/transitions and transforms. Reduced-motion preference emulation and physical-device testing were not performed.

Sources, contributors, transformations and license restrictions: [MEDIA-LICENSES.md](MEDIA-LICENSES.md). A public /media-credits.html page credits every contributor. Stock imagery is explicitly illustrative and never presented as Stephy customers, staff, premises or results.

## Enquiry and booking status

The existing central intake helper is unchanged. Consent, the honeypot, all existing pet-detail fields and backend-driven accepted/error states remain. The form adds length limits, local-date minimum, service preselection from menu/package links, a pending-request guard, a disabled sending state and focused acceptance feedback. A service selection hydrates safely before applying query-string preferences.

Intake acceptance means only that MSPixelPulse accepted an enquiry. It never creates or confirms a grooming appointment. No live synthetic enquiry or email was sent; inbox delivery, preview-origin acceptance and a real appointment/calendar integration are not claimed as verified. The existing backend restricts allowed origins, so preview submissions may need an approved preview origin before end-to-end testing.

## SEO and content integrity

All seven routes are pre-rendered into real HTML with route-specific titles, descriptions, canonicals, Open Graph data, one H1 and page content. React hydrates matching routes; local preview middleware mirrors the Vercel route rewrites. Client navigation refreshes metadata and manages focus/scroll, including hash targets. Sitemap, robots.txt, favicon, social preview image and basic WebSite schema are included. No unverified LocalBusiness, review or address schema is emitted. Preview/local JavaScript metadata is noindex; Vercel preview headers are checked separately during deployment verification.

Existing internal destinations and enquiry workflow are retained. No dead placeholder social links or invented phone/address/email are displayed. All referenced local media exist and no broken image was found in responsive checks. A client-side not-found page provides a way home; unknown SPA paths may still return HTTP 200 under the fallback rewrite.

## Validation

- npm run lint: passes with no errors or warnings.
- npm test: 4 tests pass, covering real-content search, valid deep links/unique IDs, consent rejection without networking, and distinct mocked accepted/server-rejected/offline intake results.
- npm run build: passes, including static rendering of all seven routes.
- npm run check: verifies media files, responsive variants, route HTML and Vercel configuration.
- Browser responsive matrix: all 7 routes × 320/375/430/768/1024/1440/1920px; no horizontal overflow, broken images or missing alt attributes; exactly one H1 on each page.
- axe-core WCAG 2 A/AA and 2.1 AA scan of all seven settled pages at desktop (1440px) and mobile (375px) widths: zero automated violations. Reveals were allowed to finish before scanning. Automated results do not constitute full WCAG certification; image-overlay contrast includes manual-review cases.
- Browser keyboard checks: search suggestions and service navigation, no-results state, gallery filters, lightbox arrows/Escape/focus return, and mobile-menu Escape/focus return.
- Browser media checks: all three films decode at 960px width and reach readyState 4 without media errors; no source is assigned before user activation. ffprobe confirms H.264 and no audio streams.
- All seven production-build routes were opened locally and their rendered route, H1, title and canonical checked. A fallback hydration mismatch found during QA was fixed with matching preview rewrites and route-aware hydration.
- Visual desktop/mobile screenshots and machine-readable matrix/axe evidence are retained locally. The development-only browser harness is scripts/browser-qa.html, opened under the Vite dev server. It is excluded from Vercel uploads.
- No Lighthouse score or field Core Web Vitals are claimed. iOS/Android physical-device testing, complete screen-reader testing and native mobile video-control coverage remain unverified.

## Existing dependency findings

npm audit reports 8 inherited findings: 2 moderate and 6 high, affecting baseline-browser-mapping, browserslist, nanoid, postcss, react-router, react-router-dom, source-map-js and vite. Dependency-upgrade PRs already exist independently. This redesign does not merge those PRs or broaden the runtime dependency-upgrade scope. Added packages are development tooling for lint, accessibility checks and pre-render compilation; no new runtime/UI library is added.

## Required business information

See [BUSINESS-DETAILS-NEEDED.md](BUSINESS-DETAILS-NEEDED.md): verified operating identity, address/service area, public contacts/hours, service availability, pricing, policies, booking provider and approved original photos/reviews are still required for a real-business launch. The site keeps a concise concept disclosure and honest enquiry wording until those are supplied.

## Delivery

Implementation is committed on codex/pet-grooming-premium-redesign, pushed for a PR and deployed only to Vercel Preview. The PR and verified preview link are returned in the handoff. Production remains https://petgrooming.mspixelpulse.com/ and is unchanged by this work.
