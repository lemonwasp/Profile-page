# Taegwan Hong Portfolio

Source for Taegwan Hong’s engineering portfolio.

[Current published portfolio](https://taegwan-hong-engineer-portfolio.htg2001gd141.chatgpt.site)

## Current published edition

The current English / Japanese portfolio is in [`site/`](site/). It uses plain HTML, CSS and JavaScript and requires no package installation or build step.

- Deep navy `#081826`, cobalt `#5B9CFF`, teal `#57D6C5` and amber `#E8B46A`
- IBUKI, AI Lead Conversion Platform, Let Eat Go and Tsunagaroom case studies
- Personal role, technical problem, implementation and evidenced outcome for each project
- README-based project images with explicit illustration labels and source links
- Responsive layouts, keyboard-accessible dialogs and mobile navigation

### Run the current edition

```bash
python3 -m http.server 8000 --directory site
```

Open <http://localhost:8000>. Do not open `index.html` as a `file://` URL when checking browser behavior.

### Edit

- [`site/index.html`](site/index.html): page structure and initial English content
- [`site/styles.css`](site/styles.css): visual identity and responsive layout
- [`site/project-data.js`](site/project-data.js): EN / JP case studies, source evidence and image captions
- [`site/app.js`](site/app.js): translations, dialogs and navigation
- [`site/ASSET_SOURCES.md`](site/ASSET_SOURCES.md): asset provenance and verification boundaries

No credentials or runtime secrets are needed for this static edition. Hosting-specific identity and temporary QA files are not included.

## Existing Next.js implementation

The earlier Next.js implementation remains in `app/`, with its root `package.json` and `next.config.mjs`. See [its setup and design notes](docs/nextjs-portfolio.md).

```bash
npm install
npm run dev
npm run build
```

The `site/` directory is the source snapshot of the currently published edition. Adding these files does not change the root Next.js entry point or configure another deployment.

## Verification

- JavaScript syntax checks and static asset / internal-anchor validation
- EN / JP text and all four project detail dialogs
- Desktop, 320px / 390px narrow layouts and a 768px tablet layout
- No horizontal overflow in the checked layouts; local images load correctly

Project claims are tied to public READMEs, source files and contribution records. Existing external project test results are not represented as tests run by this portfolio repository.
