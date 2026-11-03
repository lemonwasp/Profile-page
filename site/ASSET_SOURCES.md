# Portfolio content and asset sources

Reviewed on 2026-11-03. This directory mirrors the existing published portfolio. Hosting-specific identity is not part of this GitHub source snapshot.

## New project images

- `site/assets/leteatgo-readme.webp`: unchanged cover image referenced by the [frontend README](https://github.com/YJU-5/project-leteatgo-nextjs-repo/blob/main/README.md), original path `public/home/socialhome.webp`. It is labeled as a README cover, not an application screenshot.
- `site/assets/ai-lead-flow.svg`: original explanatory SVG based on the [AI Lead Conversion README](https://github.com/lemonwasp/ai-lead-conversion-platform/blob/2fa312d22ea0224a04776fff8268c4559dad9fc7/README.md). The separate dashboard/draft path and pending prediction connection are explicit.
- `site/assets/tsunagaroom-flow.svg`: original explanatory SVG based on the [Tsunagaroom README](https://github.com/lemonwasp/tsunagaroom/blob/61edfa3c2d245a8c7fbb9a7d142dc5471184404f/README.md). No training/course assets were copied for this illustration.

README cover SHA-256: `d7a2318dd302a5f4588d3ab5ec0d8512ec002f09e96128bc4bd663e187ce4670`.

## Evidence boundaries

- AI reconstruction: 18 features and implemented slices are documented in the README. [Prediction contract tests](https://github.com/lemonwasp/ai-lead-conversion-platform/blob/2fa312d22ea0224a04776fff8268c4559dad9fc7/tests/test_historical_prediction_api.py) were inspected; the portfolio does not claim that this task reran the external project's suite or established conversion lift.
- Let Eat Go: [API README](https://github.com/YJU-5/project-leteatgo-nestjs-repo/blob/main/README.md) explicitly attributes entity/authentication, album, chat relationships, DTO fixes, and S3 deletion contributions. Whole-platform capabilities are team work. The frontend README states demo restoration is in progress.
- Tsunagaroom: [ReactionRecordLogic](https://github.com/lemonwasp/tsunagaroom/blob/61edfa3c2d245a8c7fbb9a7d142dc5471184404f/src/main/java/logic/ReactionRecordLogic.java) inserts a reaction, checks success, and then updates read state. No automated test result or usability improvement is invented.
- IBUKI: [README](https://github.com/jphacks/hs_2605/blob/main/README.md), [Windows PR #66](https://github.com/jphacks/hs_2605/pull/66), and [ingestion PR #112](https://github.com/jphacks/hs_2605/pull/112). Existing screenshots are retained. Clinical performance and denoising accuracy gains are not claimed.

## Verification of this portfolio update

Browser checks covered desktop, 320px / 390px narrow viewports and a 768px tablet viewport; EN/JP text; all four detail dialogs; local image loading; four visible case-study fields; unclipped summaries; mobile navigation; and absence of app-origin console errors. Narrow layouts were rendered in same-origin viewport-sized iframes for browser QA. The temporary QA page is excluded from deployment.
