import type { ReactNode } from "react";
import type { Locale } from "./i18n";
import "./daily-plank.css";

type DailyPlankCopy = {
  pageTitle: string;
  pageDescription: string;
  title: [string, string];
  heroLine: string;
  heroDescription: string;
  openDemo: string;
  status: string;
  backToApps: string;
  currentStep: string;
  nextStep: string;
  originTitle: string;
  originDescription: string;
  routineKicker: string;
  routineTitle: string;
  routines: Array<{ minutes: string; level: string; title: string; description: string }>;
  coachKicker: string;
  coachTitle: string;
  coachDescription: string;
  cues: Array<{ label: string }>;
  recordKicker: string;
  recordTitle: string;
  recordDescription: string;
  weekDays: string[];
  streakLabel: string;
  streakValue: string;
  totalLabel: string;
  totalValue: string;
  finalKicker: string;
  finalTitle: string;
  footer: string;
};

export const dailyPlankCopy: Record<Locale, DailyPlankCopy> = {
  ko: {
    pageTitle: "매일 플랭크 | 5분부터 시작하는 플랭크 가이드",
    pageDescription: "5·7·10분 루틴과 음성·진동 안내, 운동 기록으로 매일의 플랭크를 이어 갑니다.",
    title: ["매일", "플랭크"],
    heroLine: "운동과 휴식은 앱이 챙길게요.",
    heroDescription: "노란 병아리와 함께, 오늘의 플랭크를 하나씩 이어가세요. 음성과 진동이 다음 동작을 알려줍니다.",
    openDemo: "웹 데모 열기",
    status: "운영 중",
    backToApps: "앱 목록",
    currentStep: "니 플랭크",
    nextStep: "다음 · 기본 포어암 플랭크",
    originTitle: "작은 필요가, 첫 앱이 되기까지.",
    originDescription: "주위에 플랭크 운동을 위한 간단한 가이드가 필요하다는 사람이 있어 만들어 보았습니다. 그렇게 완성한 매일 플랭크는 제 첫 앱이 되었습니다. 이 경험을 계기로 일상에서 느낀 필요를 하나씩 서비스로 만들기 시작했기에, 제게는 모든 시작을 담은 뜻깊은 앱입니다.",
    routineKicker: "오늘의 강도를 고르는 가장 짧은 방법",
    routineTitle: "오늘의 나에게 맞는 만큼.",
    routines: [
      { minutes: "05", level: "초급", title: "처음 버티는 날", description: "기본 자세부터 천천히. 넉넉한 휴식과 함께 첫 루틴을 완성해요." },
      { minutes: "07", level: "중급", title: "조금 더 움직이는 날", description: "버티기에 움직임을 더해요. 익숙해진 몸에 작은 변화를 주세요." },
      { minutes: "10", level: "고급", title: "한 걸음 더 나아가는 날", description: "다양한 고강도 동작과 회복을 번갈아, 오늘의 도전을 이어가요." },
    ],
    coachKicker: "화면을 계속 보지 않아도 되는 코치",
    coachTitle: "숫자는 맡기고,\n호흡을 이어가세요.",
    coachDescription: "동작이 바뀔 때는 음성으로, 마지막 몇 초는 효과음과 진동으로 알립니다. 휴식도 자동으로 넘어가 운동의 흐름이 끊기지 않습니다.",
    cues: [
      { label: "VOICE" },
      { label: "REST" },
      { label: "HAPTIC" },
    ],
    recordKicker: "한 번의 운동을 내일로 연결하는 기록",
    recordTitle: "작은 완료가 쌓이면,\n어느새 매일.",
    recordDescription: "완료한 루틴과 누적 시간, 연속 운동일을 기기에 남깁니다. 완료한 운동일이 늘어날수록 함께 버티는 마스코트도 자랍니다.",
    weekDays: ["월", "화", "수", "목", "금", "토", "일"],
    streakLabel: "연속 운동",
    streakValue: "4일",
    totalLabel: "누적 운동 시간",
    totalValue: "27분",
    finalKicker: "FIVE MINUTES. EVERY DAY.",
    finalTitle: "우리, 오늘도 같이 버텨요.",
    footer: "다음 동작을 챙기고 매일의 기록을 이어 주는 플랭크 가이드",
  },
  en: {
    pageTitle: "Daily Plank | Guided Plank Routines from 5 Minutes",
    pageDescription: "Continue a daily plank practice with 5, 7, and 10-minute routines, voice and haptic cues, and progress tracking.",
    title: ["Daily", "Plank"],
    heroLine: "Let the app handle work and rest.",
    heroDescription: "Follow your little yellow chick through today's plank routine. Voice and haptic cues guide you from one movement to the next.",
    openDemo: "Open web demo",
    status: "Live",
    backToApps: "App index",
    currentStep: "Knee plank",
    nextStep: "Next · Forearm plank",
    originTitle: "A small need. My very first app.",
    originDescription: "Someone close to me needed a simple guide for keeping up with plank workouts, so I tried making one. Daily Plank became the first app I ever built. From there, I began turning the needs I noticed in my own life into services, one by one. That makes this app a meaningful reminder of where everything began.",
    routineKicker: "The shortest way to choose today's intensity",
    routineTitle: "Meet yourself where you are.",
    routines: [
      { minutes: "05", level: "Beginner", title: "A day to begin", description: "Begin with the fundamentals and generous recovery. Take your first routine one hold at a time." },
      { minutes: "07", level: "Intermediate", title: "A day to move more", description: "Add movement to your holds. Bring a little variety to a familiar practice." },
      { minutes: "10", level: "Advanced", title: "Your next small challenge", description: "Alternate more intense movements with recovery and take your practice a step further." },
    ],
    coachKicker: "A coach you do not have to keep watching",
    coachTitle: "Leave the counting.\nKeep breathing.",
    coachDescription: "Voice announces every transition. Sound and haptics mark the final seconds. Rest advances automatically so the workout never loses its rhythm.",
    cues: [
      { label: "VOICE" },
      { label: "REST" },
      { label: "HAPTIC" },
    ],
    recordKicker: "A record that carries one workout into tomorrow",
    recordTitle: "Small finishes.\nAn everyday habit.",
    recordDescription: "Completed routines, accumulated time, and streaks stay on your device. The mascot holding each plank with you grows along with your workout days.",
    weekDays: ["M", "T", "W", "T", "F", "S", "S"],
    streakLabel: "Current streak",
    streakValue: "4 days",
    totalLabel: "Total exercise time",
    totalValue: "27 min",
    finalKicker: "FIVE MINUTES. EVERY DAY.",
    finalTitle: "Let's hold on together today.",
    footer: "A plank guide that handles the next move and keeps every day connected",
  },
  ja: {
    pageTitle: "毎日プランク | 5分から始めるプランクガイド",
    pageDescription: "5・7・10分のルーティン、音声と振動の案内、運動記録で毎日のプランクを続けます。",
    title: ["毎日", "プランク"],
    heroLine: "運動と休憩の切り替えはアプリにおまかせ。",
    heroDescription: "黄色いひよこと、今日のプランクを一つずつ。音声と振動が次の動作を知らせます。",
    openDemo: "Webデモを開く",
    status: "運用中",
    backToApps: "アプリ一覧",
    currentStep: "膝つきプランク",
    nextStep: "次 · フォアアームプランク",
    originTitle: "小さな必要から、最初のアプリへ。",
    originDescription: "身近に、プランク運動を続けるためのシンプルなガイドを必要としている人がいて、つくってみました。毎日プランクは、私が初めてつくったアプリです。この経験をきっかけに、自分の暮らしの中で感じた必要を一つずつサービスにするようになりました。だからこそ、すべての始まりを思い出させてくれる大切なアプリです。",
    routineKicker: "今日の強度を選ぶ、いちばん短い方法",
    routineTitle: "今日の自分に、ちょうどいい運動を。",
    routines: [
      { minutes: "05", level: "初級", title: "まず耐えてみる日", description: "基本の姿勢からゆっくりと。長めの休憩と一緒に、最初のルーティンを。" },
      { minutes: "07", level: "中級", title: "少し多く動く日", description: "キープする姿勢に動きをプラス。慣れた運動に、小さな変化を。" },
      { minutes: "10", level: "上級", title: "もう一歩進む日", description: "強度の高い動作と回復を交互に。今日のチャレンジを続けましょう。" },
    ],
    coachKicker: "画面を見続けなくてもいいコーチ",
    coachTitle: "数えるのはおまかせ。\n呼吸を続けましょう。",
    coachDescription: "動作の切り替えは音声で、最後の数秒は効果音と振動で案内。休憩も自動で進むので、運動の流れが止まりません。",
    cues: [
      { label: "VOICE" },
      { label: "REST" },
      { label: "HAPTIC" },
    ],
    recordKicker: "一回の運動を明日につなぐ記録",
    recordTitle: "小さな達成が、\nいつの間にか毎日に。",
    recordDescription: "完了したルーティン、累積時間、連続運動日を端末に残します。一緒に耐えるマスコットも運動日とともに成長します。",
    weekDays: ["月", "火", "水", "木", "金", "土", "日"],
    streakLabel: "連続運動",
    streakValue: "4日",
    totalLabel: "累積運動時間",
    totalValue: "27分",
    finalKicker: "FIVE MINUTES. EVERY DAY.",
    finalTitle: "今日も、一緒にがんばろう。",
    footer: "次の動作を案内し、毎日の記録をつなぐプランクガイド",
  },
};

const details = {
  ko: {
    headline: ["오늘도,", "5분만 같이."],
    eyebrow: "혼자 하는 운동에도, 같이 버티는 친구.",
    browse: "루틴 살펴보기", demoNote: "설치 없이 웹에서 먼저 만나보세요.",
    preview: "함께 운동하는 순간", previewNote: "앱의 운동 흐름을 보여주는 예시 화면",
    workout: "운동 중", companion: "나도 같이 버티는 중!", companionNote: "혼자가 아닌 오늘의 플랭크",
    minute: "분", routineNote: "5·7·10분은 운동 시간이에요. 준비와 휴식, 마무리 시간은 별도로 포함됩니다.",
    movements: ["8개 운동 동작", "11개 운동 동작", "14개 운동 동작"],
    cueTitles: ["다음 자세는, 목소리로.", "쉬는 시간도 루틴의 일부.", "마지막 3, 2, 1까지."],
    cueTexts: ["동작이 바뀔 때 음성 안내를 따라가세요.", "운동과 휴식이 자동으로 이어집니다.", "효과음과 진동이 전환 순간을 알려줘요."],
    cueNote: "음성과 진동은 기기 및 설정에 따라 다를 수 있습니다.",
    week: "이번 주의 작은 성공", example: "기록 예시", completed: "완료", pending: "기록 없음",
    growth: "하루 더 해낸 만큼, 나도 자라요.", growthNote: "완료한 운동일이 쌓이면 마스코트도 함께 성장합니다.",
    maker: "만든 사람의 이야기", finalNote: "첫 루틴은 5분부터. 오늘의 컨디션에 맞게 시작해보세요.",
  },
  en: {
    headline: ["Five minutes.", "Together, today."],
    eyebrow: "Your own workout. A little friend holding on with you.",
    browse: "Explore routines", demoNote: "Meet the app in your browser. No install needed.",
    preview: "A moment of moving together", previewNote: "An illustrative preview of the workout flow",
    workout: "Holding", companion: "I'm holding on with you!", companionNote: "A little company for today's plank",
    minute: "min", routineNote: "5, 7, and 10 minutes refer to exercise time. Preparation, rest, and cooldown add to the full session.",
    movements: ["8 exercise movements", "11 exercise movements", "14 exercise movements"],
    cueTitles: ["Hear your next movement.", "Rest is part of the routine.", "Through the final 3, 2, 1."],
    cueTexts: ["Follow spoken guidance as the exercise changes.", "Work and recovery move forward automatically.", "Sound and haptics cue the next transition."],
    cueNote: "Voice and haptic availability depends on your device and settings.",
    week: "This week's little wins", example: "Example record", completed: "Completed", pending: "No record",
    growth: "Every day you finish, I grow too.", growthNote: "Your mascot grows as you collect completed workout days.",
    maker: "A note from the maker", finalNote: "Begin with five minutes of exercise. Find the routine that feels right today.",
  },
  ja: {
    headline: ["今日も、", "5分だけ一緒に。"],
    eyebrow: "ひとりの運動にも、一緒にがんばる仲間。",
    browse: "ルーティンを見る", demoNote: "インストールなしで、ブラウザから体験できます。",
    preview: "一緒に運動するひととき", previewNote: "運動の流れを表現したイメージ画面",
    workout: "運動中", companion: "ぼくも一緒にがんばるよ！", companionNote: "今日のプランクは、ひとりじゃない",
    minute: "分", routineNote: "5・7・10分は運動時間です。準備・休憩・クールダウンの時間は別途含まれます。",
    movements: ["8つの運動動作", "11の運動動作", "14の運動動作"],
    cueTitles: ["次の姿勢は、声で。", "休む時間も、運動のうち。", "最後の3・2・1まで。"],
    cueTexts: ["動作が変わるときは、音声の案内に沿って。", "運動と休憩が自動でつながります。", "効果音と振動で切り替えを知らせます。"],
    cueNote: "音声と振動は端末や設定によって異なる場合があります。",
    week: "今週の小さな達成", example: "記録の例", completed: "完了", pending: "記録なし",
    growth: "やり切った日が増えると、ぼくも育つよ。", growthNote: "運動を完了した日数とともに、マスコットも成長します。",
    maker: "つくった人の話", finalNote: "最初のルーティンは5分の運動から。今日の調子に合わせて始めましょう。",
  },
};
type Details = (typeof details)[Locale];
const appIcon = import.meta.env.BASE_URL + "app-icons/daily-plank.png";
const demoUrl = "https://hiorio.github.io/Daily-Plank/";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function WorkoutPreview({ copy, detail }: { copy: DailyPlankCopy; detail: Details }) {
  return (
    <figure className="dp-workout-preview">
      <div className="dp-preview-heading"><span>{detail.preview}</span><span aria-hidden="true">01 / 08</span></div>
      <div className="dp-workout-card">
        <div className="dp-workout-top"><span><i />{copy.routines[0].level}</span><b>05 <small>{detail.minute}</small></b></div>
        <div className="dp-timer-ring">
          <div className="dp-timer-face"><span>{copy.currentStep}</span><strong>00:30</strong><span className="dp-workout-state"><i />{detail.workout}</span></div>
        </div>
        <div className="dp-companion"><img src={appIcon} width="1024" height="1024" alt="" /><div><strong>{detail.companion}</strong><span>{detail.companionNote}</span></div></div>
        <div className="dp-up-next"><strong>{copy.nextStep}</strong><Arrow /></div>
      </div>
      <figcaption>{detail.previewNote}</figcaption>
      <span className="dp-session-stamp" aria-hidden="true">ONE<br />SMALL<br /><b>HOLD.</b></span>
    </figure>
  );
}

export function DailyPlankPage({ header, locale, appsHref }: { header: ReactNode; locale: Locale; appsHref: string }) {
  const copy = dailyPlankCopy[locale];
  const detail = details[locale];
  const name = copy.title.join(locale === "ja" ? "" : " ");

  return (
    <main className="site-shell dailyplank-shell">
      {header}
      <section className="dp-hero" id="page-content" aria-labelledby="dailyplank-page-title">
        <div className="dp-hero-copy">
          <div className="dp-product-name"><img src={appIcon} width="1024" height="1024" alt="" /><span>{name}<small>DAILY PLANK</small></span><span className="dp-live"><i />{copy.status}</span></div>
          <p className="dp-eyebrow">{detail.eyebrow}</p>
          <h1 id="dailyplank-page-title"><span>{detail.headline[0]}</span><em>{detail.headline[1]}</em></h1>
          <p className="dp-introduction"><strong>{copy.heroLine}</strong>{copy.heroDescription}</p>
          <div className="dp-actions"><a className="dp-primary" href={demoUrl} target="_blank" rel="noreferrer">{copy.openDemo}<Arrow diagonal /></a><a className="dp-text-link" href="#dailyplank-routines">{detail.browse}<span aria-hidden="true">↓</span></a></div>
          <p className="dp-demo-note">{detail.demoNote}</p>
        </div>
        <WorkoutPreview copy={copy} detail={detail} />
      </section>

      <section className="dp-routines" id="dailyplank-routines" aria-labelledby="dp-routines-title">
        <div className="dp-section-heading"><div><p className="dp-section-label"><span>01</span>{copy.routineKicker}</p><h2 id="dp-routines-title">{copy.routineTitle}</h2></div><p className="dp-routine-note">{detail.routineNote}</p></div>
        <div className="dp-routine-grid">
          {copy.routines.map((routine, index) => (
            <article className={"dp-routine dp-routine-" + (index + 1)} key={routine.minutes}>
              <div className="dp-routine-top"><span>{routine.level}</span><div className="dp-intensity" aria-hidden="true">{[0, 1, 2].map((bar) => <i className={bar <= index ? "is-filled" : ""} key={bar} />)}</div></div>
              <div className="dp-minutes"><strong>{routine.minutes}</strong><span>{detail.minute}</span></div>
              <h3>{routine.title}</h3><p>{routine.description}</p>
              <div className="dp-routine-bottom"><span>{detail.movements[index]}</span><span aria-hidden="true">{["START SMALL", "KEEP GOING", "GO FURTHER"][index]}</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="dp-coach" aria-labelledby="dp-coach-title">
        <div className="dp-coach-copy">
          <p className="dp-section-label"><span>02</span>{copy.coachKicker}</p><h2 id="dp-coach-title">{copy.coachTitle}</h2><p>{copy.coachDescription}</p>
          <div className="dp-soundwave" aria-hidden="true">{[12, 20, 34, 20, 44, 62, 38, 22, 46, 28, 58, 42, 20, 34, 16, 24, 12].map((height, index) => <i style={{ height }} key={index} />)}<span>3 · 2 · 1</span></div>
        </div>
        <div className="dp-cues">
          {copy.cues.map((cue, index) => <article className="dp-cue" key={cue.label}><span className="dp-cue-icon" aria-hidden="true">{index === 0 ? <svg viewBox="0 0 24 24" fill="none"><path d="M11 5 6 9H3v6h3l5 4V5Z" /><path d="M15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14" /></svg> : index === 1 ? <svg viewBox="0 0 24 24" fill="none"><path d="M8 6v12M16 6v12" /></svg> : <svg viewBox="0 0 24 24" fill="none"><rect x="8" y="4" width="8" height="16" rx="2" /><path d="M4 8v8M20 8v8" /></svg>}</span><div><span className="dp-cue-label">{cue.label}</span><h3>{detail.cueTitles[index]}</h3><p>{detail.cueTexts[index]}</p></div></article>)}
          <p className="dp-cue-note">{detail.cueNote}</p>
        </div>
      </section>

      <section className="dp-record" aria-labelledby="dp-record-title">
        <div className="dp-record-copy"><p className="dp-section-label"><span>03</span>{copy.recordKicker}</p><h2 id="dp-record-title">{copy.recordTitle}</h2><p>{copy.recordDescription}</p><div className="dp-growth"><img src={appIcon} width="1024" height="1024" alt="" loading="lazy" /><div><strong>{detail.growth}</strong><span>{detail.growthNote}</span></div></div></div>
        <div className="dp-history">
          <div className="dp-history-heading"><h3>{detail.week}</h3><span>{detail.example}</span></div>
          <div className="dp-week">{copy.weekDays.map((day, index) => <div className={index < 4 ? "is-done" : ""} key={index}><span>{day}</span><span className="dp-day-mark" role="img" aria-label={index < 4 ? detail.completed : detail.pending}>{index < 4 ? <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 12 4 4 8-8" /></svg> : <i />}</span></div>)}</div>
          <dl className="dp-stats"><div><dt>{copy.streakLabel}</dt><dd>{copy.streakValue}</dd></div><div><dt>{copy.totalLabel}</dt><dd>{copy.totalValue}</dd></div></dl>
          <div className="dp-history-foot" aria-hidden="true"><span>ONE DAY AT A TIME.</span><span>✓ ✓ ✓ ✓</span></div>
        </div>
      </section>

      <section className="dp-origin" aria-labelledby="dp-origin-title"><div className="dp-origin-mark" aria-hidden="true">THE FIRST<br /><strong>01.</strong><span>BY HIORIO</span></div><div><p className="dp-section-label">{detail.maker}</p><h2 id="dp-origin-title">{copy.originTitle}</h2><p className="dp-origin-description">{copy.originDescription}</p></div></section>
      <section className="dp-final" aria-labelledby="dp-final-title"><p>{copy.finalKicker}</p><h2 id="dp-final-title">{copy.finalTitle}</h2><p>{detail.finalNote}</p><a className="dp-primary" href={demoUrl} target="_blank" rel="noreferrer">{copy.openDemo}<Arrow diagonal /></a></section>
      <footer className="dp-footer"><div><strong>{name}</strong><p>{copy.footer}</p></div><a className="dp-text-link" href={appsHref}>{copy.backToApps}<Arrow /></a><span>HIORIO · NODE 01-D</span></footer>
    </main>
  );
}
