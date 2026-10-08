# Link Flower

Hiorio가 직접 틔운 앱과 운영하는 콘텐츠를 소개하는 개인 작업 인덱스입니다.
서버나 데이터베이스 없이 GitHub Pages에서 배포됩니다.

## 페이지 구조

- `/`: BlueMoon 대표 소개, 생산성·사진·영상 인식 도구 모음, Hiorio 소개와 전체 작업 인덱스
- `/collections/productivity/`: 싹 메모·나무 노트·땅바닥·TimeFlower를 묶은 별도 생산성 도구 생태계
- `/apps/bluemoon/`: BlueMoon 전용 소개 — 집필·인물·플롯 개발 화면과 현재 공개 준비 상태
- `/apps/`: 앱과 서비스 21개, 검색·7개 쓰임 분류·진행 상태 필터 제공
- `/apps/spotter/`: Spotter 소개 — 기기 내 운동 동작 분석과 기록, 내부 테스트 상태 안내
- `/apps/dohwaji/`: NODE_01-A 도화지 제품 소개 — 공식 서비스 `https://dohwaji.app`
- `/apps/timeflower/`: NODE_01-C TimeFlower 제품 소개 — 운영 중인 공유 캘린더
- `/apps/daily-plank/`: NODE_01-D 매일 플랭크 제품 소개 — 운영 중인 5·7·10분 가이드 루틴
- `/apps/ssak-memo/`: NODE_01-F 싹 메모 제품 소개 — 원탭 캡처, 로컬 보관함, 날짜별 Markdown
- `/apps/leaf-message/`: NODE_01-G Leaf Message 제품 소개 — 감성 메시지와 장면으로 상대의 홈 화면 위젯 꾸미기, 운영 중
- `/apps/ringtone/`: 벨소리로 제품 소개 — 오디오 파일의 최대 30초 구간을 기기 안에서 편집하고 벨소리로 내보내기, 운영 중
- `/apps/beauty-touch/`, `/apps/drawing-ground/`, `/apps/pretty-speech/`, `/apps/jamgyeol/`: Beauty Touch, 땅바닥, 예쁘게 말하기, 잠결 — 테스트 중인 제품 소개
- `/apps/bluemoon/`, `/apps/namu-note/`: 블루문, 나무 노트 — 개발 중인 앱 소개
- `/horror/`: NODE_02 공포도파민 브랜드
- `/channels/`: NODE_02-A 공포도파민의 외부 채널 연결 페이지

해시 라우팅을 사용하지 않습니다. 각 경로는 독립 HTML 진입점을 가지므로 직접 접근과
새로고침이 모두 동작합니다.

브라우저 언어를 기준으로 한국어, 영어, 일본어를 자동 선택하며 헤더에서 직접 변경할 수
있습니다. 지원하지 않는 언어의 기본값은 한국어입니다.

## 로컬 실행

```bash
npm install
npm run dev
```

앱 목록의 제품은 `src/apps.ts`의 `productApps` 배열에서 관리합니다.
확장 제품의 소개는 `src/growing-projects.ts`와 `src/additional-projects.ts`에 등록하고, 빌드 경로와 상세 라우팅에서 함께 사용합니다. 추가 제품의 원본 자료와 공개 상태 확인 기준은 `GROWING_APPS.md`에 기록합니다.
메인 페이지와 앱 서비스 목록은 같은 배열 순서를 사용하며, TimeRoots와 벨소리로를 하단에 배치합니다.
BlueMoon 대표 소개 다음에 생산성·기록 7개, 사진 4개, 영상 인식 2개, 건강 2개, 생활·소통 3개 모음을 보여줍니다. 별도 식물 생태계 페이지는 원래 네 앱을 유지합니다. 홈과 앱 목록의 7개 쓰임 필터는 `src/catalog.ts`의 `catalogGroups`를 함께 사용합니다. Inkmile은 기존 `archive-ink` 식별자와 주소를 사용합니다.
개인용 또는 공개 사용 주소가 확인되지 않은 deepPlayer·HUNTLOG·ai-ocr·AutoTrade는 `src/product-visibility.ts`로 공개 목록·검색·상세 라우팅·정적 빌드에서 제외합니다. 로컬 원본 기록은 남깁니다. 나머지 21개 앱의 상대 순서·상태·기존 링크를 유지하며 테스트 중인 소개용 앱을 출시 제품으로 바꾸지 않습니다.
대표 영역과 화면 출처·검증 기준은 `docs/bluemoon-feature.md`에 기록합니다.
공포도파민 브랜드와 채널 데이터는 `src/nodes.ts`에서 관리합니다.
공포도파민 공개 여부는 `src/visibility.ts`의 `SHOW_HORROR_DOPAMINE` 값으로 관리합니다.

## 배포

`main` 브랜치에 push하면 `.github/workflows/deploy-pages.yml`이 정적 파일을 빌드해
GitHub Pages에 배포합니다.
