# Growing app introductions

Latest showcase policy (2026-10-08): `src/product-visibility.ts` excludes deepPlayer, HUNTLOG, ai-ocr and AutoTrade from the exported registry, public navigation/search, routing and static page build. Their source records remain local. The current showcase has 21 apps (9 live / 8 testing / 4 development), seven purpose filters, and visible Health / Everyday / Productivity groups. Jamgyeol and BlueMoon retain their explicitly requested showcase positions and actual testing/development states. Earlier counts below are historical. See `PRODUCT.md` and `docs/media-collections.md` for the correction and its stated interpretation.

Verified against local project evidence on 2026-09-13. This document is maintainer context, not public installation guidance.

## Registry and priority

`src/growing-projects.ts` is the combined registry for product introductions. It includes the original six entries and imports ten further introductions from `src/additional-projects.ts`. Together they hold the catalog copy, lifecycle status, detail URL, screenshots, and KO/EN/JA detail copy. Vite entry points and detail routing are derived from it. `src/apps.ts` merges this registry with the original apps, promotes the featured IDs, then assigns display numbers automatically.

The order starts with Dohwaji, Ssak Memo, DayMirror, and RUN POST and ends with TimeRoots and Ringtone. Search and lifecycle filtering never sort the registry. Main and full catalog share the same controls and filtering function. RUN POST was renamed by the owner on 2026-09-15; its `hiho-run` ID, detail URL, and asset paths are retained for existing links.

To add an app: verify its current name, icon and availability in the native project; add one registry entry and its assets; create `apps/<slug>/index.html` with matching Korean metadata and canonical URL; run `npm test`; verify narrow and wide browser layouts. Do not label an internal TestFlight build as a publicly installable release. Update lifecycle status and add a public destination only when verified.

## Evidence and assets

Paths below are relative to the folder containing the source projects. Icons are copied byte-for-byte from the current native asset catalogs; SHA-256 checks live in `tests/static-build.test.mjs`. Screenshots retain their entire frame and original pixel dimensions, encoded to WebP by `scripts/prepare-growing-screens.py` (Pillow required). No screenshot content was drawn, retouched, or generated for these pages.

| Introduction | Evidence | Icon source | Published visual |
| --- | --- | --- | --- |
| 세어봐 / CountLens | `counter/README.md`, app naming/localization and TestFlight records | `counter/ObjectCounter/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon.png` | `counter/docs/evidence/design-refresh-final/actual-import-five-objects.png` — actual result UI using a test photograph, not an accuracy claim |
| Duo Studio | `duo studio/README.md`, `docs/AppStoreDescription.md`, internal TestFlight evidence | `duo studio/DuoStudio/Resources/Assets.xcassets/AppIcon.appiconset/icon.png` | `duo studio/artifacts/studio-final.png`, `artifacts/ipad-editor-reopened.png` — actual iPad template and editor captures |
| ArchiveInk | `picture-draw/README.md`, `Config/App.xcconfig`, editor generation options | `picture-draw/ArchiveInk/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon.png` | `picture-draw/artifacts/field-notes-final/street-bicycle/card.png` — generated development output, explicitly not a screenshot |
| RUN POST | `hihorun/README.md`, `docs/TESTFLIGHT.md` build 5 | `hihorun/RunningPhoto/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon.png` | `hihorun/artifacts/stats-placement.png` — real editor UI with explicitly labelled sample workout data |
| DayMirror | `planudid/README.md`, implementation status and iOS/Mac TestFlight evidence | `planudid/App/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png` | `planudid/artifacts/ux/routine-filled.png` — actual development UI with example activity blocks |
| TimeJourney | `TimeJourney/README.md`, prototype status and missing production media | None finalized | Text-based explanatory boarding-pass diagram, explicitly not app UI. The only available capture was a simulator boot screen and was rejected. |

Internal testing: CountLens, Duo Studio, RUN POST, DayMirror. Development: ArchiveInk, TimeJourney. The original eight apps retain the owner's established live status.

## Claims that must remain qualified

- CountLens counts supported objects; a line-crossing event is not a unique person. Detection must be reviewed.
- Duo Studio's folding is an in-app/export effect, not a system fold or automatic wallpaper installation.
- ArchiveInk has separate on-device and online generation. Online generation sends the selected photo to an external inference service. On-device use requires a model download.
- RUN POST imports completed Health workouts; it does not track a live GPS run. The displayed workout is a sample.
- DayMirror cross-device synchronization remains under real-device validation.
- TimeJourney app restriction/release behavior is not yet verified on physical hardware. Do not promise it as a working blocker.

No App Store Connect management links, tester identifiers, credentials, or private contact information are published.

## 2026-10-05 additions

The collection now contains 24 products: nine live, eight testing, and seven in development. Existing featured products and the final TimeRoots/Ringtone pair keep their positions. The existing introduction layout is extended with full-width desktop captures and a labelled workflow diagram for products without approved UI captures. Unfinalized icons use product-name initials with an accessible “icon pending” label; TimeJourney retains its established TJ placeholder.

| Product / detail slug | Verified evidence | Icon source | Published capture |
| --- | --- | --- | --- |
| Beauty Touch / `beauty-touch` | `beautyUp/README.md`, `docs/TESTFLIGHT_0.2.0_BUILD17.md` | `beautyUp/BeautyUp/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon.png` | `beautyUp/artifacts/beauty-touch-build14-home.png` — development home with synthetic portrait fixtures |
| BlueMoon / `bluemoon` | `BlueMoon/README.md`, `package.json` | `BlueMoon/apps/desktop/app-icon.png` | `BlueMoon/docs/artifacts/editorial-character.png` — browser preview, sample novel; separate storage from native app |
| Namu Note / `namu-note` | `hwinote/README.md`, `package.json` | `hwinote/apps/windows/icon.png` | `hwinote/artifacts/hwinote-native.png` — real Windows app, test note |
| Drawing Ground / `drawing-ground` | `drawing ground/README.md`, `docs/testflight-release.md` | `drawing ground/App/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon.png` | `drawing ground/artifacts/ui-redesign/ipad-final.png` — real iPad development UI, test drawing |
| Pretty Speech / `pretty-speech` | `keyboard/README.md`, `docs/BUILD5_PERSONA_REWRITE.md`, `docs/HYPERCLOVA_NATIVE_INTEGRATION.md` | `keyboard/MainApp/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon.png` | Labelled workflow, not app UI |
| Jamgyeol / `jamgyeol` | `Sleep/Docs/implementation-status.md`, `Resources/Info.plist` | `Sleep/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png` | `Sleep/artifacts/store-v2/2-journal.png` — real development UI, sample sleep data |
| deepPlayer / `deepplayer` | `deepPlayer/README.md` | `deepPlayer/assets/deepplayer.png` | Labelled workflow, not app UI |
| HUNTLOG / `huntlog` | `gameTimer/mapleStory/README.md`, `package.json` | None finalized for this directory | Labelled workflow, not app UI |
| ai-ocr / `ai-ocr` | `ai-ocr/README.md`, `app/main.py` | None finalized | Labelled processing workflow |
| AutoTrade / `autotrade` | `autoTrade/README.md`, `pyproject.toml` | None finalized | Labelled paper-research workflow |

`scripts/prepare-additional-assets.py` copies icons byte-for-byte and converts entire captures to WebP without cropping or retouching. `scripts/generate-additional-pages.mjs` regenerates independent HTML entries from the same Korean registry copy, including canonical, Open Graph, and Twitter metadata. Unknown product versions are omitted rather than invented.

Pretty Speech's latest verified build uses a bundled HyperCLOVA model; the older README's Foundation Models description is superseded by its build/integration records. Namu Note's physical iPad-to-Windows sync and Drawing Ground's physical Pencil experience remain under validation. Jamgyeol is not a diagnostic product; overnight recording, alarms, and snoring accuracy remain unverified on physical hardware. ai-ocr sends pages needing vision transcription to an external model API. AutoTrade currently runs public-data research and paper trading, without verified real-account/order integration. No public download URL has been verified for these ten additions.

Empty or infrastructure-only folders, maintenance tools, duplicate worktrees, and the third-party Coucou analysis checkout are excluded from the product directory.

## 2026-10-08 presentation update

BlueMoon is featured independently on the homepage and app register, with a dedicated introduction at its existing `/apps/bluemoon/` path. It remains a Windows development build. The latest native README confirms optional account/manual-sync code, while live server connection, email, web deployment, production multi-device checks and full release validation remain. No public download was added.

The botanical concept is removed from the homepage and reserved for `/collections/productivity/`: Ssak Memo, Namu Note, Drawing Ground, and TimeFlower. This editorial grouping does not change the 24-product registry, its ordering, purpose categories, lifecycle labels, or individual links. Source media and interaction details are recorded in `docs/bluemoon-feature.md`.

## 2026-10-08 photo and recognition grouping

The home and app register separately group Beauty Touch (beautyUp) with Inkmile (internal ArchiveInk), and CountLens / 세어봐 with Spotter. Spotter is newly registered as testing, making 25 products: nine live, nine testing, seven in development. Existing products keep their relative order and lifecycle states. The Inkmile public name and current local-generation privacy copy are corrected while preserving its existing id/address. No public installation claim is added for Spotter. Source, asset provenance and verification are in `docs/media-collections.md`.
