import { useState, type ReactNode } from "react";
import { productApps } from "./apps";
import type { Locale } from "./i18n";
import { timeRootsDays, timeRootsWeeks } from "./timeroots-demo";
import "./timeroots.css";

export const timeRootsCopy = {
  ko: {
    pageTitle: "TimeRoots | 하루의 기록이 삶의 흐름으로", pageDescription: "한 번의 탭으로 활동을 기록하고, 타임라인과 주·월 분석으로 돌아보는 로컬 우선 타임트래커.",
    title: ["하루의 기록이,", "삶의 흐름으로."], intro: "책을 읽은 시간, 걸었던 오후, 몰입했던 순간. 작은 기록을 모아 내가 보낸 시간을 차분히 돌아보세요.", install: "App Store에서 만나기", browse: "실제 앱 화면 보기", back: "모든 서비스", week: "한 주", month: "한 달", chart: "기록한 시간이 쌓이는 모습", example: "기능 설명용 예시 · 실제 앱 화면이 아닙니다", range: "2026년 2월", unit: "분", total: "기록한 시간", hint: "막대를 누르면 해당 기간의 기록을 볼 수 있어요.", selected: "선택한 기간", reading: "아침 독서", walk: "저녁 산책", note: "기록하지 않은 시간에 점수를 매기지 않아요.", noteBody: "비어 있는 시간은 휴식이나 낭비로 판단하지 않습니다. 내가 남긴 기록만 돌아봅니다.", screens: "당신의 하루를, 있는 그대로.", screensBody: "한 번의 탭으로 활동을 시작하고 끝내세요. 놓친 기록은 나중에 더하고, 겹친 활동은 나란히 확인할 수 있습니다.", timeline: "하루는 타임라인으로", analytics: "한 주와 한 달은 분석으로", caption: "TimeRoots 1.2 실제 앱 화면 · 한국어 · 테스트 기록", privacy: "내 시간은 내 기기에.", privacyBody: "계정 없이 시작하고 기록은 기기에 보관합니다. 필요할 때만 Markdown으로 하루를 내보내거나 JSON으로 백업할 수 있어요.", calendar: "캘린더 연결은 선택 사항입니다. 연결해도 일정은 읽기만 하고 수정하지 않습니다.", end: "오늘의 작은 기록부터.", support: "도움말 및 문의", overlap: "실제 앱은 겹친 활동의 합계와 중복을 제외한 기록 시간을 구분합니다. 이 예시에는 겹친 활동이 없습니다.", days: "일", weekLabel: "주차",
  },
  en: {
    pageTitle: "TimeRoots | Small records, a fuller picture", pageDescription: "A local-first activity tracker with one-tap recording, timelines, and weekly and monthly reflection.",
    title: ["Small records.", "A fuller picture."], intro: "A chapter read. An afternoon walk. A moment of focus. Bring the small pieces together and see how you spent your time.", install: "Find it on the App Store", browse: "See the actual app", back: "All services", week: "Week", month: "Month", chart: "See your recorded time accumulate", example: "Illustrative example · not an app screenshot", range: "February 2026", unit: "min", total: "Recorded time", hint: "Select a bar to explore that period’s records.", selected: "Selected period", reading: "Morning reading", walk: "Evening walk", note: "Unrecorded time is not a score.", noteBody: "A gap is not judged as rest or wasted time. Reflect only on what you chose to record.", screens: "Your day, as it happened.", screensBody: "Start and stop an activity with a tap. Add missed records later, and see overlapping activities side by side.", timeline: "A timeline for your day", analytics: "A view of your week and month", caption: "Actual TimeRoots 1.2 screens · Korean UI · test records", privacy: "Your time stays on your device.", privacyBody: "Start without an account. Keep records locally, export a day as Markdown, or make a JSON backup when you need one.", calendar: "Calendar access is optional and read-only. TimeRoots does not edit your events.", end: "Begin with a small record today.", support: "Help and contact", overlap: "The app distinguishes summed activity durations from time recorded without overlap. This example has no overlapping activities.", days: "", weekLabel: "Week",
  },
  ja: {
    pageTitle: "TimeRoots | 一日の記録が、暮らしの流れに", pageDescription: "ワンタップで活動を記録。タイムラインと週・月の分析で振り返る、ローカル優先のタイムトラッカー。",
    title: ["一日の記録が、", "暮らしの流れに。"], intro: "本を読んだ時間、散歩した午後、集中したひととき。小さな記録を集めて、自分が過ごした時間をゆっくり振り返りましょう。", install: "App Storeで見る", browse: "実際のアプリ画面を見る", back: "すべてのサービス", week: "週", month: "月", chart: "記録した時間の積み重なり", example: "機能説明用の例 · アプリ画面ではありません", range: "2026年2月", unit: "分", total: "記録した時間", hint: "棒を選ぶと、その期間の記録を確認できます。", selected: "選択した期間", reading: "朝の読書", walk: "夕方の散歩", note: "記録のない時間を、評価しません。", noteBody: "空白を休息や無駄とは判断しません。自分が残した記録だけを振り返ります。", screens: "一日を、ありのままに。", screensBody: "ワンタップで活動を開始・終了。忘れた記録は後から追加し、重なった活動は並べて確認できます。", timeline: "一日をタイムラインで", analytics: "一週間と一か月を分析で", caption: "TimeRoots 1.2の実際の画面 · 韓国語UI · テスト記録", privacy: "あなたの時間は、あなたの端末に。", privacyBody: "アカウントなしで始められます。記録は端末内に保存。必要な時に一日をMarkdownで書き出したり、JSONでバックアップできます。", calendar: "カレンダー連携は任意です。読み取り専用で、予定を変更しません。", end: "今日の小さな記録から。", support: "ヘルプ・お問い合わせ", overlap: "実際のアプリは活動時間の合計と重複を除いた記録時間を区別します。この例に重複した活動はありません。", days: "日", weekLabel: "週目",
  },
};

export function TimeRootsPage({ header, locale, appsHref }: { header: ReactNode; locale: Locale; appsHref: string }) {
  const c = timeRootsCopy[locale];
  const [period, setPeriod] = useState<"week" | "month">("week");
  const [selected, setSelected] = useState(0);
  const app = productApps.find((item) => item.id === "timeroots")!;
  const store = app.links.find((link) => link.kind === "appStore")!.href;
  const support = app.links.find((link) => link.kind === "support")!.href;
  const bars = period === "week" ? timeRootsDays.slice(0, 7).map((day) => ({ label: `2/${day.day}`, minutes: day.minutes })) : timeRootsWeeks.map((week) => ({ label: `2/${week.start}–${week.end}`, minutes: week.minutes }));
  const current = bars[selected];
  const ceiling = period === "week" ? 100 : 500;
  const base = import.meta.env.BASE_URL;
  return <main className="site-shell tr-shell">
    {header}
    <div id="page-content" className="tr-content">
      <div className="tr-product"><img src={`${base}${app.icon}`} width="48" height="48" alt="" /><strong>TimeRoots</strong><span>iOS</span><a href={appsHref}>{c.back}</a></div>
      <section className="tr-hero" aria-labelledby="tr-title">
        <div className="tr-intro"><h1 id="tr-title">{c.title.map((line) => <span key={line}>{line}</span>)}</h1><p>{c.intro}</p><a className="tr-button" href={store}>{c.install}</a><a className="tr-text-link" href="#tr-screens">{c.browse}</a></div>
        <figure className="tr-records">
          <div className="tr-chart-heading"><h2>{c.chart}</h2><div className="tr-toggle" role="group" aria-label={c.chart}>{(["week", "month"] as const).map((value) => <button type="button" key={value} aria-pressed={period === value} onClick={() => { setPeriod(value); setSelected(0); }}>{c[value]}</button>)}</div></div>
          <div className="tr-period"><span>{c.range}{period === "week" ? " · 1–7" : ""}</span><span>{c.total} <b>{bars.reduce((sum, bar) => sum + bar.minutes, 0)} {c.unit}</b></span></div>
          <div className="tr-plot"><div className="tr-scale" aria-hidden="true"><span>{ceiling} {c.unit}</span><span>{ceiling / 2}</span><span>0</span></div><div className="tr-bars">{bars.map((bar, index) => <button key={`${period}-${bar.label}`} className="tr-bar" type="button" aria-pressed={index === selected} aria-label={`${bar.label}: ${bar.minutes} ${c.unit}`} onClick={() => setSelected(index)}><span className="tr-bar-space"><i style={{ height: `${bar.minutes / ceiling * 100}%` }} /><b>{bar.minutes}</b></span><span>{bar.label}</span></button>)}</div></div>
          <p className="tr-hint">{c.hint}</p>
          <div className="tr-detail" aria-live="polite"><div><span>{c.selected}</span><strong>{current.label}</strong></div><ol>{(period === "week" ? [{ label: c.reading, minutes: Math.ceil(current.minutes / 2), time: "08:00" }, { label: c.walk, minutes: Math.floor(current.minutes / 2), time: "18:00" }] : timeRootsDays.slice(selected * 7, selected * 7 + 7).map((day) => ({ label: `${c.total}`, minutes: day.minutes, time: `2/${day.day}` }))).map((item) => <li key={item.time}><time>{item.time}</time><span>{item.label}</span><b>{item.minutes} {c.unit}</b></li>)}</ol></div>
          <figcaption>{c.example}</figcaption>
        </figure>
      </section>
      <section className="tr-principle"><h2>{c.note}</h2><div><p>{c.noteBody}</p><p className="tr-fine">{c.overlap}</p></div></section>
      <section className="tr-screens" id="tr-screens" aria-labelledby="tr-screens-title"><div className="tr-screen-copy"><h2 id="tr-screens-title">{c.screens}</h2><p>{c.screensBody}</p><p className="tr-fine">{c.caption}</p></div><div className="tr-screen-pair">{[["03-timeline", c.timeline], ["04-analytics", c.analytics]].map(([file, label]) => <figure key={file}><figcaption>{label}</figcaption><a href={`${base}product-shots/timeroots/${file}.webp`} aria-label={label}><img src={`${base}product-shots/timeroots/${file}.webp`} alt={label} width="792" height="1721" loading="lazy" /></a></figure>)}</div></section>
      <section className="tr-privacy"><h2>{c.privacy}</h2><div><p>{c.privacyBody}</p><p>{c.calendar}</p></div></section>
      <footer className="tr-footer"><h2>{c.end}</h2><div><a className="tr-button" href={store}>{c.install}</a><a className="tr-text-link" href={support}>{c.support}</a></div><span>TimeRoots · HIORIO</span></footer>
    </div>
  </main>;
}
