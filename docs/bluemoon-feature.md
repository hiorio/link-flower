# BlueMoon flagship and productivity collection · 2026-10-08

## Confirmed presentation

BlueMoon is HIORIO's featured service. The home introduces it before the creator profile and full product registry; `/apps/` has a separate BlueMoon feature. `/apps/bluemoon/` now uses a dedicated writing-studio introduction rather than the generic developing-product layout.

The home no longer renders botanical artwork or flower-themed profile/future sections. Its Korean, English and Japanese metadata and social preview describe BlueMoon and the app collection. The existing botanical art lives on `/collections/productivity/`, an editorial collection of **Ssak Memo, Namu Note, Drawing Ground, and TimeFlower**. These remain four independent products; the collection does not promise automatic integration.

The 24-product registry, global ordering, lifecycle states, actual installation destinations, search, status/purpose filters, and other product pages are preserved. The collection is not an additional product entry.

## Product truth

Read-only evidence: `BlueMoon/README.md` (including 2026-10-07 account/device section), `BlueMoon/package.json`, and the existing verified registries in this repository.

BlueMoon remains a Windows **development** build, version 0.1.0. Local writing, characters/worldbuilding/plot, illustration management, export, snapshots and backup are implemented. Optional account and project-level manual sync **code** exists; live authentication, email, web deployment, production multi-device checks and full release validation remain. There is no verified public download URL. Calls to action open the local introduction/capture gallery or the existing app collection.

## Asset provenance

Paths in the source column are relative to the sibling project directory. All newly copied PNG files retain the entire original image, native dimensions, and bytes. No screenshot content was synthesized, cropped, retouched, or reconstructed.

| Site asset | Source | Meaning |
| --- | --- | --- |
| `public/app-icons/bluemoon.png` | `BlueMoon/apps/desktop/app-icon.png` | Existing selected blue-moon/white-cloud app icon; hash matches current source |
| `public/bluemoon/companion-body.png` | `BlueMoon/apps/desktop/public/mascot/bluemoon-body.png` | Existing transparent body for separate CSS eyes; copied unchanged |
| `public/product-shots/bluemoon/writing.png` | `BlueMoon/output/mascots/verification/workspace-1440.png` | 1440×960 browser development capture, sample novel, separate preview storage |
| `public/product-shots/bluemoon/plot.png` | `BlueMoon/docs/artifacts/editorial-plot.png` | 1280×720 browser development capture, sample plot |
| `public/product-shots/bluemoon/characters.webp` | `BlueMoon/docs/artifacts/editorial-character.png` | Previously published full-frame 960×720 preview encoding; unchanged in this task |

Screenshots retain explicit browser-development and example-project captions in KO/EN/JA. They are static captures, not a running application, personal records, or execution results. The native app repository was only read.

## Interaction and accessibility

The BlueMoon companion uses the original body with independent eyes. Pointer gaze is throttled, only active while visible, ignores touch movement, resets on backgrounding, and honors reduced motion. A native button supports touch, Enter and Space; one click smiles and three clicks within 1.4 seconds show a ticklish expression. A failed body asset falls back to the static operating icon. No manuscript, storage, editor or service calls are observed.

The writing/characters/plot viewer is an ARIA tablist with roving focus, Left/Right/Home/End navigation, explicit panel associations, source-image links, and image failure/retry recovery. Reduced motion disables mascot animation and gaze. Japanese uses normal Japanese line breaks; Korean preserves phrases where space permits. New controls retain visible focus and touch targets.

## Verification

Build/test logs, the scoped direction contract, before/final captures, and browser cases are under `.impeccable/review/bluemoon-feature-20261008/`. Browser coverage includes four routes, KO/EN/JA and desktop/mobile/narrow viewports, the scene tabs, focus, touch expressions, image failure/retry, explicit HTML entries, refresh, search, reduced motion, and the static companion fallback. Full-document captures load lazy images before capture; app-register captures target the newly inserted features, avoiding oversized legacy-page screenshot artifacts.
