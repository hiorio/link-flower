import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { BlueMoonFeature } from "./BlueMoonFeature";
import { ServiceArrow } from "./ServiceArrow";
import { blueMoonCopy, blueMoonScenes } from "./bluemoon-content";
import type { Locale } from "./i18n";

export function BlueMoonPage({ header, locale, basePath }: { header: ReactNode; locale: Locale; basePath: string }) {
  const [scene, setScene] = useState(0);
  const [failed, setFailed] = useState(false);
  const [retry, setRetry] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const text = blueMoonCopy[locale];
  const image = blueMoonScenes[scene];
  function select(index: number) { setScene(index); setFailed(false); }
  function navigate(event: KeyboardEvent<HTMLButtonElement>) {
    const offset = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    const index = event.key === "Home" ? 0 : event.key === "End" ? 2 : offset ? (scene + offset + 3) % 3 : undefined;
    if (index === undefined) return;
    event.preventDefault(); select(index); tabs.current[index]?.focus();
  }
  return <main className="site-shell bm-shell">
    {header}
    <a className="bm-back bm-text-link" href={`${basePath}apps/`}><ServiceArrow direction="left" />{text.back}</a>
    <div id="page-content" tabIndex={-1}><BlueMoonFeature locale={locale} basePath={basePath} variant="detail" /></div>
    <section className="bm-workshop" id="bm-workshop" aria-labelledby="bm-workshop-title">
      <div className="bm-section-heading"><h2 id="bm-workshop-title">{text.sceneTitle}</h2><p>{text.sceneIntro}</p></div>
      <div className="bm-scenes" role="tablist" aria-label={text.workshop}>{blueMoonScenes.map((item, index) => <button key={item.id} type="button" role="tab" id={`bm-tab-${item.id}`} aria-controls={`bm-panel-${item.id}`} aria-selected={scene === index} tabIndex={scene === index ? 0 : -1} ref={(node) => { tabs.current[index] = node; }} onKeyDown={navigate} onClick={() => select(index)}>{text.scenes[index]}</button>)}</div>
      {blueMoonScenes.map((item, index) => <div key={item.id} role="tabpanel" id={`bm-panel-${item.id}`} aria-labelledby={`bm-tab-${item.id}`} hidden={scene !== index} tabIndex={0}>
        {scene === index && <><p className="bm-scene-description">{text.sceneDescriptions[index]}</p>
          <figure className="bm-scene-figure">{failed ? <div className="bm-image-error" role="status"><p>{text.imageError}</p><button type="button" onClick={() => { setFailed(false); setRetry(retry + 1); tabs.current[scene]?.focus(); }}>{text.retry}</button></div> : <a href={`${basePath}${image.src}`} target="_blank" rel="noreferrer" aria-label={`${text.open} · ${text.newWindow}`}><img key={`${image.id}-${retry}`} src={`${basePath}${image.src}`} width={image.width} height={image.height} alt={`${text.scenes[scene]} · ${text.capture}`} loading="lazy" decoding="async" onError={() => setFailed(true)} /></a>}
          <figcaption>{text.capture}<a href={`${basePath}${image.src}`} target="_blank" rel="noreferrer">{text.open}<ServiceArrow direction="external" /><span className="bm-visually-hidden">{text.newWindow}</span></a></figcaption></figure></>}
      </div>)}
      <p className="bm-capture-note">{text.captureNote}</p>
    </section>
    <section className="bm-keep" aria-labelledby="bm-keep-title"><div><h2 id="bm-keep-title">{text.keepTitle}</h2><p>{text.keepIntro}</p></div><ul>{text.keepItems.map((item) => <li key={item}>{item}</li>)}</ul></section>
    <section className="bm-status" aria-labelledby="bm-status-title"><h2 id="bm-status-title">{text.statusTitle}</h2><dl><div><dt>{text.implemented}</dt><dd>{text.implementedBody}</dd></div><div><dt>{text.pending}</dt><dd>{text.pendingBody}</dd></div><div><dt>{text.privacy}</dt><dd>{text.privacyBody}</dd></div></dl></section>
    <footer className="bm-footer"><div><h2>{text.ending}</h2><p>{text.endingBody}</p></div><a className="bm-primary" href={`${basePath}apps/`}>{text.all}<ServiceArrow /></a><small>BlueMoon · HIORIO © 2026</small></footer>
  </main>;
}
