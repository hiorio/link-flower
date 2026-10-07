# DayMirror product page

Updated 2026-09-27. The native project `C:/Projects/planudid` ships as Daymirror on the App Store; it is not a separate fifteenth product. Keep the existing `/apps/daymirror/` URL and catalog position after Dohwaji and Ssak Memo.

- Apple's public lookup (`id=6811468895`, country KR) returned version 1.3 on 2026-09-27. Mark this app live and link to the public store. Do not hardcode changing prices or describe it as free.
- `src/DayMirrorPage.tsx` supplies Korean, English, and Japanese editorial copy. Japanese explicitly identifies the English UI captures.
- Original icon: `planudid/App/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png`, SHA256 `fc176eac5ec32c8dbfbfa65f215d0bd8928144241f6930961597ddac750458ba`.
- Screens: `planudid/marketing/app-store/{ko,en-US}/raw/{iphone,ipad}`. These are actual simulator captures with fictional sample schedules, documented in the native project's `docs/scene-screenshots-20260924.md`. They are not recreated UI and contain no user's iCloud schedule.
- `scripts/prepare-daymirror-screens.py` applies the capture's orientation and encodes WebP without retouching UI. All screenshot sources remain unchanged.
- Native buttons switch time-of-day screenshots, monthly plan/actual captures, and themes. No extra runtime dependency; no continuous animation. Includes keyboard focus, touch-sized controls, and reduced-motion styling.
- Existing privacy/support documents have unrelated local edits and were not changed by this task.
