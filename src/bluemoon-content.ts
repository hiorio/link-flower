import { growingProjects } from "./growing-projects";
import type { Locale } from "./i18n";

export const blueMoonProject = growingProjects.find(({ app }) => app.id === "bluemoon")!;
export const blueMoonServiceUrl = "https://bluemoon.hiorio.com/";

export const blueMoonScenes = [
  { id: "writing", src: "product-shots/bluemoon/writing.png", width: 1440, height: 960 },
  { id: "characters", src: "product-shots/bluemoon/characters.webp", width: 960, height: 720 },
  { id: "plot", src: "product-shots/bluemoon/plot.png", width: 1280, height: 720 },
] as const;

export const blueMoonCopy = {
  ko: {
    homeTitle: "HIORIO | BlueMoon과 직접 만드는 앱·서비스",
    homeDescription: "소설 창작 스튜디오 BlueMoon을 중심으로 HIORIO가 직접 만드는 21개 앱과 서비스를 만나보세요. BlueMoon은 Windows 개발 버전입니다.",
    flagship: "HIORIO 대표 서비스", about: "BlueMoon 알아보기", service: "BlueMoon 서비스 열기", all: "모든 앱 보기", workshop: "작업실 살펴보기", back: "앱과 서비스",
    availability: "Windows 개발 버전 · 공개 설치 준비 중", capture: "개발 버전 브라우저 미리보기 · 예제 작품", captureNote: "실제 개발 화면을 캡처했습니다. 화면 속 원고와 인물은 예제이며, 개인 기록이나 웹에서 실행한 결과가 아닙니다.",
    companion: "블루문 친구를 눌러 표정 보기", hint: "달 친구를 톡 눌러보세요.", happy: "달 친구가 웃어요.", confused: "달 친구가 간지러워해요.",
    scenes: ["집필", "인물", "플롯"], sceneTitle: "원고를 쓰다가, 그 세계로.",
    sceneIntro: "글을 쓰는 자리와 설정을 정리하는 자리를 한 작품 안에서 오갑니다. 아래 버튼은 캡처 화면을 바꿉니다.",
    sceneDescriptions: ["회차와 장면을 정리하고 원고를 이어 씁니다. 분할 편집과 집중 모드로 지금 쓰는 문장에 머물 수 있어요.", "인물의 외형, 성격, 말투와 관계를 정리합니다. 설정을 원고의 문장과 연결해 다시 찾아볼 수 있어요.", "큰 이야기 흐름과 인물의 변화를 회차별 전개로 연결합니다. 계획과 진행 상태를 함께 살펴봐요."],
    open: "캡처 원본 보기", newWindow: "새 창에서 열기", imageError: "캡처를 불러오지 못했어요.", retry: "다시 불러오기",
    keepTitle: "다음 문장도, 내 원고에서.", keepIntro: "회원가입 없이 기기 안에서 집필합니다. 퇴고 전의 문장과 작품 전체를 보존하는 도구도 함께 갖췄어요.",
    keepItems: ["스냅샷의 문단별 차이를 비교하고 이전 버전으로 복원", "프로젝트 백업과 원고 내보내기", "현재 원고와 별도로 발행 당시의 원고·삽화 보존"],
    statusTitle: "지금의 BlueMoon", implemented: "구현된 기능", implementedBody: "Windows에서 로컬 집필·설정·삽화·출력 흐름을 구현했습니다. 선택적 계정과 작품별 수동 동기화 코드도 추가했습니다.",
    pending: "출시 전 확인 중", pendingBody: "실제 인증 서버·이메일 연결과 운영 환경의 다기기 검증은 남아 있습니다. 공개 다운로드 링크는 아직 준비 중입니다.",
    privacy: "원고와 기기 연결", privacyBody: "로컬 원고는 회원가입 없이 저장합니다. 계정 연결과 작품 전송은 선택 사항이며, 브라우저 미리보기는 Windows 앱과 별도의 저장소를 사용합니다.",
    ending: "쓰는 시간과, 세계를 만드는 시간.", endingBody: "한 작품 안에서 함께 이어가도록 만들고 있습니다.", makerPromise: "작지만 오래 쓰이는 앱을 만듭니다.", creator: "필요한 것을 만들고, 직접 써보며 다듬습니다.", next: "다음에도 쓸모 있는 작은 도구를.",
  },
  en: {
    homeTitle: "HIORIO | BlueMoon and independently made apps",
    homeDescription: "Meet BlueMoon, a novel-writing studio, and HIORIO's collection of 21 independently made apps and services. BlueMoon is a Windows development build.",
    flagship: "HIORIO's featured service", about: "Explore BlueMoon", service: "Open BlueMoon", all: "See all apps", workshop: "Explore the studio", back: "Apps & services",
    availability: "Windows development build · public download pending", capture: "Development browser preview · sample novel", captureNote: "Captured from the development interface. The manuscript and characters are examples, not personal records or results produced on this page.",
    companion: "Press the BlueMoon companion to see its expression", hint: "Give the little moon a tap.", happy: "The moon is smiling.", confused: "The moon is feeling ticklish.",
    scenes: ["Writing", "Characters", "Plot"], sceneTitle: "From the manuscript into its world.",
    sceneIntro: "Move between writing and worldbuilding within one project. The buttons below switch between captured screens.",
    sceneDescriptions: ["Organize chapters and scenes, then keep writing. Split editing and focus mode help you stay with the sentence at hand.", "Keep appearance, personality, voice, and relationships together. Connect character notes to manuscript passages for later reference.", "Connect the larger story and character arcs to developments across chapters. Keep plans and progress in view."],
    open: "View original capture", newWindow: "Opens in a new tab", imageError: "The capture could not be loaded.", retry: "Reload capture",
    keepTitle: "Your next sentence. Your manuscript.", keepIntro: "Write on your device without signing up. Preserve earlier revisions and back up the whole project along the way.",
    keepItems: ["Compare paragraph changes between snapshots and restore revisions", "Back up a project and export manuscripts", "Preserve publication copies and illustrations separately from the current draft"],
    statusTitle: "BlueMoon today", implemented: "Implemented", implementedBody: "Local writing, worldbuilding, illustration management, and export are implemented on Windows. Optional account and per-project manual sync code has also been added.",
    pending: "Before public release", pendingBody: "Live authentication, email, and multi-device validation in production remain. A public download is not available yet.",
    privacy: "Manuscripts and connected devices", privacyBody: "Local writing needs no account. Account connection and project transfers are optional. The browser preview uses storage separate from the Windows app.",
    ending: "Time to write. Room to build a world.", endingBody: "Being made to keep both within one project.", makerPromise: "Small apps, made to stay useful.", creator: "I make what I need, use it, and keep refining it.", next: "More small tools for everyday use.",
  },
  ja: {
    homeTitle: "HIORIO | BlueMoonと、自らつくるアプリ・サービス",
    homeDescription: "小説制作スタジオBlueMoonを中心に、HIORIOがつくる21のアプリとサービスをご紹介。BlueMoonはWindows開発版です。",
    flagship: "HIORIOの代表サービス", about: "BlueMoonを詳しく見る", service: "BlueMoonを開く", all: "すべてのアプリを見る", workshop: "作業室を見てみる", back: "アプリとサービス",
    availability: "Windows開発版 · 一般公開の準備中", capture: "開発版ブラウザプレビュー · サンプル作品", captureNote: "実際の開発画面のキャプチャです。原稿や人物はサンプルであり、個人の記録やこのページで実行した結果ではありません。",
    companion: "BlueMoonの仲間を押して表情を見る", hint: "月の仲間をタップしてみてください。", happy: "月の仲間が笑っています。", confused: "月の仲間がくすぐったがっています。",
    scenes: ["執筆", "人物", "プロット"], sceneTitle: "原稿から、その世界へ。",
    sceneIntro: "一つの作品の中で、執筆と設定づくりを行き来します。下のボタンはキャプチャ画面を切り替えます。",
    sceneDescriptions: ["章や場面を整理し、原稿を書き続けます。分割編集と集中モードで、今の一文に向き合えます。", "外見・性格・話し方・関係をまとめ、設定を原稿の文章につないで見返せます。", "大きな物語と人物の変化を章ごとの展開につなぎ、計画と進行状況を確認できます。"],
    open: "キャプチャ原本を見る", newWindow: "新しいタブで開く", imageError: "キャプチャを読み込めませんでした。", retry: "再読み込み",
    keepTitle: "次の一文も、自分の原稿で。", keepIntro: "登録せず、端末内で執筆できます。以前の文章や作品全体を保管するための道具も備えています。",
    keepItems: ["スナップショットの段落差分を比較し、以前の版を復元", "作品のバックアップと原稿の書き出し", "現在の原稿とは別に、公開時の原稿と挿絵を保管"],
    statusTitle: "現在のBlueMoon", implemented: "実装済み", implementedBody: "Windowsでローカル執筆・設定・挿絵・出力を実装。任意のアカウントと作品ごとの手動同期コードも追加しました。",
    pending: "公開前の確認事項", pendingBody: "実際の認証サーバー・メールの接続と、運用環境での複数端末検証は未完了です。一般公開のダウンロードは準備中です。",
    privacy: "原稿と端末の接続", privacyBody: "ローカル保存は登録不要。アカウント接続と作品転送は任意です。ブラウザプレビューとWindowsアプリの保存領域は別です。",
    ending: "書く時間と、世界をつくる時間。", endingBody: "一つの作品の中で続けられるようにつくっています。", makerPromise: "小さくても、長く役立つアプリを。", creator: "必要なものをつくり、自分で使いながら磨いています。", next: "日々に役立つ、小さな道具をこれからも。",
  },
} satisfies Record<Locale, { [key: string]: string | string[] }>;
