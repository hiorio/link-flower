# Growing app introductions

Verified against local project evidence on 2026-09-13. This document is maintainer context, not public installation guidance.

## Registry and priority

`src/growing-projects.ts` is the single registry for the six new introductions. It holds the catalog copy, lifecycle status, detail URL, screenshots, and KO/EN/JA detail copy. Vite entry points and detail routing are derived from it. `src/apps.ts` merges this registry between the original first six apps and the two lower-priority apps, then assigns display numbers automatically.

The order starts with Dohwaji and Ssak Memo and ends with TimeRoots and Ringtone. Search and lifecycle filtering never sort the registry. Main and full catalog share the same controls and filtering function.

To add an app: verify its current name, icon and availability in the native project; add one registry entry and its assets; create `apps/<slug>/index.html` with matching Korean metadata and canonical URL; run `npm test`; verify narrow and wide browser layouts. Do not label an internal TestFlight build as a publicly installable release. Update lifecycle status and add a public destination only when verified.

## Evidence and assets

Paths below are relative to the folder containing the source projects. Icons are copied byte-for-byte from the current native asset catalogs; SHA-256 checks live in `tests/static-build.test.mjs`. Screenshots retain their entire frame and original pixel dimensions, encoded to WebP by `scripts/prepare-growing-screens.py` (Pillow required). No screenshot content was drawn, retouched, or generated for these pages.

| Introduction | Evidence | Icon source | Published visual |
| --- | --- | --- | --- |
| 세어봐 / CountLens | `counter/README.md`, app naming/localization and TestFlight records | `counter/ObjectCounter/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon.png` | `counter/docs/evidence/design-refresh-final/actual-import-five-objects.png` — actual result UI using a test photograph, not an accuracy claim |
| Duo Studio | `duo studio/README.md`, `docs/AppStoreDescription.md`, internal TestFlight evidence | `duo studio/DuoStudio/Resources/Assets.xcassets/AppIcon.appiconset/icon.png` | `duo studio/artifacts/studio-final.png`, `artifacts/ipad-editor-reopened.png` — actual iPad template and editor captures |
| ArchiveInk | `picture-draw/README.md`, `Config/App.xcconfig`, editor generation options | `picture-draw/ArchiveInk/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon.png` | `picture-draw/artifacts/field-notes-final/street-bicycle/card.png` — generated development output, explicitly not a screenshot |
| HIHO RUN | `hihorun/README.md`, `docs/TESTFLIGHT.md` build 5 | `hihorun/RunningPhoto/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon.png` | `hihorun/artifacts/stats-placement.png` — real editor UI with explicitly labelled sample workout data |
| Daymirror | `planudid/README.md`, implementation status and iOS/Mac TestFlight evidence | `planudid/App/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png` | `planudid/artifacts/ux/routine-filled.png` — actual development UI with example activity blocks |
| TimeJourney | `TimeJourney/README.md`, prototype status and missing production media | None finalized | Text-based explanatory boarding-pass diagram, explicitly not app UI. The only available capture was a simulator boot screen and was rejected. |

Internal testing: CountLens, Duo Studio, HIHO RUN, Daymirror. Development: ArchiveInk, TimeJourney. The original eight apps retain the owner's established live status.

## Claims that must remain qualified

- CountLens counts supported objects; a line-crossing event is not a unique person. Detection must be reviewed.
- Duo Studio's folding is an in-app/export effect, not a system fold or automatic wallpaper installation.
- ArchiveInk has separate on-device and online generation. Online generation sends the selected photo to an external inference service. On-device use requires a model download.
- HIHO RUN imports completed Health workouts; it does not track a live GPS run. The displayed workout is a sample.
- Daymirror cross-device synchronization remains under real-device validation.
- TimeJourney app restriction/release behavior is not yet verified on physical hardware. Do not promise it as a working blocker.

No App Store Connect management links, tester identifiers, credentials, or private contact information are published.
