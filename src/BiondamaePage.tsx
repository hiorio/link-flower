import { useId, useState, type ReactNode } from "react";
import type { Locale } from "./i18n";
import { productApps } from "./apps";
import { rainVerdict, weatherDays, weatherScreenFiles, type WeatherView } from "./biondamae-demo";
import "./biondamae.css";

export const biondamaeCopy = {
  ko: {
    pageTitle: "비온다매 | 그때 예보와 지금 날씨를 나란히", pageDescription: "분명 비가 온다고 했는데. 바뀌기 전 예보와 실제 날씨의 차이를 기록하는 앱, 비온다매.", name: "비온다매",
    title: ["비 온다매.", "그래서,", "기록합니다."], lead: "분명 비가 온다고 했는데.\n바뀌기 전 예보와 실제 날씨, 그 차이를 보여드려요.", open: "지금 날씨 보기", story: "시작한 이야기", features: "앱 둘러보기", flow: "비교하는 방법", back: "모든 앱 보기",
    invitation: "날짜를 고르고, 같은 시각의 예보와 관측을 나란히 놓아보세요.", demo: "예보와 관측 비교 체험", demoTitle: "그날, 정말 비가 왔을까?", place: "서울 · 2026년 9월 · 예시", dates: "비교할 날짜", views: "표시할 정보", viewNames: ["함께 보기", "그때 예보", "실제 관측"], temperature: "같은 시각의 기온", time: "시각 선택",
    verdicts: { missedRain: ["비 온다매!", "비 예보가 있었지만, 이 시각엔 비가 오지 않았어요."], unexpectedRain: ["비 안 온다매!", "비 예보는 없었는데, 이 시각엔 비가 왔어요."], matched: ["이번엔 맞았네.", "비가 왔는지, 예보와 실제 관측이 같았어요."] },
    rainForecast: ["비 예보 없음", "비 예보"], rainObserved: ["비가 오지 않았어요", "비가 왔어요"], issued: "발표", expected: "예상", observed: "관측", difference: "관측 − 예보", same: "예보와 같은 기온", notice: "설명용 예시입니다. 실제 기상 기록이 아닙니다.", table: "예시 데이터 표로 보기", tableHeaders: ["시각", "예보 기온", "관측 기온", "비 예보", "실제 비"], yes: "있음", no: "없음",
    originTitle: "그 예보는\n어디로 갔을까요?", origin: "분명 비가 온다고 했는데, 다시 날씨 앱을 열어보면 언제 그랬냐는 듯 맑음으로 바뀌어 있던 적 있으신가요?", answer: "그래서 만들었습니다.", answerDetail: "그때의 예보와 실제 날씨의 차이를 보여주는 앱을요.", featureTitle: "날씨를 보고,\n예보를 돌아보고.", shotNote: "실제 앱 화면입니다. 날씨와 수치는 촬영 시점 기준입니다.", enlarge: "원본 화면 크게 보기",
    screens: [
      ["현재와 과거", "오늘 날씨와\n그때의 예보를 함께.", "지금의 관측부터 앞으로 7일, 하루·이틀·3일 전에 발표된 예보까지. 흩어져 있던 날씨를 한 흐름으로 확인합니다."],
      ["하루 상세", "궁금한 하루를\n시간 단위로 자세히.", "날짜를 고르면 그날의 기온 흐름과 강수확률이 이어집니다. 그래프와 시간별 예보로 하루를 살펴보세요."],
      ["예보사 비교", "같은 시간의 날씨,\n여섯 예보사의 답.", "관측 전에 발표된 예보만 골라 실제 날씨와 나란히 놓습니다. 앞으로의 날씨도 여러 예보사의 전망을 함께 살펴봅니다."],
      ["정확도 기록", "한 번의 차이가 쌓이면,\n정확도가 됩니다.", "누가, 언제, 어떤 날씨에 잘 맞혔는지 기록합니다. 같은 조건에서 비교한 정확도에 평가 표본을 함께 보여줍니다."],
    ],
    flowTitle: "예보에서 관측으로.\n관측에서 기록으로.", steps: [["동네를 고르고", "궁금한 지역에서 시작합니다."], ["그때 예보를 꺼내", "언제 발표됐는지 확인합니다."], ["실제 날씨와 맞대고", "같은 시각, 같은 기준으로 비교합니다."], ["차이를 기록합니다", "기온과 비의 차이가 정확도로 쌓입니다."]],
    closing: "오늘은 정말 비가 왔을까요?", closingTitle: "그때 예보, 지금 확인해 보세요.", privacy: "개인정보처리방침", support: "고객지원", safety: "비온다매는 예보와 관측의 차이를 이해하기 위한 서비스입니다. 안전에 관한 결정에는 기상청의 공식 특보와 최신 정보를 함께 확인해 주세요.",
  },
  en: {
    pageTitle: "Biondamae | Then forecast. Now observed.", pageDescription: "An app that keeps earlier forecasts and compares them with what actually happened.", name: "Biondamae",
    title: ["You said rain.", "So we", "kept the forecast."], lead: "The forecast said rain.\nWe show the difference between that forecast and the weather that followed.", open: "See the weather", story: "How it started", features: "Explore the app", flow: "How it compares", back: "All apps",
    invitation: "Pick a date and compare the forecast with observations at the same time.", demo: "Forecast and observation demo", demoTitle: "Did it actually rain?", place: "Seoul · Sep 2026 · Example", dates: "Comparison date", views: "Visible information", viewNames: ["Both", "Forecast", "Observed"], temperature: "Temperature at the same time", time: "Choose time",
    verdicts: { missedRain: ["You said rain!", "Rain was forecast, but none was observed at this time."], unexpectedRain: ["You said no rain!", "No rain was forecast, but it rained at this time."], matched: ["Right this time.", "The forecast and observation agreed on whether it rained."] },
    rainForecast: ["No rain forecast", "Rain forecast"], rainObserved: ["No rain observed", "Rain observed"], issued: "Issued", expected: "Forecast for", observed: "Observed", difference: "Observed − forecast", same: "Same temperature as forecast", notice: "Illustrative example, not actual weather records.", table: "View example data table", tableHeaders: ["Time", "Forecast °C", "Observed °C", "Rain forecast", "Rain observed"], yes: "Yes", no: "No",
    originTitle: "Where did that\nforecast go?", origin: "Have you ever opened a weather app after it had promised rain, only to find a sunny forecast—as if it had never said otherwise?", answer: "That’s why we made this.", answerDetail: "An app that shows the difference between the earlier forecast and the weather that actually happened.", featureTitle: "See the weather.\nLook back at the forecast.", shotNote: "Actual app screenshots in Korean. Weather and values are from the time of capture.", enlarge: "Open full-size screenshot",
    screens: [["Now and then", "Today’s weather.\nYesterday’s forecast.", "See current observations, a seven-day outlook, and forecasts issued one, two, or three days earlier in one place."], ["Daily detail", "A closer look,\nhour by hour.", "Choose a date to follow its temperature and precipitation probability through hourly forecasts."], ["Compare providers", "One moment.\nSix forecasts.", "Put forecasts issued before an observation alongside the actual weather, and compare providers’ outlooks for the days ahead."], ["Accuracy history", "Differences add up\nto accuracy.", "Look back at which forecasts held up, when, and under what conditions—with sample counts alongside comparable accuracy results."]],
    flowTitle: "From forecast to observation.\nFrom observation to record.", steps: [["Choose a place", "Start with the area you want to know."], ["Find the earlier forecast", "Check when it was issued."], ["Compare the weather", "Use the same time and conditions."], ["Keep the difference", "Temperature and rain differences build an accuracy history."]],
    closing: "Did it really rain today?", closingTitle: "Look back at that forecast.", privacy: "Privacy", support: "Support", safety: "Biondamae helps explain differences between forecasts and observations. For safety decisions, also check official weather alerts and the latest information.",
  },
  ja: {
    pageTitle: "ビオンダメ | あの時の予報と実際の天気を並べて", pageDescription: "変わる前の予報と実際の天気、その違いを記録するアプリ。", name: "ビオンダメ",
    title: ["雨って言ったよね。", "だから、", "記録します。"], lead: "確かに雨の予報だったのに。\n変わる前の予報と実際の天気、その違いを見せます。", open: "今の天気を見る", story: "はじまりの話", features: "アプリを見る", flow: "比較の流れ", back: "すべてのアプリ",
    invitation: "日付を選び、同じ時刻の予報と観測を並べてみてください。", demo: "予報と観測の比較体験", demoTitle: "あの日、本当に雨だった？", place: "ソウル · 2026年9月 · 例", dates: "比較する日付", views: "表示する情報", viewNames: ["両方", "当時の予報", "実際の観測"], temperature: "同じ時刻の気温", time: "時刻を選択",
    verdicts: { missedRain: ["雨って言ったよね！", "雨の予報でしたが、この時刻には降りませんでした。"], unexpectedRain: ["降らないって言ったよね！", "雨の予報はなかったのに、この時刻には降りました。"], matched: ["今回は当たったね。", "雨の有無について、予報と観測が一致しました。"] },
    rainForecast: ["雨予報なし", "雨予報あり"], rainObserved: ["雨は降りませんでした", "雨が降りました"], issued: "発表", expected: "予想", observed: "観測", difference: "観測 − 予報", same: "予報と同じ気温", notice: "説明用の例です。実際の気象記録ではありません。", table: "例のデータ表を見る", tableHeaders: ["時刻", "予報気温", "観測気温", "雨予報", "実際の雨"], yes: "あり", no: "なし",
    originTitle: "あの予報は\nどこへ行ったの？", origin: "確かに雨の予報だったのに、もう一度アプリを開くと、何もなかったかのように晴れに変わっていた。そんな経験はありませんか？", answer: "だから、作りました。", answerDetail: "あの時の予報と実際の天気、その違いを見せるアプリを。", featureTitle: "天気を見て、\n予報を振り返る。", shotNote: "実際の韓国語版アプリ画面です。天気と数値は撮影時点のものです。", enlarge: "元の画面を大きく見る",
    screens: [["現在と過去", "今日の天気と\nあの時の予報を一緒に。", "現在の観測から7日間の見通し、1・2・3日前に発表された予報まで、一つの流れで確認できます。"], ["一日の詳細", "気になる一日を\n時間ごとに詳しく。", "日付を選ぶと気温の変化と降水確率を表示。グラフと時間別予報で一日を見渡せます。"], ["予報元を比較", "同じ時刻の天気、\n6つの予報元の答え。", "観測前に発表された予報を実際の天気と並べます。今後の天気も複数の予報元の見通しを確認できます。"], ["精度の記録", "違いが積み重なり、\n精度が見えてくる。", "いつ、どんな天気で当たったかを記録。同条件で比較した精度と評価サンプル数を合わせて表示します。"]],
    flowTitle: "予報から観測へ。\n観測から記録へ。", steps: [["地域を選ぶ", "知りたい地域から始めます。"], ["当時の予報を探す", "発表された時刻も確認します。"], ["実際の天気と比べる", "同じ時刻、同じ基準で比較します。"], ["違いを記録する", "気温と雨の違いが精度の記録になります。"]],
    closing: "今日は本当に雨だった？", closingTitle: "あの時の予報を、今確かめよう。", privacy: "プライバシー", support: "サポート", safety: "予報と観測の違いを理解するためのサービスです。安全に関する判断には、公式の気象警報と最新情報も確認してください。",
  },
};

type WeatherCopy = typeof biondamaeCopy.ko;
const views: WeatherView[] = ["both", "forecast", "observed"];
const serviceUrl = productApps.find((app) => app.id === "biondamae")!.links.find((link) => link.kind === "web")!.href;
const localeTags = { ko: "ko-KR", en: "en-US", ja: "ja-JP" };
function shortDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(localeTags[locale], { month: "short", day: "numeric", timeZone: "UTC" }).format(new Date(`${date}T12:00:00Z`));
}

function Choices({ label, options, selected, onChange, className = "" }: { label: string; options: string[]; selected: number; onChange: (value: number) => void; className?: string }) {
  const name = useId();
  return <fieldset className={`bd-choices ${className}`} onKeyDown={(event) => {
    if (event.key !== "Home" && event.key !== "End") return;
    event.preventDefault();
    const next = event.key === "Home" ? 0 : options.length - 1;
    onChange(next);
    event.currentTarget.querySelectorAll<HTMLInputElement>("input")[next]?.focus();
  }}><legend className="bd-sr-only">{label}</legend>{options.map((option, index) => <label key={option}>
    <input type="radio" name={name} value={index} checked={selected === index} onChange={() => onChange(index)} /><span>{option}</span>
  </label>)}</fieldset>;
}

function WeatherIcon({ rain }: { rain: boolean }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{rain ? <><path d="M6 15a4 4 0 1 1 0-8 6 6 0 0 1 11-1 4.5 4.5 0 1 1 2 9" /><path d="m8 16-1 4m6-4-1 4m6-4-1 4" /></> : <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M19 5l-1.5 1.5m-11 11L5 19" /></>}</svg>;
}

function LinkArrow({ down = false }: { down?: boolean }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={down ? "M12 4v16m-6-6 6 6 6-6" : "M5 19 19 5M7 5h12v12"} /></svg>;
}

function Comparison({ copy: c, locale, basePath }: { copy: WeatherCopy; locale: Locale; basePath: string }) {
  const [dayIndex, setDayIndex] = useState(0);
  const [view, setView] = useState<WeatherView>("both");
  const [timeIndex, setTimeIndex] = useState(4);
  const id = useId();
  const day = weatherDays[dayIndex];
  const point = day.points[timeIndex];
  const verdict = c.verdicts[rainVerdict(point)];
  const delta = point.observed - point.forecast;
  const x = (index: number) => 36 + index * 77;
  const y = (temperature: number) => 145 - (temperature - 18) * 10;
  return <section className="bd-demo" aria-label={c.demo} aria-describedby={`${id}-notice`}>
    <div className="bd-demo-heading"><h2>{c.demoTitle}</h2><p>{c.place}</p></div>
    <div className="bd-verdict"><img src={`${basePath}app-icons/biondamae.png`} width="64" height="64" alt="" /><div role="status" aria-live="polite" aria-atomic="true"><strong>{verdict[0]}</strong><p>{verdict[1]}</p><span className="bd-sr-only">{shortDate(day.date, locale)} {point.time}. {c.viewNames[views.indexOf(view)]}. {c.viewNames[1]} {point.forecast}°C, {c.viewNames[2]} {point.observed}°C.</span></div></div>
    <Choices label={c.dates} className="bd-dates" options={weatherDays.map((item) => shortDate(item.date, locale))} selected={dayIndex} onChange={setDayIndex} />
    <div className="bd-toolbar"><span>{c.temperature} <small>°C</small></span><Choices label={c.views} options={c.viewNames} selected={views.indexOf(view)} onChange={(index) => setView(views[index])} /></div>
    <div className="bd-legend"><span data-muted={view === "observed"}><i className="bd-dash" />{c.viewNames[1]}</span><span data-muted={view === "forecast"}><i className="bd-solid" />{c.viewNames[2]}</span></div>
    <figure className="bd-plot">
      <svg viewBox="0 0 526 178" aria-hidden="true" className="bd-chart">
        {[18,22,26,30].map((tick) => <g key={tick}><line x1="36" y1={y(tick)} x2="498" y2={y(tick)} stroke="#dce7ec" strokeDasharray="3 5" /><text x="25" y={y(tick) + 4} textAnchor="end">{tick}</text></g>)}
        <line x1={x(timeIndex)} x2={x(timeIndex)} y1="20" y2="145" stroke="#8a9eab" strokeDasharray="3 4" />
        {(["forecast", "observed"] as const).filter((key) => view === "both" || view === key).map((key) => <g key={key} className={`bd-series bd-series--${key}`}>
          <polyline points={day.points.map((p, i) => `${x(i)},${y(p[key])}`).join(" ")} fill="none" strokeWidth="2.5" strokeDasharray={key === "forecast" ? "6 5" : undefined} />
          {day.points.map((p, i) => <circle key={p.hour} cx={x(i)} cy={y(p[key])} r={i === timeIndex ? 4.5 : 3} fill="white" strokeWidth="2" />)}
        </g>)}
        {day.points.map((p, i) => <g key={p.hour} className={i % 2 ? "bd-chart-tick-odd" : undefined}><text x={x(i)} y="171" textAnchor="middle">{p.time}</text><rect x={x(i) - 29} y="12" width="58" height="140" fill="transparent" onPointerDown={() => setTimeIndex(i)} onPointerMove={(event) => { if (event.pointerType === "mouse") setTimeIndex(i); }} /></g>)}
      </svg>
      <figcaption className="bd-time"><label htmlFor={`${id}-time`}>{c.time} <strong>{point.time}</strong></label><input id={`${id}-time`} type="range" min="0" max="6" step="1" value={timeIndex} aria-valuetext={`${shortDate(day.date, locale)} ${point.time}`} onChange={(event) => setTimeIndex(Number(event.target.value))} /></figcaption>
    </figure>
    <div className="bd-readings" data-view={view}>
      {view !== "observed" && <div className="bd-reading bd-reading--forecast"><div>{c.viewNames[1]}<WeatherIcon rain={point.forecastRain} /></div><strong>{point.forecast}<span>°C</span></strong><p>{c.rainForecast[Number(point.forecastRain)]}</p><small>{shortDate(day.issued, locale)} 18:00 {c.issued}<br />{shortDate(day.date, locale)} {point.time} {c.expected}</small></div>}
      {view !== "forecast" && <div className="bd-reading bd-reading--observed"><div>{c.viewNames[2]}<WeatherIcon rain={point.observedRain} /></div><strong>{point.observed}<span>°C</span></strong><p>{c.rainObserved[Number(point.observedRain)]}</p><small>{shortDate(day.date, locale)} {point.time} {c.observed}<br />{delta === 0 ? c.same : `${c.difference} ${delta > 0 ? "+" : ""}${delta}°C`}</small></div>}
    </div>
    <p className="bd-notice" id={`${id}-notice`}>{c.notice}</p>
    <details className="bd-data"><summary>{c.table}</summary><div><table><caption>{shortDate(day.date, locale)} · {c.place}</caption><thead><tr>{c.tableHeaders.map((heading) => <th scope="col" key={heading}>{heading}</th>)}</tr></thead><tbody>{day.points.map((p) => <tr key={p.hour}><th scope="row">{p.time}</th><td>{p.forecast}°C</td><td>{p.observed}°C</td><td>{p.forecastRain ? c.yes : c.no}</td><td>{p.observedRain ? c.yes : c.no}</td></tr>)}</tbody></table></div></details>
  </section>;
}

export function BiondamaePage({ header, locale, basePath, appsHref }: { header: ReactNode; locale: Locale; basePath: string; appsHref: string }) {
  const c = biondamaeCopy[locale];
  const [screen, setScreen] = useState(0);
  const shot = `${basePath}product-shots/biondamae/${weatherScreenFiles[screen]}`;
  return <div className="site-shell bd-shell">{header}<main id="page-content">
    <div className="bd-subnav bd-wrap"><a href={appsHref} className="bd-brand"><img src={`${basePath}app-icons/biondamae.png`} width="32" height="32" alt="" />{c.name}</a><nav aria-label={c.features}><a href="#intent">{c.story}</a><a href="#features">{c.features}</a><a href="#flow">{c.flow}</a></nav></div>
    <section className="bd-hero"><div className="bd-wrap bd-hero-inner"><div className="bd-hero-copy"><h1>{c.title[0]}<span>{c.title[1]} <br />{c.title[2]}</span></h1><p className="bd-lead">{c.lead}</p><div className="bd-actions"><a className="bd-button" href={serviceUrl}>{c.open}<LinkArrow /></a><a className="bd-text-link" href="#intent">{c.story}<LinkArrow down /></a></div><p className="bd-invitation">{c.invitation}</p></div><Comparison copy={c} locale={locale} basePath={basePath} /></div></section>
    <section id="intent" className="bd-origin bd-wrap"><h2>{c.originTitle}</h2><div><p>{c.origin}</p><p>{c.answer}<br /><strong>{c.answerDetail}</strong></p></div></section>
    <section id="features" className="bd-features"><div className="bd-wrap"><h2>{c.featureTitle}</h2><Choices label={c.features} options={c.screens.map((item) => item[0])} selected={screen} onChange={setScreen} className="bd-screen-tabs" /><div className="bd-screen-panel"><div><h3>{c.screens[screen][1]}</h3><p>{c.screens[screen][2]}</p><p className="bd-shot-note">{c.shotNote}</p><a className="bd-text-link" href={shot} target="_blank" rel="noreferrer">{c.enlarge}<LinkArrow /></a></div><figure><a href={shot} target="_blank" rel="noreferrer" aria-label={c.enlarge}><img src={shot} width={screen === 3 ? 1200 : 540} height={screen === 3 ? 1920 : 960} alt={`${c.name} — ${c.screens[screen][0]}`} loading="lazy" /></a></figure></div></div></section>
    <section id="flow" className="bd-flow"><div className="bd-wrap"><h2>{c.flowTitle}</h2><ol>{c.steps.map(([title, description], index) => <li key={title}><span className="bd-node" aria-hidden="true">{index + 1}</span><h3>{title}</h3><p>{description}</p></li>)}</ol></div></section>
    <section className="bd-close bd-wrap"><div><h2>{c.closingTitle}</h2><p>{c.closing}</p></div><a href={serviceUrl} className="bd-button">{c.open}<LinkArrow /></a></section>
  </main><footer className="bd-footer bd-wrap"><div><a href={appsHref}>{c.back}</a><a href={`${serviceUrl}privacy`}>{c.privacy}</a><a href={`${serviceUrl}support`}>{c.support}</a></div><p>{c.safety}</p></footer></div>;
}
