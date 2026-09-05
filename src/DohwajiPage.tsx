import { useRef, useState, type ReactNode } from "react";
import { productApps } from "./apps";
import type { Locale } from "./i18n";
import { dohwajiCopy } from "./dohwaji-copy";
import "./dohwaji.css";

const basePath = import.meta.env.BASE_URL;
const publicRoute = "https://dohwaji.app/explore/6289d1b7-3b27-42d1-81b5-f7c331628e06";

function RouteMark({ kind }: { kind: "pin" | "draw" | "share" }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {kind === "pin" ? <><path d="M20 35S8 24 8 16a12 12 0 0 1 24 0c0 8-12 19-12 19Z" /><circle cx="20" cy="16" r="4" /></>
        : kind === "draw" ? <><path d="m11 24 16-16 5 5-16 16-8 3 3-8ZM24 11l5 5M7 36c8-6 12 2 19-2s8-3 9-1" /></>
          : <><path d="m16 25 9-10M15 14l3-3a8 8 0 0 1 11 11l-3 3M25 26l-3 3a8 8 0 0 1-11-11l3-3" /></>}
    </svg>
  );
}

export function DohwajiExperience({ header, locale, appsHref }: { header: ReactNode; locale: Locale; appsHref: string }) {
  const copy = dohwajiCopy[locale];
  const app = productApps.find((item) => item.id === "dohwaji")!;
  const webUrl = app.links.find((link) => link.kind === "web")!.href;
  const appStoreUrl = app.links.find((link) => link.kind === "appStore")!.href;
  const [dayIndex, setDayIndex] = useState(0);
  const imageDialog = useRef<HTMLDialogElement>(null);
  const selectedDay = copy.days[dayIndex];
  const imagePath = `${basePath}product-shots/dohwaji/seoul-day-${dayIndex + 1}.webp`;
  const routeUrl = `${publicRoute}?day=${dayIndex + 1}`;
  const zoomHint = {
    ko: "확대된 지도입니다. 좌우로 움직여 장소와 동선을 살펴보세요.",
    en: "A closer look at the map. Scroll sideways to explore its places and route.",
    ja: "地図を拡大しています。左右に動かして場所やルートをご覧ください。",
  }[locale];
  const openMap = () => {
    const dialog = imageDialog.current;
    dialog?.showModal();
    const scrollArea = dialog?.querySelector<HTMLElement>(".dh-dialog-image");
    if (scrollArea) scrollArea.scrollLeft = (scrollArea.scrollWidth - scrollArea.clientWidth) / 2;
  };

  return (
    <main className="site-shell dh-page">
      {header}
      <section className="dh-hero" id="page-content" aria-labelledby="dh-title">
        <div className="dh-hero-copy">
          <div className="dh-brand">
            <img src={`${basePath}${app.icon}`} width="48" height="48" alt="" />
            <span>{app.content[locale].displayName}</span>
            <small><i aria-hidden="true" />{copy.status}</small>
          </div>
          <p className="dh-eyebrow">{copy.eyebrow}</p>
          <h1 id="dh-title"><span>{copy.title[0]}</span><span className="dh-title-route">{copy.title[1]}
            <svg viewBox="0 0 420 18" preserveAspectRatio="none" aria-hidden="true"><path d="M3 12C110 1 230 17 412 5" /></svg>
          </span></h1>
          <p className="dh-lead">{copy.description}</p>
          <div className="dh-actions">
            <a className="dh-button dh-button-primary" href={webUrl} target="_blank" rel="noreferrer">{copy.start}<span aria-hidden="true">↗</span></a>
            <a className="dh-app-store" href={appStoreUrl} target="_blank" rel="noreferrer">{copy.appStore}<span aria-hidden="true">↗</span></a>
          </div>
          <p className="dh-start-note">{copy.noLogin}</p>
          <a className="dh-scroll-link" href="#dh-route"><span aria-hidden="true">↓</span>{copy.scrollHint}</a>
        </div>

        <div className="dh-travel-sheet" id="dh-route">
          <div className="dh-sheet-heading"><RouteMark kind="pin" /><div><p>{copy.mapEyebrow}</p><h2>{copy.mapTitle}</h2></div></div>
          <div className="dh-days" role="group" aria-label={copy.galleryHint}>
            {copy.days.map((day, index) => <button key={day.label} type="button" aria-pressed={dayIndex === index} aria-controls="dh-map-preview" onClick={() => setDayIndex(index)}><span>{day.label}</span><i aria-hidden="true">0{index + 1}</i></button>)}
          </div>
          <figure id="dh-map-preview" className="dh-map-preview">
            <button className="dh-map-enlarge" type="button" onClick={openMap} aria-label={`${copy.enlarge}: ${selectedDay.label}`} aria-haspopup="dialog">
              <img src={imagePath} width="836" height="355" alt={`${copy.imageAlt} — ${selectedDay.label}`} fetchPriority="high" />
              <span className="dh-zoom-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="10" cy="10" r="6" /><path d="m15 15 6 6M10 7v6M7 10h6" /></svg>{copy.enlarge}</span>
            </button>
            <figcaption>{copy.mapCaption}<span>© Kakao</span></figcaption>
          </figure>
          <div className="dh-day-note" aria-live="polite" aria-atomic="true">
            <p className="dh-day-title">{selectedDay.title}</p>
            <p className="dh-stops-label">{copy.stopsLabel}</p>
            <ol className="dh-stops">{selectedDay.stops.map((stop) => <li key={stop}><i aria-hidden="true" /><span>{stop}</span></li>)}</ol>
            <p className="dh-day-description">{selectedDay.description}</p>
          </div>
          <a className="dh-open-route" href={routeUrl} target="_blank" rel="noreferrer">{copy.openRoute}<span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <ul className="dh-benefits" aria-label={copy.eyebrow}>{copy.benefits.map((benefit, index) => <li key={benefit}><RouteMark kind={(["pin", "share", "draw"] as const)[index]} />{benefit}</li>)}</ul>

      <section className="dh-how" id="dh-how" aria-labelledby="dh-how-title">
        <div className="dh-how-intro"><p className="dh-eyebrow">{copy.flowEyebrow}</p><h2 id="dh-how-title">{copy.flowTitle}</h2><p>{copy.flowDescription}</p>
          <svg className="dh-drawn-route" viewBox="0 0 290 110" fill="none" aria-hidden="true"><path d="M17 72C71 72 43 17 110 28s29 72 81 58 28-61 77-55" /><circle cx="17" cy="72" r="6" /><path d="m256 19 15 11-14 11" /></svg>
        </div>
        <ol className="dh-step-list">{copy.steps.map((step, index) => <li key={step.title}><span className="dh-step-number">0{index + 1}</span><div><h3>{step.title}</h3><p>{step.description}</p><span className="dh-step-detail">{step.detail}</span></div><RouteMark kind={(["pin", "draw", "share"] as const)[index]} /></li>)}</ol>
      </section>

      <section className="dh-origin" aria-labelledby="dh-origin-title">
        <div><p className="dh-eyebrow">{copy.storyEyebrow}</p><h2 id="dh-origin-title">{copy.storyTitle.map((line) => <span key={line}>{line}</span>)}</h2></div>
        <div className="dh-origin-letter"><p>{copy.storyDescription}</p><p className="dh-signature">{copy.storySignature}<span aria-hidden="true">Hiorio.</span></p></div>
      </section>

      <section className="dh-final" aria-labelledby="dh-final-title">
        <div className="dh-final-pin"><RouteMark kind="pin" /></div>
        <p className="dh-eyebrow">{copy.finalEyebrow}</p>
        <h2 id="dh-final-title">{copy.finalTitle.map((line) => <span key={line}>{line}</span>)}</h2>
        <p className="dh-final-description">{copy.finalDescription}</p>
        <div className="dh-actions"><a className="dh-button dh-button-primary" href={webUrl} target="_blank" rel="noreferrer">{copy.start}<span aria-hidden="true">↗</span></a><a className="dh-app-store" href="https://dohwaji.app/explore" target="_blank" rel="noreferrer">{copy.explore}<span aria-hidden="true">↗</span></a></div>
      </section>
      <footer className="dh-footer"><a href={appsHref}>← {copy.back}</a><span>도화지 <i>by</i> HIORIO</span><a href={webUrl} target="_blank" rel="noreferrer">dohwaji.app ↗</a></footer>

      <dialog ref={imageDialog} className="dh-image-dialog" aria-labelledby="dh-dialog-title" onClick={(event) => { if (event.target === event.currentTarget) imageDialog.current?.close(); }}>
        <div className="dh-dialog-heading"><h2 id="dh-dialog-title">{selectedDay.label} · {selectedDay.title}</h2><button type="button" onClick={() => imageDialog.current?.close()} autoFocus>{copy.close} <span aria-hidden="true">×</span></button></div>
        <p>{zoomHint}</p>
        <div className="dh-dialog-image" tabIndex={0}><img src={imagePath} width="836" height="355" alt={`${copy.imageAlt} — ${selectedDay.label}`} /></div>
        <a href={routeUrl} target="_blank" rel="noreferrer">{copy.openRoute} ↗</a>
      </dialog>
    </main>
  );
}
