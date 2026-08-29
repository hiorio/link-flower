import type { Locale } from "./i18n";

type LocalizedAppCopy = {
  displayName: string;
  tagline: string;
  description: string;
  features: string[];
};

export type ProductApp = {
  id: string;
  order: string;
  code: string;
  icon: string;
  version: string;
  platforms: string[];
  accent: "cyan" | "amber" | "apricot" | "cobalt" | "sky" | "sprout" | "leaf";
  status: "live" | "preparing" | "demo";
  content: Record<Locale, LocalizedAppCopy>;
  links: Array<{
    kind: "web" | "appStore" | "support";
    href: string;
  }>;
};

export const productApps: ProductApp[] = [
  {
    id: "dohwaji",
    order: "01",
    code: "MAP / DRAW / SHARE",
    icon: "app-icons/dohwaji.jpg",
    version: "1.2",
    platforms: ["WEB", "iOS"],
    accent: "cyan",
    status: "live",
    content: {
      ko: {
        displayName: "도화지",
        tagline: "함께 만드는 모임 동선 지도",
        description: "친구, 연인, 가족과의 만남과 여행 동선을 한 장의 지도에 쉽게 표현하고, 함께 만들고, 링크로 공유하고 싶다는 필요에서 시작한 지도 서비스입니다.",
        features: ["지도 위 손그림", "모임 동선 설계", "설치 없는 링크 공유"],
      },
      en: {
        displayName: "Dohwaji",
        tagline: "A shared route map for every meetup",
        description: "Dohwaji began with a personal need: an easier way to map, build, and share the routes of meetups and trips with friends, partners, and family.",
        features: ["Draw on the map", "Plan group routes", "Share without installation"],
      },
      ja: {
        displayName: "ドファジ",
        tagline: "みんなで作る集合ルートマップ",
        description: "友人、恋人、家族との待ち合わせや旅行の動線を一枚の地図で簡単に表現し、一緒につくり、リンクで共有したいという必要から始まった地図サービスです。",
        features: ["地図に手描き", "集合ルート設計", "インストール不要の共有"],
      },
    },
    links: [
      { kind: "web", href: "https://dohwaji.app" },
      { kind: "appStore", href: "https://apps.apple.com/app/id6797682561" },
    ],
  },
  {
    id: "timeroots",
    order: "02",
    code: "TIME / TRACK / REFLECT",
    icon: "app-icons/timeroots.jpg",
    version: "1.1",
    platforms: ["iOS", "WIDGET"],
    accent: "amber",
    status: "live",
    content: {
      ko: {
        displayName: "TimeRoots",
        tagline: "기록이 쌓여 삶이 보이는 시간",
        description: "한 번의 탭으로 실제 활동을 기록하고, 타임라인과 통계로 하루의 뿌리를 확인하는 로컬 우선 타임트래커입니다.",
        features: ["빠른 활동 기록", "iOS 홈 화면 위젯", "타임라인과 주간 분석"],
      },
      en: {
        displayName: "TimeRoots",
        tagline: "See your life take shape through time",
        description: "A local-first time tracker that captures real activity in one tap and reveals your day through timelines and analytics.",
        features: ["One-tap tracking", "iOS home-screen widgets", "Timeline and weekly insights"],
      },
      ja: {
        displayName: "TimeRoots",
        tagline: "記録が積み重なり、暮らしが見える時間",
        description: "ワンタップで実際の活動を記録し、タイムラインと統計から一日の輪郭を確認できるローカル優先のタイムトラッカーです。",
        features: ["素早い活動記録", "iOSホーム画面ウィジェット", "タイムラインと週間分析"],
      },
    },
    links: [
      { kind: "appStore", href: "https://apps.apple.com/app/id6798457487" },
      { kind: "support", href: "https://hiorio.github.io/timeroots-support/" },
    ],
  },
  {
    id: "timeflower",
    order: "03",
    code: "SHARE / PLAN / TALK",
    icon: "app-icons/timeflower.png",
    version: "1.0.0",
    platforms: ["iOS", "ANDROID"],
    accent: "apricot",
    status: "live",
    content: {
      ko: {
        displayName: "TimeFlower",
        tagline: "함께 쓰는 일정이 피어나는 캘린더",
        description: "가족, 연인, 친구가 한 장의 달력을 공유하고 일정마다 장소와 준비물, 대화를 함께 쌓는 공유 캘린더입니다.",
        features: ["게스트로 바로 시작", "초대 링크로 참여", "일정별 대화와 변경 기록"],
      },
      en: {
        displayName: "TimeFlower",
        tagline: "A calendar where shared plans grow",
        description: "A shared calendar where families, couples, and friends plan together and keep places, checklists, and conversations inside every event.",
        features: ["Start instantly as a guest", "Join with an invite link", "Event threads and change history"],
      },
      ja: {
        displayName: "TimeFlower",
        tagline: "一緒に使う予定が育つカレンダー",
        description: "家族、恋人、友人が一つのカレンダーを共有し、予定ごとに場所や持ち物、会話を積み重ねる共有カレンダーです。",
        features: ["ゲストですぐ開始", "招待リンクで参加", "予定ごとの会話と変更履歴"],
      },
    },
    links: [],
  },
  {
    id: "dailyplank",
    order: "04",
    code: "HOLD / GUIDE / REPEAT",
    icon: "app-icons/daily-plank.png",
    version: "0.2.1",
    platforms: ["iOS", "ANDROID", "WEB DEMO"],
    accent: "cobalt",
    status: "live",
    content: {
      ko: {
        displayName: "매일 플랭크",
        tagline: "5분부터 이어 가는 매일의 코어 루틴",
        description: "5·7·10분 루틴을 고르면 음성, 효과음, 진동과 자동 휴식이 다음 자세를 안내하고 운동 기록까지 남기는 플랭크 가이드입니다.",
        features: ["5·7·10분 가이드 루틴", "음성·진동과 자동 휴식", "연속 기록과 성장 마스코트"],
      },
      en: {
        displayName: "Daily Plank",
        tagline: "A daily core routine starting at five minutes",
        description: "Choose a 5, 7, or 10-minute routine and follow voice, sound, haptic, and automatic rest cues while the app keeps your workout history.",
        features: ["5, 7, and 10-minute routines", "Voice, haptics, and automatic rest", "Streaks and a growing mascot"],
      },
      ja: {
        displayName: "毎日プランク",
        tagline: "5分から続ける毎日のコアルーティン",
        description: "5・7・10分のルーティンを選ぶと、音声、効果音、振動、自動休憩が次の姿勢を案内し、運動記録も残すプランクガイドです。",
        features: ["5・7・10分のガイド", "音声・振動と自動休憩", "連続記録と成長するマスコット"],
      },
    },
    links: [{ kind: "web", href: "https://hiorio.github.io/Daily-Plank/" }],
  },
  {
    id: "biondamae",
    order: "05",
    code: "OBSERVE / COMPARE / JUDGE",
    icon: "app-icons/biondamae.png",
    version: "1.1.0",
    platforms: ["WEB", "iOS", "ANDROID"],
    accent: "sky",
    status: "live",
    content: {
      ko: {
        displayName: "비온다매",
        tagline: "비 온다던 예보, 맞았는지까지 한눈에",
        description: "현재 관측과 7일 날씨를 보고, 과거 예보와 6개 예보사를 같은 시간 기준으로 맞대어 실제로 얼마나 맞았는지 기록합니다.",
        features: ["현재 관측과 7일 예보", "6개 예보사 맞비교", "과거 예보와 정확도 기록"],
      },
      en: {
        displayName: "Biondamae",
        tagline: "See whether that rain forecast was actually right",
        description: "See current observations and the seven-day outlook, then compare six providers and past forecasts at the same point in time to learn what really held up.",
        features: ["Current conditions and 7-day outlook", "Six-provider comparison", "Past forecasts and accuracy history"],
      },
      ja: {
        displayName: "ビオンダメ",
        tagline: "雨予報、本当に当たったかまで一目で",
        description: "現在の観測と7日間予報を確認し、過去の予報と6つの予報元を同じ時刻基準で比較して、実際にどれだけ当たったかを記録します。",
        features: ["現在の観測と7日間予報", "6つの予報元を比較", "過去予報と精度の記録"],
      },
    },
    links: [{ kind: "web", href: "https://weather-forecast-production-0aac.up.railway.app/" }],
  },
  {
    id: "ssakmemo",
    order: "06",
    code: "CAPTURE / SEARCH / KEEP",
    icon: "app-icons/ssak-memo.webp",
    version: "1.0",
    platforms: ["iOS", "WIDGET"],
    accent: "sprout",
    status: "live",
    content: {
      ko: {
        displayName: "싹 메모",
        tagline: "떠오른 순간, 바로 기록",
        description: "위젯과 제어 센터에서 한 번 탭해 녹음하거나 타이핑하고, 작은 생각을 기기 안의 보관함과 날짜별 Markdown에 차곡차곡 남깁니다.",
        features: ["위젯·제어 센터 원탭 기록", "온디바이스 한국어 받아쓰기", "검색 보관함과 날짜별 Markdown"],
      },
      en: {
        displayName: "싹 메모",
        tagline: "Capture it the moment it appears",
        description: "Start voice or text capture in one tap from a widget or Control Center, then keep every thought locally with daily Markdown output.",
        features: ["One-tap widget and Control Center capture", "On-device Korean dictation", "Searchable library and daily Markdown"],
      },
      ja: {
        displayName: "싹 메모",
        tagline: "思いついた瞬間、すぐ記録",
        description: "ウィジェットやコントロールセンターからワンタップで音声・テキスト入力を始め、小さな考えを端末内の保管庫と日別Markdownに残します。",
        features: ["ウィジェット・コントロールセンターから記録", "韓国語のオンデバイス音声入力", "検索できる保管庫と日別Markdown"],
      },
    },
    links: [{ kind: "support", href: "https://hiorio.github.io/ssak-memo-support/" }],
  },
  {
    id: "leaf-message",
    order: "07",
    code: "WRITE / STYLE / STAY",
    icon: "app-icons/leaf-message.png",
    version: "0.1.0",
    platforms: ["iOS", "WIDGET"],
    accent: "leaf",
    status: "live",
    content: {
      ko: {
        displayName: "Leaf Message",
        tagline: "상대의 홈 화면에 남기는 짧은 마음",
        description: "40자 안에 감성 메시지를 남기고 배경과 도착 효과를 고르면, 상대의 iPhone 홈 화면 위젯 한 칸을 그 마음에 어울리는 장면으로 꾸밉니다.",
        features: ["40자에 담는 감성 메시지", "배경 14종과 효과 12종으로 화면 꾸미기", "보내기 전 내 위젯에서 미리 보기"],
      },
      en: {
        displayName: "Leaf Message",
        tagline: "Leave a heartfelt note and style their Home Screen",
        description: "Write a heartfelt message in up to 40 characters, choose a background and arrival effect, and turn one space on the recipient’s iPhone Home Screen into a small scene made for them.",
        features: ["Heartfelt notes in 40 characters", "Style with 14 backgrounds and 12 effects", "Preview on your own widget first"],
      },
      ja: {
        displayName: "Leaf Message",
        tagline: "相手のホーム画面に残す短い想い",
        description: "40文字以内の想いを込めたメッセージに背景と到着演出を添え、相手のiPhoneホーム画面ウィジェットの一角を、その気持ちに合う景色へ変えます。",
        features: ["40文字に込める想い", "背景14種と演出12種で画面を彩る", "送信前に自分のウィジェットで確認"],
      },
    },
    links: [],
  },
];
