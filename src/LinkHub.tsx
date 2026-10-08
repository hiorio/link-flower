import { productApps, appIntroductionHref, type ProductApp } from "./apps";
import { AppIcon } from "./AppIcon";
import { CatalogControls, CatalogEmpty, useCatalog } from "./CatalogControls";
import { catalogCopy } from "./catalog";
import { CatalogPreviewProvider, CatalogPreviewTrigger } from "./CatalogPreview";
import { BlueMoonFeature } from "./BlueMoonFeature";
import { blueMoonCopy } from "./bluemoon-content";
import { ProductivityCollection } from "./ProductivityCollection";
import { MediaCollections } from "./MediaCollections";
import { type Locale, ui } from "./i18n";
import { SHOW_HORROR_DOPAMINE } from "./visibility";
import { HiorioIntro } from "./HiorioIntro";
import { HiorioLogo } from "./HiorioLogo";
import { ServiceArrow } from "./ServiceArrow";

const hubCopy = {
  ko: { browse: "모든 소개 보기", about: "소개 보기", web: "웹에서 열기", demo: "웹 데모", store: "App Store", collection: "피어난 서비스와 새롭게 틔우는 아이디어", next: "다음 아이디어도 이곳에서.", newWindow: "새 창에서 열기" },
  en: { browse: "Explore the collection", about: "About this project", web: "Open website", demo: "Web demo", store: "App Store", collection: "Live projects and ideas taking shape", next: "The next idea will grow here, too.", newWindow: "Opens in a new tab" },
  ja: { browse: "すべての紹介を見る", about: "詳しく見る", web: "ウェブで開く", demo: "ウェブデモ", store: "App Store", collection: "自分でつくり、育てているもの", next: "次のアイデアも、ここから。", newWindow: "新しいタブで開く" },
} satisfies Record<Locale, Record<string, string>>;

function ProjectLink({ app, locale, basePath, priority }: { app: ProductApp; locale: Locale; basePath: string; priority: boolean }) {
  const content = app.content[locale];
  const labels = hubCopy[locale];
  const external = app.links.find((link) => link.kind === "web") ?? app.links.find((link) => link.kind === "appStore");
  const aboutHref = appIntroductionHref(app, basePath) ?? `${basePath}apps/#${app.id}`;
  const destination = external?.kind === "appStore" ? labels.store
    : external?.kind === "web" ? (app.platforms.includes("WEB DEMO") ? labels.demo : labels.web)
    : labels.about;

  return (
    <li className={`hub-card hub-card-${app.accent}`}>
      <AppIcon className="hub-app-icon" app={app} basePath={basePath} locale={locale} size={56} priority={priority} />
      <div className="hub-card-copy">
        <div className="hub-card-title">
        <h3>
          <a className="hub-card-main" href={external?.href ?? aboutHref}
            target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}
            aria-label={`${content.displayName} · ${destination}${external ? ` · ${labels.newWindow}` : ""}`}>
            {content.displayName}
          </a>
        </h3>
        {app.status !== "live" && <span className={`hub-card-state status-${app.status}`}>{catalogCopy[locale][app.status]}</span>}
        </div>
        <p>{content.tagline}</p>
        <div className="hub-card-actions">
          <span className="hub-destination">{destination}</span>
          {external && <a className="hub-about-link" href={aboutHref} aria-label={`${content.displayName} · ${labels.about}`}>{labels.about}</a>}
          <CatalogPreviewTrigger app={app} locale={locale} />
        </div>
      </div>
      <span className="hub-card-arrow"><ServiceArrow direction={external ? "external" : "right"} /></span>
    </li>
  );
}

export function LinkHub({ locale, basePath }: { locale: Locale; basePath: string }) {
  const copy = ui[locale];
  const labels = hubCopy[locale];
  const catalog = useCatalog();

  return (
    <div className="hub-layout" id="page-content" tabIndex={-1}>
      <HiorioIntro locale={locale} basePath={basePath} />
      <div className="hiorio-feature-field"><BlueMoonFeature locale={locale} basePath={basePath} headingLevel={2} /></div>
      <div className="hiorio-collections"><ProductivityCollection locale={locale} basePath={basePath} /><MediaCollections locale={locale} basePath={basePath} /></div>

      <section className="garden-index hub-index" id="work-index" aria-labelledby="root-work-title">
        <header className="hub-index-heading">
          <div><h2 id="root-work-title">{copy.appsCardTitle}<span className="hub-count">{String(productApps.length).padStart(2, "0")}</span></h2></div>
          <a className="hub-collection-link" href={`${basePath}apps/`}>{labels.browse}<ServiceArrow direction="external" /></a>
        </header>
        <CatalogControls catalog={catalog} locale={locale} resultsId="hub-app-results" />
        <CatalogPreviewProvider locale={locale} basePath={basePath} theme="light">
        <ul className="hub-link-list" id="hub-app-results">
          {catalog.apps.map((app, index) => <ProjectLink key={app.id} app={app} locale={locale} basePath={basePath} priority={index < 2} />)}
        </ul>
        </CatalogPreviewProvider>
        {catalog.apps.length === 0 && <CatalogEmpty locale={locale} reset={catalog.reset} />}

        {SHOW_HORROR_DOPAMINE && <a className="hub-channel-link" href={`${basePath}channels/`}><span>{copy.channelsCardTitle}</span><span aria-hidden="true">↗</span></a>}

      </section>
      <aside className="hiorio-close" aria-label={blueMoonCopy[locale].next}>
        <p>{blueMoonCopy[locale].next}</p><HiorioLogo basePath={basePath} tone="black-on-cobalt" part="lockup" />
      </aside>
    </div>
  );
}
