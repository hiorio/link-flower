import type { Locale } from "./i18n";

export type DohwajiCopy = {
  eyebrow: string;
  title: [string, string];
  description: string;
  start: string;
  appStore: string;
  noLogin: string;
  scrollHint: string;
  mapEyebrow: string;
  seoulLabel: string;
  destinationsLabel: string;
  mapTitle: string;
  mapDescription: string;
  mapCaption: string;
  openRoute: string;
  dayLabel: string;
  stopsLabel: string;
  days: Array<{ label: string; title: string; description: string; stops: [string, string, string] }>;
  benefits: string[];
  flowEyebrow: string;
  flowTitle: string;
  flowDescription: string;
  steps: Array<{ title: string; description: string; detail: string }>;
  storyEyebrow: string;
  storyTitle: [string, string];
  storyDescription: string;
  storySignature: string;
  finalEyebrow: string;
  finalTitle: [string, string];
  finalDescription: string;
  explore: string;
  back: string;
  status: string;
  imageAlt: string;
  enlarge: string;
  close: string;
  galleryHint: string;
  pageTitle: string;
  pageDescription: string;
};

export const dohwajiCopy: Record<Locale, DohwajiCopy> = {
  ko: {
    eyebrow: "함께 만드는 동선 지도, 도화지",
    title: ["만날 곳부터,", "함께 걸을 길까지."],
    description: "친구, 연인, 가족과 함께할 하루를 지도 한 장에 담으세요. 장소를 표시하고, 길 위에 메모와 손그림을 더해 링크 하나로 나눕니다.",
    start: "도화지 시작하기",
    appStore: "App Store에서 받기",
    noLogin: "지도 만들기와 기본 편집은 로그인 없이 시작할 수 있어요.",
    scrollHint: "도화지로 그린 하루 살펴보기",
    mapEyebrow: "지도 한 장에 담은 서울 여행",
    seoulLabel: "서울",
    destinationsLabel: "여행 예시 선택",
    mapTitle: "우리의 다음 목적지가 한눈에.",
    mapDescription: "날짜별로 들를 곳을 담고, 이동할 순서를 정리했어요. 도화지의 실제 화면으로 여행 동선을 살펴보세요.",
    mapCaption: "도화지에서 직접 캡처한 실제 지도 화면",
    openRoute: "여행 지도 열기",
    dayLabel: "일차",
    stopsLabel: "이날의 주요 경유지",
    days: [
      { label: "1일차", title: "시장부터 골목까지", description: "광장시장, 창덕궁, 익선동을 지나는 첫날.", stops: ["광장시장", "창덕궁", "익선동"] },
      { label: "2일차", title: "서울의 풍경을 따라", description: "경복궁과 북촌을 둘러보고 남산으로 향하는 하루.", stops: ["경복궁", "북촌", "남산"] },
      { label: "3일차", title: "숲에서 도시로", description: "서울숲과 성수, DDP를 둘러보는 여행의 마지막 날.", stops: ["서울숲", "성수", "DDP"] },
    ],
    benefits: ["로그인 없이 시작", "설치 없이 공유", "국내부터 해외까지"],
    flowEyebrow: "도화지를 사용하는 방법",
    flowTitle: "장소를 담고, 길을 그리고, 함께 봐요.",
    flowDescription: "말로 길게 설명해야 했던 약속을 지도 위에 그대로 남겨보세요.",
    steps: [
      { title: "만날 곳을 담고", description: "검색하거나 지도를 직접 찍어 만날 곳과 들를 곳을 표시해요.", detail: "장소 검색 · 핀" },
      { title: "설명이 필요한 길을 그리고", description: "골목, 계단, 들어가는 방향까지. 손그림과 메모로 길에 설명을 더해요.", detail: "손그림 · 메모" },
      { title: "링크 하나로 건네세요", description: "완성한 지도의 링크를 보내면, 받는 사람은 앱 설치나 로그인 없이 볼 수 있어요.", detail: "링크 공유 · 웹에서 보기" },
    ],
    storyEyebrow: "이 지도를 만들게 된 이유",
    storyTitle: ["함께할 하루를", "쉽게 나누고 싶어서."],
    storyDescription: "친구, 연인, 가족과 어디서 만나 어디로 이동할지 한눈에 보이도록 만들고, 함께 고치고, 간편하게 공유하고 싶었습니다. 그 필요에서 도화지를 만들었습니다.",
    storySignature: "만든 사람, Hiorio",
    finalEyebrow: "다음 만남을 위한 한 장",
    finalTitle: ["함께할 하루를,", "도화지에 그려보세요."],
    finalDescription: "만날 곳과 가고 싶은 길. 지도 한 장이면 이야기가 조금 더 쉬워집니다.",
    explore: "다른 사람의 동선 둘러보기",
    back: "틔운 앱들로 돌아가기",
    status: "운영 중",
    imageAlt: "도화지 실제 지도 화면: 여행의 장소와 이동 동선",
    enlarge: "지도 화면 크게 보기",
    close: "닫기",
    galleryHint: "날짜를 선택해 동선을 살펴보세요. 화면을 누르면 크게 볼 수 있어요.",
    pageTitle: "도화지 | 함께 만드는 모임 동선 지도",
    pageDescription: "친구, 연인, 가족과의 만남과 여행을 지도 한 장에. 장소, 메모, 손그림과 이동 동선을 담아 링크 하나로 나누세요.",
  },
  en: {
    eyebrow: "Dohwaji, a map for the day you share",
    title: ["Where we'll meet.", "The way we'll go."],
    description: "Put a day with friends, your partner, or family on one map. Mark the places, add notes and drawings along the way, and share it all with one link.",
    start: "Start with Dohwaji",
    appStore: "Get it on the App Store",
    noLogin: "Create a map and make basic edits without logging in.",
    scrollHint: "See a day mapped with Dohwaji",
    mapEyebrow: "A Seoul trip on one map",
    seoulLabel: "Seoul",
    destinationsLabel: "Choose a trip example",
    mapTitle: "See where we're going next.",
    mapDescription: "Places are grouped by day and arranged in visiting order. Explore the trip through actual Dohwaji screens.",
    mapCaption: "Captured directly from Dohwaji's map screen",
    openRoute: "Open the trip map",
    dayLabel: "Day",
    stopsLabel: "A few stops along the way",
    days: [
      { label: "Day 1", title: "From market to alleyways", description: "A first day through Gwangjang Market, Changdeokgung, and Ikseon-dong.", stops: ["Gwangjang Market", "Changdeokgung", "Ikseon-dong"] },
      { label: "Day 2", title: "Through Seoul's scenery", description: "A day at Gyeongbokgung and Bukchon, followed by Namsan.", stops: ["Gyeongbokgung", "Bukchon", "Namsan"] },
      { label: "Day 3", title: "From forest to city", description: "A final day visiting Seoul Forest, Seongsu, and DDP.", stops: ["Seoul Forest", "Seongsu", "DDP"] },
    ],
    benefits: ["Start without logging in", "Share without installing", "Maps at home and abroad"],
    flowEyebrow: "How to use Dohwaji",
    flowTitle: "Add places. Draw the way. Share the plan.",
    flowDescription: "Put the directions that take a long message to explain right on the map.",
    steps: [
      { title: "Add the places we'll meet", description: "Search for a place or tap the map to mark your meeting point and stops.", detail: "Place search · Pins" },
      { title: "Draw the details of the way", description: "An alley, a staircase, the way in. Add drawings and notes to make the directions clear.", detail: "Drawings · Notes" },
      { title: "Pass it on with one link", description: "Send a link to your finished map. Recipients can view it without installing an app or logging in.", detail: "Link sharing · Web viewing" },
    ],
    storyEyebrow: "Why I made this map",
    storyTitle: ["I wanted to make", "our plans easier to share."],
    storyDescription: "I wanted to show at a glance where friends, partners, and family would meet and go next, build the plan together, and share it easily. That need became Dohwaji.",
    storySignature: "Made by Hiorio",
    finalEyebrow: "One map for your next meetup",
    finalTitle: ["Draw your next day", "together on Dohwaji."],
    finalDescription: "Where to meet and which way to go. One map makes the conversation a little easier.",
    explore: "Explore other people's routes",
    back: "Back to the apps",
    status: "Live",
    imageAlt: "An actual Dohwaji map showing the places and routes of a trip",
    enlarge: "Enlarge the map screen",
    close: "Close",
    galleryHint: "Choose a day to explore its route. Select the screen to enlarge it.",
    pageTitle: "Dohwaji | A Shared Route Map for Meetups",
    pageDescription: "Put meetups and trips with friends, partners, and family on one map. Add places, notes, drawings, and routes, then share with one link.",
  },
  ja: {
    eyebrow: "一緒に過ごす日のルートマップ、ドファジ",
    title: ["待ち合わせから、", "一緒に歩く道まで。"],
    description: "友人、恋人、家族と過ごす一日を、一枚の地図に。場所を印し、道にメモや手描きを添えて、リンクひとつで共有できます。",
    start: "ドファジをはじめる",
    appStore: "App Storeで入手",
    noLogin: "地図の作成と基本的な編集は、ログインなしではじめられます。",
    scrollHint: "ドファジに描いた一日を見る",
    mapEyebrow: "一枚の地図にまとめたソウル旅行",
    seoulLabel: "ソウル",
    destinationsLabel: "旅の例を選択",
    mapTitle: "次に向かう場所が、ひと目で。",
    mapDescription: "立ち寄る場所を日ごとにまとめ、訪れる順番を整理しました。ドファジの実際の画面で、旅のルートをご覧ください。",
    mapCaption: "ドファジの地図画面を直接キャプチャしたものです",
    openRoute: "旅の地図を開く",
    dayLabel: "日目",
    stopsLabel: "この日の主な立ち寄り先",
    days: [
      { label: "1日目", title: "市場から路地へ", description: "広蔵市場、昌徳宮、益善洞をめぐる初日。", stops: ["広蔵市場", "昌徳宮", "益善洞"] },
      { label: "2日目", title: "ソウルの風景をたどって", description: "景福宮と北村をめぐり、南山へ向かう一日。", stops: ["景福宮", "北村", "南山"] },
      { label: "3日目", title: "森から街へ", description: "ソウルの森から聖水を経由して、DDPまで。", stops: ["ソウルの森", "聖水", "DDP"] },
    ],
    benefits: ["ログインなしではじめる", "インストール不要で共有", "韓国内から海外まで"],
    flowEyebrow: "ドファジの使い方",
    flowTitle: "場所を入れて、道を描いて、一緒に見る。",
    flowDescription: "長い説明が必要だった道順を、そのまま地図の上に残してみましょう。",
    steps: [
      { title: "待ち合わせる場所を入れて", description: "検索するか、地図を直接タップして、待ち合わせや立ち寄る場所を印します。", detail: "場所の検索 · ピン" },
      { title: "伝えたい道を描いて", description: "路地、階段、入口の向きまで。手描きやメモで道順に説明を添えます。", detail: "手描き · メモ" },
      { title: "リンクひとつで届けます", description: "完成した地図のリンクを送るだけ。受け取った人は、アプリのインストールやログインなしで見られます。", detail: "リンク共有 · Webで閲覧" },
    ],
    storyEyebrow: "この地図をつくった理由",
    storyTitle: ["一緒に過ごす一日を、", "気軽に共有したくて。"],
    storyDescription: "友人、恋人、家族とどこで会い、どこへ移動するのかを一目で分かる形にし、一緒に直し、手軽に共有したい。その必要からドファジをつくりました。",
    storySignature: "つくった人、Hiorio",
    finalEyebrow: "次の待ち合わせのための一枚",
    finalTitle: ["一緒に過ごす一日を、", "ドファジに描いてみましょう。"],
    finalDescription: "待ち合わせる場所と、歩きたい道。地図一枚で、話が少し伝わりやすくなります。",
    explore: "みんなのルートを見る",
    back: "アプリ一覧に戻る",
    status: "運営中",
    imageAlt: "旅の場所とルートを表示したドファジの実際の地図画面",
    enlarge: "地図画面を拡大する",
    close: "閉じる",
    galleryHint: "日付を選んでルートをご覧ください。画面を押すと拡大できます。",
    pageTitle: "ドファジ | みんなで作る集合ルートマップ",
    pageDescription: "友人、恋人、家族との待ち合わせや旅行を一枚の地図に。場所、メモ、手描き、ルートをまとめ、リンクひとつで共有できます。",
  },
};
