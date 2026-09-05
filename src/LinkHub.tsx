import { productApps, type ProductApp } from "./apps";
import { BotanicalBloom, botanicalLeafPaths } from "./BotanicalBloom";
import { type Locale, ui } from "./i18n";
import { SHOW_HORROR_DOPAMINE } from "./visibility";

const hubCopy = {
  ko: { browse: "모든 소개 보기", about: "소개 보기", web: "웹에서 열기", demo: "웹 데모", store: "App Store", collection: "직접 만들고 운영하는 것들", next: "다음 아이디어도 이곳에서.", newWindow: "새 창에서 열기" },
  en: { browse: "Explore the collection", about: "About this project", web: "Open website", demo: "Web demo", store: "App Store", collection: "Made and maintained by me", next: "The next idea will grow here, too.", newWindow: "Opens in a new tab" },
  ja: { browse: "すべての紹介を見る", about: "詳しく見る", web: "ウェブで開く", demo: "ウェブデモ", store: "App Store", collection: "自分でつくり、育てているもの", next: "次のアイデアも、ここから。", newWindow: "新しいタブで開く" },
} satisfies Record<Locale, Record<string, string>>;

const detailPaths: Record<string, string> = {
  dohwaji: "apps/dohwaji/",
  timeflower: "apps/timeflower/",
  dailyplank: "apps/daily-plank/",
  ssakmemo: "apps/ssak-memo/",
  "leaf-message": "apps/leaf-message/",
};

function ProjectLink({ app, locale, basePath, priority }: { app: ProductApp; locale: Locale; basePath: string; priority: boolean }) {
  const content = app.content[locale];
  const labels = hubCopy[locale];
  const external = app.links.find((link) => link.kind === "web") ?? app.links.find((link) => link.kind === "appStore");
  const aboutHref = `${basePath}${detailPaths[app.id] ?? `apps/#${app.id}`}`;
  const destination = external?.kind === "appStore" ? labels.store
    : external?.kind === "web" ? (app.platforms.includes("WEB DEMO") ? labels.demo : labels.web)
    : labels.about;

  return (
    <li className={`hub-card hub-card-${app.accent}`}>
      <img className="hub-app-icon" src={`${basePath}${app.icon}`} alt="" width="56" height="56" decoding="async" loading={priority ? "eager" : "lazy"} />
      <div className="hub-card-copy">
        <h3>
          <a className="hub-card-main" href={external?.href ?? aboutHref}
            target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}
            aria-label={`${content.displayName} · ${destination}${external ? ` · ${labels.newWindow}` : ""}`}>
            {content.displayName}
          </a>
        </h3>
        <p>{content.tagline}</p>
        <div className="hub-card-actions">
          <span className="hub-destination">{destination}</span>
          {external && <a className="hub-about-link" href={aboutHref} aria-label={`${content.displayName} · ${labels.about}`}>{labels.about}</a>}
        </div>
      </div>
      <span className="hub-card-arrow" aria-hidden="true">{external ? "↗" : "→"}</span>
    </li>
  );
}

export function LinkHub({ locale, basePath }: { locale: Locale; basePath: string }) {
  const copy = ui[locale];
  const labels = hubCopy[locale];

  return (
    <div className="hub-layout" id="page-content" tabIndex={-1}>
      <section className="garden-hero hub-profile" aria-labelledby="root-page-title">
        <div className="hub-profile-copy">
          <p className="hub-eyebrow">INDEPENDENT MAKER</p>
          <h1 id="root-page-title">{copy.rootTitle}<span aria-hidden="true">.</span></h1>
          <p className="hub-promise">{copy.rootTitleAccent}</p>
          <p className="hub-bio">{copy.rootDescription[0]}</p>
        </div>
        <div className="garden-hero-flower hub-profile-flower" aria-hidden="true">
          <BotanicalBloom basePath={basePath} />
        </div>
        <p className="hub-profile-note"><span aria-hidden="true">↳</span> IDEAS, TAKING ROOT.</p>
      </section>

      <section className="garden-index hub-index" id="work-index" aria-labelledby="root-work-title">
        <header className="hub-index-heading">
          <div><p className="hub-eyebrow">{labels.collection}</p><h2 id="root-work-title">{copy.appsCardTitle}<span className="hub-count">{String(productApps.length).padStart(2, "0")}</span></h2></div>
          <a className="hub-collection-link" href={`${basePath}apps/`}>{labels.browse}<span aria-hidden="true">↗</span></a>
        </header>
        <ul className="hub-link-list">
          {productApps.map((app, index) => <ProjectLink key={app.id} app={app} locale={locale} basePath={basePath} priority={index < 2} />)}
        </ul>

        {SHOW_HORROR_DOPAMINE && <a className="hub-channel-link" href={`${basePath}channels/`}><span>{copy.channelsCardTitle}</span><span aria-hidden="true">↗</span></a>}

        <aside className="hub-next" aria-label={copy.rootFutureTitle}>
          <div><p className="hub-eyebrow">NEXT BLOOM</p><p>{labels.next}</p></div>
          <div className="future-buds" aria-hidden="true">
            {[2, 0, 1].map((leaf, index) => <img className={`future-leaf future-leaf-${index + 1}`} src={`${basePath}${botanicalLeafPaths[leaf]}`} alt="" loading="lazy" decoding="async" key={index} />)}
          </div>
        </aside>
      </section>
    </div>
  );
}
