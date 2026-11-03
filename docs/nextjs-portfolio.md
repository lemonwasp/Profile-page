# Taegwan Hong Portfolio

Editorial, evidence-first portfolio site for backend engineer Taegwan Hong.

## Direction

- English-only interface
- Neo-brutalist / editorial typography
- Black, paper-white, and restrained blue accent
- Real project evidence over decorative metrics
- Responsive long-scroll layout
- Reduced-motion friendly interactions

## Featured work

- TIFF → PDF performance case study
- Let Eat Go social dining platform
- Tsunagaroom asynchronous family video communication
- AI Lead Conversion Platform reconstruction

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Security

- No application secrets are required by the current portfolio build.
- Environment files, Vercel metadata, build output, and local dependency folders are git-ignored.
- Security headers are configured in `next.config.mjs`.
- CI runs a high-severity dependency audit before the production build.
- Dependabot checks npm dependencies weekly.
- Preview deployments should remain protected until visual and CI review are complete.

<!-- vercel git integration trigger: 2026-09-13 -->
