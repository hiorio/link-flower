import type { ProductApp } from "./apps";
import type { Locale } from "./i18n";
import { additionalProjects } from "./additional-projects";

type ProjectCopy = {
  headline: [string, string];
  featureDetails: [string, string, string];
  availability: string;
  privacy: string;
  mediaAlt: string;
  mediaCaption: string;
};

export type GrowingProject = {
  app: Omit<ProductApp, "order"> & { detailPath: string };
  layout: "phone" | "tablet" | "print" | "journey" | "desktop" | "workflow";
  media?: { src: string; width: number; height: number };
  secondaryMedia?: { src: string; width: number; height: number };
  copy: Record<Locale, ProjectCopy>;
};

// Public-facing facts checked against each native project on 2026-09-13.
// Internal TestFlight availability is not a public installation link.
export const growingProjects: GrowingProject[] = [
  {
    app: {
      id: "countlens", detailPath: "apps/countlens/", code: "FIND / COUNT / CHECK",
      icon: "app-icons/countlens.png", version: "0.1.0", platforms: ["iPhone · iOS 17+"], accent: "sky", status: "testing",
      content: {
        ko: { displayName: "세어봐", tagline: "사진과 영상 속 물체를 세고, 직접 확인해요", description: "사진·카메라·저장된 영상에서 지원하는 물체를 찾아 셉니다. 자동으로 찾은 결과를 눈으로 확인하고, 빠지거나 잘못 잡힌 항목은 직접 고칠 수 있어요.", features: ["사진·카메라·영상 물체 세기", "검출 결과 직접 수정", "선 통과 횟수와 PNG·CSV 저장"] },
        en: { displayName: "CountLens", tagline: "Count what is in the frame. Check it yourself.", description: "Find and count supported objects in photos, camera frames, and saved videos. Review the detections and correct anything missed or incorrectly included.", features: ["Count in photos, camera frames, and videos", "Correct detections by hand", "Line crossings and PNG / CSV export"] },
        ja: { displayName: "CountLens", tagline: "写真や動画の中を数えて、自分で確かめる", description: "写真・カメラ・保存した動画から対応する物体を見つけて数えます。検出結果を確認し、抜けや誤検出は手動で修正できます。", features: ["写真・カメラ・動画のカウント", "検出結果を手動で修正", "ライン通過回数とPNG・CSV保存"] },
      }, links: [],
    },
    layout: "phone",
    media: { src: "product-shots/countlens/result.webp", width: 1206, height: 2622 },
    copy: {
      ko: { headline: ["하나, 둘, 셋.", "사진에 맡겨봐요."], featureDetails: ["사진 한 장을 가져오거나 카메라로 확인해 보세요. 저장된 영상도 분석할 수 있고, 셀 물체의 종류를 골라 결과를 좁힐 수 있어요.", "자동 검출은 출발점이에요. 확대해서 확인하고, 빠진 물체를 추가하거나 잘못 포함된 항목과 분류를 수정할 수 있어요.", "영상에서는 정해 둔 선을 어느 방향으로 몇 번 지나갔는지 확인해요. 이 수치는 고유한 사람 수가 아닌 통과 횟수예요. 결과는 PNG와 CSV로 남길 수 있어요."], availability: "현재 내부 TestFlight 테스트 중입니다. 지원 대상 밖의 물체, 작은 물체나 가려진 장면은 놓칠 수 있어요. 정확한 수가 필요할 때는 반드시 결과를 직접 확인해 주세요.", privacy: "물체 검출은 기기 안에서 처리하며 추론 서버로 사진을 보내지 않아요. 가져오는 사진이 iCloud에 있다면 원본을 내려받는 데 네트워크가 쓰일 수 있어요.", mediaAlt: "세어봐의 실제 검출 화면. 테스트 사진 위에 다섯 개의 자동 검출 표시와 결과 확인 도구가 보인다.", mediaCaption: "실제 앱 화면 · 테스트 사진의 검출 결과" },
      en: { headline: ["One, two, three.", "Let the photo help."], featureDetails: ["Import a photo or inspect a camera frame. You can also analyze saved videos and filter the supported categories you want to count.", "Automatic detection is a starting point. Zoom in, add missed objects, and remove or reclassify incorrect detections.", "In a video, count crossings of a chosen line by direction. These are crossing events, not unique people. Keep the results as PNG or CSV."], availability: "Currently in internal TestFlight testing. Unsupported, small, or obscured objects may be missed. Always review the result when an accurate count matters.", privacy: "Detection runs on your device, without sending photos to an inference server. Importing an original stored in iCloud may use a network connection.", mediaAlt: "An actual CountLens result screen showing five detections on a test photograph, with review controls.", mediaCaption: "Actual app screen · detections on a test photograph" },
      ja: { headline: ["ひとつ、ふたつ。", "写真に手伝ってもらう。"], featureDetails: ["写真を取り込んだり、カメラで確認したり。保存した動画も分析でき、数えたい対応カテゴリに絞れます。", "自動検出は出発点です。拡大して確かめ、抜けた物体の追加や、誤検出の削除・分類の修正ができます。", "動画では指定した線を通過した回数を方向別に集計します。人数ではなく通過回数です。結果はPNGやCSVに保存できます。"], availability: "現在、内部TestFlightテスト中です。未対応の物体、小さい物体、隠れた物体は検出できない場合があります。正確な数が必要なときは、結果を必ず確認してください。", privacy: "検出は端末内で行い、推論サーバーに写真を送りません。iCloudにある原本の取り込みには通信が必要な場合があります。", mediaAlt: "テスト写真上に5件の検出結果と確認用の操作が表示されたCountLensの実際の画面。", mediaCaption: "実際のアプリ画面 · テスト写真の検出結果" },
    },
  },
  {
    app: {
      id: "duo-studio", detailPath: "apps/duo-studio/", code: "PAIR / COMPOSE / UNFOLD",
      icon: "app-icons/duo-studio.png", version: "1.0", platforms: ["iPhone", "iPad · iOS 18+"], accent: "cyan", status: "testing",
      content: {
        ko: { displayName: "Duo Studio", tagline: "한 장의 사진에서 이어지는 두 화면", description: "사진과 텍스트, 도형으로 서로 이어지는 두 캔버스를 꾸밉니다. 책과 창문 같은 템플릿으로 구성을 시작하고, 배경 이미지나 무음 영상으로 내보내세요.", features: ["연결된 두 캔버스", "템플릿과 접힘 미리 보기", "PNG·무음 MP4와 프로젝트 보관"] },
        en: { displayName: "Duo Studio", tagline: "One photo. Two connected canvases.", description: "Compose a connected pair with photos, text, and shapes. Start with a book or window template, then export background images or a silent presentation video.", features: ["Two connected canvases", "Templates and fold previews", "PNG, silent MP4, and saved projects"] },
        ja: { displayName: "Duo Studio", tagline: "一枚の写真から、つながる二つの画面へ", description: "写真・文字・図形でつながる二つのキャンバスをつくります。本や窓のテンプレートから始め、背景画像や無音動画に書き出せます。", features: ["つながる二つのキャンバス", "テンプレートと折りたたみプレビュー", "PNG・無音MP4とプロジェクト保存"] },
      }, links: [],
    },
    layout: "tablet",
    media: { src: "product-shots/duo-studio/studio.webp", width: 1668, height: 2420 },
    secondaryMedia: { src: "product-shots/duo-studio/editor.webp", width: 1668, height: 2420 },
    copy: {
      ko: { headline: ["두 화면 사이에", "나만의 장면을."], featureDetails: ["두 캔버스를 나란히 놓고 사진의 크기와 위치를 조절해요. 한 장면처럼 이어 붙이거나 각 화면에 다른 구성을 담을 수 있어요.", "책, 창문, 갤러리 같은 템플릿 위에 텍스트와 도형을 얹어 보세요. 아이콘과 위젯이 놓일 공간도 확인하며 배경을 만들어요.", "완성한 장면을 PNG나 무음 MP4로 내보내고 프로젝트를 다시 열어 이어서 편집해요. Duo Desk에서는 작품과 시계·타이머를 앱 안에 띄워 둘 수 있어요."], availability: "현재 내부 TestFlight 테스트 중입니다. 접힘 연출은 앱 안의 미리 보기와 내보낸 영상에 적용돼요. iPhone·iPad의 시스템 화면이 실제로 접히거나, 배경화면이 자동 적용되는 기능은 아닙니다.", privacy: "원본 사진을 바꾸지 않고 기기 안에서 편집해요. 프로젝트를 파일로 백업할 때는 원본 이미지도 함께 포함됩니다.", mediaAlt: "Duo Studio의 실제 iPad 화면. 홈의 템플릿 목록과 두 캔버스를 편집하는 화면.", mediaCaption: "실제 iPad 앱 화면 · 템플릿 선택과 캔버스 편집" },
      en: { headline: ["A little world", "between two screens."], featureDetails: ["Place two canvases side by side and adjust a photo's size and position. Let one scene flow between them or compose each one differently.", "Add text and shapes to book, window, or gallery templates. Check the safe areas for icons and widgets as you design a background.", "Export PNG or silent MP4, then reopen a saved project whenever you want. Duo Desk can display your artwork with a clock or timer while the app is open."], availability: "Currently in internal TestFlight testing. Folding is an in-app preview and exported-video effect. It does not make the system screen fold or automatically set a wallpaper.", privacy: "Editing takes place on your device without changing the original photo. A project backup includes its original images.", mediaAlt: "Actual Duo Studio iPad screens showing the template library and the paired-canvas editor.", mediaCaption: "Actual iPad app screens · templates and canvas editing" },
      ja: { headline: ["二つの画面の間に、", "自分だけの景色を。"], featureDetails: ["二つのキャンバスを並べ、写真のサイズと位置を調整。一つの景色としてつなげることも、それぞれ別の構成にすることもできます。", "本・窓・ギャラリーなどのテンプレートに文字や図形を追加。アイコンやウィジェットのための余白も確認できます。", "PNGや無音MP4に書き出し、保存したプロジェクトを開いて編集を再開。Duo Deskでは作品と時計・タイマーをアプリ内に表示できます。"], availability: "現在、内部TestFlightテスト中です。折りたたみはアプリ内のプレビューと書き出し動画の演出です。システム画面を実際に折りたたんだり、壁紙を自動設定したりする機能ではありません。", privacy: "原本を変更せず、端末内で写真を編集します。プロジェクトのファイルバックアップには原本画像も含まれます。", mediaAlt: "テンプレート一覧と二つのキャンバスの編集画面を示す、実際のDuo StudioのiPad画面。", mediaCaption: "実際のiPadアプリ画面 · テンプレート選択と編集" },
    },
  },
  {
    app: {
      id: "archive-ink", detailPath: "apps/archive-ink/", code: "PHOTO / INK / REMEMBER",
      icon: "app-icons/archive-ink.png", version: "0.4.0", platforms: ["iPhone · iOS 17+"], accent: "leaf", status: "development",
      content: {
        ko: { displayName: "Inkmile", tagline: "사진 한 장을, 잉크로 남긴 여행 기록으로", description: "사진에서 만든 잉크 스탬프와 원본 사진을 한 장의 종이에 담습니다. 장소와 짧은 메모, 종이와 잉크의 질감을 골라 나만의 필드 노트를 만들어요.", features: ["사진에서 잉크 스탬프로", "필드 노트와 여행 스탬프", "문구·종이·잉크 편집과 이미지 저장"] },
        en: { displayName: "Inkmile", tagline: "A photograph, remembered in ink", description: "Pair an ink stamp made from your photo with the original on a sheet of paper. Choose a place, a short caption, paper, and ink to make a personal field note.", features: ["From photo to ink stamp", "Field notes and travel stamps", "Edit captions, paper, and ink; export an image"] },
        ja: { displayName: "Inkmile", tagline: "一枚の写真を、インクで残す旅の記録に", description: "写真からつくったインクスタンプと原本を、一枚の紙に収めます。場所や短いメモ、紙とインクの質感を選び、自分だけのフィールドノートに。", features: ["写真からインクスタンプへ", "フィールドノートと旅のスタンプ", "文字・紙・インクの編集と画像保存"] },
      }, links: [],
    },
    layout: "print",
    media: { src: "product-shots/archive-ink/field-note.webp", width: 1500, height: 2000 },
    copy: {
      ko: { headline: ["사진에 남은 순간,", "종이에 번지는 기억."], featureDetails: ["원본 사진은 그대로 두고, 사진에서 잉크 느낌의 이미지를 만들어요. 사실적인 사진과 간결한 스탬프를 한 장에 나란히 남깁니다.", "필드 노트와 여행 스탬프 중 기록의 형식을 고르세요. 장소와 연도는 직접 확인해 넣고, 짧은 문장으로 그날의 감각을 더해요.", "종이와 잉크, 문구를 조절하고 PNG나 JPEG로 저장해요. 기록은 종류별로 모아 두고 다시 살펴볼 수 있어요."], availability: "개발 중인 앱입니다. 아래 이미지는 개발 버전에서 생성한 필드 노트 예시이며 앱 실행 화면이 아닙니다. 기기 내 생성은 모델 다운로드가 필요하고, 실제 기기에서의 검증을 이어가고 있습니다.", privacy: "현재 생성은 모델 설치 후 기기 안에서 처리하며 외부 생성 API를 사용하지 않습니다. 첫 모델 다운로드에는 네트워크와 저장 공간이 필요해요. 내보내는 이미지에는 원본 GPS 메타데이터를 복사하지 않아요.", mediaAlt: "자전거의 잉크 스탬프와 거리에서 찍은 원본 자전거 사진을 위아래로 배치한 Inkmile 필드 노트 결과물.", mediaCaption: "개발 버전에서 생성한 필드 노트 예시 · 앱 화면 아님" },
      en: { headline: ["A moment in a photo.", "A memory on paper."], featureDetails: ["Keep the original photograph and create an ink-style interpretation of it. The detailed photo and a simpler stamp sit together on one sheet.", "Choose a field note or travel-stamp format. Confirm the place and year yourself, and add a short line to recall the feeling of the day.", "Adjust paper, ink, and captions, then save as PNG or JPEG. Your records are organized by format for revisiting later."], availability: "In development. The image shown is a field-note output generated by the development build, not an app screenshot. On-device generation needs a model download; real-device validation is ongoing.", privacy: "Current generation runs on-device after model installation, without an external generation API. The initial model download needs network access and storage. Exported images do not copy GPS metadata from the original.", mediaAlt: "An Inkmile field-note output pairing an ink bicycle stamp above the original street photograph.", mediaCaption: "Field-note output from a development build · not an app screen" },
      ja: { headline: ["写真に残る瞬間を、", "紙ににじむ記憶へ。"], featureDetails: ["原本の写真はそのまま残し、インク風の画像を生成。細部のある写真と簡潔なスタンプを、一枚の紙に収めます。", "フィールドノートや旅のスタンプから形式を選択。場所と年は自分で確認して入力し、短い言葉でその日の感覚を添えます。", "紙・インク・文字を調整してPNGやJPEGに保存。記録は形式別にまとめて、後から見返せます。"], availability: "開発中のアプリです。掲載画像は開発版で生成したフィールドノートの出力例で、アプリ画面ではありません。端末内の生成にはモデルのダウンロードが必要で、実機検証を進めています。", privacy: "現在の生成はモデル導入後に端末内で処理し、外部生成APIは使用しません。初回のモデル取得には通信と空き容量が必要です。書き出し画像に原本のGPSメタデータはコピーしません。", mediaAlt: "自転車のインクスタンプと、街で撮った元の自転車写真を上下に配置したInkmileの出力例。", mediaCaption: "開発版で生成したフィールドノートの例 · アプリ画面ではありません" },
    },
  },
  {
    app: {
      id: "hiho-run", detailPath: "apps/hiho-run/", code: "RUN / FRAME / SHARE",
      icon: "app-icons/hiho-run.png", version: "1.0", platforms: ["iPhone · iOS 17+"], accent: "apricot", status: "testing",
      content: {
        ko: { displayName: "RUN POST", tagline: "달린 기록을, 내가 찍은 한 장에", description: "건강 앱에 저장된 러닝 기록을 사진 위에 얹어 공유 이미지로 만듭니다. 거리·페이스·시간과 경로를 골라 배치하고 나만의 러닝 포스터를 남기세요.", features: ["건강 앱의 러닝 기록 가져오기", "사진 위 기록·경로 직접 배치", "정사각·피드·스토리 비율 내보내기"] },
        en: { displayName: "RUN POST", tagline: "Your run, on your photograph", description: "Turn a running workout saved in Apple Health into a photo to share. Arrange distance, pace, duration, and route to make a running poster of your own.", features: ["Import running workouts from Apple Health", "Place stats and routes on a photo", "Export square, feed, or story formats"] },
        ja: { displayName: "RUN POST", tagline: "走った記録を、自分で撮った一枚に", description: "ヘルスケアに保存されたランニング記録を写真に重ね、共有用画像にします。距離・ペース・時間・ルートを選んで、自分だけのランニングポスターへ。", features: ["ヘルスケアのランニング記録を読み込み", "写真に記録とルートを自由に配置", "正方形・フィード・ストーリー比率で出力"] },
      }, links: [],
    },
    layout: "phone",
    media: { src: "product-shots/hiho-run/editor.webp", width: 1206, height: 2622 },
    copy: {
      ko: { headline: ["오늘 달린 만큼,", "한 장에 남겨요."], featureDetails: ["건강 앱에 이미 저장된 러닝 운동을 불러와요. 새로운 GPS 러닝을 측정하는 앱이 아니라, 달리고 난 뒤의 기록을 꾸미는 도구예요.", "내 사진에 거리·페이스·시간과 경로를 얹고 위치와 크기를 조절해요. 템플릿을 바꾸거나 이전 기록과 비교해 다른 구성을 만들 수 있어요.", "1:1, 4:5, 9:16 중 올릴 곳에 맞는 비율로 저장해요. 경로의 시작과 끝 200m는 기본적으로 가려 일상의 장소가 드러나는 것을 줄여요."], availability: "현재 내부 TestFlight 테스트 중입니다. 공개 설치는 아직 제공하지 않아요. 화면의 러닝 수치는 샘플 데이터이며, 실제 기기의 건강 기록 읽기와 내보내기를 계속 검증하고 있습니다.", privacy: "선택한 건강 기록을 읽기 위해 동의를 요청해요. 건강 데이터에 새 기록을 쓰거나 현재 위치 권한을 요구하지 않으며, 내보낸 사진에 원본 GPS 메타데이터를 복사하지 않아요.", mediaAlt: "RUN POST의 실제 편집 화면. SAMPLE 표시가 있는 5.20km 러닝 기록과 경로, 위치와 크기 조정 도구.", mediaCaption: "실제 편집 화면 · 샘플 러닝 기록" },
      en: { headline: ["You ran it.", "Make it a keepsake."], featureDetails: ["Import a running workout already saved in Apple Health. This is a tool for styling a finished run, not for tracking a new GPS workout.", "Place distance, pace, duration, and route on your photo, and adjust their positions and sizes. Try templates or compare with a previous run.", "Save in 1:1, 4:5, or 9:16 to suit where you share. The first and last 200 metres of the route are hidden by default to help protect familiar places."], availability: "Currently in internal TestFlight testing, with no public installation yet. The displayed running values are sample data. Real-device Health access and export are still being validated.", privacy: "Reading selected Health workouts requires your permission. The app does not write Health records or request current-location access. Exported photos do not copy original GPS metadata.", mediaAlt: "Actual RUN POST editor with a SAMPLE-labelled 5.20 km run, route, and position and size controls.", mediaCaption: "Actual editor screen · sample running data" },
      ja: { headline: ["今日走った分を、", "一枚に残そう。"], featureDetails: ["ヘルスケアに保存済みのランニングを読み込みます。新しいGPS記録を計測するのではなく、走った後の記録を飾るツールです。", "自分の写真に距離・ペース・時間・ルートを重ね、位置やサイズを調整。テンプレートや前回との比較も使えます。", "1:1・4:5・9:16から共有先に合う比率で保存。ルートの最初と最後の200mは初期設定で隠し、身近な場所の露出を減らします。"], availability: "現在、内部TestFlightテスト中で、一般向けインストールはまだありません。画面の数値はサンプルです。実機での健康記録の読み込みと書き出しを引き続き検証しています。", privacy: "選択した健康記録を読むための同意を求めます。健康記録の書き込みや現在地の権限要求は行いません。出力写真に原本のGPSメタデータはコピーしません。", mediaAlt: "SAMPLE表示のある5.20kmの記録、ルート、位置やサイズの操作を表示したRUN POSTの実際の編集画面。", mediaCaption: "実際の編集画面 · サンプルのランニング記録" },
    },
  },
  {
    app: {
      id: "daymirror", detailPath: "apps/daymirror/", code: "PLAN / LIVE / REFLECT",
      icon: "app-icons/daymirror.png", version: "1.3", platforms: ["iPhone", "iPad", "Mac"], accent: "amber", status: "live",
      content: {
        ko: { displayName: "DayMirror", tagline: "계획한 하루와 보낸 하루를 나란히", description: "계획과 실제 기록을 10분 단위의 두 열에 펼칩니다. 블록을 옮기고 루틴과 일정 복제로 계획을 채우며, 할 일·메모와 함께 하루를 돌아봐요.", features: ["10분 단위 계획·실제 비교", "루틴·일정 복제·할 일과 메모", "일·주·월·연 회고"] },
        en: { displayName: "DayMirror", tagline: "The day you planned. The day you lived.", description: "See plans and actual time side by side in ten-minute cells. Move blocks, fill routines, copy a day's schedule, and keep to-dos and notes close to your day.", features: ["Plan vs. actual in ten-minute cells", "Routines, schedule copies, to-dos, and notes", "Daily, weekly, monthly, and yearly reflection"] },
        ja: { displayName: "DayMirror", tagline: "計画した一日と、過ごした一日を並べて", description: "計画と実際の記録を10分単位の二列で表示。ブロック移動、ルーティン、予定の複製を使い、タスクやメモと一緒に一日を振り返ります。", features: ["10分単位の計画と実績比較", "ルーティン・予定の複製・タスクとメモ", "日・週・月・年の振り返り"] },
      }, links: [{ kind: "appStore", href: "https://apps.apple.com/app/id6811468895" }],
    },
    layout: "phone",
    media: { src: "product-shots/daymirror/ko/01-daily.webp", width: 1105, height: 2400 },
    copy: {
      ko: { headline: ["계획은 왼쪽에,", "오늘은 오른쪽에."], featureDetails: ["10분 단위 칸으로 하루를 설계해요. 계획과 실제를 나란히 보고, 계획한 활동을 실제 열에 복사하거나 길이와 위치를 조절할 수 있어요.", "반복하는 일은 루틴으로 채우고, 잘 맞는 하루의 계획을 다른 날짜에 복제하세요. 할 일과 메모는 패널에 모아 두고 필요할 때 계획에 배치할 수 있어요.", "하루를 넘어 주·월·연 단위로 기록을 돌아봐요. 얼마나 계획대로 했는지, 실제 시간은 어디에 쓰였는지 함께 확인합니다."], availability: "iPhone·iPad·Mac에서 사용할 수 있는 유료 앱으로 App Store에 출시되었습니다. 현재 가격과 지원 환경은 스토어에서 확인하세요.", privacy: "계획과 활동 기록은 먼저 기기에 저장합니다. iCloud를 사용할 수 있으면 같은 Apple 계정의 비공개 CloudKit 데이터베이스로 동기화합니다. 건강·현재 위치 정보에는 접근하지 않아요.", mediaAlt: "DayMirror의 실제 개발 화면. 계획과 실제 열에 집중 작업, 독서, 산책 예시가 나란히 표시된다.", mediaCaption: "실제 개발 화면 · 계획과 실제 기록 예시" },
      en: { headline: ["Plans on the left.", "Life on the right."], featureDetails: ["Design a day with ten-minute cells. See plans beside actual time, copy a planned activity across, and adjust its duration or position.", "Fill recurring activities from routines or copy a day's plans to other dates. Keep to-dos and notes in a companion panel, then schedule a task when you are ready.", "Look beyond a single day with weekly, monthly, and yearly views. See how closely reality matched the plan and where your time actually went."], availability: "Available as a paid app for iPhone, iPad, and Mac on the App Store. Check the store for current pricing and compatibility.", privacy: "Plans and activity records are saved to your device first. When iCloud is available, they sync through your private CloudKit database under the same Apple Account. The app does not access Health or current-location data.", mediaAlt: "Actual DayMirror development screen with sample focus work, reading, and walking blocks in plan and actual columns.", mediaCaption: "Actual development screen · example plan and activity records" },
      ja: { headline: ["計画は左に、", "今日の実際は右に。"], featureDetails: ["10分単位のマスで一日を設計。計画と実績を並べ、予定の活動を実績側にコピーしたり、長さや位置を調整したりできます。", "繰り返す活動はルーティンで入力し、一日の予定を別の日へ複製できます。タスクとメモをパネルにまとめ、必要なときに予定へ配置できます。", "一日だけでなく週・月・年でも振り返り。どの程度計画に沿ったか、実際に何に時間を使ったかを確認します。"], availability: "iPhone・iPad・Mac向けの有料アプリとしてApp Storeで公開中です。現在の価格と対応環境はストアでご確認ください。", privacy: "計画と活動記録はまず端末に保存します。iCloudを利用できる場合、同じApple Accountの非公開CloudKitデータベースで同期します。健康情報や現在地にはアクセスしません。", mediaAlt: "集中作業・読書・散歩のサンプルが計画と実績の二列に並ぶDayMirrorの実際の開発画面。", mediaCaption: "実際の開発画面 · 計画と活動記録の例" },
    },
  },
  {
    app: {
      id: "time-journey", detailPath: "apps/time-journey/", code: "BOARD / FOCUS / ARRIVE",
      icon: null, version: "0.1", platforms: ["iPhone · iOS 16+"], accent: "cobalt", status: "development",
      content: {
        ko: { displayName: "TimeJourney", tagline: "집중할 시간을, 짧은 여행처럼", description: "달로 향하는 여행이나 동해안 열차를 고르고, 15~120분 동안 한 가지 일에 머무는 집중 도구를 만들고 있습니다. 출발과 도착, 중간에 돌아온 기록까지 담아요.", features: ["달·동해안 열차 테마", "15~120분 집중 세션", "도착·중도 종료와 로컬 기록"] },
        en: { displayName: "TimeJourney", tagline: "Make focus time feel like a little journey", description: "A focus tool in development: choose a moon trip or an east-coast train, then stay with one thing for 15–120 minutes. Keep a record of arrivals and early returns.", features: ["Moon and coastal-train themes", "15–120-minute focus sessions", "Arrivals, early returns, and local history"] },
        ja: { displayName: "TimeJourney", tagline: "集中する時間を、小さな旅のように", description: "月への旅や東海岸の列車を選び、15〜120分、一つのことに向き合う集中ツールを開発中です。到着も途中で戻った記録も残します。", features: ["月・東海岸列車のテーマ", "15〜120分の集中セッション", "到着・途中終了とローカル履歴"] },
      }, links: [],
    },
    layout: "journey",
    copy: {
      ko: { headline: ["잠시 떠나서,", "하나에 머물러요."], featureDetails: ["달이나 동해안 열차 중 목적지를 고르고 15~120분의 여행 시간을 정해요. 탑승권을 받는 흐름으로 집중의 시작을 구분합니다.", "정한 시간 동안 하나의 작업에 머물러요. 앱 제한 기능도 개발하고 있지만, 실제 기기에서 차단과 해제가 정상적으로 작동하는지는 아직 검증 중입니다.", "끝까지 도착했는지, 중간에 돌아왔는지 기록해요. 완료 여부를 숨기지 않고 기기 안의 세션 기록으로 남깁니다."], availability: "초기 개발 단계입니다. 확정된 아이콘·여행 영상·실행 화면은 아직 공개하지 않아요. 이 페이지의 탑승권은 서비스 흐름을 설명하는 도해이며 실제 앱 화면이 아닙니다.", privacy: "세션 기록은 기기에 남깁니다. 앱 제한 기능은 Screen Time 권한과 실제 기기 검증이 필요하며, 현재 사용 가능한 차단 성능으로 약속하지 않습니다.", mediaAlt: "목적지를 고르고, 집중하고, 돌아오는 서비스 흐름을 설명하는 탑승권 도해.", mediaCaption: "서비스 흐름을 설명하는 도해 · 앱 실행 화면 아님" },
      en: { headline: ["Step away for a while.", "Stay with one thing."], featureDetails: ["Choose the moon or a coastal train and set a 15–120-minute journey. A boarding-pass flow marks the start of focused time.", "Stay with one task for the time you chose. App restrictions are also in development; blocking and release are not yet verified on a real device.", "Keep an honest record of whether you arrived or returned early. Session history stays on your device."], availability: "An early prototype. No final icon, journey footage, or app screens are published yet. The boarding pass on this page is an explanatory diagram, not an app screenshot.", privacy: "Session history is stored on the device. App restrictions need Screen Time permission and real-device validation; reliable blocking is not promised as currently available.", mediaAlt: "A boarding-pass diagram explaining the flow: choose a destination, focus, and return.", mediaCaption: "Explanatory service-flow diagram · not an app screen" },
      ja: { headline: ["少しだけ離れて、", "一つに向き合う。"], featureDetails: ["月か海岸沿いの列車を選び、15〜120分の旅の時間を設定。搭乗券を受け取る流れで、集中の始まりを区切ります。", "選んだ時間、一つの作業に向き合います。アプリ制限も開発中ですが、実機での遮断と解除はまだ検証できていません。", "最後まで到着したか、途中で戻ったかを記録。結果を隠さず、端末内のセッション履歴に残します。"], availability: "初期の開発段階です。確定アイコン・旅の映像・実行画面はまだ公開していません。このページの搭乗券はサービスの流れを説明する図で、実際のアプリ画面ではありません。", privacy: "セッション履歴は端末に保存します。アプリ制限にはスクリーンタイムの許可と実機検証が必要で、現在使える遮断性能として約束するものではありません。", mediaAlt: "目的地を選び、集中し、戻るという流れを説明する搭乗券の図。", mediaCaption: "サービスの流れを説明する図 · アプリ画面ではありません" },
    },
  },
  ...additionalProjects,
];
