import type { ReactNode } from "react";
import type { Locale } from "./i18n";
import { LeafMessagePreview, leafScenePath } from "./LeafMessagePreview";
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

const editorialCopy = {
  ko: {
    title: ["너의 화면에,", "내 마음 한 조각."], intro: "한마디를 고르고, 풍경을 골라요. 자주 마주치는 그 사람의 화면에 나다운 다정함을 남겨보세요.",
    try: "마음 한 장 꾸며보기", concept: "말 한 줄.\n마음은 그 이상.", quote: "문득 네 생각이 났어.",
    quoteFoot: "나에게서, 너에게.", feeling: "말로 건네는 다정함", feelingBody: "보고 싶다는 말, 잘 해내고 있다는 응원. 길지 않아도 충분한 마음을 40자에 담아요.",
    scenery: "그 마음에 어울리는 풍경", sceneryBody: "함께 보고 싶은 노을, 편안한 초록, 조용한 빗소리가 떠오르는 장면. 배경을 고르는 일도 마음을 전하는 일이에요.",
    galleryTitle: ["한마디가 머무는", "세 가지 자리."], galleryBody: "크기가 달라도, 전하고 싶은 마음은 그대로. 상대가 쓰는 위젯에 어울리는 모습을 미리 볼 수 있어요.",
    sizes: ["작게 남기는 다정함", "일상에 나란히 두는 마음", "풍경까지 넉넉하게"], notes: ["오늘도\n네 편이야.", "문득 네 생각이 났어.", "이 노을,\n너랑 같이 보고 싶어."],
    sender: "나에게서", time: "방금", galleryNote: "앱의 배경을 활용한 위젯 예시 · 홈 화면 전체가 아닌 위젯 한 칸을 꾸며요.",
    flowTitle: "마음이 도착하기까지.", steps: ["마음을 쓰고", "풍경을 고르고", "화면에 남겨요"],
    screens: "실제 앱 화면 살펴보기", screensNote: "메시지 작성과 위젯 미리보기 화면", screenLabels: ["한마디 쓰기", "배경 고르기", "크게 미리 보기"],
    selfTitle: "첫 번째 수신자는, 나.", selfBody: "초대하기 전에 내 위젯으로 먼저 보내보세요. 내가 고른 말과 풍경이 도착하는 기분을 느낀 다음, 한 사람을 초대하면 돼요.",
    final: ["오늘, 그 사람에게", "어떤 마음을 남길까요?"], finalNote: "짧은 말 하나와 작은 풍경 하나면 충분해요.",
  },
  en: {
    title: ["On your screen,", "a little of my heart."], intro: "Choose a few words and a little scenery. Leave something of yourself on the screen they see every day.",
    try: "Make a little note", concept: "A few words.\nA whole feeling.", quote: "You just crossed my mind.",
    quoteFoot: "From me, to you.", feeling: "A little kindness in words", feelingBody: "Missing someone. Cheering them on. Give the feeling a place in a note of up to 40 characters.",
    scenery: "A scene that feels like you", sceneryBody: "A sunset you wish you could share. A quiet green. Rain on a window. Choosing the scene is part of saying how you feel.",
    galleryTitle: ["One little note.", "Three places to stay."], galleryBody: "The size changes; the feeling stays. See how your note fits the widget on their Home Screen.",
    sizes: ["A small kindness", "A feeling alongside their day", "Room for the whole scene"], notes: ["Always\non your side.", "You just crossed my mind.", "Wish we could\nsee this sunset together."],
    sender: "From me", time: "Just now", galleryNote: "Illustrative widgets with app backgrounds · Styles one widget, not the whole Home Screen.",
    flowTitle: "How a feeling finds its way.", steps: ["Write a little", "Choose a scene", "Leave it with them"],
    screens: "Explore the actual app", screensNote: "Message composer and widget previews", screenLabels: ["Write a note", "Choose a background", "Preview it large"],
    selfTitle: "The first recipient? You.", selfBody: "Send a note to your own widget before inviting anyone. Feel how the words and scenery arrive, then invite someone to share it with.",
    final: ["What would you", "leave with them today?"], finalNote: "A few words. A little scenery. More than enough.",
  },
  ja: {
    title: ["あなたの画面に、", "私の想いをひとつ。"], intro: "ひとことと、ひとつの景色を選んで。あの人が毎日見る画面に、あなたらしい優しさを残しませんか。",
    try: "想いを添えてみる", concept: "短いひとこと。\n想いは、それ以上。", quote: "ふと、あなたを思い出した。",
    quoteFoot: "私から、あなたへ。", feeling: "言葉で渡す優しさ", feelingBody: "会いたい気持ち、頑張るあなたへのエール。長くなくても伝わる想いを40文字に込めます。",
    scenery: "その気持ちに似合う景色", sceneryBody: "一緒に見たい夕焼け、落ち着く緑、窓を打つ静かな雨。景色を選ぶことも、想いを届けること。",
    galleryTitle: ["ひとことが宿る、", "三つの場所。"], galleryBody: "大きさが変わっても、届けたい想いはそのまま。相手のウィジェットに合う姿を先に確認できます。",
    sizes: ["小さな優しさ", "日常に寄り添う想い", "景色まで、ゆったりと"], notes: ["今日も、\nあなたの味方。", "ふと、あなたを思い出した。", "この夕焼け、\nあなたと一緒に見たい。"],
    sender: "私から", time: "たった今", galleryNote: "アプリの背景を使ったウィジェット例 · 彩るのはホーム画面の一角です。",
    flowTitle: "想いが届くまで。", steps: ["想いを書いて", "景色を選んで", "画面に残します"],
    screens: "実際のアプリ画面を見る", screensNote: "メッセージ作成とウィジェットプレビュー", screenLabels: ["ひとことを書く", "背景を選ぶ", "大きく確認する"],
    selfTitle: "最初の受け取り手は、自分。", selfBody: "招待する前に、自分のウィジェットへ送ってみてください。選んだ言葉と景色が届く気持ちを感じてから、一人を招待できます。",
    final: ["今日、あの人に", "どんな想いを残しますか。"], finalNote: "短い言葉と、小さな景色。それだけで十分。",
  },
};

export function LeafMessagePage({ header, locale, appsHref }: { header: ReactNode; locale: Locale; appsHref: string }) {
  const copy = leafMessageCopy[locale];
  const editorial = editorialCopy[locale];
  const imagePath = (file: string) => `${import.meta.env.BASE_URL}product-shots/${file}`;
  const iconPath = `${import.meta.env.BASE_URL}app-icons/leaf-message.png`;
  const sizes = ["small", "medium", "large"] as const;
  const galleryScenes = ["rain", "meadow", "sunset"];
  const screens = ["leaf-message-composer.png", "leaf-message-widget-medium.png", "leaf-message-widget-large.png"];
  const screenAlts = [copy.composerImageAlt, copy.heroImageAlt, copy.presentationImageAlt];

  return (
    <main className="site-shell leafmessage-shell">
      {header}
      <section className="leafmessage-hero" id="page-content" aria-labelledby="leafmessage-page-title">
        <div className="leafmessage-hero-copy">
          <div className="lm-wordmark"><img src={iconPath} alt="" width="48" height="48" /><span>Leaf <em>Message</em></span></div>
          <p className="lm-eyebrow">FROM MY HEART, TO YOUR SCREEN</p>
          <h1 id="leafmessage-page-title"><span>{editorial.title[0]}</span><em>{editorial.title[1]}</em></h1>
          <p className="lm-hero-promise">{copy.heroLine}</p>
          <p className="lm-hero-intro">{editorial.intro}</p>
          <a className="lm-primary-link" href="#leafmessage-studio">{editorial.try}<span aria-hidden="true">↗</span></a>
          <div className="lm-hero-meta"><span className="lm-live"><i aria-hidden="true" />{copy.status}</span><span>iPhone · iOS 26+</span></div>
        </div>
        <LeafMessagePreview key={locale} locale={locale} />
      </section>

      <section className="leafmessage-premise" aria-labelledby="leafmessage-premise-title">
        <div className="lm-letter">
          <span className="lm-section-label">01 — LEAVE A FEELING</span>
          <h2 id="leafmessage-premise-title">{editorial.concept}</h2>
          <blockquote><p>“{editorial.quote}”</p><footer>{editorial.quoteFoot}</footer></blockquote>
        </div>
        <div className="lm-two-feelings">
          <article><span aria-hidden="true">01</span><div><h3>{editorial.feeling}</h3><p>{editorial.feelingBody}</p></div></article>
          <article><span aria-hidden="true">02</span><div><h3>{editorial.scenery}</h3><p>{editorial.sceneryBody}</p></div></article>
        </div>
      </section>

      <section className="leafmessage-presentation" aria-labelledby="leafmessage-presentation-title">
        <header className="leafmessage-section-heading">
          <div><span className="lm-section-label">02 — STYLE THEIR SCREEN</span><h2 id="leafmessage-presentation-title">{editorial.galleryTitle.map((line) => <span key={line}>{line}</span>)}</h2></div>
          <p>{editorial.galleryBody}</p>
        </header>
        <div className="lm-size-gallery">
          {sizes.map((size, index) => (
            <figure key={size} className={`lm-size-example lm-size-${size}`}>
              <div className="lm-gallery-widget">
                <img src={leafScenePath(galleryScenes[index])} alt="" width="960" height="960" loading="lazy" decoding="async" />
                <div className="lm-gallery-meta"><span>{editorial.sender}</span><span>{editorial.time}</span></div>
                <p>{editorial.notes[index]}</p>
              </div>
              <figcaption><span>{size}</span><p>{editorial.sizes[index]}</p></figcaption>
            </figure>
          ))}
        </div>
        <p className="lm-gallery-note">{editorial.galleryNote}</p>
        <dl className="lm-materials">
          {copy.presentationFacts.map((fact) => <div key={fact.title}><dt>{fact.title}</dt><dd><strong>{fact.value}</strong><span>{fact.description}</span></dd></div>)}
        </dl>
      </section>

      <section className="leafmessage-flow" aria-labelledby="leafmessage-flow-title">
        <header className="leafmessage-section-heading"><div><span className="lm-section-label">03 — A NOTE FINDS A HOME</span><h2 id="leafmessage-flow-title">{editorial.flowTitle}</h2></div></header>
        <ol className="leafmessage-steps">
          {copy.steps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{editorial.steps[index]}</h3><p>{step.description}</p></li>)}
        </ol>
        <details className="lm-app-screens">
          <summary><span>{editorial.screens}</span><span className="lm-details-indicator" aria-hidden="true">+</span></summary>
          <p>{editorial.screensNote}</p>
          <div className="lm-screens-grid">
            {screens.map((screen, index) => <figure key={screen}><div><img src={imagePath(screen)} alt={screenAlts[index]} width="1206" height="2622" loading="lazy" decoding="async" /></div><figcaption><span>0{index + 1}</span>{editorial.screenLabels[index]}</figcaption></figure>)}
          </div>
        </details>
        <aside className="leafmessage-self">
          <div><span className="lm-section-label">A NOTE TO MYSELF</span><h2>{editorial.selfTitle}</h2><p>{editorial.selfBody}</p></div>
          <ul>{copy.privacyPoints.map((point) => <li key={point}><span aria-hidden="true">✓</span>{point}</li>)}</ul>
        </aside>
      </section>

      <section className="leafmessage-final" aria-labelledby="leafmessage-final-title">
        <span className="lm-section-label">WITH LOVE, LEAF MESSAGE</span>
        <h2 id="leafmessage-final-title"><span>{editorial.final[0]}</span><em>{editorial.final[1]}</em></h2>
        <p>{editorial.finalNote}</p>
        <a className="lm-primary-link" href="#leafmessage-studio">{editorial.try}<span aria-hidden="true">↗</span></a>
      </section>
      <footer className="site-footer leafmessage-footer"><div className="lm-footer-brand"><img src={iconPath} alt="" width="32" height="32" /><span>Leaf Message</span></div><a href={appsHref}>← {copy.backToApps}</a><span>© 2026 · HIORIO</span></footer>
    </main>
  );
}
