import { useState, type ReactNode } from "react";
import type { Locale } from "./i18n";
import "./ssak-memo.css";

type SsakMemoCopy = {
  pageTitle: string;
  pageDescription: string;
  kicker: string;
  signal: string;
  eyebrow: string;
  title: string;
  heroLine: string;
  heroDescription: string;
  status: string;
  support: string;
  backToApps: string;
  heroVisualLabel: string;
  heroScreenLabel: string;
  captureKicker: string;
  captureTitle: string;
  captureDescription: string;
  captureModes: Array<{
    label: string;
    title: string;
    description: string;
    note: string;
    imageAlt: string;
  }>;
  libraryKicker: string;
  libraryTitle: string;
  libraryDescription: string;
  libraryScreens: Array<{ label: string; title: string; imageAlt: string }>;
  localKicker: string;
  localTitle: string;
  localDescription: string;
  markdownLabel: string;
  markdownDate: string;
  markdownEntries: string[];
  principles: Array<{ label: string; title: string; description: string }>;
  specLabel: string;
  specs: Array<{ term: string; value: string }>;
  controlCenterNote: string;
  finalKicker: string;
  finalTitle: string;
  footer: string;
};

export const ssakMemoCopy: Record<Locale, SsakMemoCopy> = {
  ko: {
    pageTitle: "싹 메모 | 떠오른 순간, 바로 기록",
    pageDescription: "위젯과 제어 센터에서 바로 말하거나 쓰세요. 떠오른 생각을 기기에 저장하고 iCloud로 동기화하며, 날짜별 Markdown으로 간직합니다.",
    kicker: "APP NODE 01-F",
    signal: "INSTANT CAPTURE / LOCAL FIRST",
    eyebrow: "생각은 기다려주지 않습니다.",
    title: "싹 메모",
    heroLine: "떠오른 순간, 바로 기록.",
    heroDescription: "위젯이나 제어 센터에서 한 번 탭해 말하거나 쓰세요. 작은 생각은 기기 안의 보관함에 차곡차곡 쌓이고, 필요할 때 다시 찾을 수 있습니다.",
    status: "운영 중",
    support: "지원 및 도움말",
    backToApps: "앱 목록 보기",
    heroVisualLabel: "싹 메모의 실제 보관함 화면",
    heroScreenLabel: "오늘의 메모가 시간순으로 쌓이는 보관함",
    captureKicker: "싹 메모를 시작한 생각",
    captureTitle: "무슨 생각이든, 떠오른 순간에는 우선 바로 메모할 수 있어야 했습니다.",
    captureDescription: "그래서 메모를 등록하는 가장 쉽고 짧은 방법을 고민했습니다. 앱을 찾아 열지 않아도, 위젯이나 제어 센터에서 곧바로 말하거나 쓸 수 있도록.",
    captureModes: [
      {
        label: "VOICE",
        title: "말이 곧 글이 됩니다.",
        description: "지원되는 기기에서 한국어·영어·일본어를 받아씁니다. 앱 언어에 맞춰, 떠오른 말을 기기 안에서 글로 바꿉니다.",
        note: "녹음 파일을 생성하거나 저장하지 않습니다.",
        imageAlt: "싹 메모가 음성을 한국어 문장으로 받아쓰는 실제 화면",
      },
      {
        label: "TEXT",
        title: "키보드가 먼저 열립니다.",
        description: "입력 화면을 찾는 단계 없이 떠오른 문장부터 바로 적습니다.",
        note: "완료를 누르면 로컬 보관함에 즉시 저장됩니다.",
        imageAlt: "싹 메모에서 문장을 바로 타이핑하는 실제 화면",
      },
    ],
    libraryKicker: "쌓인 생각을 다시 찾는 곳",
    libraryTitle: "흘려보낼 뻔한 생각을, 다시 만나는 곳.",
    libraryDescription: "본문과 태그를 함께 검색하고, 즐겨찾기·기간·입력 방식으로 좁혀 보세요. 편집한 메모와 휴지통까지 한 보관함 안에서 이어집니다.",
    libraryScreens: [
      { label: "DETAIL", title: "메모를 다듬고 태그하기", imageAlt: "본문과 태그, 즐겨찾기를 편집하는 싹 메모 상세 화면" },
      { label: "FILTER", title: "필요한 생각만 골라 보기", imageAlt: "기간과 태그, 입력 방식으로 메모를 거르는 싹 메모 필터 화면" },
    ],
    localKicker: "내 기록의 위치가 분명하도록",
    localTitle: "기기에 바로 담고, 내 iCloud로 이어집니다.",
    localDescription: "연결이 없어도 우선 메모하세요. iCloud를 사용할 수 있을 때 같은 Apple 계정의 기기에 동기화합니다. 날짜별 Markdown은 파일 앱의 ‘iCloud Drive > 싹 메모’에서 확인할 수 있습니다.",
    markdownLabel: "iCloud Drive / 싹 메모 / 2026-08-29.md",
    markdownDate: "2026-08-29",
    markdownEntries: ["09:41  다음 주 수요일, 회의 전에 새 흐름 다시 보기.", "18:26  퇴근길에 꽃집 들러 작은 화분 하나 보기."],
    principles: [
      { label: "LOCAL", title: "연결을 기다리지 않는 기록", description: "변경 사항을 기기에 먼저 저장하고, iCloud를 다시 사용할 수 있을 때 동기화합니다." },
      { label: "PRIVATE", title: "내 계정 안에 머무는 메모", description: "개인 iCloud Drive로 동기화합니다. 별도 앱 계정이나 자체 수집 서버, 광고·추적 기능은 없습니다." },
      { label: "OPEN", title: "하루가 한 편의 기록으로", description: "날짜별 Markdown 파일로도 남아, 익숙한 편집기에서 다시 읽을 수 있습니다." },
    ],
    specLabel: "사용 안내",
    specs: [
      { term: "기기", value: "iPhone · iOS 17+" },
      { term: "바로 기록", value: "위젯 · 제어 센터*" },
      { term: "받아쓰기", value: "한국어 · 영어 · 일본어" },
      { term: "보관", value: "iCloud · Markdown" },
    ],
    controlCenterNote: "* 제어 센터 캡처는 iOS 18 이상에서 사용할 수 있습니다.",
    finalKicker: "EVERY MEMO STARTS AS A SPROUT.",
    finalTitle: "그렇게 모인 메모는 하나씩 싹이 됩니다. 그 싹을 무엇으로 피워낼지는, 기록한 우리가 결정합니다.",
    footer: "떠오른 순간을 붙잡고, 작은 생각을 키우는 메모",
  },
  en: {
    pageTitle: "싹 메모 | Capture It the Moment It Appears",
    pageDescription: "Speak or type straight from a widget or Control Center. Capture thoughts on your device, sync through iCloud, and keep daily Markdown files.",
    kicker: "APP NODE 01-F",
    signal: "INSTANT CAPTURE / LOCAL FIRST",
    eyebrow: "Ideas do not wait.",
    title: "싹 메모",
    heroLine: "Capture it the moment it appears.",
    heroDescription: "Tap once from a widget or Control Center, then speak or type. Small thoughts collect in a library on your device, ready to find again.",
    status: "Live",
    support: "Support & help",
    backToApps: "View app index",
    heroVisualLabel: "The real library screen in 싹 메모",
    heroScreenLabel: "A library where today's notes collect in time order",
    captureKicker: "The thought that started 싹 메모",
    captureTitle: "Whatever the thought, it should be easy to capture the moment it appears.",
    captureDescription: "So we looked for the shortest, simplest way to make a memo: speak or type straight from a widget or Control Center, without first hunting for the app.",
    captureModes: [
      {
        label: "VOICE",
        title: "Speech becomes text.",
        description: "On supported devices, on-device dictation follows your app language: Korean, English, or Japanese.",
        note: "No recording file is created or stored.",
        imageAlt: "The real 싹 메모 screen transcribing speech into a Korean sentence",
      },
      {
        label: "TEXT",
        title: "The keyboard opens first.",
        description: "Skip the hunt for an input field and begin with the sentence in your head.",
        note: "Done saves the note straight to the local library.",
        imageAlt: "The real 싹 메모 screen for typing a note immediately",
      },
    ],
    libraryKicker: "Where captured thoughts return",
    libraryTitle: "Meet the thoughts you almost let slip away.",
    libraryDescription: "Search text and tags together, then narrow the library by favorites, date range, or capture method. Editing and the 30-day trash stay in the same flow.",
    libraryScreens: [
      { label: "DETAIL", title: "Refine and tag a note", imageAlt: "The 싹 메모 detail screen for editing text, tags, and favorites" },
      { label: "FILTER", title: "See only the thoughts you need", imageAlt: "The 싹 메모 filter screen for date, tag, and capture method" },
    ],
    localKicker: "A clear home for your notes",
    localTitle: "Capture on your device. Carry it forward with iCloud.",
    localDescription: "Keep writing offline. When iCloud is available, your notes sync across devices using the same Apple Account. Daily Markdown files are also available in the app’s iCloud Drive folder in Files.",
    markdownLabel: "iCloud Drive / Bud Memo / 2026-08-29.md",
    markdownDate: "2026-08-29",
    markdownEntries: ["09:41  Review the new flow before Wednesday's meeting.", "18:26  Stop by the flower shop and find a small plant."],
    principles: [
      { label: "LOCAL", title: "No waiting for a connection", description: "Changes save to your device first and sync when iCloud is available again." },
      { label: "PRIVATE", title: "Within your own account", description: "Sync uses your private iCloud Drive. No separate app account, app-owned collection server, ads, or tracking." },
      { label: "OPEN", title: "A day becomes a document", description: "Daily Markdown files let you revisit your notes in a familiar editor." },
    ],
    specLabel: "Good to know",
    specs: [
      { term: "Device", value: "iPhone · iOS 17+" },
      { term: "Capture", value: "Widget · Control Center*" },
      { term: "Dictation", value: "Korean · English · Japanese" },
      { term: "Storage", value: "iCloud · Markdown" },
    ],
    controlCenterNote: "* Control Center capture requires iOS 18 or later.",
    finalKicker: "EVERY MEMO STARTS AS A SPROUT.",
    finalTitle: "The notes we gather become sprouts. What they grow into is ours to decide.",
    footer: "Capture a moment. Give a small thought room to grow.",
  },
  ja: {
    pageTitle: "싹 메모 | 思いついた瞬間、すぐ記録",
    pageDescription: "ウィジェットやコントロールセンターからすぐ話すか書く。思いつきを端末に記録し、iCloudで同期して日別Markdownにも残します。",
    kicker: "APP NODE 01-F",
    signal: "INSTANT CAPTURE / LOCAL FIRST",
    eyebrow: "アイデアは待ってくれません。",
    title: "싹 메모",
    heroLine: "思いついた瞬間、すぐ記録。",
    heroDescription: "ウィジェットやコントロールセンターから一度タップして、話すか入力するだけ。小さな考えが端末内の保管庫に積み重なり、必要な時にまた見つかります。",
    status: "運用中",
    support: "サポート・ヘルプ",
    backToApps: "アプリ一覧を見る",
    heroVisualLabel: "싹 메모の実際の保管庫画面",
    heroScreenLabel: "今日のメモが時刻順に積み重なる保管庫",
    captureKicker: "싹 메모の原点",
    captureTitle: "どんな考えでも、思いついた瞬間にまず記録できるべきだと考えました。",
    captureDescription: "そこで、メモを残すための最も簡単で短い方法を考えました。アプリを探して開かなくても、ウィジェットやコントロールセンターからすぐ話すか書けるように。",
    captureModes: [
      {
        label: "VOICE",
        title: "話した言葉が文字になります。",
        description: "対応端末では、アプリの言語に合わせて韓国語・英語・日本語を端末内で文字に変えます。",
        note: "録音ファイルは作成も保存もしません。",
        imageAlt: "音声を韓国語の文章に変換する싹 메모の実際の画面",
      },
      {
        label: "TEXT",
        title: "キーボードが先に開きます。",
        description: "入力欄を探すことなく、思いついた文からすぐ書き始めます。",
        note: "完了を押すと端末内の保管庫にすぐ保存されます。",
        imageAlt: "文章をすぐ入力する싹 메모の実際の画面",
      },
    ],
    libraryKicker: "積み重ねた考えを見つける場所",
    libraryTitle: "忘れかけた考えと、また出会う場所。",
    libraryDescription: "本文とタグを一緒に検索し、お気に入り・期間・入力方法で絞り込めます。編集したメモと30日間のゴミ箱も、一つの保管庫につながっています。",
    libraryScreens: [
      { label: "DETAIL", title: "メモを整えてタグを付ける", imageAlt: "本文、タグ、お気に入りを編集する싹 메모の詳細画面" },
      { label: "FILTER", title: "必要な考えだけを選ぶ", imageAlt: "期間、タグ、入力方法で絞り込む싹 메모のフィルター画面" },
    ],
    localKicker: "記録の置き場所を明確に",
    localTitle: "すぐ端末に残して、自分のiCloudへ。",
    localDescription: "オフラインでも、まず記録。iCloudが使える時に同じApple Accountの端末へ同期します。日別Markdownは「ファイル」のiCloud Drive内にあるアプリのフォルダで確認できます。",
    markdownLabel: "iCloud Drive / 싹 메모 / 2026-08-29.md",
    markdownDate: "2026-08-29",
    markdownEntries: ["09:41  水曜日の会議前に、新しい流れをもう一度確認する。", "18:26  帰りに花屋へ寄って、小さな鉢植えを見る。"],
    principles: [
      { label: "LOCAL", title: "接続を待たずに記録", description: "変更はまず端末に保存し、iCloudが使えるようになったら同期します。" },
      { label: "PRIVATE", title: "自分のアカウント内に", description: "個人のiCloud Driveで同期。別のアプリアカウント、独自の収集サーバー、広告や追跡はありません。" },
      { label: "OPEN", title: "一日がひとつの記録に", description: "日別Markdownでも残るので、使い慣れたエディタで読み返せます。" },
    ],
    specLabel: "ご利用について",
    specs: [
      { term: "端末", value: "iPhone · iOS 17+" },
      { term: "記録", value: "ウィジェット · コントロールセンター*" },
      { term: "音声入力", value: "韓国語 · 英語 · 日本語" },
      { term: "保存", value: "iCloud · Markdown" },
    ],
    controlCenterNote: "* コントロールセンターからの記録にはiOS 18以降が必要です。",
    finalKicker: "EVERY MEMO STARTS AS A SPROUT.",
    finalTitle: "集まったメモは、一つずつ芽になります。その芽を何に育てるかは、記録した私たちが決めます。",
    footer: "思いついた瞬間を残し、小さな考えを育てるメモ",
  },
};

const supportBase = "https://hiorio.github.io/ssak-memo-support/";

const presentationCopy = {
  ko: {
    preview: "실제 앱 화면", modes: ["말로 메모", "글로 메모", "보관함"],
    sections: ["바로 담기", "다시 꺼내기", "내 기록으로 간직하기"],
    thought: "방금 떠오른 생각", note: "퇴근길에 꽃집 들러 작은 화분 하나 보기.",
    saved: "작은 생각 하나, 놓치지 않도록", entry: "시작은 한 번의 탭이면 충분하니까.",
    widget: "홈 화면 위젯", control: "제어 센터", voice: "말로 남기기", text: "글로 남기기",
    shortcut: "위젯과 제어 센터에서 입력 화면으로 바로 연결됩니다.",
    story: "모든 메모는\n작은 싹에서 시작됩니다.", tags: ["날짜별로", "태그로", "즐겨찾기로"],
  },
  en: {
    preview: "Inside the app", modes: ["Speak", "Type", "Library"],
    sections: ["Capture it", "Find it again", "Keep it yours"],
    thought: "A thought, just now", note: "Stop by the flower shop and find a small plant.",
    saved: "One small thought, kept", entry: "It starts with a single tap.",
    widget: "Home Screen widget", control: "Control Center", voice: "Speak a note", text: "Type a note",
    shortcut: "Widgets and Control Center take you straight to capture.",
    story: "Every memo starts\nas a little sprout.", tags: ["By date", "By tag", "By favorites"],
  },
  ja: {
    preview: "実際のアプリ画面", modes: ["話してメモ", "書いてメモ", "保管庫"],
    sections: ["すぐ残す", "また見つける", "自分の記録に"],
    thought: "いま浮かんだ考え", note: "帰りに花屋へ寄って、小さな鉢植えを見る。",
    saved: "小さな考えを、ひとつ残す", entry: "始まりは、ワンタップで。",
    widget: "ホーム画面ウィジェット", control: "コントロールセンター", voice: "話して残す", text: "書いて残す",
    shortcut: "ウィジェットやコントロールセンターから、すぐ入力画面へ。",
    story: "すべてのメモは、\n小さな芽から。", tags: ["日付で", "タグで", "お気に入りで"],
  },
} satisfies Record<Locale, {
  preview: string; modes: string[]; sections: string[]; thought: string; note: string;
  saved: string; entry: string; widget: string; control: string; voice: string; text: string;
  shortcut: string; story: string; tags: string[];
}>;

function MemoGlyph({ kind }: { kind: "voice" | "text" | "library" | "check" | "widget" | "control" }) {
  const paths = {
    voice: <><rect x="9" y="3" width="6" height="12" rx="3" /><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8" /></>,
    text: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M8 16h8" /></>,
    library: <><path d="M4 5h16v16H4zM8 2h8M8 10h8M8 14h6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    widget: <><rect x="3" y="3" width="18" height="18" rx="4" /><path d="M3 11h18M12 11v10" /></>,
    control: <><path d="M4 7h5M15 7h5M4 17h9M19 17h1" /><circle cx="12" cy="7" r="3" /><circle cx="16" cy="17" r="3" /></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[kind]}</svg>;
}

export function SsakMemoPage({ header, locale, appsHref }: { header: ReactNode; locale: Locale; appsHref: string }) {
  const copy = ssakMemoCopy[locale];
  const design = presentationCopy[locale];
  const supportHref = `${supportBase}${locale === "ko" ? "" : `${locale}/`}`;
  const [preview, setPreview] = useState(0);
  const asset = (file: string) => `${import.meta.env.BASE_URL}product-shots/ssak-memo/${file}`;
  const icon = `${import.meta.env.BASE_URL}app-icons/ssak-memo.webp`;
  const previews = [
    { file: "03-voice.webp", alt: copy.captureModes[0].imageAlt, caption: copy.captureModes[0].title, kind: "voice" },
    { file: "02-text.webp", alt: copy.captureModes[1].imageAlt, caption: copy.captureModes[1].title, kind: "text" },
    { file: "01-library.webp", alt: copy.heroVisualLabel, caption: copy.heroScreenLabel, kind: "library" },
  ] as const;

  return (
    <main className="site-shell ssak-shell">
      {header}

      <section className="ssak-hero" id="page-content" aria-labelledby="ssak-page-title">
        <div className="ssak-hero-copy">
          <div className="ssak-brand-mark"><img src={icon} alt="" width="80" height="80" /><div><span>{copy.title}</span><small>MEMO, THEN GROW.</small></div></div>
          <p className="ssak-eyebrow">{copy.eyebrow}</p>
          <h1 id="ssak-page-title">{copy.heroLine}</h1>
          <p className="ssak-hero-description">{copy.heroDescription}</p>
          <div className="ssak-actions">
            <a className="is-primary" href={supportHref} target="_blank" rel="noreferrer">{copy.support}<span aria-hidden="true">↗</span></a>
            <a href={appsHref}>{copy.backToApps}<span aria-hidden="true">←</span></a>
          </div>
          <div className="ssak-hero-meta"><span className="ssak-status"><i />{copy.status}</span><span>iPhone · iOS 17+</span></div>
        </div>

        <div className="ssak-hero-visual">
          <div className="ssak-preview-controls" role="group" aria-label={design.preview}>
            {previews.map((item, index) => <button key={item.kind} type="button" aria-pressed={preview === index} aria-controls="ssak-preview" onClick={() => setPreview(index)}><MemoGlyph kind={item.kind} />{design.modes[index]}</button>)}
          </div>
          <figure id="ssak-preview" className="ssak-preview">
            <div className="ssak-hero-screen"><img key={previews[preview].file} src={asset(previews[preview].file)} alt={previews[preview].alt} width="660" height="1434" fetchPriority="high" decoding="async" /></div>
            <figcaption aria-live="polite"><span>{design.preview}</span><strong>{previews[preview].caption}</strong></figcaption>
          </figure>
          <aside className="ssak-thought"><span><i />{design.thought}</span><p>{design.note}</p><small><MemoGlyph kind="check" />{design.saved}</small></aside>
        </div>
      </section>

      <section className="ssak-capture" aria-labelledby="ssak-capture-title">
        <header className="ssak-section-heading">
          <div className="ssak-section-label"><span>01</span>{design.sections[0]}</div>
          <div><p>{copy.captureKicker}</p><h2 id="ssak-capture-title">{copy.captureTitle}</h2><strong>{copy.captureDescription}</strong></div>
        </header>
        <div className="ssak-entry">
          <div><h3>{design.entry}</h3><p>{design.shortcut}</p></div>
          <div className="ssak-shortcuts"><div><MemoGlyph kind="widget" /><span>{design.widget}</span></div><div><MemoGlyph kind="control" /><span>{design.control}*</span></div></div>
        </div>
        <div className="ssak-capture-grid">
          {copy.captureModes.map((mode, index) => (
            <article className={index === 0 ? "is-voice" : "is-text"} key={mode.label}>
              <div className="ssak-mode-copy">
                <div className="ssak-mode-top"><span><MemoGlyph kind={index === 0 ? "voice" : "text"} /></span><small>{index === 0 ? design.voice : design.text}</small></div>
                <h3>{mode.title}</h3>
                <p>{mode.description}</p>
                <small><MemoGlyph kind="check" />{mode.note}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ssak-library" aria-labelledby="ssak-library-title">
        <div className="ssak-library-copy">
          <div className="ssak-section-label"><span>02</span>{design.sections[1]}</div>
          <p>{copy.libraryKicker}</p>
          <h2 id="ssak-library-title">{copy.libraryTitle}</h2>
          <strong>{copy.libraryDescription}</strong>
          <div className="ssak-library-tags">{design.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </div>
        <div className="ssak-library-screens">
          {copy.libraryScreens.map((screen, index) => (
            <figure key={screen.label}>
              <img src={asset(index === 0 ? "04-detail.webp" : "05-filter.webp")} alt={screen.imageAlt} width="660" height="1434" loading="lazy" decoding="async" />
              <figcaption><span>0{index + 1}</span><strong>{screen.title}</strong></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="ssak-local" aria-labelledby="ssak-local-title">
        <header className="ssak-local-heading">
          <div className="ssak-section-label"><span>03</span>{design.sections[2]}</div>
          <div><p>{copy.localKicker}</p><h2 id="ssak-local-title">{copy.localTitle}</h2><strong>{copy.localDescription}</strong></div>
        </header>
        <div className="ssak-local-grid">
          <div className="ssak-markdown" role="group" aria-label={copy.markdownLabel}>
            <div className="ssak-markdown-bar"><span>{copy.markdownLabel}</span><i>MD</i></div>
            <div className="ssak-markdown-body">
              <span># {copy.markdownDate}</span>
              {copy.markdownEntries.map((entry) => <p key={entry}>{entry}</p>)}
            </div>
          </div>
          <div className="ssak-principles">
            {copy.principles.map((principle, index) => (
              <article key={principle.label}><span>0{index + 1}</span><div><h3>{principle.title}</h3><p>{principle.description}</p></div></article>
            ))}
          </div>
        </div>
        <div className="ssak-specs" aria-label={copy.specLabel}>
          <span>{copy.specLabel}</span>
          <dl>{copy.specs.map((spec) => <div key={spec.term}><dt>{spec.term}</dt><dd>{spec.value}</dd></div>)}</dl>
          <small>{copy.controlCenterNote}</small>
        </div>
      </section>

      <section className="ssak-final" aria-labelledby="ssak-story-title">
        <img src={icon} alt="" width="160" height="160" loading="lazy" decoding="async" />
        <div className="ssak-final-copy">
          <p>{copy.finalKicker}</p>
          <h2 id="ssak-story-title">{design.story}</h2>
          <p className="ssak-final-story">{copy.finalTitle}</p>
          <div className="ssak-final-actions"><a href={supportHref} target="_blank" rel="noreferrer">{copy.support}<span aria-hidden="true">↗</span></a><a href={appsHref}>{copy.backToApps}<span aria-hidden="true">←</span></a></div>
        </div>
      </section>

      <footer className="site-footer ssak-footer">
        <div><span className="footer-node">NODE_01-F</span><p>{copy.footer}</p></div><span>© 2026 싹 메모</span>
      </footer>
    </main>
  );
}
