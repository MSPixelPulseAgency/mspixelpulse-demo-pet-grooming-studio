# Stephy Pet Grooming

A premium React + Vite pet-care concept by MSPixelPulse. Stephy is not a verified operating grooming business. The existing form sends demo enquiries to MSPixelPulse; it does not create grooming appointments.

- Repository: [MSPixelPulseAgency/mspixelpulse-demo-pet-grooming-studio](https://github.com/MSPixelPulseAgency/mspixelpulse-demo-pet-grooming-studio)
- Existing production site: [petgrooming.mspixelpulse.com](https://petgrooming.mspixelpulse.com/)
- Public agency projects: [MSPixelPulse](https://mspixelpulse.com/projects)

## Development and validation

Use Node.js 22.13+ (Node 24 is also supported).

```sh
npm install
npm run dev
npm run lint
npm test
npm run build
npm run check
npm run preview
```

Build output is `dist`. The build pre-renders all seven routes, with page-specific content and metadata, before React hydration. Local preview middleware and Vercel rewrites serve the matching route HTML. Shared service/package/FAQ records also drive the client-side search index.

For manual browser QA, open `/scripts/browser-qa.html` on the Vite development server. Its viewport matrix checks all seven routes at seven widths; its axe-core scan checks settled page content. The harness is excluded from Vercel uploads and the production bundle. Production form responses are tested with local fetch mocks; never create unsolicited test enquiries in the live intake service.

## Documentation

- [Redesign and validation report](docs/REDESIGN-REPORT.md)
- [Every media source, contributor and license](docs/MEDIA-LICENSES.md)
- [Business information needed before a real launch](docs/BUSINESS-DETAILS-NEEDED.md)
- [Future agent maintenance instructions](.ai-agents/website-builder-agent.md)

## Release boundary

The owner explicitly approved merging PR #9 and deploying this Stephy release to production on October 26, 2026. That approval is scoped to this release and this repository. Future production changes require their own authorization. Preserve the Vercel project, custom domain, environment variables, backend allowlist and central enquiry integration.

Vercel Preview builds use an explicitly labelled, local-only form rehearsal. Production builds retain the existing intake submission. The non-secret build-time VERCEL_ENV flag selects the behavior; no environment settings are changed. See [release validation and rollback procedure](docs/RELEASE-2026-10-26.md).
