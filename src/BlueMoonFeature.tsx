import { BlueMoonCompanion } from "./BlueMoonCompanion";
import { ServiceArrow } from "./ServiceArrow";
import { blueMoonCopy, blueMoonProject, blueMoonScenes } from "./bluemoon-content";
import type { Locale } from "./i18n";
import "./bluemoon.css";

export function BlueMoonFeature({ locale, basePath, variant = "hero", headingLevel = 1 }: { locale: Locale; basePath: string; variant?: "hero" | "detail" | "compact"; headingLevel?: 1 | 2 }) {
  const Heading = headingLevel === 1 ? "h1" : "h2";
  const text = blueMoonCopy[locale];
  const content = blueMoonProject.app.content[locale];
  const href = `${basePath}${blueMoonProject.app.detailPath}`;
  const image = blueMoonScenes[0];
  if (variant === "compact") return <aside className="bm-feature-compact" aria-labelledby="bm-feature-title">
    <BlueMoonCompanion locale={locale} basePath={basePath} />
    <div><h2 id="bm-feature-title">{content.displayName}<span>{text.flagship}</span></h2><p>{content.tagline}</p></div>
    <a className="bm-text-link" href={href}>{text.about}<ServiceArrow /></a>
  </aside>;

  return <section className={`bm-feature bm-feature-${variant}`} aria-labelledby={variant === "hero" ? "root-page-title" : "bm-page-title"}>
    <div className="bm-feature-copy">
      <div className="bm-brand"><BlueMoonCompanion locale={locale} basePath={basePath} /><div><strong>{content.displayName}</strong><span>{text.flagship}</span></div></div>
      <Heading id={variant === "hero" ? "root-page-title" : "bm-page-title"}>{blueMoonProject.copy[locale].headline.map((line) => <span key={line}>{line}</span>)}</Heading>
      <p className="bm-feature-description">{content.description}</p>
      <div className="bm-feature-actions"><a className="bm-primary" href={variant === "detail" ? "#bm-workshop" : href}>{variant === "detail" ? text.workshop : text.about}<ServiceArrow /></a>
        <a className="bm-text-link" href={`${basePath}apps/`}>{text.all}</a></div>
      <p className="bm-availability">{text.availability}</p>
    </div>
    <figure className="bm-feature-visual"><a href={variant === "detail" ? "#bm-workshop" : href} aria-label={`${content.displayName} · ${text.workshop}`}><img src={`${basePath}${image.src}`} width={image.width} height={image.height} alt={`${text.scenes[0]} · ${text.capture}`} fetchPriority="high" decoding="async" /></a><figcaption>{text.capture}</figcaption></figure>
  </section>;
}
