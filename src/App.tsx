import { useEffect, useState } from "react";
import { productApps } from "./apps";
import { GrowingProjectPage } from "./GrowingProjectPage";
import { DayMirrorPage } from "./DayMirrorPage";
import { growingProjects } from "./growing-projects";
import { detectLocale, localeLabels, supportedLocales, ui, type Locale } from "./i18n";
import { defaultNodeId, nodes } from "./nodes";
import { DailyPlankPage, dailyPlankCopy } from "./DailyPlankPage";
import { DohwajiExperience } from "./DohwajiPage";
import { LeafMessagePage, leafMessageCopy } from "./LeafMessagePage";
import { RingtonePage, ringtoneCopy } from "./RingtonePage";
import { SsakMemoPage, ssakMemoCopy } from "./SsakMemoPage";
import { TimeFlowerPage, timeFlowerCopy } from "./TimeFlowerPage";
import { TimeRootsPage, timeRootsCopy } from "./TimeRootsPage";
import { BiondamaePage, biondamaeCopy } from "./BiondamaePage";
import { LinkHub } from "./LinkHub";
import { HiorioLanding, hiorioLandingCopy } from "./HiorioLanding";
import { BlueMoonPage } from "./BlueMoonPage";
import { ProductivityCollectionPage } from "./ProductivityCollection";
import { productivityCopy } from "./productivity-collection";
import { SHOW_HORROR_DOPAMINE } from "./visibility";
import { useSiteMotion } from "./useSiteMotion";
import { HiorioLogo } from "./HiorioLogo";
import { BusinessInfo } from "./BusinessInfo";

type RouteId = "root" | "channels" | "apps" | "productivity" | "dohwaji" | "timeflower" | "timeroots" | "dailyplank" | "biondamae" | "ssakmemo" | "leafmessage" | "ringtone" | "project" | "horror";
type Copy = (typeof ui)[Locale];

const basePath = import.meta.env.BASE_URL;
const localeAccessibleNames: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
  ja: "日本語",
};

function routeHref(route: RouteId) {
  if (route === "root") return basePath;
  if (route === "productivity") return `${basePath}collections/productivity/`;
  if (route === "dohwaji") return `${basePath}apps/dohwaji/`;
  if (route === "timeflower") return `${basePath}apps/timeflower/`;
  if (route === "timeroots") return `${basePath}apps/timeroots/`;
  if (route === "dailyplank") return `${basePath}apps/daily-plank/`;
  if (route === "biondamae") return `${basePath}apps/biondamae/`;
  if (route === "ssakmemo") return `${basePath}apps/ssak-memo/`;
  if (route === "leafmessage") return `${basePath}apps/leaf-message/`;
  if (route === "ringtone") return `${basePath}apps/ringtone/`;
  return `${basePath}${route}/`;
}

function getRoute(): RouteId {
  const relativePath = window.location.pathname.slice(basePath.length).replace(/^\/+|\/+$/g, "");
  if (relativePath === "collections/productivity" || relativePath === "collections/productivity/index.html") return "productivity";
  if (relativePath === "apps/bluemoon/index.html") return "project";
  if (growingProjects.some((project) => project.app.detailPath === `${relativePath.replace(/\/index\.html$/, "")}/`)) return "project";
  if (relativePath === "apps/dohwaji") return "dohwaji";
  if (relativePath === "apps/timeflower") return "timeflower";
  if (relativePath === "apps/timeroots" || relativePath === "apps/timeroots/index.html") return "timeroots";
  if (relativePath === "apps/daily-plank") return "dailyplank";
  if (relativePath === "apps/biondamae" || relativePath === "apps/biondamae/index.html") return "biondamae";
  if (relativePath === "apps/ssak-memo") return "ssakmemo";
  if (relativePath === "apps/leaf-message") return "leafmessage";
  if (relativePath === "apps/ringtone") return "ringtone";
  if (relativePath === "channels" || relativePath === "horror") return SHOW_HORROR_DOPAMINE ? relativePath : "root";
  if (relativePath === "apps" || relativePath === "apps/index.html") return "apps";
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
        <HiorioLogo basePath={basePath} className="network-logo" />
        HIORIO
      </a>
      <div className="network-controls">
        <nav className="node-switcher" aria-label={copy.nodeNetworkLabel}>
          {routes.map((route) => {
            const isActive = activeRoute === route.id
              || ((activeRoute === "dohwaji" || activeRoute === "timeflower" || activeRoute === "timeroots" || activeRoute === "dailyplank" || activeRoute === "biondamae" || activeRoute === "ssakmemo" || activeRoute === "leafmessage" || activeRoute === "ringtone" || activeRoute === "project") && route.id === "apps")
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

function RootPage({ copy, locale, setLocale, directory = false }: { copy: Copy; locale: Locale; setLocale: (locale: Locale) => void; directory?: boolean }) {
  return (
    <main className={`site-shell root-shell link-hub ${directory ? "directory-page" : "brand-page"}`}>
      <SiteHeader activeRoute={directory ? "apps" : "root"} copy={copy} locale={locale} setLocale={setLocale} />

      {directory ? <LinkHub locale={locale} basePath={basePath} /> : <HiorioLanding locale={locale} basePath={basePath} />}

      <footer className="site-footer root-footer">
        <a href={routeHref("root")} aria-label="HIORIO"><HiorioLogo basePath={basePath} tone="white" /><span>HIORIO</span></a><span>{directory ? "APPS & SERVICES" : "MAKER / STORIES"} · © 2026</span>
        <BusinessInfo locale={locale} />
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

function DohwajiPage({ copy, locale, setLocale }: { copy: Copy; locale: Locale; setLocale: (locale: Locale) => void }) {
  return <DohwajiExperience header={<SiteHeader activeRoute="dohwaji" copy={copy} locale={locale} setLocale={setLocale} />} locale={locale} appsHref={routeHref("apps")} />;
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
  const project = route === "project" ? growingProjects.find((item) => `${basePath}${item.app.detailPath}`.replace(/\/$/, "") === window.location.pathname.replace(/index\.html$/, "").replace(/\/$/, "")) : undefined;
  const copy = ui[locale];
  useSiteMotion(route);

  useEffect(() => {
    const anchor = window.location.hash.slice(1);
    const directoryAnchors = new Set(["work-index", "root-work-title", "hiorio-title", "photo-services", "vision-services", "health-services", "everyday-services", ...productApps.map(app => app.id)]);
    if (route === "root" && directoryAnchors.has(anchor)) {
      window.location.replace(`${routeHref("apps")}#${anchor}`);
    } else if (route === "apps" && anchor) {
      const target = anchor === "app-products-title" ? "work-index" : anchor;
      if (target !== anchor) window.history.replaceState(null, "", `#${target}`);
      let cancelled = false;
      void document.fonts.ready.then(() => {
        if (!cancelled) document.getElementById(target)?.scrollIntoView({ behavior: "instant", block: "start" });
      });
      return () => { cancelled = true; };
    }
  }, [route]);

  useEffect(() => {
    const metadata = {
      root: [hiorioLandingCopy[locale].title, hiorioLandingCopy[locale].description], channels: [copy.channelsPageTitle, copy.channelsPageDescription],
      productivity: [productivityCopy[locale].pageTitle, productivityCopy[locale].description],
      apps: [copy.appsPageTitle, copy.appsPageDescription], dohwaji: [copy.dohwajiPageTitle, copy.dohwajiPageDescription],
      timeflower: [timeFlowerCopy[locale].pageTitle, timeFlowerCopy[locale].pageDescription],
      timeroots: [timeRootsCopy[locale].pageTitle, timeRootsCopy[locale].pageDescription],
      dailyplank: [dailyPlankCopy[locale].pageTitle, dailyPlankCopy[locale].pageDescription],
      biondamae: [biondamaeCopy[locale].pageTitle, biondamaeCopy[locale].pageDescription],
      ssakmemo: [ssakMemoCopy[locale].pageTitle, ssakMemoCopy[locale].pageDescription],
      ringtone: [ringtoneCopy[locale].pageTitle, ringtoneCopy[locale].pageDescription],
      project: project ? [`${project.app.content[locale].displayName} | ${project.app.content[locale].tagline}`, project.app.content[locale].description] : [copy.appsPageTitle, copy.appsPageDescription],
      leafmessage: [leafMessageCopy[locale].pageTitle, leafMessageCopy[locale].pageDescription], horror: [copy.horrorPageTitle, copy.horrorPageDescription],
    }[route];
    document.documentElement.lang = locale;
    document.title = metadata[0];
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute("content", metadata[1]);
    try { window.localStorage.setItem("link-flower-locale", locale); } catch { /* selection still works */ }
  }, [copy, locale, route, project]);

  if (SHOW_HORROR_DOPAMINE && route === "channels") return <ChannelsPage copy={copy} locale={locale} setLocale={setLocale} />;
  if (route === "apps") return <RootPage copy={copy} locale={locale} setLocale={setLocale} directory />;
  if (route === "productivity") return <ProductivityCollectionPage header={<SiteHeader activeRoute="apps" copy={copy} locale={locale} setLocale={setLocale} />} locale={locale} basePath={basePath} />;
  if (project?.app.id === "bluemoon") return <BlueMoonPage header={<SiteHeader activeRoute="project" copy={copy} locale={locale} setLocale={setLocale} />} locale={locale} basePath={basePath} />;
  if (project?.app.id === "daymirror") return <DayMirrorPage project={project} header={<SiteHeader activeRoute="project" copy={copy} locale={locale} setLocale={setLocale} />} locale={locale} basePath={basePath} />;
  if (project) return <GrowingProjectPage project={project} header={<SiteHeader activeRoute="project" copy={copy} locale={locale} setLocale={setLocale} />} locale={locale} basePath={basePath} />;
  if (route === "dohwaji") return <DohwajiPage copy={copy} locale={locale} setLocale={setLocale} />;
  if (route === "timeflower") return <TimeFlowerPage header={<SiteHeader activeRoute="timeflower" copy={copy} locale={locale} setLocale={setLocale} />} locale={locale} appsHref={routeHref("apps")} />;
  if (route === "timeroots") return <TimeRootsPage header={<SiteHeader activeRoute="timeroots" copy={copy} locale={locale} setLocale={setLocale} />} locale={locale} appsHref={routeHref("apps")} />;
  if (route === "dailyplank") return <DailyPlankPage header={<SiteHeader activeRoute="dailyplank" copy={copy} locale={locale} setLocale={setLocale} />} locale={locale} appsHref={routeHref("apps")} />;
  if (route === "biondamae") return <BiondamaePage header={<SiteHeader activeRoute="biondamae" copy={copy} locale={locale} setLocale={setLocale} />} locale={locale} basePath={basePath} appsHref={routeHref("apps")} />;
  if (route === "ssakmemo") return <SsakMemoPage header={<SiteHeader activeRoute="ssakmemo" copy={copy} locale={locale} setLocale={setLocale} />} locale={locale} appsHref={routeHref("apps")} />;
  if (route === "leafmessage") return <LeafMessagePage header={<SiteHeader activeRoute="leafmessage" copy={copy} locale={locale} setLocale={setLocale} />} locale={locale} appsHref={routeHref("apps")} />;
  if (route === "ringtone") return <RingtonePage header={<SiteHeader activeRoute="ringtone" copy={copy} locale={locale} setLocale={setLocale} />} locale={locale} appsHref={routeHref("apps")} />;
  if (SHOW_HORROR_DOPAMINE && route === "horror") return <HorrorPage copy={copy} locale={locale} setLocale={setLocale} />;
  return <RootPage copy={copy} locale={locale} setLocale={setLocale} />;
}
