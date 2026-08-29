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
    pageTitle: "Leaf Message | 마음을 남기고, 상대의 홈 화면을 꾸미는 메시지",
    pageDescription: "마음을 담은 40자 메시지에 배경과 효과를 더해 상대의 iPhone 홈 화면 위젯을 꾸미는 Leaf Message",
    kicker: "APP NODE 01-G",
    signal: "HEARTFELT NOTE / HOME SCREEN SCENE",
    eyebrow: "메시지와 장면을 함께 보내는 둘만의 위젯.",
    title: ["Leaf", "Message"],
    heroLine: "감성 메시지를 남기고, 상대의 홈 화면 한 칸을 꾸밉니다.",
    heroDescription: "40자 안에 마음을 쓰고, 14가지 배경과 12가지 도착 효과를 골라 상대의 iPhone 홈 화면 위젯으로 보냅니다.",
    status: "운영 중",
    backToApps: "앱 목록",
    heroImageAlt: "Leaf Message 실제 iOS 베타의 Medium 홈 화면 위젯 미리보기",
    heroCaption: "TESTFLIGHT BUILD 17 · ACTUAL iOS PREVIEW",
    stats: [
      { value: "40", label: "마음을 담는 최대 글자" },
      { value: "14", label: "화면을 꾸미는 배경" },
      { value: "12", label: "분위기를 더하는 도착 효과" },
    ],
    premiseKicker: "마음을 남기는 경험",
    premiseTitle: "지금의 마음을, 한마디로 남깁니다.",
    premiseDescription: "답을 재촉하는 대화보다 지금 떠오른 마음 하나를 조용히 건네고 싶은 순간이 있습니다. Leaf Message는 그 감정을 40자 안에 담아 상대가 자주 보는 홈 화면에 오래 남깁니다.",
    composerImageAlt: "Leaf Message의 나에게 보내보기 메시지 작성 화면",
    composerCaption: "40자 감성 메시지 · 배경과 효과 선택 · 내 위젯에서 먼저 미리 보기",
    presentationKicker: "화면을 꾸미는 경험",
    presentationTitle: "그 말이 머물 상대의 홈 화면까지.",
    presentationDescription: "메시지의 분위기에 맞는 색, 그림, 사진 배경과 도착 효과를 조합해 상대 홈 화면 위젯의 한 장면을 꾸밉니다. 보내기 전 Small, Medium, Large 크기로 확인합니다.",
    presentationImageAlt: "꽃길 산책 사진 배경을 적용한 Leaf Message Large 위젯 미리보기",
    presentationCaption: "FLOWER WALK · LARGE WIDGET · ACTUAL BETA SCREEN",
    presentationFacts: [
      { value: "14", title: "배경", description: "기본색 4종, 그림 4종, 사진 6종" },
      { value: "12", title: "도착 효과", description: "잉크, 꽃잎, 반짝임처럼 말에 맞는 움직임" },
      { value: "3", title: "위젯 크기", description: "Small, Medium, Large를 보내기 전에 확인" },
    ],
    flowKicker: "마음이 장면이 되는 순서",
    flowTitle: "마음을 쓰고, 상대의 화면을 꾸며 보냅니다.",
    steps: [
      { title: "마음을 40자 안에 남깁니다", description: "길게 설명하기보다 지금 건네고 싶은 감정과 한마디에 집중합니다." },
      { title: "상대의 홈 화면을 꾸밉니다", description: "배경과 도착 효과, 위젯 크기를 미리 보며 메시지가 머물 장면을 만듭니다." },
      { title: "꾸민 위젯으로 보냅니다", description: "완성한 메시지와 장면이 상대의 홈 화면에 머물고, 탭하면 표현을 다시 볼 수 있습니다." },
    ],
    selfKicker: "내 화면에서 먼저 느껴보는 두 경험",
    selfTitle: "마음과 장면을, 내 위젯에서 먼저.",
    selfDescription: "닉네임을 정하면 바로 ‘나에게 보내보기’를 시작할 수 있습니다. 감성 메시지를 남기고 배경과 효과로 위젯 한 칸을 꾸미는 전체 흐름을 내 화면에서 확인한 뒤, 초대 링크로 한 사람과 연결합니다.",
    privacyPoints: ["전화번호·이메일·비밀번호 없이 닉네임으로 시작", "푸시 알림에는 메시지 본문을 담지 않음", "자유로운 답장은 앱 안의 둘만의 대화에서 작성"],
    finalKicker: "LEAVE A FEELING. STYLE THEIR SCREEN.",
    finalTitle: "마음을 남기고, 상대의 홈 화면 한 칸을 꾸며 보세요.",
    footer: "감성 메시지와 장면으로 상대의 iPhone 홈 화면을 꾸밉니다.",
  },
  en: {
    pageTitle: "Leaf Message | Heartfelt Notes for Their Home Screen",
    pageDescription: "Leaf Message lets you write a heartfelt note in up to 40 characters, add a background and reveal, and style someone else’s iPhone Home Screen widget.",
    kicker: "APP NODE 01-G",
    signal: "HEARTFELT NOTE / HOME SCREEN SCENE",
    eyebrow: "A private widget for sending both a heartfelt note and a scene.",
    title: ["Leaf", "Message"],
    heroLine: "Leave a heartfelt note. Style a space on their Home Screen.",
    heroDescription: "Write what you feel in up to 40 characters, then choose from 14 backgrounds and 12 arrival effects before sending it to their iPhone Home Screen widget.",
    status: "Live",
    backToApps: "App index",
    heroImageAlt: "The actual Medium Home Screen widget preview in the Leaf Message iOS beta",
    heroCaption: "TESTFLIGHT BUILD 17 · ACTUAL iOS PREVIEW",
    stats: [
      { value: "40", label: "characters for what you feel" },
      { value: "14", label: "backgrounds to style the widget" },
      { value: "12", label: "arrival effects for the mood" },
    ],
    premiseKicker: "The experience of leaving a feeling",
    premiseTitle: "Leave what you feel in one short note.",
    premiseDescription: "Some moments call for one feeling, not a conversation that demands an answer. Leaf Message holds it within 40 characters and lets it stay where the other person looks most: their Home Screen.",
    composerImageAlt: "The Send to Myself composer in Leaf Message",
    composerCaption: "WRITE A HEARTFELT NOTE · CHOOSE A LOOK · PREVIEW IT ON YOUR WIDGET",
    presentationKicker: "The experience of styling their screen",
    presentationTitle: "Shape the scene where the note will stay.",
    presentationDescription: "Combine colors, illustrations, or photographs with an arrival effect that fits the message, styling a small scene on their Home Screen widget. Preview it in Small, Medium, and Large before sending.",
    presentationImageAlt: "A Large Leaf Message widget preview using the Flower Walk photo background",
    presentationCaption: "FLOWER WALK · LARGE WIDGET · ACTUAL BETA SCREEN",
    presentationFacts: [
      { value: "14", title: "Backgrounds", description: "4 colors, 4 illustrations, and 6 photographs" },
      { value: "12", title: "Reveal styles", description: "Ink, petals, glints, and other motion for the note" },
      { value: "3", title: "Widget sizes", description: "Preview Small, Medium, and Large before sending" },
    ],
    flowKicker: "How a feeling becomes a scene",
    flowTitle: "Write the feeling, style their screen, send it.",
    steps: [
      { title: "Leave the feeling in 40 characters", description: "Focus on the emotion and one thing you want to leave, instead of explaining everything." },
      { title: "Style their Home Screen", description: "Preview the background, arrival effect, and widget sizes as you shape the scene where the note will stay." },
      { title: "Send the styled widget", description: "The finished note and scene stay on their Home Screen, and its expression can be replayed with a tap." },
    ],
    selfKicker: "Try both experiences on your own screen",
    selfTitle: "Preview the feeling and the scene on your widget.",
    selfDescription: "Choose a nickname and start with Send to Myself. Try the whole flow—leave a heartfelt note and style one widget space with a background and reveal—then connect with one person through an invite link.",
    privacyPoints: ["Start with a nickname—no phone number, email, or password", "Push notifications never contain the message body", "Write free-form replies inside the private in-app conversation"],
    finalKicker: "LEAVE A FEELING. STYLE THEIR SCREEN.",
    finalTitle: "Leave a heartfelt note and style a space on the screen they see every day.",
    footer: "Leave heartfelt notes and style someone else’s iPhone Home Screen.",
  },
  ja: {
    pageTitle: "Leaf Message | 想いを残し、相手のホーム画面を彩る",
    pageDescription: "40文字までの想いを込めたメッセージに背景と演出を添え、相手のiPhoneホーム画面ウィジェットを彩るLeaf Message。",
    kicker: "APP NODE 01-G",
    signal: "HEARTFELT NOTE / HOME SCREEN SCENE",
    eyebrow: "想いと景色を一緒に届ける、二人だけのウィジェット。",
    title: ["Leaf", "Message"],
    heroLine: "想いを込めた言葉を残し、相手のホーム画面の一角を彩ります。",
    heroDescription: "40文字以内で想いを綴り、14種類の背景と12種類の到着演出を選んで、相手のiPhoneホーム画面ウィジェットへ届けます。",
    status: "運用中",
    backToApps: "アプリ一覧",
    heroImageAlt: "Leaf Message iOSベータの実際のMediumホーム画面ウィジェットプレビュー",
    heroCaption: "TESTFLIGHT BUILD 17 · ACTUAL iOS PREVIEW",
    stats: [
      { value: "40", label: "想いを込める最大文字数" },
      { value: "14", label: "画面を彩る背景" },
      { value: "12", label: "雰囲気を添える到着演出" },
    ],
    premiseKicker: "想いを残す体験",
    premiseTitle: "今の気持ちを、ひとことで残します。",
    premiseDescription: "返事を急がせる会話ではなく、今浮かんだ想いを静かにひとつだけ渡したい時があります。Leaf Messageはその気持ちを40文字以内に込め、相手がよく見るホーム画面に長く残します。",
    composerImageAlt: "Leaf Messageの自分に送るメッセージ作成画面",
    composerCaption: "想いを込めた40文字 · 背景と演出を選択 · 自分のウィジェットで先に確認",
    presentationKicker: "画面を彩る体験",
    presentationTitle: "その言葉が残る、相手のホーム画面まで。",
    presentationDescription: "メッセージの雰囲気に合う色、イラスト、写真の背景と到着演出を組み合わせ、相手のホーム画面ウィジェットにひとつの景色をつくります。送信前にSmall、Medium、Largeで確認できます。",
    presentationImageAlt: "花道の写真背景を使ったLeaf MessageのLargeウィジェットプレビュー",
    presentationCaption: "FLOWER WALK · LARGE WIDGET · ACTUAL BETA SCREEN",
    presentationFacts: [
      { value: "14", title: "背景", description: "基本色4種、イラスト4種、写真6種" },
      { value: "12", title: "到着演出", description: "インク、花びら、きらめきなど言葉に合わせた動き" },
      { value: "3", title: "ウィジェットサイズ", description: "Small、Medium、Largeを送信前に確認" },
    ],
    flowKicker: "想いが景色になるまで",
    flowTitle: "想いを書き、相手の画面を彩って届けます。",
    steps: [
      { title: "想いを40文字以内に残す", description: "長く説明するより、今渡したい気持ちとひとことに集中します。" },
      { title: "相手のホーム画面を彩る", description: "背景、到着演出、ウィジェットサイズを確認し、メッセージが残る景色をつくります。" },
      { title: "彩ったウィジェットへ届ける", description: "完成したメッセージと景色が相手のホーム画面に残り、タップすると演出をもう一度見られます。" },
    ],
    selfKicker: "二つの体験を自分の画面で先に",
    selfTitle: "想いと景色を、自分のウィジェットで。",
    selfDescription: "ニックネームを決めたら、すぐに「自分に送る」を始められます。想いを込めたメッセージを残し、背景と演出でウィジェットの一角を彩る流れを自分の画面で確認してから、招待リンクで一人とつながります。",
    privacyPoints: ["電話番号・メール・パスワードなしでニックネームから開始", "プッシュ通知にメッセージ本文を含めない", "自由な返信はアプリ内の二人の会話で作成"],
    finalKicker: "LEAVE A FEELING. STYLE THEIR SCREEN.",
    finalTitle: "想いを残し、相手のホーム画面の一角を彩ってみませんか。",
    footer: "想いを込めたメッセージと景色で相手のiPhoneホーム画面を彩ります。",
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
          <span>01 / LEAVE A FEELING</span>
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
          <div><span>02 / STYLE THEIR SCREEN</span><p>{copy.presentationKicker}</p><h2 id="leafmessage-presentation-title">{copy.presentationTitle}</h2></div>
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
          <div><span>03 / WRITE · STYLE · SEND</span><p>{copy.flowKicker}</p><h2 id="leafmessage-flow-title">{copy.flowTitle}</h2></div>
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
