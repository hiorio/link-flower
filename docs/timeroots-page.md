# TimeRoots product page

## Surface contract
- Direction applicability: existing-world extension, not a replacement visual world. The user's pinned brief selects actual product evidence, accumulated daily/weekly/monthly records, the existing catalog/locales, and arcui.dev references. No new-world concept tournament or generated comp was used.
- Thesis: small activity records reveal a personal rhythm without judging gaps.
- Story and structure: product identity and installation action → interactive period aggregation → unscored gaps → authentic timeline/analytics → local storage and optional calendar → installation/support.
- First viewport: creator navigation retained; TimeRoots identity, two-line proposition and primary store action beside the record chart; mobile stacks this sequence.
- Form: warm app-derived ground, forest-green marks, native site typography, readable real-screen evidence. Finish target is clear product truth and responsive interaction, not decorative 3D.
- Route: `/apps/timeroots/`; standalone static Vite entry; also accepts `index.html`.
- Mode: Persuade. Visitors should understand actual-activity recording and follow the existing App Store link.
- Extend the existing HIORIO site, preserving header, language selection, catalog order, and store/support destinations.
- Visual direction: warm paper and forest green from the real app; generous readable typography; a weekly/monthly record chart as the primary scene, real release screenshots as evidence. No invented flower illustration or gamified streak scoring.
- Chart and timeline follow the interaction ideas in https://arcui.dev/docs/components/chart/ and https://arcui.dev/docs/components/timeline/ . Direct React/CSS implementation, no ARC dependency or copied source/assets.
- All demo values are explicitly illustrative, not app captures or personal records. One fixed February 2026 dataset aggregates seven daily values into each weekly bar; no overlapping activity in the demo.
- Native app does not judge unrecorded time. Do not suggest productivity scores or claim a heatmap feature.

## Verified product evidence (2026-10-05)
- Native repository: `C:/Projects/time-product-suite/time-tracker-app`.
- `docs/release/APP_STORE_METADATA_KO.md`, `docs/release/RELEASE-1.2-SIMULATOR.md`, and `docs/release/app-store-screenshots/1.2.0/README.md`.
- `src/app/analytics.tsx` and `src/features/analytics/domain/analytics.ts`: daily/weekly/monthly records, activity totals and deduplicated covered time.
- Apple lookup `https://itunes.apple.com/lookup?id=6798457487&country=kr`: released version 1.2 on verification date.
- Existing App Store ID 6798457487 and timeroots-support destination preserved; TimeRoots stays near the bottom of the catalog.

## Screenshot provenance
Source: native repository `docs/release/app-store-screenshots/1.2.0/03-timeline.png` and `04-analytics.png`.
Real release-simulator 1.2.0 build 16 captures, dated 2026-09-06, with test records. Korean UI is disclosed in every site language.
`scripts/prepare-timeroots-screens.py` resizes to 792 × 1721 and encodes WebP; it does not paint, replace, or fabricate UI pixels. No third-party art.

## Verification
Build and static-entry tests run with `npm test`. Preview uses a static server over `dist`, not a development SPA fallback. Windows Python MIME mapping for `.js` must be `application/javascript`.

2026-10-05: eight build/static tests pass. Browser verified `/apps/timeroots/`, explicit `/apps/timeroots/index.html`, reload with English selection retained, Korean/English/Japanese controls, chart month and bar selection, catalog detail link, and real images loaded. Widths 320, 390 and 1280 have no horizontal overflow in tested states. Shared header is restyled only within `.tr-shell`. Bars transition background only, never height, with reduced-motion override.

Independent finish review scored four requested corrections resolved (scope persistence, direction applicability, header contrast, motion), disposition `ship` for that fix list. Documentation handoff confirmed screenshots and provenance agree. Pre-existing TimeRoots 1.1 / missing-detail notes in the shared DESIGN.md are stale; that unrelated dirty file was deliberately preserved.
