import type { ReactNode } from "react";
import type { Locale } from "./i18n";
import "./leaf-message.css";

type LeafMessageCopy = {
  pageTitle: string;
  pageDescription: string;
  kicker: string;
  signal: string;
  eyebrow: string;
  title: [string, string];
  heroLine: string;
  heroDescription: string;
  status: string;
  backToApps: string;
  heroImageAlt: string;
  heroCaption: string;
  stats: Array<{ value: string; label: string }>;
  premiseKicker: string;
  premiseTitle: string;
  premiseDescription: string;
  composerImageAlt: string;
  composerCaption: string;
  presentationKicker: string;
  presentationTitle: string;
  presentationDescription: string;
  presentationImageAlt: string;
  presentationCaption: string;
  presentationFacts: Array<{ value: string; title: string; description: string }>;
  flowKicker: string;
  flowTitle: string;
  steps: Array<{ title: string; description: string }>;
  selfKicker: string;
  selfTitle: string;
  selfDescription: string;
  privacyPoints: string[];
  finalKicker: string;
  finalTitle: string;
  footer: string;
};

export const leafMessageCopy: Record<Locale, LeafMessageCopy> = {
  ko: {
    pageTitle: "Leaf Message | 홈 화면에 도착하는 짧은 한마디",
    pageDescription: "40자 이하의 짧은 말을 배경과 효과에 담아 상대의 iPhone 홈 화면 위젯으로 보내는 Leaf Message",
    kicker: "APP NODE 01-G",
    signal: "WIDGET MESSAGE / QUIET REVEAL",
    eyebrow: "대화를 이어 가는 대신, 한마디를 오래 남깁니다.",
    title: ["Leaf", "Message"],
    heroLine: "짧은 말이, 상대의 하루 한가운데 도착합니다.",
    heroDescription: "서로 연결한 두 사람이 40자 이하의 말을 보내고, 가장 최근에 받은 한마디를 iPhone 홈 화면 위젯에서 바로 만나는 메시지 앱입니다.",
    status: "TestFlight 내부 베타",
    backToApps: "앱 목록",
    heroImageAlt: "Leaf Message 실제 iOS 베타의 Medium 홈 화면 위젯 미리보기",
    heroCaption: "TESTFLIGHT BUILD 17 · ACTUAL iOS PREVIEW",
    stats: [
      { value: "40", label: "한 메시지의 최대 글자" },
      { value: "14", label: "고를 수 있는 배경" },
      { value: "12", label: "도착하는 Reveal 효과" },
    ],
    premiseKicker: "채팅보다 조용하고, 알림보다 오래",
    premiseTitle: "앱을 열지 않아도 보이는 말.",
    premiseDescription: "답을 재촉하는 대화보다 지금 떠오른 마음 하나만 건네고 싶은 순간이 있습니다. Leaf Message는 짧게 쓰고, 상대가 가장 자주 보는 홈 화면에 그 말을 남깁니다.",
    composerImageAlt: "Leaf Message의 나에게 보내보기 메시지 작성 화면",
    composerCaption: "40자 작성 · 배경과 효과 선택 · 내 위젯으로 바로 보내기",
    presentationKicker: "한마디가 도착하는 표정",
    presentationTitle: "같은 말도, 머무는 장면은 다르게.",
    presentationDescription: "종이 같은 기본색부터 그림과 사진까지 배경을 고르고, 말이 나타나는 움직임을 더합니다. 보내기 전 Small, Medium, Large 위젯을 실제 비율로 미리 봅니다.",
    presentationImageAlt: "꽃길 산책 사진 배경을 적용한 Leaf Message Large 위젯 미리보기",
    presentationCaption: "FLOWER WALK · LARGE WIDGET · ACTUAL BETA SCREEN",
    presentationFacts: [
      { value: "14", title: "배경", description: "기본색 4종, 그림 4종, 사진 6종" },
      { value: "12", title: "도착 효과", description: "잉크, 꽃잎, 반짝임처럼 말에 맞는 움직임" },
      { value: "3", title: "위젯 크기", description: "Small, Medium, Large를 보내기 전에 확인" },
    ],
    flowKicker: "메시지가 머무는 순서",
    flowTitle: "쓰고, 고르고, 홈 화면에 남깁니다.",
    steps: [
      { title: "40자 안에 씁니다", description: "길게 설명하기보다 지금 건네고 싶은 한마디에 집중합니다." },
      { title: "배경과 효과를 고릅니다", description: "세 가지 위젯 크기를 미리 보며 말이 도착할 장면을 정합니다." },
      { title: "상대의 위젯에 보냅니다", description: "가장 최근에 받은 말이 홈 화면에 머물고, 탭하면 표현을 다시 볼 수 있습니다." },
    ],
    selfKicker: "연결 전에 경험하는 첫 메시지",
    selfTitle: "초대하기 전, 내 위젯에서 먼저.",
    selfDescription: "닉네임을 정하면 바로 ‘나에게 보내보기’를 시작할 수 있습니다. 배경과 효과를 고른 메시지가 내 iPhone 위젯에 어떻게 도착하는지 확인한 뒤, 초대 링크로 한 사람과 연결합니다.",
    privacyPoints: ["전화번호·이메일·비밀번호 없이 닉네임으로 시작", "푸시 알림에는 메시지 본문을 담지 않음", "자유로운 답장은 앱 안의 둘만의 대화에서 작성"],
    finalKicker: "A SHORT NOTE. RIGHT WHERE THEY LOOK.",
    finalTitle: "오늘 떠오른 한마디를, 지금 보이는 홈 화면으로.",
    footer: "짧은 말을 상대의 홈 화면에 오래 남기는 iPhone 위젯 메시지",
  },
  en: {
    pageTitle: "Leaf Message | A Short Note on Their Home Screen",
    pageDescription: "Leaf Message sends a note of up to 40 characters, with a chosen background and reveal, to another person's iPhone Home Screen widget.",
    kicker: "APP NODE 01-G",
    signal: "WIDGET MESSAGE / QUIET REVEAL",
    eyebrow: "Not a conversation to keep up with, but one note that stays.",
    title: ["Leaf", "Message"],
    heroLine: "A short note arrives in the middle of their day.",
    heroDescription: "Two connected people send notes of up to 40 characters, and the latest one received stays visible on an iPhone Home Screen widget.",
    status: "TestFlight internal beta",
    backToApps: "App index",
    heroImageAlt: "The actual Medium Home Screen widget preview in the Leaf Message iOS beta",
    heroCaption: "TESTFLIGHT BUILD 17 · ACTUAL iOS PREVIEW",
    stats: [
      { value: "40", label: "characters in one note" },
      { value: "14", label: "backgrounds to choose from" },
      { value: "12", label: "arrival reveal styles" },
    ],
    premiseKicker: "Quieter than chat, more lasting than a notification",
    premiseTitle: "A note they can see without opening an app.",
    premiseDescription: "Some moments call for one thought, not a conversation that demands an answer. Leaf Message keeps the writing brief and leaves it where the other person looks most: their Home Screen.",
    composerImageAlt: "The Send to Myself composer in Leaf Message",
    composerCaption: "WRITE 40 CHARACTERS · CHOOSE A LOOK · SEND TO YOUR WIDGET",
    presentationKicker: "How a note arrives",
    presentationTitle: "The same words can stay in a different scene.",
    presentationDescription: "Choose from paper-like colors, illustrations, and photographs, then add a motion reveal. Preview the real proportions of Small, Medium, and Large widgets before sending.",
    presentationImageAlt: "A Large Leaf Message widget preview using the Flower Walk photo background",
    presentationCaption: "FLOWER WALK · LARGE WIDGET · ACTUAL BETA SCREEN",
    presentationFacts: [
      { value: "14", title: "Backgrounds", description: "4 colors, 4 illustrations, and 6 photographs" },
      { value: "12", title: "Reveal styles", description: "Ink, petals, glints, and other motion for the note" },
      { value: "3", title: "Widget sizes", description: "Preview Small, Medium, and Large before sending" },
    ],
    flowKicker: "How a message comes to stay",
    flowTitle: "Write it, shape it, leave it on the Home Screen.",
    steps: [
      { title: "Write within 40 characters", description: "Focus on the one thing you want to leave, instead of explaining everything." },
      { title: "Choose a background and reveal", description: "Preview all three widget sizes and decide how the note should arrive." },
      { title: "Send it to their widget", description: "The latest note received stays on the Home Screen and its reveal can be replayed with a tap." },
    ],
    selfKicker: "The first message, before connecting",
    selfTitle: "Try it on your own widget first.",
    selfDescription: "Choose a nickname and start with Send to Myself. See the background and reveal arrive on your own iPhone widget, then connect with one person through an invite link.",
    privacyPoints: ["Start with a nickname—no phone number, email, or password", "Push notifications never contain the message body", "Write free-form replies inside the private in-app conversation"],
    finalKicker: "A SHORT NOTE. RIGHT WHERE THEY LOOK.",
    finalTitle: "Send today's thought to the Home Screen they already see.",
    footer: "An iPhone widget messenger that lets a short note stay on someone's Home Screen",
  },
  ja: {
    pageTitle: "Leaf Message | ホーム画面に届く短いひとこと",
    pageDescription: "40文字までの短い言葉を背景と演出にのせて、相手のiPhoneホーム画面ウィジェットへ届けるLeaf Message。",
    kicker: "APP NODE 01-G",
    signal: "WIDGET MESSAGE / QUIET REVEAL",
    eyebrow: "会話を続けるのではなく、ひとことを長く残します。",
    title: ["Leaf", "Message"],
    heroLine: "短い言葉が、相手の一日の真ん中に届きます。",
    heroDescription: "つながった二人が40文字までの言葉を送り合い、最後に受け取ったひとことをiPhoneのホーム画面ウィジェットですぐに見られるメッセージアプリです。",
    status: "TestFlight 内部ベータ",
    backToApps: "アプリ一覧",
    heroImageAlt: "Leaf Message iOSベータの実際のMediumホーム画面ウィジェットプレビュー",
    heroCaption: "TESTFLIGHT BUILD 17 · ACTUAL iOS PREVIEW",
    stats: [
      { value: "40", label: "ひとつのメッセージの最大文字数" },
      { value: "14", label: "選べる背景" },
      { value: "12", label: "届く時のReveal演出" },
    ],
    premiseKicker: "チャットより静かに、通知より長く",
    premiseTitle: "アプリを開かなくても見える言葉。",
    premiseDescription: "返事を急がせる会話ではなく、今浮かんだ気持ちをひとつだけ渡したい時があります。Leaf Messageは短く書き、相手が最もよく見るホーム画面にその言葉を残します。",
    composerImageAlt: "Leaf Messageの自分に送るメッセージ作成画面",
    composerCaption: "40文字で作成 · 背景と演出を選択 · 自分のウィジェットへ送信",
    presentationKicker: "ひとことが届く表情",
    presentationTitle: "同じ言葉でも、残る景色は変えられます。",
    presentationDescription: "紙のような基本色からイラストや写真まで背景を選び、言葉が現れる動きを加えます。送る前にSmall、Medium、Largeの実際の比率で確認できます。",
    presentationImageAlt: "花道の写真背景を使ったLeaf MessageのLargeウィジェットプレビュー",
    presentationCaption: "FLOWER WALK · LARGE WIDGET · ACTUAL BETA SCREEN",
    presentationFacts: [
      { value: "14", title: "背景", description: "基本色4種、イラスト4種、写真6種" },
      { value: "12", title: "到着演出", description: "インク、花びら、きらめきなど言葉に合わせた動き" },
      { value: "3", title: "ウィジェットサイズ", description: "Small、Medium、Largeを送信前に確認" },
    ],
    flowKicker: "メッセージが残るまで",
    flowTitle: "書いて、選んで、ホーム画面に残します。",
    steps: [
      { title: "40文字以内で書く", description: "長く説明するより、今渡したいひとことに集中します。" },
      { title: "背景と演出を選ぶ", description: "三つのウィジェットサイズを確認し、言葉が届く景色を決めます。" },
      { title: "相手のウィジェットへ送る", description: "最後に受け取った言葉がホーム画面に残り、タップすると演出をもう一度見られます。" },
    ],
    selfKicker: "つながる前に体験する最初のメッセージ",
    selfTitle: "招待する前に、自分のウィジェットで。",
    selfDescription: "ニックネームを決めたら、すぐに「自分に送る」を始められます。背景と演出を選んだ言葉が自分のiPhoneウィジェットへ届く様子を確認してから、招待リンクで一人とつながります。",
    privacyPoints: ["電話番号・メール・パスワードなしでニックネームから開始", "プッシュ通知にメッセージ本文を含めない", "自由な返信はアプリ内の二人の会話で作成"],
    finalKicker: "A SHORT NOTE. RIGHT WHERE THEY LOOK.",
    finalTitle: "今日浮かんだひとことを、今見えているホーム画面へ。",
    footer: "短い言葉を相手のホーム画面に長く残すiPhoneウィジェットメッセージ",
  },
};

export function LeafMessagePage({ header, locale, appsHref }: { header: ReactNode; locale: Locale; appsHref: string }) {
  const copy = leafMessageCopy[locale];
  const imagePath = (file: string) => `${import.meta.env.BASE_URL}product-shots/${file}`;

  return (
    <main className="site-shell leafmessage-shell">
      <div className="leafmessage-paper" aria-hidden="true" />
      {header}

      <section className="leafmessage-hero" id="page-content" aria-labelledby="leafmessage-page-title">
        <div className="leafmessage-hero-copy">
          <div className="leafmessage-kicker"><span>{copy.kicker}</span><span>{copy.signal}</span></div>
          <p className="leafmessage-eyebrow">{copy.eyebrow}</p>
          <h1 id="leafmessage-page-title"><span>{copy.title[0]}</span><span>{copy.title[1]}</span></h1>
          <strong>{copy.heroLine}</strong>
          <p>{copy.heroDescription}</p>
          <div className="leafmessage-actions">
            <span className="leafmessage-status"><i />{copy.status}</span>
            <a href={appsHref}>{copy.backToApps}<span aria-hidden="true">←</span></a>
          </div>
          <dl className="leafmessage-stats">
            {copy.stats.map((stat) => <div key={stat.label}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>)}
          </dl>
        </div>

        <figure className="leafmessage-hero-screen">
          <div className="leafmessage-screen-rail"><span>LEAF MESSAGE / iOS 26</span><b>BETA 17</b></div>
          <div className="leafmessage-phone-crop">
            <img src={imagePath("leaf-message-widget-medium.png")} alt={copy.heroImageAlt} width="1206" height="2622" />
          </div>
          <figcaption>{copy.heroCaption}</figcaption>
        </figure>
      </section>

      <section className="leafmessage-premise" aria-labelledby="leafmessage-premise-title">
        <div className="leafmessage-premise-copy">
          <span>01 / SHORT ENOUGH TO STAY</span>
          <p>{copy.premiseKicker}</p>
          <h2 id="leafmessage-premise-title">{copy.premiseTitle}</h2>
          <div><i aria-hidden="true" /><p>{copy.premiseDescription}</p></div>
        </div>
        <figure className="leafmessage-composer-shot">
          <div className="leafmessage-shot-label"><span>ACTUAL BETA SCREEN</span><b>3 / 40</b></div>
          <img src={imagePath("leaf-message-composer.png")} alt={copy.composerImageAlt} width="1206" height="2622" loading="lazy" decoding="async" />
          <figcaption>{copy.composerCaption}</figcaption>
        </figure>
      </section>

      <section className="leafmessage-presentation" aria-labelledby="leafmessage-presentation-title">
        <header className="leafmessage-section-heading">
          <div><span>02 / PRESENTATION</span><p>{copy.presentationKicker}</p><h2 id="leafmessage-presentation-title">{copy.presentationTitle}</h2></div>
          <p>{copy.presentationDescription}</p>
        </header>
        <div className="leafmessage-presentation-grid">
          <figure className="leafmessage-large-shot">
            <img src={imagePath("leaf-message-widget-large.png")} alt={copy.presentationImageAlt} width="1206" height="2622" loading="lazy" decoding="async" />
            <figcaption>{copy.presentationCaption}</figcaption>
          </figure>
          <ol className="leafmessage-presentation-facts">
            {copy.presentationFacts.map((fact, index) => (
              <li key={fact.title}><span>0{index + 1}</span><strong>{fact.value}</strong><div><h3>{fact.title}</h3><p>{fact.description}</p></div></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="leafmessage-flow" aria-labelledby="leafmessage-flow-title">
        <header className="leafmessage-section-heading">
          <div><span>03 / SEND FLOW</span><p>{copy.flowKicker}</p><h2 id="leafmessage-flow-title">{copy.flowTitle}</h2></div>
        </header>
        <ol className="leafmessage-steps">
          {copy.steps.map((step, index) => (
            <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></li>
          ))}
        </ol>
        <aside className="leafmessage-self">
          <div>
            <span>04 / SELF PREVIEW</span>
            <p>{copy.selfKicker}</p>
            <h2>{copy.selfTitle}</h2>
          </div>
          <div className="leafmessage-self-detail">
            <p>{copy.selfDescription}</p>
            <ul>{copy.privacyPoints.map((point) => <li key={point}><i aria-hidden="true" />{point}</li>)}</ul>
          </div>
        </aside>
      </section>

      <section className="leafmessage-final">
        <img src={`${import.meta.env.BASE_URL}app-icons/leaf-message.png`} alt="" width="160" height="160" loading="lazy" decoding="async" />
        <div><p>{copy.finalKicker}</p><h2>{copy.finalTitle}</h2></div>
        <a href={appsHref}>{copy.backToApps}<span aria-hidden="true">←</span></a>
      </section>

      <footer className="site-footer leafmessage-footer">
        <div><span className="footer-node">NODE_01-G</span><p>{copy.footer}</p></div><span>© 2026 LEAF MESSAGE</span>
      </footer>
    </main>
  );
}
