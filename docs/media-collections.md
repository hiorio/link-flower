# Photo and visual-recognition pairs · 2026-10-08

The home and `/apps/` now group **Beauty Touch + Inkmile** under photo tools, and **CountLens / 세어봐 + Spotter** under visual-recognition tools. The two pairs sit after the existing productivity collection. BlueMoon remains the featured service. Each entry opens its own introduction; no integration between the apps is implied. These are editorial navigation groups, independent of the existing purpose/status filters.

## Product names and evidence

- `beautyUp/README.md`: current public name Beauty Touch; original site entry, icon, links and testing state retained.
- `picture-draw/README.md`: current public name Inkmile; ArchiveInk is the internal project/scheme. Site id and `/apps/archive-ink/` remain stable. Current generation uses installed local SD 2.1, so old online-generation privacy copy was corrected in all three languages. Existing development status and output-image qualification preserved.
- `counter/README.md`: 세어봐 — 사진·영상 물체 카운터 / CountLens supports photo, camera, saved-video object detection and crossing counts. Existing entry and status retained. A crossing count is not a unique-person count.
- `Spotter/README.md` and `app.json`: iPhone workout journal, on-device pose analysis, repetition/set detection, experimental exercise classification, editable labels/counts, manual entries and optional read-only Apple Health import. Native camera processing needs a supported iPhone build. Local SQLite stores records. Normal capture saves/uploads no images; separately enabled internal equipment learning may save representative images locally.
- Spotter `docs/store/release-20261003.json` and `resubmission-20261006-receipt.json`: version 1.0.0 build44, internal testing and review submission evidence. No verified public installation URL added; the website describes testing, not a released application.

Spotter is the sole new catalog entry, making **25** products. Existing 24 products retain their relative order, lifecycle states and destinations. Familiar internal names remain searchable: Beauty Up / beautyUp, ArchiveInk / Inkmile, 물체카운터 / ObjectCounter, and 스포터 / Spotter.

## Assets and boundaries

`public/app-icons/spotter.png` is copied byte-identical from the native app's configured `assets/images/spotter-icon.png`. SHA256: `9702b27a282cd2b1871a6fef0fcc7714ebc67fa7b7b1732dae17a4e697e291d0`.

No new screenshot was synthesized or relabeled. Spotter's existing generic introduction uses a text feature-flow explanation explicitly qualified as neither a camera screen nor a recognition result. Native app repositories were only read. No backend, new dependency or deployment is included.

## Verification

Evidence lives in `.impeccable/review/media-groups-20261008/`: four routes, KO/EN/JA, 1280/390/320px; exact pair membership, 25 catalog entries, keyboard focus, touch link, familiar-name search, reload and explicit Spotter HTML entry. `npm test` builds the static entries and checks the existing 14-test suite with the new count, category and search expectations.
