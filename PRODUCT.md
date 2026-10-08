# Link Flower / HIORIO

## Confirmed scope and audience
This is HIORIO's personal collection of independently made and operated apps, services, content, and future work. The creator, not the collection name Link Flower, leads the main page. Visitors browse products, understand their purpose, and follow their genuine installation or support links.

The user has requested readable typography, real operating app icons, mobile usability, and room for the collection to grow. Existing service order is intentional. Do not reorder unrelated products as part of a detail-page task.

## Platform and source of truth
Web: React and Vite, static multi-page build, with Korean, English and Japanese copy. Product registry `src/apps.ts` and growing-project registries own catalog links and ordering. `DESIGN.md` describes the incumbent site design; product-specific detail pages can extend it without replacing the global system.

## TimeRoots request confirmed 2026-10-05
Create an independent introduction after inspecting actual project functions, screenshots and current links. Show daily records accumulating over weeks/months. Select fitting Activity Heatmap, Timeline or Chart references from arcui.dev; the user explicitly confirmed that source. Connect catalog, installation links and locale structure, and verify direct access and refresh.

TimeRoots is an actual-activity tracker, not a planned schedule or productivity score. It records locally, supports timelines and day/week/month analysis, and offers optional read-only calendar access and user-initiated exports. Evidence and screenshot provenance are in `docs/timeroots-page.md`. Illustrative chart data must be distinguished from actual application captures and personal records.

## TimeRoots request boundaries (prior scope)
This task extends one product page. It does not redesign other products, modify the native app, add a backend, deploy other sessions' work, or introduce unsupported product claims.

## BlueMoon and productivity collection request confirmed 2026-10-08
Make BlueMoon HIORIO's featured service, separate from and more prominent than the other apps. The home introduces BlueMoon first; the app register has a separate compact introduction, and `/apps/bluemoon/` has its own writing-studio page. Remove the flower concept from the home. Use BlueMoon's actual moon/cloud companion, not an unselected HIORIO mascot candidate.

Present Ssak Memo, Namu Note, Drawing Ground, and TimeFlower as a separate productivity-helper ecosystem at `/collections/productivity/`. Existing botanical artwork belongs to this collection. Each remains an independent app with its own functions, lifecycle state and existing introduction/install destinations; the grouping does not imply automatic integration or create an additional catalog product.

BlueMoon is a Windows development build, version 0.1.0, with no verified public download. Local writing, worldbuilding, illustration management, export, snapshots and backup are implemented. Optional account and project-level manual sync code exists; live authentication, email, web deployment, production multi-device checks and full release verification remain pending. Captures show the development browser interface with example content and explicit captions. Source and asset provenance are recorded in `docs/bluemoon-feature.md`.

### Current boundaries
This is a bounded extension and recomposition of the incumbent HIORIO Slate / Taupe site, not a global visual-system replacement. The public showcase now contains 21 products after excluding four personal/unverified-public-destination projects. Preserve the remaining products' relative order, lifecycle status, status/purpose filters, actual links, Korean/English/Japanese support, the common header, unrelated product pages and prior uncommitted work. Native app repositories are read-only evidence sources. The request does not authorize native-app changes, backend work, unsupported release or integration claims, or deployment of other sessions' work.

## Photo and visual-recognition groups request confirmed 2026-10-08

Group Beauty Touch, Inkmile, RUN POST and Duo Studio as photo tools, and CountLens / 세어봐 and Spotter as visual-recognition tools on the home and `/apps/`, after the productivity summary. These navigation sections link to each app's introduction; they do not add catalog products, imply integration or require independent collection routes. BlueMoon remains the featured service.

Beauty Touch remains the public name; Beauty Up / beautyUp is a searchable internal name. Inkmile is the current public name while `archive-ink` and `/apps/archive-ink/` remain its stable id and route. Its current generation uses installed local SD 2.1, so copy must not retain the old online-generation claim. Familiar names for CountLens and Spotter also remain searchable.

Spotter is the sole new catalog product: an iPhone workout journal, version 1.0.0, in testing with no verified public installation link. Its on-device pose analysis, editable repetitions and labels, manual entries and optional read-only Health import are evidenced; automatic exercise classification remains experimental. Normal capture does not save or upload images, while separately enabled internal equipment learning may save representative images locally. The introduction uses the original native icon and explicitly qualified explanatory flow, not a camera capture or recognition result. Evidence and verification are recorded in `docs/media-collections.md`.

## Complete purpose classification follow-up confirmed 2026-10-08

Classify every public catalog product once by its existing purpose. `src/catalog.ts` owns the seven memberships in `catalogGroups`; `src/MediaCollections.tsx` reads photo, vision, health and everyday memberships directly. Home and `/apps/` share the purpose filters with the existing search and lifecycle filters. The 21 products retain their relative registry order, statuses, names, icons, links and Korean/English/Japanese product copy.

| Purpose | Products |
| --- | --- |
| Productivity and notes (7) | Ssak Memo, Namu Note, Drawing Ground, TimeFlower, DayMirror, TimeRoots, TimeJourney |
| Photos and editing (4) | Beauty Touch, Inkmile, RUN POST, Duo Studio |
| Visual recognition (2) | CountLens / 세어봐, Spotter |
| Writing and documents (2) | BlueMoon, Pretty Speech |
| Everyday and connections (3) | Dohwaji, Biondamae, Leaf Message |
| Health (2) | Daily Plank, Jamgyeol |
| Video and sound (1) | Ringtone |

The seven-product productivity purpose is distinct from the four-app botanical collection of Ssak Memo, Namu Note, Drawing Ground and TimeFlower. BlueMoon remains the flagship and is also discoverable under writing. RUN POST styles completed running records on photos; Duo Studio composes photos, text and shapes across two connected canvases.

This follow-up extends the incumbent Slate / Taupe navigation without changing design tokens or the visual system. Homepage redesign suggestions remain unapproved advice. Verification in `.impeccable/review/catalog-purpose-20261008/` covers 18 route/locale/viewport cases and 144 purpose states, with the build, 14 tests and targeted detector passing; source rationale is in `docs/media-collections.md`.

## Public showcase correction confirmed 2026-10-08

The user rejects personal local services in the public showcase and explicitly requests Health (Daily Plank and Jamgyeol), Everyday/connections and Productivity/records as visible groups. The user explicitly includes Jamgyeol despite its testing status. Interpretation communicated after clarification was offered: keep the previously requested showcase apps and flagship, exclude deepPlayer, HUNTLOG, ai-ocr and AutoTrade whose public-use destinations are unverified. HUNTLOG's current README calls it public alpha; that does not verify a deployment address. Do not equate local processing with private use or invent release claims.

`src/product-visibility.ts` excludes the four from the exported growing registry, public catalog/search, routing and Vite static entries while preserving local source records. The empty research filter disappears. The productivity summary now displays all seven purpose members and explicitly links the separate four-app botanical collection. Health and Everyday use the incumbent native link-list pattern. The dedicated botanical page, original app repositories and product facts are unchanged. Current verification is recorded under `.impeccable/review/public-collections-20261008/`.
