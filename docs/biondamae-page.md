# 비온다매 /apps/biondamae/

Scope: Link Flower 내부 소개 페이지. Mode: Persuade. 사용자가 이번에 만든 외부 앱의 로컬 소개 디자인을 내부 페이지에 적용하도록 지정했다. 외부 운영 서비스, 다른 제품과 전역 디자인은 변경하지 않는다.

## Direction contract

THESIS: 바뀌기 전 예보와 같은 시각의 관측을 비교하는 앱이라는 점을 직접 선택하는 장면으로 설명한다. 범용 기능 카드가 아니라 이미 사용자가 지정한 비교 체험을 옮긴다.

OWN-WORLD: 기존 비온다매의 밝은 하늘색 바탕, 파란 예보 점선, 초록 관측 실선, 원본 구름 캐릭터를 유지한다. Link Flower의 Slate 헤더와 다국어 탐색을 연결한다.

STORY: 비교 예시를 조작하고 → 개발 계기에 공감하고 → 실제 화면을 보고 → 운영 서비스로 이동한다. 설명용 수치는 실제 기록과 구별한다.

FIRST VIEWPORT: 왼쪽에 ‘비 온다매. 그래서, 기록합니다.’와 서비스 이동, 오른쪽에 기존 날짜·계열·시각 선택 비교 장면. 모바일에서는 제목 다음에 체험이 이어진다.

FORM: 사용자 지정된 기존 구현의 이식. 새 시각 방향이나 seed 선택 없음. React와 SVG, 네이티브 라디오 선택으로 의존성 추가 없이 같은 상호작용을 보존한다.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Content / asset provenance

- 개발 계기와 제목은 사용자가 제공하고 다듬은 문구를 보존한다.
- 고정 가상 데이터는 WeatherForecast의 로컬 커밋 `492878bcddd67bc7e1b6ea732948bab996c29067`의 `client/src/pages/about-comparison-data.ts`와 동일하다. 실제 API는 호출하지 않는다.
- 원본 앱 화면 4장은 같은 저장소의 `client/src/assets/about/`에서 무변형 복사한다. 540×960 세 장, 통계 1200×1920 한 장. 촬영 당시 수치이며 현재 실시간 기록이 아니다.
- 캐릭터는 Link Flower에 이미 있는 `public/app-icons/biondamae.png`를 사용한다. 새 이미지 생성 없음.
- Arc UI 검토 출처와 이전 작업 경과는 `biondamae-integration.md`에 있다. 이번 이식에서 Arc 패키지를 설치하지 않는다.

## Implementation evidence — 2026-10-05

이번 결과는 기존 제품 세계 안의 일반 확장이다. 사용자가 지정한 비온다매 비교 체험을 Link Flower 내부 경로로 이식했으며, 새 전역 시각 체계나 새 seed를 만들지 않았다. 위 FINISH의 디자인 문서화는 기존 `DESIGN.md`를 전역 기준으로 보존하고 이 문서에 페이지 단위 구현 근거를 추가하는 것으로 적용한다. 다른 작업의 `PRODUCT.md`, `DESIGN.md`는 수정하지 않았고 `.impeccable/design.json`도 생성하지 않았다.

- `src/BiondamaePage.tsx`는 공통 `SiteHeader`, 앱 목록 복귀, 한국어·영어·일본어를 연결한다. `src/App.tsx`는 `/apps/biondamae/`와 `/apps/biondamae/index.html`을 해석하고 언어별 제목·설명을 적용한다. `apps/biondamae/index.html`과 `vite.config.ts`가 독립 정적 진입점을 제공한다.
- `src/apps.ts`의 `detailPath`는 `apps/biondamae/`다. 소개 링크는 `appIntroductionHref`를 통해 사이트 base path를 보존하며, 날씨 실행 CTA는 등록된 `https://web-dashboard-production-a81f.up.railway.app/`로 연결한다. 내부 소개와 외부 날씨 서비스의 역할을 구분한다.
- `src/biondamae.css`의 페이지 범위 스타일은 밝은 하늘색 hero (`#f1f8fc`), 흰 비교 표면, 파란 예보 점선 (`#137caa`), 청록 관측 실선 (`#147967`)을 유지한다. 공통 탐색과 비교 순서 구간에는 Link Flower의 Slate (`#22333b`)와 Soft white (`#f2f4f3`)를 사용한다. 원본 구름 아이콘을 판정 옆과 제품 탐색에 재사용한다.
- 제목과 본문은 기존 CJK 산세리프 계열을 사용한다. 넓은 화면의 제목·비교 2열은 900px 이하에서 세로로 이어지고, 앱 화면 선택은 600px 이하에서 2×2로 바뀐다. 실제 캡처는 `height:auto`로 원본 비율을 보존하고 원본 파일을 여는 링크를 제공한다.
- 날짜·계열·앱 화면은 이름이 있는 네이티브 라디오 그룹이다. 기본 방향키 동작에 Home/End를 보완했고, 시각 선택에는 네이티브 슬라이더와 선택 시각 설명을 제공한다. 판정은 상태 영역으로 알리고, 그림으로 표시한 차트 외에 7개 시각의 데이터 표를 제공한다. 포커스 표시와 감소된 모션 설정을 지원한다.
- 비교 데이터는 2026년 9월 1–3일 서울을 가정한 고정 예시다. 06:00–18:00의 동일한 7개 시각, 18–30°C 고정 축으로 예보와 관측을 맞춘다. 발표 시각은 전날 18:00으로 별도 표기한다. 강수 여부는 텍스트로 분리하며 예보 기온·관측 기온과 혼합하지 않는다. 이 페이지는 기상 API를 호출하거나 기록을 저장하지 않는다.

## Shipping raster inventory

출처 저장소는 로컬 `.biondamae-comparison/`에 있는 `hiorio/WeatherForecast`, 확인한 HEAD는 `492878bcddd67bc7e1b6ea732948bab996c29067`이다. 해당 커밋에 원본 앱 화면 4장과 `client/src/pages/about.tsx`, `client/src/pages/about-comparison-data.ts`가 추적되어 있고, 문서 검토 시 해당 경로의 로컬 변경은 없었다. 아래 화면 파일은 `client/src/assets/about/`에서 `public/product-shots/biondamae/`로 같은 파일명으로 복사했으며, 원본과 배포 자산의 SHA-256이 각각 일치한다. 리사이즈·재인코딩·이미지 생성은 하지 않았다.

| 파일 | 원본 크기 | 바이트 | 원본·복사본 SHA-256 |
| --- | --- | ---: | --- |
| `current-home.png` | 540×960 | 327694 | `7A8485D05B8AB4783F7283EF8DBF8688747C3390D34FAFE62F37124576F45670` |
| `day-detail.png` | 540×960 | 217701 | `30148083ECB090C901B920C2B92F47C8C2807DE6488902FF0DB01FFF58CB4D64` |
| `provider-compare.png` | 540×960 | 293461 | `0C7CC5C6B1B60B6608EE27CDC2C087F43F9E924C14FD7DF126238566F44163F4` |
| `statistics.png` | 1200×1920 | 141464 | `BEF61983F94DD769E5BF01124277242563F64FB1C9F85AC05CA4EB934CDCD842` |

`statistics.png`는 원본부터 확장자가 `.png`인 JPEG/JFIF 파일이다. 디코더로 1200×1920 크기를 확인했고, 원본 보존 범위에 따라 파일명과 바이트를 그대로 유지했다. 나머지 세 화면은 PNG다. 화면 수치의 촬영일은 이 파일들만으로 확정하지 않으며, 페이지에서도 촬영 시점의 실제 앱 화면으로만 설명한다.

구름 캐릭터의 직접 출처는 기존 Link Flower 파일 `public/app-icons/biondamae.png`다. 1024×1024 PNG, 755697바이트, SHA-256 `B30C8EAB930B18F2D2169F105B17C7CA925BDCC978FC9CF496965AECD9D0D1A8`이다. 기존 `DESIGN.md`는 이를 운영 앱 `apps/mobile/assets/biondamae-icon.png`와 연결하지만, 이번 이식은 이미 있는 Link Flower 자산을 재사용했고 상위 원본을 새로 가져오거나 수정하지 않았다.

## Verification evidence and limits

문서화 인계 시점에 구현 담당자가 프로덕션 빌드와 테스트 14개 통과를 확인했다. 범위 지정 디자인 검사 결과는 `[]`였다. `tests/biondamae-links.test.mjs`는 내부 소개/외부 실행 연결, base path, 예시 데이터의 시각 정렬과 세 가지 강수 판정, 독립 HTML 및 원본 화면 파일의 정적 빌드 포함을 검사한다. 문서화 담당자는 테스트를 중복 실행하지 않고 해당 테스트와 구현 소스를 대조했다. 이후 아래 최종 리뷰 수정에 대한 재검증 결과는 별도 완료 기록으로 확정한다.

구현 담당자의 브라우저 확인 기록은 날짜·계열 전환, 시각 슬라이더, 방향키/Home/End, 데이터 표 7행, 한국어·영어·일본어, 320·390·639·1280px 너비에서 가로 넘침 없음, 실제 캡처 비율 유지, 콘솔 오류 없음이다. 앱 목록의 실제 소개 링크는 `/apps/biondamae/`, 실행 링크는 외부 서비스 루트로 확인했다. 이는 기록된 브라우저 확인 범위이며, 모든 보조 기술·브라우저 조합의 접근성 검증을 뜻하지 않는다.

문서화 담당자는 다음 저장된 구간별 화면 10장을 직접 열어 현재 CSS 및 페이지 구조와 대조했다. 저장 위치는 `.impeccable/review/biondamae/`다.

| 화면 범위 | 확인한 파일 |
| --- | --- |
| 데스크톱 제목·비교 | `desktop-hero.png` |
| 개발 계기 | `desktop-origin.png` |
| 실제 앱 화면 및 통계 선택 상태 | `desktop-features.png`, `desktop-statistics.png` |
| 비교 순서·마지막 CTA·푸터 | `desktop-flow.png` |
| 모바일 제목·비교·포커스 | `mobile-hero.png`, `mobile-comparison.png` |
| 모바일 기능 선택·비교 순서 | `mobile-features.png`, `mobile-flow.png` |
| 639px 너비 | `user-639.png` |

이 검토는 구간별 캡처 검토다. 과거 전체 페이지 캡처 시도인 `desktop.png`, `mobile.png`는 유효한 증거에서 제외했다. 전체 페이지 스크린샷 검증이나 모든 언어·화면 폭 조합의 캡처 검증을 주장하지 않는다. 별도 리뷰의 최종 판정은 이 문서화 기록과 구분한다.

## Existing context drift left unchanged

루트 `DESIGN.md`에는 2026-08 검수 당시 비온다매 외부 `/about`의 약 9,400px 길이와 TimeRoots 상세 페이지 부재가 여전히 기록되어 있다. 현재 내부 경로와 구현 상태를 나타내는 설명으로 읽어서는 안 된다. `PRODUCT.md`에는 다른 작업의 TimeRoots 요청이 포함되어 있고 `.impeccable/design.json`은 없다. 이 항목들은 기존 문서 상태로 보고만 했으며, 이번 페이지 이식에서 전역 문서를 갱신하거나 포맷을 전환하지 않았다.

이번 문서화는 이 파일에 근거를 추가하는 작업만 수행했다. 페이지 소스, 자산, 의존성, 외부 서비스와 배포 상태는 변경하지 않았다.

## Final verification — 2026-10-05

- 별도 검토에서 지적한 마무리 문구의 eyebrow 배치와 Unicode 화살표 두 항목을 수정했다. 질문 문구는 제목 아래로 옮겨 보존했고, 링크 네 곳은 같은 선 굵기의 `LinkArrow` SVG를 사용한다.
- 수정 후 `desktop-hero.png`, `desktop-flow.png`, `mobile-hero.png`를 갱신하고 `mobile-closing.png`를 추가했다. 이 최종 캡처를 기반으로 검토자가 두 항목 모두 resolved, disposition `ship`으로 판정했다. 이는 두 지적 사항의 해결 판정이며 새 전체 재감사를 의미하지 않는다.
- 최종 소스에서 `npm test`의 프로덕션 빌드와 14개 테스트가 모두 통과했다. 공용 파일의 범위 한정 `git diff --check`도 통과했다. 디자인 검사는 앞선 한 번의 `[]` 결과를 유지하고 중복 실행하지 않았다.
- 메인과 앱 목록의 실제 링크, `/apps/biondamae/`와 `/apps/biondamae/index.html` 직접 접근을 브라우저에서 확인했다. 미리보기는 `http://127.0.0.1:4181/apps/biondamae/`다.
- 외부 WeatherForecast 저장소는 이번 이식 중 변경하지 않았고, 운영 배포·커밋·푸시는 하지 않았다. 다른 작업의 미완료 변경은 보존했다.

## Final review changes

별도 리뷰에서 지적한 두 가지를 구현 담당자가 반영했다. 마지막 CTA의 질문 문장을 제목 아래로 옮겼고, 링크의 문자 화살표를 공통 18px SVG `LinkArrow`로 교체했다. 문서화 담당자는 해당 JSX와 CSS 변경을 확인했다. 위 저장된 화면은 이 두 수정 전의 구간 캡처이므로 최종 화살표 모양이나 마지막 CTA 문장 순서의 증거로 사용하지 않는다. 문서화 인계 시점에는 수정 후 테스트가 진행 중이며, 최종 리뷰 판정은 구현 담당자가 별도로 기록한다.
