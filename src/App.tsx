import { useEffect, useState } from "react";
import { productApps } from "./apps";
import { detectLocale, localeLabels, supportedLocales, ui, type Locale } from "./i18n";
import { defaultNodeId, nodes } from "./nodes";
import { DailyPlankPage, dailyPlankCopy } from "./DailyPlankPage";
import { LeafMessagePage, leafMessageCopy } from "./LeafMessagePage";
import { SsakMemoPage, ssakMemoCopy } from "./SsakMemoPage";
import { TimeFlowerPage, timeFlowerCopy } from "./TimeFlowerPage";
import { BotanicalBloom, botanicalLeafPaths } from "./BotanicalBloom";
import { SHOW_HORROR_DOPAMINE } from "./visibility";
import { useSiteMotion } from "./useSiteMotion";

type RouteId = "root" | "channels" | "apps" | "dohwaji" | "timeflower" | "dailyplank" | "ssakmemo" | "leafmessage" | "horror";
type Copy = (typeof ui)[Locale];

const basePath = import.meta.env.BASE_URL;
const localeAccessibleNames: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
  ja: "日本語",
};

const spineLeafOrder = [0, 1, 2, 1, 0] as const;
const futureLeafOrder = [2, 0, 1] as const;

function routeHref(route: RouteId) {
  if (route === "root") return basePath;
  if (route === "dohwaji") return `${basePath}apps/dohwaji/`;
  if (route === "timeflower") return `${basePath}apps/timeflower/`;
  if (route === "dailyplank") return `${basePath}apps/daily-plank/`;
  if (route === "ssakmemo") return `${basePath}apps/ssak-memo/`;
  if (route === "leafmessage") return `${basePath}apps/leaf-message/`;
  return `${basePath}${route}/`;
}

function getRoute(): RouteId {
  const relativePath = window.location.pathname.slice(basePath.length).replace(/^\/+|\/+$/g, "");
  if (relativePath === "apps/dohwaji") return "dohwaji";
  if (relativePath === "apps/timeflower") return "timeflower";
  if (relativePath === "apps/daily-plank") return "dailyplank";
  if (relativePath === "apps/ssak-memo") return "ssakmemo";
  if (relativePath === "apps/leaf-message") return "leafmessage";
  if (relativePath === "channels" || relativePath === "horror") return SHOW_HORROR_DOPAMINE ? relativePath : "root";
  if (relativePath === "apps") return relativePath;
  return "root";
}

function SiteHeader({ activeRoute, copy, locale, setLocale }: {
  activeRoute: RouteId;
  copy: Copy;
  locale: Locale;
  setLocale: (locale: Locale) => void;
}) {
  const routes: Array<{ id: RouteId; label: string }> = [
    { id: "root", label: copy.mainNode },
    { id: "apps", label: copy.appsNode },
    ...(SHOW_HORROR_DOPAMINE ? [{ id: "channels" as const, label: copy.channelsNode }] : []),
  ];

  return (
    <header className="network-bar">
      <a className="skip-link" href="#page-content">{copy.skipToContent}</a>
      <a className="network-name" href={routeHref("root")}>
        <span className="record-dot" aria-hidden="true" />
        HIORIO
      </a>
      <div className="network-controls">
        <nav className="node-switcher" aria-label={copy.nodeNetworkLabel}>
          {routes.map((route) => {
            const isActive = activeRoute === route.id
              || ((activeRoute === "dohwaji" || activeRoute === "timeflower" || activeRoute === "dailyplank" || activeRoute === "ssakmemo" || activeRoute === "leafmessage") && route.id === "apps")
              || (activeRoute === "horror" && route.id === "channels");
            return (
              <a aria-current={isActive ? "page" : undefined} className={isActive ? "is-active" : ""} href={routeHref(route.id)} key={route.id}>
                <span>{route.label}</span>
              </a>
            );
          })}
        </nav>
        <div className="language-switcher" role="group" aria-label={copy.languageLabel}>
          {supportedLocales.map((item) => (
            <button aria-label={localeAccessibleNames[item]} className={item === locale ? "is-active" : ""} key={item} lang={item} type="button"
              aria-pressed={item === locale} onClick={() => setLocale(item)}>
              {localeLabels[item]}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

function RootPage({ copy, locale, setLocale }: { copy: Copy; locale: Locale; setLocale: (locale: Locale) => void }) {
  return (
    <main className="site-shell root-shell garden-root">
      <div className="root-grid-bg" aria-hidden="true" />
      <SiteHeader activeRoute="root" copy={copy} locale={locale} setLocale={setLocale} />

      <section className="garden-hero" id="page-content" aria-labelledby="root-page-title">
        <div className="garden-hero-copy">
          <div className="garden-eyebrow"><span>{copy.rootKicker}</span><i aria-hidden="true" /></div>
          <h1 id="root-page-title">{copy.rootTitle}</h1>
          <p className="garden-promise">{copy.rootTitleAccent}</p>
          <p className="garden-intro">
            {copy.rootDescription.map((line) => <span key={line}>{line}</span>)}
          </p>
          <div className="garden-hero-actions">
            <a className="garden-primary-link" href={routeHref("apps")}>{copy.appsCardTitle}<b aria-hidden="true">↗</b></a>
            <a className="garden-scroll-link" href="#work-index">
              <span>01</span>{copy.rootSectionTitle}<b aria-hidden="true">↓</b>
            </a>
          </div>
        </div>

        <div className="garden-hero-flower" aria-hidden="true">
          <BotanicalBloom basePath={basePath} />
          <span className="flower-caption">IDEAS → ROOTS → BLOOM</span>
        </div>
      </section>

      <section className="garden-index" id="work-index" aria-labelledby="root-work-title">
        <header className="garden-index-heading">
          <span className="garden-section-number">01</span>
          <div><p>BLOOMED WORK / LIVING INDEX</p><h2 id="root-work-title">{copy.rootSectionTitle}</h2></div>
          <p>{copy.rootSectionHint}</p>
        </header>

        <div className="garden-work-tree">
          <div className="garden-trunk" aria-hidden="true">
            {spineLeafOrder.map((leaf, index) => (
              <img className={`spine-leaf spine-leaf-${index + 1}`} src={`${basePath}${botanicalLeafPaths[leaf]}`} alt="" loading="lazy" decoding="async" key={`${leaf}-${index}`} />
            ))}
          </div>

          <article className="garden-branch garden-branch-apps">
            <span className="branch-number">01</span>
            <div className="branch-content">
              <header>
                <div><p>APPS / SERVICES</p><h3>{copy.appsCardTitle}</h3></div>
                <a href={routeHref("apps")} aria-label={`${copy.appsCardTitle} ${copy.enterNode}`}>{copy.enterNode}<span aria-hidden="true">↗</span></a>
              </header>
              <p className="branch-description">{copy.appsCardDescription}</p>
              <ul className="garden-app-list">
                {productApps.map((app) => {
                  const content = app.content[locale];
                  return (
                    <li key={app.id}>
                      <a href={`${routeHref("apps")}#${app.id}`}>
                        <span className="garden-app-icon"><img src={`${basePath}${app.icon}`} alt="" width="78" height="78" loading="lazy" decoding="async" /></span>
                        <strong>{content.displayName}</strong>
                        <small>{content.tagline}</small>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </article>

          {SHOW_HORROR_DOPAMINE && (
            <article className="garden-branch garden-branch-content">
              <span className="branch-number">02</span>
              <div className="branch-content">
                <header>
                  <div><p>CONTENT / CHANNELS</p><h3>{copy.channelsCardTitle}</h3></div>
                  <a href={routeHref("channels")} aria-label={`${copy.channelsCardTitle} ${copy.enterNode}`}>{copy.enterNode}<span aria-hidden="true">↗</span></a>
                </header>
                <p className="branch-description">{copy.channelsCardDescription}</p>
                <a className="garden-content-entry" href={routeHref("horror")}>
                  <span className="content-entry-mark" aria-hidden="true"><i />REC</span>
                  <span><strong>{copy.horrorCardTitle}</strong><small>{copy.horrorCardDescription}</small></span>
                  <b aria-hidden="true">→</b>
                </a>
              </div>
            </article>
          )}

          <article className="garden-branch garden-branch-future">
            <span className="branch-number">{SHOW_HORROR_DOPAMINE ? "03" : "02"}</span>
            <div className="branch-content">
              <header><div><p>NEXT BLOOM</p><h3>{copy.rootFutureTitle}</h3></div></header>
              <p className="branch-description">{copy.rootFutureDescription}</p>
              <div className="future-buds" aria-hidden="true">
                {futureLeafOrder.map((leaf, index) => (
                  <img className={`future-leaf future-leaf-${index + 1}`} src={`${basePath}${botanicalLeafPaths[leaf]}`} alt="" loading="lazy" decoding="async" key={`${leaf}-${index}`} />
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <footer className="site-footer root-footer">
        <div><span className="footer-node">HIORIO</span><p>{copy.rootFooter}</p></div><span>LINK FLOWER · © 2026</span>
      </footer>
    </main>
  );
}

function ChannelsPage({ copy, locale, setLocale }: { copy: Copy; locale: Locale; setLocale: (locale: Locale) => void }) {
  const node = nodes[defaultNodeId];

  return (
    <main className="site-shell channels-shell">
      <div className="channels-grid-bg" aria-hidden="true" />
      <SiteHeader activeRoute="channels" copy={copy} locale={locale} setLocale={setLocale} />

      <section className="simple-node-hero" id="page-content" aria-labelledby="channels-page-title">
        <div className="simple-node-copy">
          <div className="simple-kicker"><span>{copy.channelsKicker}</span><span>SOCIAL / EXTERNAL</span></div>
          <h1 id="channels-page-title" className="simple-title">
            <span>{copy.channelsTitle}</span><span>{copy.channelsTitleAccent}</span>
          </h1>
          <p className="hero-description">{copy.channelsDescription.map((line) => <span key={line}>{line}<br /></span>)}</p>
        </div>
        <div className="channel-signal" aria-hidden="true">
          <span className="signal-center">01</span><i /><i /><i />
          <b>YT</b><b>IG</b><b>TT</b>
        </div>
      </section>

      <section className="channels" aria-labelledby="channels-title">
        <div className="section-heading">
          <div><span className="section-index">02-A</span><h2 id="channels-title">{copy.channelsSectionTitle}</h2></div>
          <p>{copy.channelsSectionHint.toUpperCase()}</p>
        </div>
        <nav className="channel-grid" aria-label={copy.channelsLabel}>
          {node.channels.map((channel, index) => (
            <a className="channel-card" href={channel.href} key={channel.name} target="_blank" rel="noreferrer"
              aria-label={copy.channelLinkLabel(channel.name)}>
              <div className="channel-card-top"><span>CH_{channel.index}</span><span className="external-arrow">↗</span></div>
              <div className="channel-mark" aria-hidden="true">{channel.mark}</div>
              <div className="channel-info"><strong>{channel.name}</strong><span>{channel.handle}</span><small>{copy.channelDescriptions[index]}</small></div>
            </a>
          ))}
        </nav>
        <a className="internal-node-link" href={routeHref("horror")}>{copy.channelsToHorror}<span aria-hidden="true">→</span></a>
      </section>

      <footer className="site-footer">
        <div><span className="footer-node">NODE_02-A</span><p>{copy.channelsFooter}</p></div><span>© 2026 LINK FLOWER</span>
      </footer>
    </main>
  );
}

function AppsPage({ copy, locale, setLocale }: { copy: Copy; locale: Locale; setLocale: (locale: Locale) => void }) {
  const linkLabel = (kind: "web" | "appStore" | "support") => ({ web: copy.appLinkWeb, appStore: copy.appLinkAppStore, support: copy.appLinkSupport })[kind];
  const statusLabel = (status: (typeof productApps)[number]["status"]) => ({
    live: copy.appStatus,
    preparing: copy.appStatusPreparing,
    demo: copy.appStatusDemo,
  })[status];
  const liveCount = productApps.filter((app) => app.status === "live").length;
  const detailHref = (id: string) => id === "dohwaji" ? routeHref("dohwaji") : id === "timeflower" ? routeHref("timeflower") : id === "dailyplank" ? routeHref("dailyplank") : id === "ssakmemo" ? routeHref("ssakmemo") : id === "leaf-message" ? routeHref("leafmessage") : undefined;

  return (
    <main className="site-shell development-shell apps-showcase-shell">
      <div className="development-grid-bg" aria-hidden="true" />
      <SiteHeader activeRoute="apps" copy={copy} locale={locale} setLocale={setLocale} />

      <section className="apps-showcase-hero" id="page-content" aria-labelledby="apps-page-title">
        <div className="apps-showcase-copy">
          <div className="apps-hero-eyebrow">
            <span>{copy.appsKicker}</span>
            <span>DESIGN / GROW / OPERATE</span>
            <b aria-hidden="true">2026</b>
          </div>
          <h1 id="apps-page-title" className="apps-hero-title">{copy.appsTitle}</h1>
          <p className="apps-hero-description">
            {copy.appsDescription.map((line) => <span key={line}>{line}</span>)}
          </p>
          <nav className="apps-hero-actions" aria-label={copy.appsPageNavLabel}>
            <a className="apps-hero-primary" href="#app-products-title">{copy.appsBrowseLabel}<span aria-hidden="true">↘</span></a>
            <a href="#app-principles-title">{copy.appsPrinciplesLink}<span aria-hidden="true">→</span></a>
          </nav>
          <dl className="apps-hero-stats">
            <div><dt>{copy.appsTotalLabel}</dt><dd>{String(productApps.length).padStart(2, "0")}</dd></div>
            <div><dt>{copy.appsLiveLabel}</dt><dd>{String(liveCount).padStart(2, "0")}</dd></div>
          </dl>
        </div>
        <aside className="apps-directory" aria-labelledby="apps-directory-title">
          <header className="apps-directory-head">
            <div><span>PRODUCT DIRECTORY</span><strong id="apps-directory-title">{copy.appsDirectoryLabel}</strong></div>
            <b>{String(productApps.length).padStart(2, "0")}</b>
          </header>
          <nav className="apps-directory-nav" aria-label={copy.appsSectionTitle}>
            <ul className="apps-directory-list">
              {productApps.map((app) => {
                const content = app.content[locale];
                return (
                  <li key={app.id}>
                    <a className={`apps-directory-item directory-${app.accent}`} href={`#${app.id}`}>
                      <span className="apps-directory-number">{app.order}</span>
                      <img alt="" src={`${basePath}${app.icon}`} width="58" height="58" decoding="async" />
                      <span className="apps-directory-name"><strong>{content.displayName}</strong><small>{content.tagline}</small></span>
                      <span className={`apps-directory-status status-${app.status}`}><i />{statusLabel(app.status)}</span>
                      <span className="apps-directory-arrow" aria-hidden="true">↓</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <footer className="apps-directory-foot">
            <span>HIORIO / PRODUCT LAB</span>
            <div aria-label={copy.appsStatusLegend}>
              <span><i className="is-live" />{copy.appStatus} {liveCount}</span>
            </div>
          </footer>
        </aside>
      </section>

      <section className="apps-showcase-products" aria-labelledby="app-products-title">
        <header className="apps-section-heading">
          <div><span className="apps-section-index">01</span><div><small>PRODUCT INDEX</small><h2 id="app-products-title">{copy.appsSectionTitle}</h2></div></div>
          <p>{copy.appsSectionHint}</p>
        </header>
        <nav className="apps-catalog-jump" aria-label={copy.appsProductIndexLabel}>
          <span>{copy.appsProductIndexLabel}</span>
          <div>{productApps.map((app) => <a href={`#${app.id}`} key={app.id}><b>{app.order}</b>{app.content[locale].displayName}</a>)}</div>
        </nav>
        <div className="apps-product-list">
          {productApps.map((app) => {
            const content = app.content[locale];
            const internalHref = detailHref(app.id);
            return (
              <article className={`apps-product-card product-${app.accent}`} id={app.id} key={app.id} tabIndex={-1}>
                <header className="apps-product-rail">
                  <div><i /><span>APP / {app.order}</span><span>HIORIO PRODUCT</span></div>
                  <span className={`apps-product-status status-${app.status}`}><i />{statusLabel(app.status)}</span>
                </header>
                <div className="apps-product-body">
                  <div className="apps-product-identity">
                    <span className="apps-product-icon"><img src={`${basePath}${app.icon}`} alt="" width="128" height="128" loading="lazy" decoding="async" /></span>
                    <div>
                      <span className="apps-product-code">{app.code}</span>
                      <h3>{content.displayName}</h3>
                      <strong>{content.tagline}</strong>
                    </div>
                  </div>
                  <div className="apps-product-story">
                    <p>{content.description}</p>
                    <div className="apps-product-features">
                      <span>{copy.appsFeaturesLabel}</span>
                      <ol>{content.features.map((feature, index) => <li key={feature}><b>{String(index + 1).padStart(2, "0")}</b><span>{feature}</span></li>)}</ol>
                    </div>
                  </div>
                </div>
                <footer className="apps-product-foot">
                  <dl>
                    <div><dt>{copy.appsPlatformsLabel}</dt><dd>{app.platforms.map((platform) => <span key={platform}>{platform}</span>)}</dd></div>
                    <div><dt>{copy.appsVersionLabel}</dt><dd>v{app.version}</dd></div>
                  </dl>
                  <div className="apps-product-links">
                    {internalHref && <a className="is-primary" href={internalHref}>{copy.appDetail} <span aria-hidden="true">→</span></a>}
                    {app.links.map((link, index) => <a className={!internalHref && index === 0 ? "is-primary" : undefined} href={link.href} key={link.kind} target="_blank" rel="noreferrer"
                      aria-label={`${copy.appLinkLabel(content.displayName)} — ${linkLabel(link.kind)}`}>
                      {linkLabel(link.kind)} <span aria-hidden="true">↗</span>
                    </a>)}
                  </div>
                </footer>
              </article>
            );
          })}
        </div>
      </section>

      <section className="apps-method" aria-labelledby="app-principles-title">
        <div className="apps-method-intro">
          <span>02 / OPERATING PRINCIPLES</span>
          <h2 id="app-principles-title">{copy.appsPrinciplesTitle}</h2>
          <p>{copy.appsPrinciplesHint}</p>
        </div>
        <div className="apps-method-list">
          {copy.appsPrinciples.map((principle, index) => (
            <article className="apps-method-item" key={principle.code}>
              <header><span>{String(index + 1).padStart(2, "0")}</span><small>{principle.code}</small></header>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer apps-showcase-footer">
        <a href={routeHref("root")}>{copy.appsBackHome}<span aria-hidden="true">↖</span></a>
        <div><span className="footer-node">APPS / SERVICES</span><p>{copy.appsFooter}</p></div>
        <div><a href="#page-content">{copy.appsBackTop} <span aria-hidden="true">↑</span></a><span>© 2026 HIORIO</span></div>
      </footer>
    </main>
  );
}

function DohwajiPage({ copy, locale, setLocale }: { copy: Copy; locale: Locale; setLocale: (locale: Locale) => void }) {
  const app = productApps.find((item) => item.id === "dohwaji")!;
  const content = app.content[locale];
  const webUrl = app.links.find((link) => link.kind === "web")!.href;
  const appStoreUrl = app.links.find((link) => link.kind === "appStore")!.href;

  return (
    <main className="site-shell dohwaji-shell">
      <div className="dohwaji-grid-bg" aria-hidden="true" />
      <SiteHeader activeRoute="dohwaji" copy={copy} locale={locale} setLocale={setLocale} />

      <section className="dohwaji-hero" id="page-content" aria-labelledby="dohwaji-page-title">
        <div className="dohwaji-copy">
          <div className="dohwaji-kicker"><span>APP NODE 01-A</span><span>MAP / DRAW / SHARE</span></div>
          <p className="dohwaji-eyebrow">{copy.dohwajiEyebrow}</p>
          <h1 id="dohwaji-page-title">{content.displayName}</h1>
          <strong>{copy.dohwajiHeroLine}</strong>
          <p>{copy.dohwajiHeroDescription}</p>
          <div className="dohwaji-actions">
            <a className="dohwaji-primary" href={webUrl} target="_blank" rel="noreferrer">{copy.dohwajiTryWeb}<span aria-hidden="true">↗</span></a>
            <a className="dohwaji-secondary" href={appStoreUrl} target="_blank" rel="noreferrer">App Store<span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <figure className="dohwaji-web-shot">
          <div className="dohwaji-shot-head"><span>DOHWAJI.APP / LIVE WEB</span><b>{copy.appStatus}</b></div>
          <div className="dohwaji-shot-window">
            <img src={`${basePath}product-shots/dohwaji-web-home.png`} alt={copy.dohwajiWebShotAlt} />
          </div>
          <figcaption>{copy.dohwajiWebShotCaption}</figcaption>
          <i className="dohwaji-shot-tape" aria-hidden="true">ACTUAL WEB</i>
        </figure>
      </section>

      <section className="dohwaji-problem" aria-labelledby="dohwaji-problem-title">
        <span className="dohwaji-section-no">01</span>
        <div><p>{copy.dohwajiProblemKicker}</p><h2 id="dohwaji-problem-title">{copy.dohwajiProblemTitle}</h2></div>
        <p>{copy.dohwajiProblemDescription}</p>
      </section>

      <section className="dohwaji-features" aria-labelledby="dohwaji-features-title">
        <div className="dohwaji-section-heading"><span>02 / CORE FEATURES</span><h2 id="dohwaji-features-title">{copy.dohwajiFeaturesTitle}</h2></div>
        <div className="dohwaji-feature-grid">
          {copy.dohwajiFeatures.map((feature, index) => (
            <article key={feature.title}>
              <span>0{index + 1}</span><div className={`feature-symbol symbol-${index + 1}`} aria-hidden="true"><i /><i /><b /></div>
              <h3>{feature.title}</h3><p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dohwaji-flow" aria-labelledby="dohwaji-flow-title">
        <div className="dohwaji-section-heading"><span>03 / HOW IT WORKS</span><h2 id="dohwaji-flow-title">{copy.dohwajiFlowTitle}</h2></div>
        <ol>{copy.dohwajiSteps.map((step, index) => <li key={step}><span>0{index + 1}</span><p>{step}</p></li>)}</ol>
      </section>

      <section className="dohwaji-final">
        <p>ONE MAP. ONE LINK.</p><h2>{copy.dohwajiFinalTitle}</h2>
        <div className="dohwaji-actions"><a className="dohwaji-primary" href={webUrl} target="_blank" rel="noreferrer">{copy.dohwajiTryWeb}<span aria-hidden="true">↗</span></a><a className="dohwaji-secondary" href={routeHref("apps")}>{copy.dohwajiBackApps}<span aria-hidden="true">←</span></a></div>
      </section>

      <footer className="site-footer dohwaji-footer"><div><span className="footer-node">NODE_01-A</span><p>{copy.dohwajiFooter}</p></div><span>© 2026 DOHWAJI</span></footer>
    </main>
  );
}

function HorrorPage({ copy, locale, setLocale }: { copy: Copy; locale: Locale; setLocale: (locale: Locale) => void }) {
  const node = nodes[defaultNodeId];
  const content = node.content[locale];
  const primaryChannel = node.channels.find((channel) => channel.mark === "IG")!;
  const secondaryChannels = node.channels.filter((channel) => channel.mark !== "IG");

  return (
    <main className="site-shell">
      <div className="scanlines" aria-hidden="true" />
      <SiteHeader activeRoute="horror" copy={copy} locale={locale} setLocale={setLocale} />
      <section className="hero" aria-labelledby="page-title">
        <div className="hero-copy">
          <div className="node-kicker"><span>{copy.horrorKicker}</span><span>{node.category}</span></div>
          <h1 id="page-title" className="distressed-title"><span className="title-bone">{content.title}</span><span className="title-red">{content.titleAccent}</span></h1>
          <p className="hero-description">{content.description.map((line) => <span key={line}>{line}<br /></span>)}</p>
          <div className="genre-list" aria-label={copy.activeGenres}>{content.genres.map((genre) => <span key={genre}>{genre}</span>)}</div>
        </div>
        <div className="signal-panel" aria-hidden="true">
          <div className="signal-topline"><span>REC</span><span>00:00:13:07</span></div>
          <div className="signal-viewport"><span className="corner corner-tl" /><span className="corner corner-tr" /><span className="corner corner-bl" /><span className="corner corner-br" /><div className="corridor"><div className="corridor-door" /></div><div className="signal-wave wave-one" /><div className="signal-wave wave-two" /></div>
          <p>SIGNAL DETECTED / SEOUL 37.5665° N</p>
        </div>
      </section>

      <section className="featured" aria-labelledby="featured-title">
        <div className="section-heading"><div><span className="section-index">02</span><h2 id="featured-title">{copy.featuredTitle}</h2></div><p>{copy.featuredHint.toUpperCase()}</p></div>
        <a className="featured-card" href={primaryChannel.href} target="_blank" rel="noreferrer" aria-label={copy.featuredLinkLabel}>
          <div className="record-visual" aria-hidden="true"><span className="visual-label">PRIMARY SIGNAL</span><div className="play-symbol">IG</div><span className="visual-time">@HORROR_DOPAMINE</span></div>
          <div className="featured-copy"><span className="featured-kicker">{copy.featuredKicker.toUpperCase()}</span><h3>{copy.featuredHeading[0]}<br />{copy.featuredHeading[1]}</h3><p>{copy.featuredDescription}</p><span className="featured-cta">{copy.featuredCta} <b aria-hidden="true">↗</b></span></div>
        </a>

        <div className="horror-social-heading">
          <div><span>02-A</span><h3>{copy.horrorSocialTitle}</h3></div>
          <p>{copy.horrorSocialHint.toUpperCase()}</p>
        </div>
        <nav className="horror-social-grid" aria-label={copy.horrorSocialTitle}>
          {secondaryChannels.map((channel) => (
            <a className={`horror-social-card horror-social-${channel.mark.toLowerCase()}`} href={channel.href} key={channel.name}
              target="_blank" rel="noreferrer" aria-label={copy.channelLinkLabel(channel.name)}>
              <div className="horror-social-top"><span>SIGNAL_{channel.index}</span><span>LIVE ↗</span></div>
              <div className="horror-social-mark" aria-hidden="true">{channel.mark}</div>
              <div className="horror-social-copy"><strong>{channel.name}</strong><span>{channel.handle}</span><p>{channel.description[locale]}</p></div>
            </a>
          ))}
        </nav>
      </section>

      <footer className="site-footer"><div><span className="footer-node">NODE_02</span><p>{copy.horrorFooter}</p></div><span>© 2026 HORROR DOPAMINE</span></footer>
    </main>
  );
}

export default function App() {
  const [locale, setLocale] = useState<Locale>(detectLocale);
  const route = getRoute();
  const copy = ui[locale];
  useSiteMotion(route);

  useEffect(() => {
    const metadata = {
      root: [copy.rootPageTitle, copy.rootPageDescription], channels: [copy.channelsPageTitle, copy.channelsPageDescription],
      apps: [copy.appsPageTitle, copy.appsPageDescription], dohwaji: [copy.dohwajiPageTitle, copy.dohwajiPageDescription],
      timeflower: [timeFlowerCopy[locale].pageTitle, timeFlowerCopy[locale].pageDescription],
      dailyplank: [dailyPlankCopy[locale].pageTitle, dailyPlankCopy[locale].pageDescription],
      ssakmemo: [ssakMemoCopy[locale].pageTitle, ssakMemoCopy[locale].pageDescription],
      leafmessage: [leafMessageCopy[locale].pageTitle, leafMessageCopy[locale].pageDescription], horror: [copy.horrorPageTitle, copy.horrorPageDescription],
    }[route];
    document.documentElement.lang = locale;
    document.title = metadata[0];
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute("content", metadata[1]);
    try { window.localStorage.setItem("link-flower-locale", locale); } catch { /* selection still works */ }
  }, [copy, locale, route]);

  if (SHOW_HORROR_DOPAMINE && route === "channels") return <ChannelsPage copy={copy} locale={locale} setLocale={setLocale} />;
  if (route === "apps") return <AppsPage copy={copy} locale={locale} setLocale={setLocale} />;
  if (route === "dohwaji") return <DohwajiPage copy={copy} locale={locale} setLocale={setLocale} />;
  if (route === "timeflower") return <TimeFlowerPage header={<SiteHeader activeRoute="timeflower" copy={copy} locale={locale} setLocale={setLocale} />} locale={locale} appsHref={routeHref("apps")} />;
  if (route === "dailyplank") return <DailyPlankPage header={<SiteHeader activeRoute="dailyplank" copy={copy} locale={locale} setLocale={setLocale} />} locale={locale} appsHref={routeHref("apps")} />;
  if (route === "ssakmemo") return <SsakMemoPage header={<SiteHeader activeRoute="ssakmemo" copy={copy} locale={locale} setLocale={setLocale} />} locale={locale} appsHref={routeHref("apps")} />;
  if (route === "leafmessage") return <LeafMessagePage header={<SiteHeader activeRoute="leafmessage" copy={copy} locale={locale} setLocale={setLocale} />} locale={locale} appsHref={routeHref("apps")} />;
  if (SHOW_HORROR_DOPAMINE && route === "horror") return <HorrorPage copy={copy} locale={locale} setLocale={setLocale} />;
  return <RootPage copy={copy} locale={locale} setLocale={setLocale} />;
}
