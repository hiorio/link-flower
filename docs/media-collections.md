# Photo and visual-recognition groups · 2026-10-08

The home and `/apps/` now group **Beauty Touch + Inkmile + RUN POST + Duo Studio** under photo tools, and **CountLens / 세어봐 + Spotter + HUNTLOG** under video/screen-recognition tools. The two groups sit after the existing productivity collection. BlueMoon remains the featured service. Each entry opens its own introduction; no integration between the apps is implied. Group membership now shares `catalogGroups` with the purpose filters; the four-app botanical productivity collection remains a separate editorial collection.

## Product names and evidence

- `beautyUp/README.md`: current public name Beauty Touch; original site entry, icon, links and testing state retained.
- `picture-draw/README.md`: current public name Inkmile; ArchiveInk is the internal project/scheme. Site id and `/apps/archive-ink/` remain stable. Current generation uses installed local SD 2.1, so old online-generation privacy copy was corrected in all three languages. Existing development status and output-image qualification preserved.
- RUN POST (`hiho-run`) joins the photo group by the user’s follow-up request. It overlays completed running records on a chosen photo to create a poster; this does not add a catalog product or change its testing status, name or existing `/apps/hiho-run/` address.
- Duo Studio joins photos because it composes photos, text and shapes across two connected canvases. HUNTLOG joins screen recognition because it watches the visibility of an icon chosen by the user in a shared game screen; it is not described as general object detection or automatic game understanding. Their existing registry descriptions are the classification evidence.
- `counter/README.md`: 세어봐 — 사진·영상 물체 카운터 / CountLens supports photo, camera, saved-video object detection and crossing counts. Existing entry and status retained. A crossing count is not a unique-person count.
- `Spotter/README.md` and `app.json`: iPhone workout journal, on-device pose analysis, repetition/set detection, experimental exercise classification, editable labels/counts, manual entries and optional read-only Apple Health import. Native camera processing needs a supported iPhone build. Local SQLite stores records. Normal capture saves/uploads no images; separately enabled internal equipment learning may save representative images locally.
- Spotter `docs/store/release-20261003.json` and `resubmission-20261006-receipt.json`: version 1.0.0 build44, internal testing and review submission evidence. No verified public installation URL added; the website describes testing, not a released application.

Spotter is the sole new catalog entry, making **25** products. Existing 24 products retain their relative order, lifecycle states and destinations. Familiar internal names remain searchable: Beauty Up / beautyUp, ArchiveInk / Inkmile, 물체카운터 / ObjectCounter, and 스포터 / Spotter.

## Assets and boundaries

`public/app-icons/spotter.png` is copied byte-identical from the native app's configured `assets/images/spotter-icon.png`. SHA256: `9702b27a282cd2b1871a6fef0fcc7714ebc67fa7b7b1732dae17a4e697e291d0`.

No new screenshot was synthesized or relabeled. Spotter's existing generic introduction uses a text feature-flow explanation explicitly qualified as neither a camera screen nor a recognition result. Native app repositories were only read. No backend or new dependency is included.

## Complete purpose classification follow-up

Every product has one primary purpose based on its existing description. All 25 preserve registry order, lifecycle states, links and localized product copy. Both home and `/apps/` expose the eight purposes with the existing status/search controls. BlueMoon remains the flagship as well as being discoverable under writing; the botanical collection still contains only the four requested apps.

| Purpose | Products |
| --- | --- |
| Productivity and notes (7) | Ssak Memo, Namu Note, Drawing Ground, TimeFlower, DayMirror, TimeRoots, TimeJourney |
| Photos and editing (4) | Beauty Touch, Inkmile, RUN POST, Duo Studio |
| Video and screen recognition (3) | CountLens, Spotter, HUNTLOG |
| Writing and documents (3) | BlueMoon, Pretty Speech, ai-ocr |
| Everyday and connections (3) | Dohwaji, Biondamae, Leaf Message |
| Exercise and sleep (2) | Daily Plank, Jamgyeol |
| Video and sound (2) | deepPlayer, Ringtone |
| Data research (1) | AutoTrade |

AutoTrade is classified as research because the existing project is public-market-data research and paper simulation, not a public investment service. ai-ocr belongs with documents because its output is reviewable text, rather than a photo-editing result. RUN POST belongs with photos because it styles completed runs rather than tracking new exercise.

## Verification

Evidence lives in `.impeccable/review/media-groups-20261008/`: four routes, KO/EN/JA, 1280/390/320px; exact pair membership, 25 catalog entries, keyboard focus, touch link, familiar-name search, reload and explicit Spotter HTML entry. `npm test` builds the static entries and checks the existing 14-test suite with the new count, category and search expectations.

The classification follow-up evidence is in `.impeccable/review/catalog-purpose-20261008/`: 18 route/locale/viewport cases, 144 category states, combined search/status filtering, reset, keyboard focus and mobile touch. Current build and all 14 tests pass; the targeted detector returns no findings. Homepage redesign suggestions remain advice, not accepted or implemented changes.
