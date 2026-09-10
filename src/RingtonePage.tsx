import { useState, type CSSProperties, type ReactNode } from "react";
import type { Locale } from "./i18n";
import { ringtoneCopy } from "./ringtone-copy";
import "./ringtone.css";

export { ringtoneCopy } from "./ringtone-copy";

const storeHref = "https://apps.apple.com/app/id6809625649";
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;
// Illustrative waveform, not measured audio. The UI explicitly identifies it as an example.
const amplitudes = Array.from({ length: 88 }, (_, i) =>
  14 + Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.27)) * 70 + Math.sin(i * 0.19) ** 2 * 28);

function SoundGlyph({ kind }: { kind: "sound" | "file" | "lock" | "arrow" }) {
  const paths = {
    sound: <><path d="M4 10v4m4-8v12m4-15v18m4-15v12m4-8v4" /></>,
    file: <><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8zM14 3v5h5M9 13v4m3-6v8m3-5v2" /></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="3" /><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2" /></>,
    arrow: <><path d="M5 12h14m-6-6 6 6-6 6" /></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[kind]}</svg>;
}

export function RingtonePage({ header, locale, appsHref }: { header: ReactNode; locale: Locale; appsHref: string }) {
  const copy = ringtoneCopy[locale];
  const [position, setPosition] = useState(1);
  const from = position * 30;
  const time = (seconds: number) => `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}.0`;
  const support = `https://hiorio.github.io/ringringring-support/${locale === "ko" ? "" : `${locale}/`}`;

  return (
    <main className="site-shell ringtone-shell">
      {header}
      <section className="ringtone-hero" id="page-content" aria-labelledby="ringtone-title">
        <div className="ringtone-hero-copy">
          <div className="ringtone-brand"><img src={asset("app-icons/ringtone.png")} alt="" width="64" height="64" /><div><strong>{copy.name}</strong><span><i />{copy.status}</span></div></div>
          <p className="ringtone-eyebrow">{copy.eyebrow}</p>
          <h1 id="ringtone-title">{copy.headline.map((line, i) => <span key={line} className={i === 2 ? "is-blue" : undefined}>{line}</span>)}</h1>
          <p className="ringtone-intro">{copy.intro}</p>
          <div className="ringtone-actions"><a className="ringtone-primary" href={storeHref} target="_blank" rel="noreferrer">{copy.store}<span aria-hidden="true">↗</span></a><a className="ringtone-text-link" href="#ringtone-process">{copy.explore}<span aria-hidden="true">↓</span></a></div>
          <p className="ringtone-meta">{copy.meta}</p>
        </div>

        <div className="ringtone-studio" aria-label={copy.previewLabel}>
          <div className="ringtone-studio-top"><SoundGlyph kind="sound" /><span>{copy.previewLabel}</span></div>
          <div className="ringtone-duration"><span>{copy.duration}</span><p>30.0<small>{copy.seconds}</small></p></div>
          <div className="ringtone-wave-track" aria-hidden="true">
            <div className="ringtone-wave-bars">{amplitudes.map((height, i) => <i key={i} style={{ height: `${height}px` }} className={i >= position * amplitudes.length / 3 && i < (position + 1) * amplitudes.length / 3 ? "is-selected" : undefined} />)}</div>
            <div className="ringtone-selection" style={{ "--selection-position": `${position * 100}%` } as CSSProperties}><i /><i /></div>
          </div>
          <div className="ringtone-ticks" aria-hidden="true"><span>00:00</span><span>00:30</span><span>01:00</span><span>01:30</span></div>
          <div className="ringtone-presets" role="group" aria-label={copy.range}>{copy.presets.map((label, i) => <button key={label} type="button" aria-pressed={position === i} aria-controls="ringtone-range" onClick={() => setPosition(i)}>{label}</button>)}</div>
          <div id="ringtone-range" className="ringtone-range" role="status" aria-label={copy.selection}><div><span>{copy.start}</span><strong>{time(from)}</strong></div><SoundGlyph kind="arrow" /><div><span>{copy.end}</span><strong>{time(from + 30)}</strong></div></div>
          <div className="ringtone-output"><SoundGlyph kind="file" /><div><strong>{copy.exportLabel}</strong><span>{copy.exportNote}</span></div><span className="ringtone-filetype" aria-hidden="true">.m4a</span></div>
          <p className="ringtone-preview-note">{copy.previewNote}</p>
        </div>
      </section>

      <ul className="ringtone-capabilities">{copy.promises.map((label) => <li key={label}><span aria-hidden="true">+</span>{label}</li>)}</ul>

      <section className="ringtone-process" id="ringtone-process" aria-labelledby="ringtone-process-title">
        <header className="ringtone-section-heading"><p className="ringtone-eyebrow">{copy.processLabel}</p><h2 id="ringtone-process-title">{copy.processTitle}</h2><p>{copy.processIntro}</p></header>
        <div className="ringtone-process-body">
          <figure className="ringtone-actual"><div className="ringtone-screen-crop"><img src={asset(`product-shots/ringtone/home-${locale}.png`)} alt={copy.screenshotAlt} width="1320" height="2868" loading="lazy" decoding="async" /></div><figcaption><i />{copy.screenshotCaption}</figcaption></figure>
          <ol className="ringtone-steps">{copy.steps.map((step, i) => <li key={step.title}><span className="ringtone-step-number">0{i + 1}</span><div><h3>{step.title}</h3><p>{step.body}</p><small>{step.note}</small></div></li>)}</ol>
        </div>
      </section>

      <section className="ringtone-privacy" aria-labelledby="ringtone-privacy-title">
        <div><p className="ringtone-eyebrow"><SoundGlyph kind="lock" />{copy.privacyLabel}</p><h2 id="ringtone-privacy-title">{copy.privacyTitle}</h2></div>
        <div className="ringtone-privacy-copy"><p>{copy.privacyBody}</p><ul>{copy.privacyTags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
      </section>

      <section className="ringtone-faq" aria-labelledby="ringtone-faq-title"><h2 id="ringtone-faq-title">{copy.faqTitle}</h2><div>{copy.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></section>

      <section className="ringtone-final" aria-labelledby="ringtone-final-title"><img src={asset("app-icons/ringtone.png")} alt="" width="88" height="88" loading="lazy" /><h2 id="ringtone-final-title">{copy.finalTitle}</h2><a className="ringtone-primary" href={storeHref} target="_blank" rel="noreferrer">{copy.store}<span aria-hidden="true">↗</span></a></section>
      <footer className="ringtone-footer"><a href={appsHref}>← {copy.back}</a><div><a href={support} target="_blank" rel="noreferrer">{copy.support} ↗</a><a href={`${support}privacy/`} target="_blank" rel="noreferrer">{copy.privacy} ↗</a></div><span>© 2026 HIORIO</span></footer>
    </main>
  );
}
