import type { ReactNode } from "react";
import { AppIcon } from "./AppIcon";
import { catalogCopy } from "./catalog";
import { growingProjects, type GrowingProject } from "./growing-projects";
import type { Locale } from "./i18n";
import "./growing-project.css";

const labels = {
  ko: { back: "틔운 앱들", explore: "어떤 앱인지 살펴보기", status: "지금의 진행 상황", features: "이렇게 쓰여요", privacy: "정보를 다루는 방식", next: "함께 틔우는 다른 앱", all: "모든 앱 보기", open: "원본 크기로 보기", journey: "집중을 향한 작은 탑승권", destination: "목적지", destinations: "달 / 동해안 열차", duration: "여행 시간", minutes: "분", steps: ["목적지 고르기", "한 가지에 집중", "돌아와 기록하기"], pending: "공개 설치는 아직 준비 중이에요." },
  en: { back: "Apps in bloom", explore: "Explore the idea", status: "Where it is now", features: "How it fits into your day", privacy: "How information is handled", next: "Another idea taking shape", all: "See all apps", open: "View at full size", journey: "A small boarding pass for focus", destination: "Destination", destinations: "Moon / Coastal train", duration: "Journey time", minutes: "min", steps: ["Choose a destination", "Focus on one thing", "Return and reflect"], pending: "Public installation is not available yet." },
  ja: { back: "芽吹いたアプリ", explore: "どんなアプリか見る", status: "現在の進み具合", features: "こんなふうに使えます", privacy: "情報の扱いについて", next: "一緒に芽吹く別のアプリ", all: "すべてのアプリを見る", open: "元のサイズで見る", journey: "集中に向かう小さな搭乗券", destination: "目的地", destinations: "月 / 東海岸の列車", duration: "旅の時間", minutes: "分", steps: ["目的地を選ぶ", "一つに集中する", "戻って記録する"], pending: "一般向けインストールはまだ準備中です。" },
};

export function GrowingProjectPage({ project, header, locale, basePath }: { project: GrowingProject; header: ReactNode; locale: Locale; basePath: string }) {
  const { app, copy, media, secondaryMedia } = project;
  const content = app.content[locale];
  const text = copy[locale];
  const l = labels[locale];
  const next = growingProjects[(growingProjects.indexOf(project) + 1) % growingProjects.length];
  return (
    <main className={`site-shell growing-shell growing-${app.id}`}>
      {header}
      <a className="growing-back" href={`${basePath}apps/`}><span aria-hidden="true">←</span>{l.back}</a>
      <section className={`growing-hero growing-layout-${project.layout}`} id="page-content" tabIndex={-1} aria-labelledby="growing-title">
        <div className="growing-hero-copy">
          <div className="growing-brand"><AppIcon app={app} basePath={basePath} locale={locale} size={64} priority /><div><strong>{content.displayName}</strong><span><i />{catalogCopy[locale][app.status]}</span></div></div>
          <p className="growing-kicker">{app.code}</p>
          <h1 id="growing-title">{text.headline.map((line) => <span key={line}>{line}</span>)}</h1>
          <p className="growing-intro">{content.description}</p>
          <a className="growing-explore" href="#growing-features">{l.explore}<span aria-hidden="true">↓</span></a>
          <p className="growing-platforms">{app.platforms.join(" / ")}<span>v{app.version}</span></p>
          <p className="growing-pending">{l.pending}</p>
        </div>
        <figure className="growing-visual">
          {media ? <div className="growing-media-pair">
            {[media, ...(secondaryMedia ? [secondaryMedia] : [])].map((item, index) => <a className="growing-image-link" href={`${basePath}${item.src}`} target="_blank" rel="noreferrer" key={item.src} aria-label={`${content.displayName} · ${l.open} ${index + 1}`}><img src={`${basePath}${item.src}`} width={item.width} height={item.height} alt={index === 0 ? text.mediaAlt : text.mediaCaption} decoding="async" fetchPriority={index === 0 ? "high" : "auto"} /></a>)}
          </div> : <div className="journey-diagram" role="img" aria-label={text.mediaAlt}>
            <p className="journey-ticket-label">TIMEJOURNEY / CONCEPT</p>
            <h2>{l.journey}</h2>
            <dl><div><dt>{l.destination}</dt><dd>{l.destinations}</dd></div><div><dt>{l.duration}</dt><dd><b>15—120</b> {l.minutes}</dd></div></dl>
            <ol>{l.steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol>
          </div>}
          <figcaption>{text.mediaCaption}{media && <span>{l.open} ↗</span>}</figcaption>
        </figure>
      </section>
      <section className="growing-features" id="growing-features" aria-labelledby="growing-features-title">
        <h2 id="growing-features-title">{l.features}</h2>
        <ol>{content.features.map((feature, index) => <li key={feature}><span className="growing-feature-number">0{index + 1}</span><h3>{feature}</h3><p>{text.featureDetails[index]}</p></li>)}</ol>
      </section>
      <section className="growing-notes" aria-labelledby="growing-status-title">
        <div><span className="growing-kicker">WORK IN PROGRESS</span><h2 id="growing-status-title">{l.status}</h2><p>{text.availability}</p></div>
        <div><span className="growing-kicker">DATA & PERMISSIONS</span><h2>{l.privacy}</h2><p>{text.privacy}</p></div>
      </section>
      <footer className="growing-footer">
        <a className="growing-next" href={`${basePath}${next.app.detailPath}`}><AppIcon app={next.app} basePath={basePath} locale={locale} size={48} /><span><small>{l.next}</small><strong>{next.app.content[locale].displayName}</strong></span><b aria-hidden="true">→</b></a>
        <a href={`${basePath}apps/`}>{l.all} <span aria-hidden="true">↗</span></a>
        <span className="growing-credit">HIORIO · IDEAS, TAKING ROOT.</span>
      </footer>
    </main>
  );
}
