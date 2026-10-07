# 비온다매 소개와 외부 서비스 연결

확인일: 2026-10-05

## 현재 위치

- link-flower의 `src/apps.ts`에 `biondamae`로 등록되어 있다.
- 루트 링크 허브와 `/apps/#biondamae`에서 같은 제품 데이터를 사용한다.
- 전용 내부 소개 경로는 `/apps/biondamae/`다. 사용자의 범위 정정에 따라 `src/BiondamaePage.tsx`에 이번 비교 체험 디자인을 이식했다. 외부 소개 원본은 별도 저장소 `hiorio/WeatherForecast`의 `client/src/pages/about.tsx`이며 외부 운영 주소는 `https://web-dashboard-production-a81f.up.railway.app/about`이다.
- 기존 웹 실행 주소 `https://weather-forecast-production-0aac.up.railway.app/`는 200 응답이지만 화면이 아닌 `biondamae-api` 상태 JSON이다. 사용자 링크는 HTML을 제공하는 `https://web-dashboard-production-a81f.up.railway.app/`로 수정했다. API 자체의 주소는 바꾸지 않았다.
- `detailPath`와 `appIntroductionHref`로 내부 소개를 연결한다. 실행 링크는 외부 날씨 화면을 유지한다. 다른 앱의 경로와 GitHub Pages base path는 그대로 유지한다.

## Link Flower 이식 (2026-10-05)

- 이번 요청에서는 외부 서비스 코드를 수정하거나 배포하지 않는다. 이전 외부 저장소의 로컬 작업은 그대로 보존한다.
- 공통 헤더, 한국어·영어·일본어, 앱 목록 이동을 연결한다. 날짜, 계열, 시각 선택은 같은 가상 예시로 동작한다.
- 설치 의존성 없이 React·SVG 차트와 네이티브 라디오 그룹을 사용한다. 방향키, Home/End, 시각 슬라이더와 데이터 표를 제공한다.
- 앱 화면 4장은 원본 비율 그대로 표시하며 원본 파일을 크게 열 수 있다. 자산 출처와 페이지 방향은 `biondamae-page.md`에 기록한다.
- 아래는 앞선 외부 소개 작업의 구현 경과다. 두 소개 페이지는 독립적으로 배포된다.

## 외부 소개 페이지 구현 범위

- 첫 장면을 날짜·표시 정보·시각을 선택하는 비교 체험으로 구성한다.
- 예보와 관측은 동일한 시각/°C 축과 고정 범위 18–30°C에서 비교한다. 비 예보와 실제 강수 여부는 별도 텍스트로 표시하며, 확률과 관측량을 같은 선으로 혼용하지 않는다.
- 2026년 9월 1–3일 서울이라는 설정의 고정 가상 예시다. 실제 관측·정확도 자료가 아니라는 문구를 화면에 명시한다. 실제 날씨 API를 호출하거나 기록하지 않는다.
- 전날 예보 발표 시각과 비교 대상 시각을 구분한다. 날짜를 바꿀 때 시각 선택은 유지한다.
- 기존 구름 캐릭터 파일 `/icons/icon-192.png`를 재사용한다. 앱 캡처와 개발 계기, 하단 내용은 보존한다.
- 서비스 로직, 수집기, 데이터베이스, 모바일 앱은 수정하지 않는다.

## Arc UI 검토

- [Line chart](https://uiarc.dev/components/line-chart): 복수 계열, 점선 구분, 교차선 선택 정보, 키보드 및 데이터 표 패턴을 검토했다.
- [Segmented control](https://uiarc.dev/components/segmented-control): 단일 선택, 현재 선택 상태, 방향키/Home/End, 좁은 화면 처리를 검토했다.
- [설치 요구사항](https://uiarc.dev/docs/installation)은 React 19와 Motion을 기준으로 한다. 외부 운영 앱은 React 18이며 Recharts와 Radix가 이미 설치되어 있다. 운영 앱 업그레이드를 이번 소개 작업에 끼워 넣지 않고 기존 구성요소로 패턴을 구현했다. Arc UI 컴포넌트를 설치했다고 표시하지 않는다.
- Impeccable은 기존 페이지에 한정한 개선 범위와 대비/키보드 검증에, Emil 디자인 기준은 즉시 반응하는 선택과 불필요한 차트 애니메이션 제거에 적용했다.
