---
name: HIORIO
description: HIORIO's creator entrance and independent software directory, led by the approved organic H and cobalt identity.
colors:
  cobalt: '#2455e6'
  warm-white: '#faf8f2'
  ink: '#141414'
  muted: '#555650'
  rule: '#d1d0c8'
  registry: '#eeede6'
  control-rule: '#b9b9b2'
  row-rule: '#c8c8c0'
  white: '#fff'
  on-cobalt-muted: '#e4eaff'
  action-ink: '#1645ce'
  hover-wash: '#e9edf9'
  closing-black: '#111'
  footer-muted: '#bfbfb9'
typography:
  display:
    fontFamily: '"HIORIO Sans", "Noto Sans JP", sans-serif'
    fontSize: clamp(32px, 4.5vw, 66px)
    fontWeight: 850
    lineHeight: 1.2
    letterSpacing: -.035em
  headline:
    fontFamily: '"HIORIO Sans", "Noto Sans JP", sans-serif'
    fontSize: clamp(29px, 3.35vw, 50px)
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: -.035em
  feature-headline:
    fontFamily: '"HIORIO Sans", "Noto Sans JP", sans-serif'
    fontSize: clamp(32px, 3.3vw, 52px)
    fontWeight: 800
    lineHeight: 1.28
    letterSpacing: -.035em
  title:
    fontFamily: '"HIORIO Sans", "Noto Sans JP", sans-serif'
    fontSize: 21px
    fontWeight: 750
    lineHeight: 1.35
    letterSpacing: -.035em
  body:
    fontFamily: '"HIORIO Sans", "Noto Sans JP", sans-serif'
    fontSize: 15px
    lineHeight: 1.7
  feature-body:
    fontFamily: '"HIORIO Sans", "Noto Sans JP", sans-serif'
    fontSize: 15px
    lineHeight: 1.85
  row-body:
    fontFamily: '"HIORIO Sans", "Noto Sans JP", sans-serif'
    fontSize: 14px
    lineHeight: 1.65
  label:
    fontFamily: '"HIORIO Sans", sans-serif'
    fontSize: 12px
    fontWeight: 650
    lineHeight: 1.5
  landing-display:
    fontFamily: '"HIORIO Sans", "Noto Sans JP", sans-serif'
    fontSize: clamp(38px, 4.6vw, 72px)
    fontWeight: 850
    lineHeight: 1.18
    letterSpacing: -.035em
  landing-headline:
    fontFamily: '"HIORIO Sans", "Noto Sans JP", sans-serif'
    fontSize: clamp(30px, 3vw, 44px)
    fontWeight: 800
    lineHeight: 1.35
    letterSpacing: -.035em
  landing-future-headline:
    fontFamily: '"HIORIO Sans", "Noto Sans JP", sans-serif'
    fontSize: clamp(30px, 3.3vw, 48px)
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: -.035em
  landing-title:
    fontFamily: '"HIORIO Sans", "Noto Sans JP", sans-serif'
    fontSize: clamp(24px, 2.3vw, 34px)
    fontWeight: 750
    lineHeight: 1.35
    letterSpacing: -.035em
  landing-lead:
    fontFamily: '"HIORIO Sans", "Noto Sans JP", sans-serif'
    fontSize: 16px
    lineHeight: 1.8
  landing-close:
    fontFamily: '"HIORIO Sans", "Noto Sans JP", sans-serif'
    fontSize: clamp(28px, 3vw, 42px)
    fontWeight: 800
    lineHeight: 1.35
    letterSpacing: -.035em
rounded:
  square: '0'
  capture: 5px
  app-icon: 12px
spacing:
  home-gutter: clamp(22px, 4.5vw, 72px)
  control-gap: 5px
  compact-gap: 12px
  row-gap: 17px
  section-gap: 40px
  collection-gap: 60px
  landing-column-gap: clamp(32px, 6vw, 96px)
  landing-section-top: 64px
  landing-section-bottom: 72px
  landing-mobile-gap: 24px
components:
  button-primary:
    backgroundColor: '{colors.white}'
    textColor: '{colors.action-ink}'
    rounded: '{rounded.square}'
    padding: 13px 22px
  button-primary-hover:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.white}'
  landing-button-primary:
    backgroundColor: '{colors.cobalt}'
    textColor: '{colors.white}'
    rounded: '{rounded.square}'
    padding: 13px 20px
  landing-button-primary-hover:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.white}'
  search-field:
    backgroundColor: '{colors.warm-white}'
    textColor: '{colors.ink}'
    rounded: '{rounded.square}'
    height: 58px
  filter:
    backgroundColor: transparent
    textColor: '{colors.muted}'
    rounded: '{rounded.square}'
    padding: 9px 13px
  filter-selected:
    backgroundColor: '{colors.cobalt}'
    textColor: '{colors.white}'
    rounded: '{rounded.square}'
    padding: 9px 13px
  navigation:
    backgroundColor: '{colors.warm-white}'
    textColor: '{colors.ink}'
  product-row:
    backgroundColor: transparent
    textColor: '{colors.ink}'
    padding: 24px 0
  preview-trigger:
    backgroundColor: transparent
    textColor: '{colors.muted}'
    padding: 6px 0
---

# Design System: HIORIO

## Overview

**Creative North Star: "The Independent Software Catalogue"**

HIORIO's approved organic H anchors a bold, open catalogue: saturated cobalt, warm white, black ink and weighty type. The two primary logo treatments are cobalt artwork on a light background and black artwork on cobalt; monochrome treatments serve utility uses. Generous space and strong fields give the identity scale while actual app icons and captures keep the work recognisable.

This record captures the identity approved on 2026-10-08 and its authorized route recomposition on 2026-10-09. The complete former homepage now lives at `/apps/`; `/` is the brand and creator entrance. The frontmatter is normative for those two scoped surfaces and their controls; `landing-*` roles describe the new entrance only. The shared HIORIO mark, favicon and social preview carry the approved identity beyond them. Individual product pages and the shared preview panel retain their independent visual systems. The north-star name describes the established catalogue world rather than introducing a new brand decision.

**Key Characteristics:**

- Original raster logo artwork framed by SVG viewports.
- Self-hosted variable Pretendard, large headings and square cobalt control states.
- Flat warm surfaces, thin rules, open product rows and a dark closing field.
- Actual product evidence, Korean/English/Japanese support and reduced-motion behaviour.

Authority: PRODUCT.md records approval; .impeccable/surfaces/src-linkhub-tsx.md owns the preserved directory composition and .impeccable/surfaces/src-hioriolanding-tsx.md owns the creator entrance. Sources: src/hiorio-home.css, src/hiorio-landing.css, src/HiorioLanding.tsx, src/HiorioLogo.tsx, src/HiorioIntro.tsx, src/LinkHub.tsx and shared header/footer in src/App.tsx. This remains code-led with inherited FORM seed 055631f4 and no page comp or identity roll. These are shipped declarations, not a proposed site-wide migration.

## Colors

The creator entrance and app directory pair saturated cobalt with warm neutrals. Primitive values live in the frontmatter.

### Primary

- **Cobalt:** foreground artwork for the light-background logo and background for the black-artwork logo; also the flagship field, links, active language/filter states, selection and scrollbar accent.
- **Action ink:** deeper blue text on the white flagship CTA.
- **On-cobalt muted:** supporting copy and captions on the blue field.

### Neutral

- **Warm white / ink / muted:** page, primary text and supporting copy.
- **Registry:** the complete index's inset field.
- **Rule / control rule / row rule:** thin section, input and registry separators.
- **White / hover wash:** inverse text and CTA surface / inactive language hover.
- **Closing black / footer muted:** closing statement and footer.

**The Scoped Identity Rule.** Apply these identity tokens to the creator entrance and app directory. Preserve the independent visual language of product pages and the shared preview panel unless their redesign is approved.

## Typography

**Display and body font:** self-hosted Pretendard Variable, declared as HIORIO Sans, with Noto Sans JP and generic sans-serif fallbacks. The local font supports weights 100–900 and font-display: swap. Delivery and license live in public/fonts/PretendardVariable.woff2 and the adjacent OFL file. Other surfaces retain their existing fonts.

The hierarchy is fluid, heavy and direct, with balanced headings and negative tracking. Display is the registry heading; headline is the maker promise; feature-headline is BlueMoon's h2; title is the registry product name. Body describes the maker note; feature-body uses a relaxed line-height and maximum 47ch measure. Row-body and label serve descriptions and controls. The oversized masthead is raster artwork and has no font-size token.

At 720px and below, the maker headline is 30px, registry heading 34px, product titles 20px and row descriptions 13px. The flagship heading becomes clamp(29px, 7.6vw, 44px) / 1.3. Maker promise measure is 16ch on desktop and 18ch on mobile. Japanese uses normal word breaking; Korean keeps phrases together with emergency wrapping.

The entrance's scoped landing roles use the same family and inherited heading tracking. Landing display is the real h1, landing headline serves creator/ecosystem headings, landing future headline serves BlueMoon, landing title serves ecosystem rows, and landing close serves the black closing note. Lead copy has a 45ch measure; creator copy reuses feature-body size/leading with a 65ch measure. At 1050px the landing h1 becomes clamp(36px, 4.6vw, 52px); at 720px it becomes clamp(34px, 8.8vw, 58px) / 1.25. Mobile lead is 15px; creator, future and ecosystem body copy are 14px. Future body uses 16px / 1.85 on desktop; ecosystem body uses 15px / 1.8. Japanese entrance and directory h1 declarations are scoped under the shared shell so the legacy global language rule cannot replace this hierarchy. These intentional role and responsive steps are documented, not a new global type scale.

**The Raster Wordmark Rule.** The HIORIO masthead is approved artwork, not a font treatment. Preserve a real text h1 on each surface and the section/product headings beneath it.

## Layout

The creator entrance and directory are capped at 1680px with the fluid home-gutter token. At `/apps/`, a compact header leads into the preserved masthead, cobalt flagship field, open purpose collections, searchable registry and black closing field. This composition belongs to the directory rather than every product page. The root entrance has no full catalog or search.

Desktop BlueMoon uses 0.88fr / 1.12fr columns with a fluid 30–80px gap. Collection groups and registry rows use two columns; registry column gap is 40px. Collection gaps are 60px vertically and 72px horizontally. Major desktop section padding ranges roughly from 48px to 78px.

At 1050px the directory flagship uses equal columns and tighter gaps. At 720px the flagship, collection groups and registry become single-column; the maker note stacks. On both root and directory, text navigation remains visible alongside brand and language controls, with a full-width control row and 20px tab gap. This supersedes the earlier mobile-hidden-tab rule. Gutters settle at 22px and major directory vertical section spacing becomes roughly 34–44px. Search input height changes from 58px to 52px; filters wrap; product icons change from 54px to 48px. The shared preview has an independent 640px image-height breakpoint.

The entrance hero uses 1.2fr / .8fr columns; creator and future sections use .9fr / 1.1fr, with the landing-column-gap rhythm. Hero and creator use the landing-section-top/bottom padding; future uses 58px vertical padding and ecosystems 72px. Ecosystem rows use .9fr / 1.1fr / 112px columns, a 32px gap and 28px vertical padding. The shared end column keeps descriptions aligned across arrow links and pending text. Below 720px sections stack, creator/future gaps use landing-mobile-gap, and ecosystem descriptions occupy a second row. Hero spacing becomes 38px/40px, creator 40px/44px, future 38px and ecosystems 44px. Pending personal/media placements are text, not disabled controls.

## Elevation & Depth

The homepage is flat by default: surface colour, strong fields and thin rules create hierarchy. The flagship's real screenshot alone receives a soft shadow (0 20px 48px #09257440). The inherited preview panel retains its overlay shadow (0 12px 36px #15252c40), a scoped legacy exception.

The masthead settles once over 16px in 700ms with cubic-bezier(.16,1,.3,1), only when reduced motion is not requested. Content starts visible. The inherited BlueMoon CTA colour transition is 160ms, companion response 460ms and preview opacity arrival 120ms. These controls respect reduced motion. There is no new continual homepage decoration.

## Shapes

Square controls and rectangular fields set off the heavy organic H. Its long oval left opening and round right opening belong to the approved art. Native app icons retain rounded squares using the app-icon radius; the flagship capture uses the smaller capture radius. Registry rows stay open rather than becoming enclosing cards.

## Components

### Brand artwork and provenance

HiorioLogo frames approved 1254 × 1254 rasters with SVG viewports without tracing the mark. Cobalt symbol crop: 253 153 752 730; wordmark crop: 203 916 850 182. The component holds tone-specific symbol/wordmark crops and a full-square lockup viewport (0 0 1254 1254). The header symbol and masthead use cobalt artwork on the light surface. The closing section uses the black-on-cobalt full lockup, including the H, HIORIO wordmark and blue square; its surrounding field remains closing black with warm-white copy. The small footer mark retains the white monochrome treatment. Decorative SVGs are hidden from assistive technology while surrounding brand links and the masthead carry accessible names.

The primary sources are docs/design/hiorio-logo-20261008-colors-01/03-cobalt.png and adjacent 04-black-on-cobalt.png; approved monochrome alternatives are 01-black.png and 02-white.png. The original generation prompts remain in that directory's prompts.json. Shipping assets are public/branding/hiorio-cobalt.webp, hiorio-black-on-cobalt.webp, hiorio-black.webp, hiorio-white.webp and hiorio-social.png. WebPs preserve the approved artwork and each has a .webp.json provenance sidecar; the PNG retains embedded provenance. The favicon embeds approved cobalt artwork. These are AI-generated, user-approved identity assets, distinct from actual product screenshots/icons.

The original four shipping brand rasters passed the existing provenance scan. The finish review accepted desktop/mobile with no material fixes. .impeccable/review/hiorio-home/checks.json records nine ko/en/ja × 1440/390/320px checks without overflow or errors. The dual-logo extension adds the black-on-cobalt asset and its provenance sidecar. Its implementation handoff reports the build and 14 tests passed, with no overflow or errors at 1440/390/320px; hero and closing captures are in .impeccable/review/dual-logo/. The extension finish review returned ship with no material findings or required fixes. This documentation pass compares the implementation and supplied review evidence without claiming a new UI run.

### Buttons, links and focus

The flagship CTA is white with action-blue text, a white 1px border, square corners and at least 50px height. Hover switches to ink black and white. Mobile padding becomes 11px 17px and type 13px. Ordinary links are cobalt with offset underlines; flagship text links remain white.

The entrance action is square cobalt/white with 13px 20px padding and at least 48px height; hover uses ink/white. The app-directory row actions and shared navigation links/buttons have at least 44px targets. Live ecosystem rows are full native links; pending media and personal connections have no interactive affordance or destination.

Homepage links/buttons generally use a 3px current-colour focus ring at 5px offset. Product primary links ring the entire row in cobalt at 4px offset. Search uses a 2px selected-colour wrapper ring at 3px offset; inherited controls retain more specific focus rules where applicable.

### Search and filters

A square warm-white field uses the control-rule border, 18px left inset, search icon and cobalt caret. Purpose and lifecycle filters remain native buttons with pressed states; selected controls are cobalt/white. Unselected purpose chips retain a fine border. Hover exposes the control border. Reset, removal and empty states preserve their existing functions.

### Navigation

The desktop header is at least 92px tall with a thin bottom rule, 38px symbol and 17px/850 label. Navigation is 14px/650 with cobalt active text and underline on hover. Language controls are square and at least 44px tall, with a cobalt active state. Mobile header is at least 76px tall, symbol 30px and label 14px. Other page shells retain their existing geometry around the shared updated mark.

On the creator entrance and directory, mobile home/app tabs remain visible at 13px and share a full-width control row with the language switcher; this supersedes the previous hidden-tab treatment.

### Product rows and quick preview

Open rows combine actual icon, title, description, destination and arrow. Only non-live products show an explicit lifecycle label. A stretched native primary link covers the row; about and preview controls remain separately accessible. Hover makes the title cobalt. Preserve the distinction between website, web demo, App Store and introduction destinations.

The screenshot preview portal still uses the shared light Slate/Taupe system: Noto Sans KR, rounded 14px panel, 340px maximum width bounded by the viewport and image containment. It has not migrated to the homepage palette or font.

### Preserved product and legacy surface records

**Scope:** the material below preserves unrelated product guidance and dated surface history from the previous record. The earlier Slate/Taupe `/apps/` register and old home/app-register composition claims are superseded by the 2026-10-09 move of the complete cobalt homepage to `/apps/`. Slate/Taupe remains scoped to the product/detail-page family and shared preview where implemented. Historical references below to the dark home map, previous BlueMoon home layout, compact register feature or inherited home/register colours are not current guidance for either root or directory. Product-specific guidance stays scoped to named surfaces; lifecycle truth comes from src/apps.ts.

#### 보존된 제품 공통 원칙

- HIORIO는 제작자이자 최상위 브랜드, LINK FLOWER는 작업을 연결하는 노드 체계다.
- 제품별 개성은 대표 사용 장면, 강조색, 표면 질감과 하나의 목적 있는 모션에서 만든다.
- 기존 제품의 연결 장치는 헤더, 노드 코드, 바깥 프레임, 1px 규격선, 포커스 링과 페이지 전환이다.
- 모션은 opacity와 transform/translate 중심이며 prefers-reduced-motion에서 정지한다.
- 기존 제품의 3D는 최대 2–4도 포인터 반응형 2.5D로 제한하고 탐색을 늦추지 않는다.
- 실제 앱 아이콘과 다국어 소개, /apps/와 제품별 상세 경로 및 실제 목적지를 유지한다.

#### 팔레트 01 — Olive / Earth · 보조 후보

원본: https://coolors.co/palette/606c38-283618-fefae0-dda15e-bc6c25

| 용도 후보 | 색상 | 설명 |
| --- | --- | --- |
| Olive | `#606C38` | 보조색, 테두리, 비활성 요소 |
| Dark green | `#283618` | 기본 배경 또는 진한 표면 |
| Warm ivory | `#FEFAE0` | 본문과 제목의 밝은 색 |
| Sand | `#DDA15E` | 보조 강조색 |
| Burnt orange | `#BC6C25` | 주요 강조색과 상호작용 상태 |

```css
:root {
  --palette-olive: #606c38;
  --palette-dark-green: #283618;
  --palette-warm-ivory: #fefae0;
  --palette-sand: #dda15e;
  --palette-burnt-orange: #bc6c25;
}
```

현재 사이트에는 아직 적용하지 않은 보조 후보 팔레트다.

#### 팔레트 02 — Slate / Taupe · 기존 앱 목록·상세 범위

원본: https://coolors.co/palette/a6a09a-22333b-f2f4f3-a9927d-5e503f

| 용도 후보 | 색상 | 설명 |
| --- | --- | --- |
| Warm gray | `#A6A09A` | 보조 텍스트와 비활성 요소 |
| Deep slate | `#22333B` | 기본 배경 또는 진한 표면 |
| Soft white | `#F2F4F3` | 본문과 제목의 밝은 색 |
| Taupe | `#A9927D` | 부드러운 보조 강조색 |
| Dark brown | `#5E503F` | 주요 강조색과 깊이 표현 |

```css
:root {
  --palette-warm-gray: #a6a09a;
  --palette-deep-slate: #22333b;
  --palette-soft-white: #f2f4f3;
  --palette-taupe: #a9927d;
  --palette-dark-brown: #5e503f;
}
```

이 팔레트는 기존 앱 목록·제품 상세의 보존 범위이며 새 홈에는 적용하지 않는다. 아래 제품별 기록에서 지정한 고유 강조색과 물성을 유지한다.


#### 2026-08 서비스 페이지 디자인 검수

공통 헤더와 노드 번호는 Link Flower의 연결 장치로 유지한다. 제품 상세 페이지의 레이아웃,
대표 비주얼, 배경 물성, 섹션 순서는 서비스의 실제 사용 장면에서 따로 설계한다.

| 페이지 | 유지할 고유 장치 | 다음 개선점 |
| --- | --- | --- |
| Link Flower (이전 홈 기록) | 2026-10-08 승인된 cobalt 홈으로 대체된 Slate 홈 구성 | 페이지 체계명은 푸터와 문서에서만 보조적으로 사용 |
| 앱 개발 | 실제 운영 아이콘, 버전, 플랫폼과 상태를 한눈에 비교하는 제품 레지스터 | 출시 상태가 바뀔 때 버전과 링크를 함께 갱신 |
| 도화지 | 손그림과 핀이 올라간 실제 지도 한 장 | 기능 카드 3개를 실제 모임 시나리오로 대체 검토 |
| TimeRoots | 시간 원형과 기록이 쌓이는 인상 | 상세 페이지가 없어 제품 증거가 부족하므로 다음 우선순위 |
| TimeFlower | 살구색 종이 달력, 겹쳐 쌓이는 일정, 일정 안의 대화 | 출시 링크와 최종 제품명 확정 후 CTA 갱신 |
| 매일 플랭크 | 큰 코발트 타이머, 원본 병아리 아이콘, 운동·휴식·기록의 흐름 | 현행 마스코트가 포함된 실제 출시 스크린샷 확보 후 예시 화면과 교차 검수 |
| 공포도파민 | 발견된 기록, 타임코드, 신호 화면 | 추상 레이더 대신 실제 대표 영상의 스틸을 증거로 사용 |
| 콘텐츠 채널 | 외부 출구가 명확한 단순 디렉터리 | 루트와 비슷한 노드 다이어그램을 줄이고 채널을 더 빨리 노출 |
| 비온다매 `/about` | 예보 ↔ 관측 보드, 분통 캐릭터, 구어체 판정 | 모바일 약 9,400px 길이를 줄이고 반복 설명을 압축 |
| 싹 메모 | 실제 보관함과 음성·타이핑 캡처 화면, 아이콘의 남색·새싹색·씨앗색 | App Store 공개 후 상태와 직접 설치 링크 갱신 |
| Leaf Message | 감성 메시지, 실제 iOS 위젯 미리보기, 배경과 도착 효과로 꾸미는 한 장면 | App Store 공개 후 상태와 직접 설치 링크 갱신 |

##### 앱 목록 운영 아이콘 기준

앱 목록의 아이콘은 페이지를 위해 다시 그리거나 CSS로 흉내 내지 않는다. 출시 앱은 현재 스토어
아트워크를, 개발 중 앱은 실제 빌드 설정이 가리키는 원본 파일을 사용한다.

| 앱 | 목록에 사용하는 기준 | 확인 버전 |
| --- | --- | --- |
| 도화지 | App Store에 등록된 현재 아트워크 | `1.2` |
| TimeRoots | App Store에 등록된 현재 아트워크 | `1.1` |
| TimeFlower | 최신 iPhone release build 6의 `assets/images/icon.png` (`codex/timeline-release`) | `1.0.0` |
| 매일 플랭크 | 앱 빌드 설정의 `src/assets/branding/icon.png` | `0.2.1` |
| 비온다매 | 운영 앱 설정의 `apps/mobile/assets/biondamae-icon.png` | `1.1.0` |
| 싹 메모 | iPhone release build 5의 `AppIcon.appiconset/AppIcon-1024.png` | `1.0` |
| Leaf Message | TestFlight Build 17의 `Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png` | `0.1.0 (17)` |

##### 페이지 추가 시 통과할 기준

1. 첫 화면에 실제 제품의 결과물 또는 작동 장면이 하나 있어야 한다.
2. 제품명을 다른 이름으로 바꿔도 자연스러운 카피는 다시 쓴다.
3. 다른 상세 페이지의 섹션 순서를 그대로 복사하지 않는다.
4. 한 페이지의 강한 시각 장치는 하나만 정하고 나머지는 이를 보조한다.
5. 데스크톱 1280px과 모바일 390px에서 가로 넘침이 없어야 한다.
6. 모바일 문서 높이가 6,500px을 크게 넘으면 중복 섹션을 먼저 줄인다.

##### 매일 플랭크 Page DNA

- 첫 화면의 주인공은 피트니스 사진이 아니라 실제 운동 중 보는 타이머다.
- `5 / 7 / 10분` 선택, 음성·휴식·진동 큐, 연속 기록을 하나의 운동 흐름으로 보여 준다.
- 마스코트는 장식용 캐릭터 카드가 아니라 사용자가 플랭크 중일 때 함께 자세를 취하는 코치로 사용한다.
- TimeFlower의 따뜻한 종이 질감과 달력/대화 구조를 재사용하지 않고, 밝은 훈련 보드와 코발트 진행 링을 기본 물성으로 삼는다.

###### 2026-09 소개 페이지 개선

- `오늘도, 5분만 같이.`를 중심으로 운동을 시작하기 쉬운 친근한 인상을 만든다. 실제 앱의 코발트 `#3B5BDB`, 흰 표면, 노란 병아리 아이콘과 강조선을 사용한다.
- 첫 화면의 타이머와 다음 동작은 기능을 재구성한 예시라고 표시한다. 이전 CSS 병아리를 없애고 `public/app-icons/daily-plank.png` 원본을 재사용한다. 오래된 앱 캡처는 현재 마스코트가 없고 동작 수도 달라 사용하지 않는다.
- 루틴 → 음성·휴식·진동 → 운동 기록 순서로 설명한다. 제작자의 첫 앱 이야기는 기능을 살펴본 뒤 읽을 수 있도록 하단에 배치한다.
- 실제 세션 소스 기준으로 5·7·10분은 **운동 시간**이며 준비·휴식·마무리가 추가됨을 명시한다. 마스코트의 성장은 완료한 운동일에 따른다고 설명한다.
- 주간 기록은 예시라고 표시하고 날짜를 고정하지 않는다. 모바일에서도 일주일의 일곱 요일을 한 줄로 보존하고 루틴은 압축된 세로 목록으로 전환한다.
- 한국어·영어·일본어를 유지한다. 움직임은 공통 스크롤 등장과 짧은 파형 등장으로 제한하고, 감소된 모션 설정에서는 멈춘다.
- 기능 확인 출처: `https://github.com/hiorio/Daily-Plank`의 `src/constants/theme.ts`, `src/data/sessions/plank5.ts`, `plank7.ts`, `plank10.ts`, `src/stores/mascotStore.ts`.

##### Leaf Message Page DNA

- 시각적 중심은 **상대에게 건네는 작은 풍경**. `너의 화면에, 내 마음 한 조각.`이라는 편지 같은 제목과 사진 풍경 속 위젯을 함께 둔다.
- `감성 메시지를 남기는 경험`과 `상대의 홈 화면 위젯을 꾸미는 경험`을 동등하게 다룬다. 웹에서 40자 메시지를 적고 꽃길·노을·비 배경을 선택하면 위젯 미리보기가 바뀐다. 실제 전송·저장은 하지 않으며 화면에도 이를 알린다.
- 페이지 제목은 CJK 명조 대체 글꼴이 있는 세리프, 위젯 안은 실제 앱에 가까운 시스템 산세리프를 사용한다. 밝은 종이색과 짙은 녹색, 공통 브랜드의 Slate·Taupe를 함께 쓴다.
- `public/leaf-message/*.webp`는 실제 앱의 `MessagePhotoBackgrounds.xcassets`에 있는 Meadow / SunsetTide / RainWindow 원본을 960px WebP로 최적화한 것이다. 제품 장면을 위해 새로 그린 가상의 배경이 아니다.
- Small/Medium/Large 갤러리는 앱 배경을 활용한 웹 예시로 표시하고, 실제 iOS 작성·미리보기 스크린샷은 펼쳐볼 수 있는 별도 영역에 원본 비율로 보존한다. 홈 화면 전체를 바꾸는 기능처럼 설명하지 않는다.
- 배경 전환과 다시 펼쳐보기는 유한한 짧은 모션만 사용한다. 감소된 모션 설정을 존중하고 입력 조합 중에는 한글·일본어를 잘라내지 않는다.
- 제품 디렉터리와 동일하게 `운영 중` 상태를 유지한다. 공개 설치 링크가 확인되기 전에는 설치 CTA를 만들지 않고, 꾸며보기로 연결한다.
- TimeFlower의 달력·이벤트 대화 구조는 재사용하지 않는다. 기능 카드나 세로 스크린샷을 반복하기보다 감성 문장 → 위젯 갤러리 → 실제 사용 흐름으로 구성한다.

##### 2026-10 BlueMoon 대표 소개와 생산성 도구 모음

기존 Slate / Taupe 시스템 확장 기록이다. 아래 홈 수치는 위의 새 홈 문서로 대체되며 앱 레지스터·독립 상세 수치는 해당 표면에 유지된다. 아래 값과 구성은 이 두 소개와 각 상세 페이지에 한정하며, 다른 제품의 고유 물성을 바꾸지 않는다.

- **BlueMoon 색상:** 공통 Slate 잉크 (`--bm-ink: #22333b`), 절제된 파랑 (`--bm-blue: #385c85`), 보조 본문 (`--bm-muted: #536472`), 밝은 종이 (`--bm-paper: #f6f6f0`), 규격선 (`--bm-line: #d8dfe3`)을 사용한다. 주요 링크의 hover는 `#294968`, 포커스는 `3px solid #477ab6`이며 offset은 본문 `5px`, 헤더 `4px`이다. 밝은 앱 레지스터의 축약 소개는 `#e8edf1` 표면을 사용한다.
- **생산성 모음 색상:** Slate 잉크 (`--prod-ink: #22333b`), 녹색 본문 (`--prod-muted: #536450`), 규격선 (`--prod-line: #d5ddd0`), 링크 녹색 (`--prod-green: #3d644a`), 페이지 종이 (`#f4f5ed`)를 사용한다. 포커스는 `3px solid #6c9274`, offset은 `4px`이다. 홈의 모음 안내는 기존 홈 토큰을, 앱 목록의 안내는 기존 레지스터 토큰을 상속한다.
- **타입 크기:** BlueMoon의 세리프 제목은 `clamp(30px, 3.3vw, 44px)`, weight `500`, line-height `1.45`이며, `720px` 이하에서는 `clamp(28px, 7.7vw, 38px)`, line-height `1.5`다. 본문은 `15px / 1.85`, 모바일 `14px`다. 모음 상세의 세리프 제목은 `clamp(32px, 4vw, 48px) / 1.45`, 모바일 `clamp(28px, 7.8vw, 36px)`이며, 제품 제목은 산세리프 `24px`, weight `550`이다. 한국어의 구절 단위 줄바꿈과 일본어의 일반 줄바꿈을 구분하고, 긴 링크는 줄바꿈한다.
- **홈과 앱 목록:** 홈의 BlueMoon 소개와 생산성 안내는 기존 격자 전체 너비를 차지한다. BlueMoon은 `0.85fr / 1.15fr`의 글·캡처 두 열, 간격 `38px`, 여백 `42px 38px`, 모서리 `16px`를 사용한다. `1000px` 이하에서는 균등 두 열, `720px` 이하에서는 단일 열과 여백 `28px 22px`로 전환한다. 앱 목록에서는 동반자·제품명·소개 링크를 묶은 모서리 `14px`의 축약 소개를 사용한다. 홈의 생산성·기록 안내에는 일곱 앱의 실제 아이콘 또는 기존 미확정 아이콘 표시를 사용한다.
- **독립 상세 표면:** BlueMoon 상세는 소개 → 집필·인물·플롯 캡처 전환 → 원고 보존 → 개발 현황 순서다. 생산성 모음은 소개 → 네 독립 앱의 기능·원본 미디어·상태·기존 상세 링크 순서이며, 제품 목록은 두 열에서 `720px` 이하 한 열로 전환한다. 두 페이지의 가로 여백은 `36px`, 모바일 `20px`다. 모음의 식물 비주얼은 데스크톱 `170px`, 모바일 `110px`로 제한한다.
- **형태와 깊이:** BlueMoon의 기본 버튼·캡처 프레임·장면 선택 탭은 `12px`, 원고 보존 표면은 `16px` 모서리를 사용한다. 대표 캡처의 부드러운 그림자 (`0 14px 30px #22333b20`) 외에는 종이색 면과 `1px` 구분선으로 깊이를 만든다. 생산성 모음의 캡처도 `12px` 모서리와 `object-fit: contain`으로 전체 장면을 보존한다.
- **상태와 동작:** BlueMoon 주요 버튼은 최소 높이 `48px`, 여백 `13px 20px`이며 파랑 바탕·흰 글자다. 장면 선택 탭은 선택 상태를 같은 파랑으로 표시하고, 방향키·Home·End로 이동한다. 원본 캡처 링크, 실패 상태와 다시 불러오기 동작을 유지한다. 기타 새 링크·언어 버튼은 최소 높이 `44px`다. 실제 BlueMoon 동반자는 `64px`의 원본 몸체와 독립 눈으로 구성하고, 누르면 웃음, 연속 세 번 누르면 간지럼 표정을 보인다. 짧은 반응은 `460ms cubic-bezier(.16,1,.3,1)`이며, 감소된 모션 설정에서는 애니메이션과 시선 이동을 멈춘다. 이미지 실패 시 실제 앱 아이콘으로 대체한다.
- **이 표면의 시각 경계:** 선택되지 않은 HIORIO 마스코트 후보를 채택하지 않는다. 식물 아트는 별도 생산성 모음에 두고, BlueMoon은 실제 달·구름 동반자와 예제임을 밝힌 개발 캡처를 사용한다. 모음의 자연 이름과 식물 비주얼은 네 앱을 소개하는 장치이며, 자동 연동이나 하나의 통합 앱을 시각적으로 암시하지 않는다.

##### 2026-10 사진·영상·화면 인식 탐색 그룹

기존 홈과 앱 레지스터의 국소 확장 기록이다. 아래 홈 색상·타입·배치는 위의 새 홈 문서로 대체되며 앱 레지스터 값은 유지된다. 사진 그룹은 Beauty Touch·Inkmile·RUN POST·Duo Studio의 네 링크, 영상 인식 그룹은 CountLens / 세어봐·Spotter의 두 링크, 건강 그룹은 매일 플랭크·잠결의 두 링크, 생활·소통 그룹은 도화지·비온다매·Leaf Message의 세 링크다. 네 그룹은 `src/catalog.ts`의 `catalogGroups`에서 쓰임 필터와 같은 소속을 가져온다. 각 앱의 원본 아이콘, 공개 이름, 현재 상태와 소개 문구를 사용하며, 링크는 기존 제품별 소개로 이동한다. BlueMoon 대표 소개를 유지한다. 생산성·기록 요약은 일곱 앱을 보여주며 별도의 네 식물 앱 모음으로 연결한다. 이번 확장은 기존 색상·타입·배치·상태 패턴을 그대로 사용한다.

- **색상과 표면:** 홈에서는 기존 홈의 본문·보조 본문·규격선·hover 표면을, 앱 레지스터에서는 기존 레지스터의 본문·보조 본문·규격선을 상속한다. 레지스터 링크의 hover 표면은 `#e5eae4`다. 그룹 자체에 별도 강조색이나 그림자를 추가하지 않고 `1px` 구분선으로 항목과 다음 영역을 나눈다.
- **배치와 타입:** 네 그룹은 균등한 두 열과 간격 `36px`을 사용한다. `720px` 이하에서는 한 열, 그룹 간격 `30px`로 전환한다. 그룹 제목은 `24px`, weight `550`, line-height `1.55`이며 모바일에서는 `22px`다. 앱 이름은 `17px`, weight `600`, line-height `1.5`이며 모바일에서는 `16px`다. 그룹 설명은 `14px / 1.85`, 앱 소개는 `13px / 1.7`이다. 한국어는 구절 단위 줄바꿈을, 일본어는 일반 줄바꿈과 긴 문자열의 줄바꿈을 사용한다.
- **링크와 포커스:** 아이콘·앱 이름·상태·소개·화살표가 하나의 네이티브 링크를 이룬다. 링크의 최소 높이는 `100px`, 여백은 `16px 8px`, 모서리는 `12px`다. 모바일 여백은 `14px 4px`이며 아이콘은 `48px`에서 `40px`로 줄어든다. 컴포넌트의 기본 포커스선은 Taupe `3px solid #a9927d`, offset `4px`로 선언하며, 홈과 앱 레지스터의 공통 포커스 규칙이 우선할 때는 해당 표면의 대비색을 유지한다. 이 그룹에 추가 등장 애니메이션은 없다.
- **제품 표현:** 공개 이름 Beauty Touch와 Inkmile을 표시하며 내부 이름을 화면의 대표 이름으로 되돌리지 않는다. Spotter는 기존 일반 소개 형식을 사용하고, 설명용 흐름을 실제 카메라 화면이나 인식 결과처럼 보이게 만들지 않는다. 개인용·공개 주소 미확인 프로젝트 네 개는 공개 탐색에 표시하지 않는다. 잠결은 건강 모음에 포함하지만 기존 테스트 상태를 출시로 바꾸지 않는다. 이 국소 패턴을 다른 제품의 고유 페이지나 전역 디자인 토큰으로 확대하지 않는다.

## Do's and Don'ts

### Do:

- Do preserve the approved logo pixels and proportions.
- Do keep homepage tokens scoped to the documented surfaces.
- Do preserve actual icons, screenshot captions, lifecycle states and genuine destinations.
- Do retain visible content by default, keyboard focus and reduced-motion behaviour.
- Do preserve the product-specific records below.

### Don't:

- Don't redraw the logo with CSS or replacement glyphs.
- Don't apply legacy Slate/Taupe homepage rules to the new homepage.
- Don't recolour independent product experiences merely to match the homepage.
- Don't present example captures as production evidence or imply integration between independent apps.
- Don't hide links until the masthead animation finishes.
