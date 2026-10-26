# Final design refinement — October 26, 2026

This continuation belongs to PR #10, following the released seven-page redesign in PR #9. The owner explicitly approved merging and production deployment to https://petgrooming.mspixelpulse.com/. Scope remains this repository and its existing Vercel project.

## Final design system

- Self-hosted DM Sans for body/UI and DM Serif Display for headings, including genuine italic. The three Latin WOFF2 faces total under 100 KiB; body and normal display faces are preloaded and use font-display: swap. SIL OFL notices and official sources are documented in MEDIA-LICENSES.md and the public media credits page.
- Warm ivory #FAF8F3, forest #234638, sage #B8CDB8, lavender #E9E4F2, peach #F3D9CA and charcoal #26332D replace the earlier terracotta theme. Forest anchors buttons, headings and accents; subtle sage/lavender/ivory blends support sections and the footer.
- Shared type tokens give body copy 17px on desktop/tablet and 16px on mobile; captions/secondary labels are at least 14px. Desktop navigation is 17px, collapsed/mobile navigation 16px, and buttons 16px. Mobile hero headings stay around 38px. Display headings use the font's native 400 weight.
- Refined glass header/search/cards/menu, pill buttons, consistent shadows/borders, readable gallery caption panels, footer display headings and restrained spacing preserve the existing composition. Navigation collapses at 1100px to accommodate the larger type without crowding.
- Existing organic masks, photography, reveals, parallax, route transitions, real-content search, native gallery dialog and inquiry integration remain. The hero keeps optimized silent autoplay, loop, inline playback and poster/preferences/error fallback; other videos remain opt-in.

## Release checks

- Lint, 15 tests, production build, preview build and deployment configuration/media/font checks.
- Browser matrix: all seven routes at 320, 375, 430, 768, 1024, 1440 and 1920px. Checks cover typography minima, loaded fonts, overflow, H1 count/size and image loading/alt attributes.
- Automated WCAG A/AA checks on settled pages at 1440px and 375px, plus manual mobile menu, search keyboard/empty states, gallery filters/dialog and video playback checks. Automated checks do not constitute full accessibility certification.
- Preserve the current production deployment ID before merging. Wait for the PR's CodeQL/Vercel checks, review the complete diff, then merge through the normal merge-commit workflow. Verify Vercel's production target, READY state and matching merge SHA, all seven routes and interactions on the actual custom domain. Roll back to the saved deployment if a critical issue appears.
- No backend, environment variable, production data or unrelated project changes. Preview origins remain blocked by the backend; preview forms use the existing explicit local rehearsal. No live inquiry or appointment is created during testing. Inbox delivery, physical devices and field Core Web Vitals are not claimed.
