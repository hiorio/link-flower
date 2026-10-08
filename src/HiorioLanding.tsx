import { BlueMoonCompanion } from "./BlueMoonCompanion";
import { blueMoonCopy } from "./bluemoon-content";
import { HiorioLogo } from "./HiorioLogo";
import { ServiceArrow } from "./ServiceArrow";
import type { Locale } from "./i18n";

export const hiorioLandingCopy = {
  ko: {
    title: "HIORIO | 만드는 사람, 이어지는 이야기",
    headline: ["만드는 사람,", "이어지는 이야기."],
    description: "작은 필요를 도구로 만들고, 관심 있는 것들을 이야기로 남깁니다. 앱과 서비스, 창작과 기록이 이어지는 HIORIO의 공간입니다.",
    browse: "앱과 서비스 보기", meet: "만든 사람 알아보기",
    creatorTitle: "작은 필요를 그냥 지나치지 않는 사람.",
    creatorName: "김휘호 · HIORIO",
    creatorBody: ["직접 필요한 앱을 만들고, 만든 도구를 쓰면서 다듬는 독립 제작자입니다. 아이디어를 떠올리는 데서 멈추지 않고, 실제로 쓸 수 있는 모습까지 이어 가는 일을 좋아합니다.", "이곳에는 만드는 도구와 다음에 이어 갈 작업을 함께 모읍니다. 앞으로 개인적인 기록과 글, 미디어 콘텐츠도 각자의 공간으로 연결하려 합니다."],
    social: "개인 SNS · 블로그", socialNote: "개인적인 생각과 만드는 과정은 이곳에서 이어질 예정입니다.", later: "링크 연결 준비 중",
    moonTitle: ["다음 중심에는,", "BlueMoon."],
    moonBody: "이야기를 쓰고, 그 세계를 함께 만드는 소설 창작 스튜디오. HIORIO의 대표 사업으로 이어 가기 위해 준비하고 있습니다.",
    moonLink: "BlueMoon의 현재 모습 보기", moonLabel: "준비 중인 대표 사업",
    ecosystemTitle: "각자의 공간으로 이어집니다.",
    ecosystems: [
      { title: "앱과 서비스", description: "일상에서 필요한 도구들. 전체 제품과 현재 진행 상황을 쓰임별로 살펴보세요.", destination: "apps/" },
      { title: "생산성을 돕는 작은 생태계", description: "싹 메모, 나무노트, 땅바닥, TimeFlower. 기록과 생각을 돕는 네 가지 독립 도구를 한곳에 모았습니다.", destination: "collections/productivity/" },
      { title: "미디어 콘텐츠", description: "도구 밖으로 이어지는 이야기와 영상. 앞으로 콘텐츠 채널들을 이곳에 연결합니다.", destination: null },
    ],
    closing: "도구도, 이야기도. 다음 작업으로.",
  },
  en: {
    title: "HIORIO | A maker, and the stories ahead",
    headline: ["A maker.", "More stories ahead."],
    description: "Turning small needs into tools, and interests into stories. HIORIO connects apps and services with creating and keeping a record.",
    browse: "Explore apps & services", meet: "Meet the maker",
    creatorTitle: "Small needs are worth making something for.",
    creatorName: "김휘호 · HIORIO",
    creatorBody: ["I am an independent maker who builds the apps I need and refines them by using them. I enjoy taking an idea beyond a thought and making it something people can use.", "This space brings together my tools and the work I want to make next. Personal writing, notes, and media will connect to their own spaces here over time."],
    social: "Personal social & blog", socialNote: "Personal thoughts and the making process will connect here.", later: "Links coming later",
    moonTitle: ["At the heart of what’s next:", "BlueMoon."],
    moonBody: "A novel-writing studio for writing stories and building their worlds. In development as HIORIO’s future flagship business.",
    moonLink: "See BlueMoon today", moonLabel: "Future flagship · in preparation",
    ecosystemTitle: "Different work. Connected spaces.",
    ecosystems: [
      { title: "Apps & services", description: "Tools for everyday needs. Browse the full collection by purpose and current development stage.", destination: "apps/" },
      { title: "A small productivity ecosystem", description: "Ssak Memo, Namu Note, Drawing Ground, and TimeFlower. Four independent tools for notes and ideas, gathered in one place.", destination: "collections/productivity/" },
      { title: "Media & stories", description: "Stories and video beyond the tools. Content channels will connect here in time.", destination: null },
    ],
    closing: "More tools. More stories. More to make.",
  },
  ja: {
    title: "HIORIO | つくる人、つながる物語",
    headline: ["つくる人、", "つながる物語。"],
    description: "小さな必要を道具に、関心のあることを物語に。アプリやサービス、創作や記録がつながるHIORIOの場所です。",
    browse: "アプリとサービスを見る", meet: "つくる人について",
    creatorTitle: "小さな必要を、見過ごさない。",
    creatorName: "김휘호 · HIORIO",
    creatorBody: ["自分が必要とするアプリをつくり、使いながら磨く個人制作者です。アイデアを思いつくだけで終わらせず、実際に使える形までつなげることが好きです。", "ここには、つくっている道具と次に取り組みたいことを集めています。個人の記録や文章、メディアコンテンツも、それぞれの場所へつないでいく予定です。"],
    social: "個人SNS・ブログ", socialNote: "日々の考えや、ものづくりの過程をここからつなぐ予定です。", later: "リンク準備中",
    moonTitle: ["これからの中心に、", "BlueMoon。"],
    moonBody: "物語を書き、その世界を一緒につくる小説創作スタジオ。HIORIOの中心となる事業に向けて、準備を進めています。",
    moonLink: "現在のBlueMoonを見る", moonLabel: "準備中の中心事業",
    ecosystemTitle: "それぞれの場所へ、つながります。",
    ecosystems: [
      { title: "アプリとサービス", description: "日々の暮らしに必要な道具。すべてのプロダクトを、用途や現在の開発状況から探せます。", destination: "apps/" },
      { title: "作業を助ける小さな生態系", description: "Ssak Memo、Namu Note、Drawing Ground、TimeFlower。記録や思考を助ける四つの独立した道具を集めました。", destination: "collections/productivity/" },
      { title: "メディアコンテンツ", description: "道具の外へ広がる物語や映像。今後、コンテンツのチャンネルをここにつなぎます。", destination: null },
    ],
    closing: "道具も、物語も。次のものづくりへ。",
  },
};

export function HiorioLanding({ locale, basePath }: { locale: Locale; basePath: string }) {
  const text = hiorioLandingCopy[locale];
  return <div id="page-content" className="hiorio-landing" tabIndex={-1}>
    <section className="hiorio-landing-hero" aria-labelledby="hiorio-landing-title">
      <div className="hiorio-landing-copy">
        <h1 id="hiorio-landing-title">{text.headline.map(line => <span key={line}>{line}</span>)}</h1>
        <p>{text.description}</p>
        <nav className="hiorio-landing-actions" aria-label={text.browse}>
          <a className="hiorio-landing-primary" href={`${basePath}apps/`}>{text.browse}<ServiceArrow /></a>
          <a href="#maker">{text.meet}<ServiceArrow /></a>
        </nav>
      </div>
      <div className="hiorio-landing-mark" role="img" aria-label="HIORIO"><HiorioLogo basePath={basePath} tone="black-on-cobalt" part="lockup" /></div>
    </section>

    <section className="hiorio-maker" id="maker" aria-labelledby="hiorio-maker-title">
      <div><h2 id="hiorio-maker-title">{text.creatorTitle}</h2><p className="hiorio-maker-name" lang="ko">{text.creatorName}</p></div>
      <div className="hiorio-maker-body">{text.creatorBody.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        <aside className="hiorio-maker-connections" aria-labelledby="hiorio-social-title"><h3 id="hiorio-social-title">{text.social}</h3><p>{text.socialNote}</p><span>{text.later}</span></aside>
      </div>
    </section>

    <section className="hiorio-future" aria-labelledby="hiorio-future-title">
      <div className="hiorio-future-title"><h2 id="hiorio-future-title">{text.moonTitle.map(line => <span key={line}>{line}</span>)}</h2><BlueMoonCompanion locale={locale} basePath={basePath} /></div>
      <div><p className="hiorio-future-status">{text.moonLabel}</p><p>{text.moonBody}</p><a href={`${basePath}apps/bluemoon/`}>{text.moonLink}<ServiceArrow /></a><small>{blueMoonCopy[locale].availability}</small></div>
    </section>

    <section className="hiorio-ecosystems" aria-labelledby="hiorio-ecosystems-title">
      <h2 id="hiorio-ecosystems-title">{text.ecosystemTitle}</h2>
      <ul>{text.ecosystems.map(ecosystem => <li key={ecosystem.title}>{ecosystem.destination
        ? <a className="hiorio-ecosystem-row" href={`${basePath}${ecosystem.destination}`}><h3>{ecosystem.title}</h3><p>{ecosystem.description}</p><ServiceArrow /></a>
        : <div className="hiorio-ecosystem-row"><h3>{ecosystem.title}</h3><p>{ecosystem.description}</p><span className="hiorio-connection-pending">{text.later}</span></div>
      }</li>)}</ul>
    </section>

    <aside className="hiorio-landing-close"><p>{text.closing}</p></aside>
  </div>;
}
