import { useState, type ReactNode } from "react";
import type { Locale } from "./i18n";
import type { GrowingProject } from "./growing-projects";
import "./daymirror.css";

const copy = {
  ko: {
    back: "틔운 앱들", available: "App Store에서 만나요", title: ["계획한 하루와", "살아낸 하루 사이."],
    intro: "빼곡하게 채우기보다, 나의 시간을 알아가는 일. 계획과 실제를 나란히 놓고 내일의 여유를 찾아요.",
    store: "App Store에서 보기", explore: "하루를 따라가 보기", paid: "유료 앱 · 가격과 지원 환경은 App Store에서 확인하세요.",
    caption: "실제 앱 화면 · 이해를 돕기 위한 예시 일정", minute: "10분", minuteText: "작게 나누는 하루", columns: "두 개의 열", columnsText: "계획과 실제를 나란히", devices: "세 가지 기기", devicesText: "iPhone · iPad · Mac",
    dayTitle: "하루의 흐름에 맞춰.", dayIntro: "아침에 그려둔 하루가 꼭 그대로 흘러갈 필요는 없으니까요.",
    scenes: [
      { time: "07:40", label: "하루를 그릴 때", title: "오늘의 시간을\n10분씩 펼쳐요.", text: "하고 싶은 일을 시간 위에 놓아보세요. 계획은 왼쪽, 실제로 보낸 시간은 오른쪽. 두 열의 차이를 보며 나에게 맞는 속도를 찾아갑니다.", image: "01-daily" },
      { time: "15:20", label: "생각이 떠오를 때", title: "할 일과 메모도\n하루 곁에.", text: "떠오르는 일은 먼저 적어두고, 준비가 되면 계획에 배치하세요. 반복되는 일은 루틴으로, 잘 맞았던 하루는 일정 복제로 이어갑니다.", image: "04-todos" },
      { time: "21:40", label: "하루를 돌아볼 때", title: "얼마나 했는지보다,\n어떻게 보냈는지.", text: "계획과 기록을 함께 돌아보세요. 활동별 시간과 하루의 차이를 살펴보며 다음 계획을 조금 더 현실적으로 다듬어요.", image: "07-review" },
    ],
    monthTitle: "하루가 모이면,\n나의 패턴이 보여요.", monthText: "월간 시간표에서 날짜별 흐름을 한눈에. 계획과 실제를 바꿔보며 반복되는 시간과 달라진 하루를 살펴보세요.", plan: "계획", actual: "실제", monthLabel: "월간 화면 선택", full: "화면 크게 보기 ↗",
    themeTitle: "내 하루에 어울리는 색.", themeText: "밝은 종이 같은 낮부터 차분한 밤까지. 실제 앱의 테마를 살펴보세요.", themes: ["기본", "페이퍼", "미드나이트"],
    privacyTitle: "개인적인 하루니까.", privacyText: "기록은 먼저 기기에 저장하고, iCloud를 사용할 수 있으면 같은 Apple 계정의 비공개 CloudKit으로 동기화합니다. 건강 정보나 현재 위치에는 접근하지 않아요.", privacy: "개인정보 처리방침", support: "도움말 및 문의", end: "내일은 조금 더, 나답게.", endText: "계획하고, 살아보고, 돌아보는 하루. DayMirror와 시작해요.",
  },
  en: {
    back: "Apps in bloom", available: "Available on the App Store", title: ["The day you planned.", "The day you lived."], intro: "Not another day to fill. A little space to understand your time, with plans and reality side by side.", store: "View on the App Store", explore: "Follow a day", paid: "Paid app · Check the App Store for pricing and compatibility.", caption: "Actual app screens with illustrative sample schedules", minute: "10 min", minuteText: "A small unit for your day", columns: "Two columns", columnsText: "Plans beside actual time", devices: "Three devices", devicesText: "iPhone · iPad · Mac",
    dayTitle: "In step with your day.", dayIntro: "A day doesn't have to unfold exactly as you planned it.",
    scenes: [
      { time: "07:40", label: "Make room for your day", title: "A day,\nten minutes at a time.", text: "Place activities on your timeline. Plans on the left, actual time on the right. The difference helps you find your own pace.", image: "01-daily" },
      { time: "15:20", label: "Catch a thought", title: "To-dos and notes,\nclose to your day.", text: "Capture a task first, then schedule it when you are ready. Use routines for recurring activities and copy a day that worked well.", image: "04-todos" },
      { time: "21:40", label: "Look back", title: "Not just how much.\nBut how it felt to live it.", text: "Review your plans alongside your records. See time by activity and adjust tomorrow's plans to better fit reality.", image: "07-review" },
    ], monthTitle: "Days add up.\nPatterns emerge.", monthText: "See the rhythm of a month in one timeline. Switch between plans and actual records to notice recurring time and changing days.", plan: "Plan", actual: "Actual", monthLabel: "Monthly view", full: "View full screen ↗", themeTitle: "A color for your kind of day.", themeText: "From a paper-light morning to a quiet night. Explore the app's actual themes.", themes: ["Default", "Paper", "Midnight"], privacyTitle: "Your day is personal.", privacyText: "Records are saved on your device first. When iCloud is available, they sync through your private CloudKit database under the same Apple Account. No Health or current-location access.", privacy: "Privacy policy", support: "Help & contact", end: "A tomorrow that feels like you.", endText: "Plan it. Live it. Look back. Start with DayMirror.",
  },
  ja: {
    back: "芽吹いたアプリ", available: "App Storeで公開中", title: ["計画した一日と、", "過ごした一日の間。"], intro: "予定を詰め込むより、自分の時間を知ること。計画と実績を並べて、明日の余白を見つけましょう。", store: "App Storeで見る", explore: "一日の流れを見る", paid: "有料アプリ · 価格と対応環境はApp Storeでご確認ください。", caption: "実際のアプリ画面・説明用のサンプル予定（英語UI）", minute: "10分", minuteText: "小さく区切る一日", columns: "二つの列", columnsText: "計画と実績を並べて", devices: "三つのデバイス", devicesText: "iPhone · iPad · Mac",
    dayTitle: "一日の流れに寄り添って。", dayIntro: "朝に描いた一日が、計画通りでなくても大丈夫。",
    scenes: [
      { time: "07:40", label: "一日を描くとき", title: "今日の時間を、\n10分ずつ。", text: "やりたいことを時間の上に。左に計画、右に実際の記録。違いを眺めながら、自分のペースを見つけます。", image: "01-daily" },
      { time: "15:20", label: "思いついたとき", title: "タスクもメモも、\n一日のそばに。", text: "まず書き留めて、準備ができたら予定に。繰り返す活動はルーティンで、うまくいった一日は予定の複製でつなげます。", image: "04-todos" },
      { time: "21:40", label: "一日を振り返るとき", title: "どれだけではなく、\nどう過ごしたか。", text: "計画と記録を一緒に振り返り。活動別の時間を見ながら、次の計画を自分に合うものに整えます。", image: "07-review" },
    ], monthTitle: "一日が重なると、\n自分のリズムが見える。", monthText: "月間タイムラインで日々の流れを一覧。計画と実績を切り替えて、繰り返す時間や変化を見つけましょう。", plan: "計画", actual: "実績", monthLabel: "月間表示", full: "大きく見る ↗", themeTitle: "一日に似合う色。", themeText: "明るい紙のような昼から、静かな夜まで。実際のテーマを見てみましょう。", themes: ["標準", "ペーパー", "ミッドナイト"], privacyTitle: "あなたの一日だから。", privacyText: "記録はまず端末に保存。iCloudが利用できる場合は同じApple Accountの非公開CloudKitで同期します。健康情報や現在地にはアクセスしません。", privacy: "プライバシーポリシー", support: "ヘルプ・お問い合わせ", end: "明日は、もう少し自分らしく。", endText: "計画して、過ごして、振り返る。DayMirrorで始めましょう。",
  },
};

export function DayMirrorPage({ project, header, locale, basePath }: { project: GrowingProject; header: ReactNode; locale: Locale; basePath: string }) {
  const t = copy[locale];
  const [scene, setScene] = useState(0);
  const [actual, setActual] = useState(false);
  const [theme, setTheme] = useState(0);
  const folder = `${basePath}product-shots/daymirror/${locale === "ko" ? "ko" : "en-US"}/`;
  const store = "https://apps.apple.com/app/id6811468895";
  const shot = (name: string) => `${folder}${name}.webp`;
  const themeShot = ["01-daily", "08-theme-paper", "08-theme-midnight"][theme];
  return <main className="site-shell dm-shell">
    {header}
    <div className="dm-content">
      <a className="dm-back" href={`${basePath}apps/`}>← {t.back}</a>
      <section className="dm-hero" id="page-content" tabIndex={-1} aria-labelledby="dm-title">
        <div className="dm-intro">
          <div className="dm-brand"><img src={`${basePath}${project.app.icon}`} width="56" height="56" alt="" /><div><strong>DayMirror</strong><span>{t.available}</span></div></div>
          <p className="dm-eyebrow">PLAN. LIVE. REFLECT.</p>
          <h1 id="dm-title">{t.title[0]}<br /><span>{t.title[1]}</span></h1>
          <p className="dm-lead">{t.intro}</p>
          <div className="dm-actions"><a className="dm-button" href={store} target="_blank" rel="noreferrer">{t.store} <span aria-hidden="true">↗</span></a><a className="dm-text-link" href="#dm-day">{t.explore} ↓</a></div>
          <p className="dm-fine">{t.paid}</p>
        </div>
        <figure className="dm-hero-art"><span className="dm-clock" aria-hidden="true">24<span>HOURS, YOURS.</span></span><div className="dm-phone"><img src={shot("01-daily")} width="1105" height="2400" alt={`${t.plan} / ${t.actual} · ${t.caption}`} fetchPriority="high" /></div><figcaption>{t.caption}</figcaption></figure>
      </section>
      <dl className="dm-facts"><div><dt>{t.minute}</dt><dd>{t.minuteText}</dd></div><div><dt>{t.columns}</dt><dd>{t.columnsText}</dd></div><div><dt>{t.devices}</dt><dd>{t.devicesText}</dd></div></dl>
      <section className="dm-day" id="dm-day" aria-labelledby="dm-day-title">
        <div className="dm-section-head"><p className="dm-eyebrow">A DAY WITH DAYMIRROR</p><h2 id="dm-day-title">{t.dayTitle}</h2><p>{t.dayIntro}</p></div>
        <div className="dm-story">
          <div className="dm-story-copy"><div className="dm-scene-controls" role="group" aria-label={t.dayTitle}>{t.scenes.map((s, i) => <button key={s.time} type="button" aria-pressed={scene === i} onClick={() => setScene(i)}><span>{s.time}</span>{s.label}</button>)}</div><div className="dm-story-text" aria-live="polite"><span className="dm-time">{t.scenes[scene].time}</span><h3>{t.scenes[scene].title}</h3><p>{t.scenes[scene].text}</p></div></div>
          <figure className="dm-story-visual"><div className="dm-phone"><img src={shot(t.scenes[scene].image)} width="1105" height="2400" loading="lazy" alt={`${t.scenes[scene].label} · ${t.caption}`} /></div><figcaption>{t.caption}</figcaption></figure>
        </div>
      </section>
      <section className="dm-month" aria-labelledby="dm-month-title"><div className="dm-month-heading"><div><p className="dm-eyebrow">THE BIGGER PICTURE</p><h2 id="dm-month-title">{t.monthTitle}</h2></div><div><p>{t.monthText}</p><div className="dm-toggle" role="group" aria-label={t.monthLabel}><button type="button" aria-pressed={!actual} onClick={() => setActual(false)}>{t.plan}</button><button type="button" aria-pressed={actual} onClick={() => setActual(true)}>{t.actual}</button></div></div></div><figure><a href={shot(actual ? "06-monthly-actual" : "06-monthly")} target="_blank" rel="noreferrer" aria-label={t.full}><img src={shot(actual ? "06-monthly-actual" : "06-monthly")} width="1800" height="1350" loading="lazy" alt={`${actual ? t.actual : t.plan} · ${t.caption}`} /></a><figcaption><span>{t.caption}</span><a href={shot(actual ? "06-monthly-actual" : "06-monthly")} target="_blank" rel="noreferrer">{t.full}</a></figcaption></figure></section>
      <section className="dm-themes" aria-labelledby="dm-themes-title"><div><p className="dm-eyebrow">MAKE IT YOURS</p><h2 id="dm-themes-title">{t.themeTitle}</h2><p>{t.themeText}</p><div className="dm-theme-controls" role="group" aria-label={t.themeTitle}>{t.themes.map((name, i) => <button type="button" key={name} aria-pressed={theme === i} onClick={() => setTheme(i)}><i className={`dm-swatch dm-swatch-${i}`} aria-hidden="true" />{name}</button>)}</div></div><figure className={`dm-theme-preview dm-theme-${theme}`}><div className="dm-phone"><img src={shot(themeShot)} width="1105" height="2400" loading="lazy" alt={`${t.themes[theme]} · ${t.caption}`} /></div><figcaption>{t.caption}</figcaption></figure></section>
      <section className="dm-privacy"><p className="dm-eyebrow">PRIVATE BY DESIGN</p><h2>{t.privacyTitle}</h2><p>{t.privacyText}</p><div><a href={`${basePath}apps/daymirror/privacy/`}>{t.privacy} ↗</a><a href={`${basePath}apps/daymirror/support/`}>{t.support} ↗</a></div></section>
      <footer className="dm-footer"><img src={`${basePath}${project.app.icon}`} width="72" height="72" alt="DayMirror" /><h2>{t.end}</h2><p>{t.endText}</p><a className="dm-button" href={store} target="_blank" rel="noreferrer">{t.store} ↗</a><p className="dm-fine">{t.paid}</p><a className="dm-back" href={`${basePath}apps/`}>← {t.back}</a><small>HIORIO · IDEAS, TAKING ROOT.</small></footer>
    </div>
  </main>;
}
