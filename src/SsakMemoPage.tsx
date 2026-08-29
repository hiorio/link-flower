import type { ReactNode } from "react";
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
    pageDescription: "위젯과 제어 센터에서 한 번 탭해 녹음하거나 입력하고, 메모를 기기 안과 날짜별 Markdown으로 보관하는 iPhone 앱",
    kicker: "APP NODE 01-F",
    signal: "INSTANT CAPTURE / LOCAL FIRST",
    eyebrow: "생각은 기다려주지 않습니다.",
    title: "싹 메모",
    heroLine: "떠오른 순간, 바로 기록.",
    heroDescription: "위젯이나 제어 센터에서 한 번 탭해 말하거나 쓰세요. 작은 생각은 기기 안의 보관함에 차곡차곡 쌓이고, 필요할 때 다시 찾을 수 있습니다.",
    status: "출시 준비",
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
        description: "지원되는 기기에서 한국어 온디바이스 받아쓰기가 바로 시작됩니다.",
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
    libraryTitle: "날짜로 모이고, 검색과 필터로 다시 만납니다.",
    libraryDescription: "본문과 태그를 함께 검색하고, 즐겨찾기·기간·입력 방식으로 좁혀 보세요. 편집한 메모와 휴지통까지 한 보관함 안에서 이어집니다.",
    libraryScreens: [
      { label: "DETAIL", title: "메모를 다듬고 태그하기", imageAlt: "본문과 태그, 즐겨찾기를 편집하는 싹 메모 상세 화면" },
      { label: "FILTER", title: "필요한 생각만 골라 보기", imageAlt: "기간과 태그, 입력 방식으로 메모를 거르는 싹 메모 필터 화면" },
    ],
    localKicker: "내 기록의 위치가 분명하도록",
    localTitle: "메모는 내 기기에, 필요할 때 Markdown으로.",
    localDescription: "싹 메모의 기준 데이터는 iPhone 안에 저장됩니다. 날짜별 Markdown은 Files 앱의 ‘나의 iPhone > 싹 메모’에서 확인할 수 있습니다.",
    markdownLabel: "FILES / 싹 메모 / 2026-08-29.md",
    markdownDate: "2026-08-29",
    markdownEntries: ["09:41  다음 주 수요일, 회의 전에 새 흐름 다시 보기.", "18:26  퇴근길에 꽃집 들러 작은 화분 하나 보기."],
    principles: [
      { label: "LOCAL", title: "계정 없이 로컬 저장", description: "메모와 태그의 기준 데이터는 기기 안에 남습니다." },
      { label: "PRIVATE", title: "기록을 수집하지 않음", description: "자체 서버, 광고, 분석 SDK나 추적 기능이 없습니다." },
      { label: "OPEN", title: "날짜별 열린 형식", description: "읽기 쉬운 Markdown 파일로 기록을 따로 확인할 수 있습니다." },
    ],
    specLabel: "CURRENT BUILD",
    specs: [
      { term: "VERSION", value: "1.0 (5)" },
      { term: "DEVICE", value: "iPhone" },
      { term: "SYSTEM", value: "iOS 17+" },
      { term: "CAPTURE", value: "Widget · Control Center*" },
    ],
    controlCenterNote: "* 제어 센터 캡처는 iOS 18 이상에서 사용할 수 있습니다.",
    finalKicker: "EVERY MEMO STARTS AS A SPROUT.",
    finalTitle: "그렇게 모인 메모는 하나씩 싹이 됩니다. 그 싹을 무엇으로 피워낼지는, 기록한 우리가 결정합니다.",
    footer: "떠오른 순간을 가장 짧은 동선으로 붙잡는 로컬 메모 앱",
  },
  en: {
    pageTitle: "싹 메모 | Capture It the Moment It Appears",
    pageDescription: "An iPhone memo app that opens voice or text capture in one tap and keeps every note locally with daily Markdown output.",
    kicker: "APP NODE 01-F",
    signal: "INSTANT CAPTURE / LOCAL FIRST",
    eyebrow: "Ideas do not wait.",
    title: "싹 메모",
    heroLine: "Capture it the moment it appears.",
    heroDescription: "Tap once from a widget or Control Center, then speak or type. Small thoughts collect in a library on your device, ready to find again.",
    status: "Preparing",
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
        description: "On supported devices, Korean on-device dictation starts right away.",
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
    libraryTitle: "Grouped by date, found again by search and filters.",
    libraryDescription: "Search text and tags together, then narrow the library by favorites, date range, or capture method. Editing and the 30-day trash stay in the same flow.",
    libraryScreens: [
      { label: "DETAIL", title: "Refine and tag a note", imageAlt: "The 싹 메모 detail screen for editing text, tags, and favorites" },
      { label: "FILTER", title: "See only the thoughts you need", imageAlt: "The 싹 메모 filter screen for date, tag, and capture method" },
    ],
    localKicker: "A clear home for your notes",
    localTitle: "On your device, and in Markdown when you need it.",
    localDescription: "The source data for 싹 메모 stays on your iPhone. Daily Markdown files are also available in Files under ‘On My iPhone > 싹 메모.’",
    markdownLabel: "FILES / 싹 메모 / 2026-08-29.md",
    markdownDate: "2026-08-29",
    markdownEntries: ["09:41  Review the new flow before Wednesday's meeting.", "18:26  Stop by the flower shop and find a small plant."],
    principles: [
      { label: "LOCAL", title: "Local, without an account", description: "The source data for notes and tags stays on your device." },
      { label: "PRIVATE", title: "No collection of your notes", description: "There is no app-owned server, advertising, analytics SDK, or tracking." },
      { label: "OPEN", title: "An open daily format", description: "Your notes are also available as readable Markdown files." },
    ],
    specLabel: "CURRENT BUILD",
    specs: [
      { term: "VERSION", value: "1.0 (5)" },
      { term: "DEVICE", value: "iPhone" },
      { term: "SYSTEM", value: "iOS 17+" },
      { term: "CAPTURE", value: "Widget · Control Center*" },
    ],
    controlCenterNote: "* Control Center capture requires iOS 18 or later.",
    finalKicker: "EVERY MEMO STARTS AS A SPROUT.",
    finalTitle: "The notes we gather become sprouts. What they grow into is ours to decide.",
    footer: "A local memo app with the shortest path from thought to note",
  },
  ja: {
    pageTitle: "싹 메모 | 思いついた瞬間、すぐ記録",
    pageDescription: "ウィジェットやコントロールセンターからワンタップで音声・テキスト入力を始め、メモを端末内と日別Markdownに残すiPhoneアプリ。",
    kicker: "APP NODE 01-F",
    signal: "INSTANT CAPTURE / LOCAL FIRST",
    eyebrow: "アイデアは待ってくれません。",
    title: "싹 메모",
    heroLine: "思いついた瞬間、すぐ記録。",
    heroDescription: "ウィジェットやコントロールセンターから一度タップして、話すか入力するだけ。小さな考えが端末内の保管庫に積み重なり、必要な時にまた見つかります。",
    status: "リリース準備中",
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
        description: "対応端末では、韓国語のオンデバイス音声入力がすぐ始まります。",
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
    libraryTitle: "日付でまとまり、検索とフィルターで再会します。",
    libraryDescription: "本文とタグを一緒に検索し、お気に入り・期間・入力方法で絞り込めます。編集したメモと30日間のゴミ箱も、一つの保管庫につながっています。",
    libraryScreens: [
      { label: "DETAIL", title: "メモを整えてタグを付ける", imageAlt: "本文、タグ、お気に入りを編集する싹 메모の詳細画面" },
      { label: "FILTER", title: "必要な考えだけを選ぶ", imageAlt: "期間、タグ、入力方法で絞り込む싹 메모のフィルター画面" },
    ],
    localKicker: "記録の置き場所を明確に",
    localTitle: "メモは端末に。必要な時はMarkdownにも。",
    localDescription: "싹 메모の基準データはiPhone内に保存されます。日別Markdownは「このiPhone内 > 싹 메모」のFilesアプリから確認できます。",
    markdownLabel: "FILES / 싹 메모 / 2026-08-29.md",
    markdownDate: "2026-08-29",
    markdownEntries: ["09:41  水曜日の会議前に、新しい流れをもう一度確認する。", "18:26  帰りに花屋へ寄って、小さな鉢植えを見る。"],
    principles: [
      { label: "LOCAL", title: "アカウントなしで端末保存", description: "メモとタグの基準データは端末内に残ります。" },
      { label: "PRIVATE", title: "記録を収集しない", description: "独自サーバー、広告、分析SDK、トラッキングはありません。" },
      { label: "OPEN", title: "日別のオープンな形式", description: "読みやすいMarkdownファイルでも記録を確認できます。" },
    ],
    specLabel: "CURRENT BUILD",
    specs: [
      { term: "VERSION", value: "1.0 (5)" },
      { term: "DEVICE", value: "iPhone" },
      { term: "SYSTEM", value: "iOS 17+" },
      { term: "CAPTURE", value: "Widget · Control Center*" },
    ],
    controlCenterNote: "* コントロールセンターからの記録にはiOS 18以降が必要です。",
    finalKicker: "EVERY MEMO STARTS AS A SPROUT.",
    finalTitle: "集まったメモは、一つずつ芽になります。その芽を何に育てるかは、記録した私たちが決めます。",
    footer: "思いついた瞬間を最短ルートでつかまえるローカルメモアプリ",
  },
};

const supportHref = "https://hiorio.github.io/ssak-memo-support/";

export function SsakMemoPage({ header, locale, appsHref }: { header: ReactNode; locale: Locale; appsHref: string }) {
  const copy = ssakMemoCopy[locale];
  const asset = (file: string) => `${import.meta.env.BASE_URL}product-shots/ssak-memo/${file}`;
  const icon = `${import.meta.env.BASE_URL}app-icons/ssak-memo.webp`;

  return (
    <main className="site-shell ssak-shell">
      <div className="ssak-paper" aria-hidden="true" />
      {header}

      <section className="ssak-hero" id="page-content" aria-labelledby="ssak-page-title">
        <div className="ssak-hero-copy">
          <div className="ssak-kicker"><span>{copy.kicker}</span><span>{copy.signal}</span></div>
          <div className="ssak-brand-mark"><img src={icon} alt="" width="80" height="80" /><span>QUICK MEMO / iPHONE</span></div>
          <p className="ssak-eyebrow">{copy.eyebrow}</p>
          <h1 id="ssak-page-title">{copy.title}</h1>
          <strong>{copy.heroLine}</strong>
          <p>{copy.heroDescription}</p>
          <div className="ssak-actions">
            <span className="ssak-status"><i />{copy.status}</span>
            <a className="is-primary" href={supportHref} target="_blank" rel="noreferrer">{copy.support}<span aria-hidden="true">↗</span></a>
            <a href={appsHref}>{copy.backToApps}<span aria-hidden="true">←</span></a>
          </div>
        </div>

        <figure className="ssak-hero-visual">
          <div className="ssak-hero-screen">
            <img src={asset("01-library.webp")} alt={copy.heroVisualLabel} width="660" height="1434" decoding="async" />
          </div>
          <figcaption><span>01 / LIBRARY</span><strong>{copy.heroScreenLabel}</strong></figcaption>
          <div className="ssak-capture-signal" aria-hidden="true"><i /><span>ONE TAP</span><b>REC → TEXT</b></div>
        </figure>
      </section>

      <section className="ssak-capture" aria-labelledby="ssak-capture-title">
        <header className="ssak-section-heading">
          <span>01 / CAPTURE</span>
          <div><p>{copy.captureKicker}</p><h2 id="ssak-capture-title">{copy.captureTitle}</h2><strong>{copy.captureDescription}</strong></div>
        </header>
        <div className="ssak-capture-grid">
          {copy.captureModes.map((mode, index) => (
            <article className={index === 0 ? "is-voice" : "is-text"} key={mode.label}>
              <div className="ssak-mode-copy">
                <span>0{index + 1} / {mode.label}</span>
                <h3>{mode.title}</h3>
                <p>{mode.description}</p>
                <small><i />{mode.note}</small>
              </div>
              <figure><img src={asset(index === 0 ? "03-voice.webp" : "02-text.webp")} alt={mode.imageAlt} width="660" height="1434" loading="lazy" decoding="async" /></figure>
            </article>
          ))}
        </div>
      </section>

      <section className="ssak-library" aria-labelledby="ssak-library-title">
        <div className="ssak-library-copy">
          <span>02 / LIBRARY</span>
          <p>{copy.libraryKicker}</p>
          <h2 id="ssak-library-title">{copy.libraryTitle}</h2>
          <strong>{copy.libraryDescription}</strong>
        </div>
        <div className="ssak-library-screens">
          {copy.libraryScreens.map((screen, index) => (
            <figure key={screen.label}>
              <img src={asset(index === 0 ? "04-detail.webp" : "05-filter.webp")} alt={screen.imageAlt} width="660" height="1434" loading="lazy" decoding="async" />
              <figcaption><span>0{index + 1} / {screen.label}</span><strong>{screen.title}</strong></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="ssak-local" aria-labelledby="ssak-local-title">
        <header className="ssak-local-heading">
          <span>03 / LOCAL &amp; OPEN</span>
          <div><p>{copy.localKicker}</p><h2 id="ssak-local-title">{copy.localTitle}</h2><strong>{copy.localDescription}</strong></div>
        </header>
        <div className="ssak-local-grid">
          <div className="ssak-markdown" role="group" aria-label={copy.markdownLabel}>
            <div className="ssak-markdown-bar"><span>{copy.markdownLabel}</span><i>MD</i></div>
            <div className="ssak-markdown-body">
              <span># {copy.markdownDate}</span>
              {copy.markdownEntries.map((entry) => <p key={entry}>{entry}</p>)}
              <b aria-hidden="true">_</b>
            </div>
          </div>
          <div className="ssak-principles">
            {copy.principles.map((principle, index) => (
              <article key={principle.label}><span>0{index + 1}</span><div><small>{principle.label}</small><h3>{principle.title}</h3><p>{principle.description}</p></div></article>
            ))}
          </div>
        </div>
        <div className="ssak-specs" aria-label={copy.specLabel}>
          <span>{copy.specLabel}</span>
          <dl>{copy.specs.map((spec) => <div key={spec.term}><dt>{spec.term}</dt><dd>{spec.value}</dd></div>)}</dl>
          <small>{copy.controlCenterNote}</small>
        </div>
      </section>

      <section className="ssak-final">
        <img src={icon} alt="" width="112" height="112" loading="lazy" decoding="async" />
        <p>{copy.finalKicker}</p>
        <h2>{copy.finalTitle}</h2>
        <div><a href={supportHref} target="_blank" rel="noreferrer">{copy.support}<span aria-hidden="true">↗</span></a><a href={appsHref}>{copy.backToApps}<span aria-hidden="true">←</span></a></div>
      </section>

      <footer className="site-footer ssak-footer">
        <div><span className="footer-node">NODE_01-F</span><p>{copy.footer}</p></div><span>© 2026 싹 메모</span>
      </footer>
    </main>
  );
}
