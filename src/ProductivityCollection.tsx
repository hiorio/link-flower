import type { ReactNode } from "react";
import { appIntroductionHref } from "./apps";
import { AppIcon } from "./AppIcon";
import { ServiceArrow } from "./ServiceArrow";
import { BotanicalBloom } from "./BotanicalBloom";
import { catalogCopy } from "./catalog";
import { catalogPreviewImage } from "./catalog-preview";
import type { Locale } from "./i18n";
import { productivityApps, productivityCopy } from "./productivity-collection";
import "./productivity-collection.css";

export function ProductivityCollection({ locale, basePath }: { locale: Locale; basePath: string }) {
  const text = productivityCopy[locale];
  return <section className="prod-summary" aria-labelledby="prod-summary-title"><div><h2 id="prod-summary-title">{text.title}</h2><p>{text.short}</p><a className="prod-link" href={`${basePath}collections/productivity/`}>{text.open}<ServiceArrow /></a></div>
    <nav aria-label={text.title}><ul>{productivityApps.map((app) => <li key={app.id}><a href={appIntroductionHref(app, basePath)}><AppIcon app={app} locale={locale} basePath={basePath} size={40} /><span>{app.content[locale].displayName}</span></a></li>)}</ul></nav>
  </section>;
}

export function ProductivityCollectionPage({ header, locale, basePath }: { header: ReactNode; locale: Locale; basePath: string }) {
  const text = productivityCopy[locale];
  return <main className="site-shell prod-shell">{header}<div id="page-content" tabIndex={-1}>
    <section className="prod-hero" aria-labelledby="prod-title"><div><h1 id="prod-title">{text.headline.map((line) => <span key={line}>{line}</span>)}</h1><p>{text.intro}</p><a className="prod-link" href={`${basePath}apps/`}>{text.all}<ServiceArrow /></a></div><div className="prod-flower" aria-hidden="true"><BotanicalBloom basePath={basePath} /></div></section>
    <div className="prod-products">{productivityApps.map((app, index) => {
      const content = app.content[locale];
      const preview = catalogPreviewImage(app.id, locale);
      return <article className="prod-product" key={app.id}><header><AppIcon app={app} locale={locale} basePath={basePath} size={56} /><div><h2>{content.displayName}</h2><span>{catalogCopy[locale][app.status]}</span></div></header><h3>{text.roles[index]}</h3><p>{content.description}</p><ul>{content.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>{preview && <figure><img src={`${basePath}${preview.src}`} alt={preview.alt} loading="lazy" decoding="async" /><figcaption>{preview.caption}</figcaption></figure>}<a className="prod-link" href={appIntroductionHref(app, basePath)} aria-label={`${content.displayName} · ${text.about}`}>{text.about}<ServiceArrow /></a></article>;
    })}</div><p className="prod-note">{text.note}</p>
    </div><footer className="prod-footer"><p>{text.footer}</p><a className="prod-link" href={`${basePath}apps/`}>{text.all}</a><small>HIORIO © 2026</small></footer></main>;
}
