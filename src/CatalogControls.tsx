import { useId, useState } from "react";
import { productApps } from "./apps";
import { catalogCopy, filterApps, type CatalogFilter } from "./catalog";
import type { Locale } from "./i18n";
import "./catalog.css";

export function useCatalog() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<CatalogFilter>("all");
  const reset = () => { setQuery(""); setStatus("all"); };
  return { query, setQuery, status, setStatus, reset, apps: filterApps(productApps, query, status) };
}

export function CatalogControls({ catalog, locale, resultsId }: { catalog: ReturnType<typeof useCatalog>; locale: Locale; resultsId: string }) {
  const inputId = useId();
  const labels = catalogCopy[locale];
  const filters: CatalogFilter[] = ["all", "live", "testing", "development", "preparing", "demo"];
  return (
    <div className="catalog-controls">
      <label className="catalog-search-label" htmlFor={inputId}>{labels.search}</label>
      <div className="catalog-search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4.5 4.5" /></svg>
        <input id={inputId} type="search" value={catalog.query} placeholder={labels.placeholder} onChange={(event) => catalog.setQuery(event.target.value)} aria-controls={resultsId} />
        {catalog.query && <button type="button" aria-label={labels.clear} onClick={() => catalog.setQuery("")}>×</button>}
      </div>
      <div className="catalog-filter-row">
        <div className="catalog-filters" role="group" aria-label={labels.filters}>
          {filters.map((filter) => {
            const count = filter === "all" ? productApps.length : productApps.filter((app) => app.status === filter).length;
            return count > 0 && <button type="button" key={filter} aria-pressed={catalog.status === filter} aria-controls={resultsId} onClick={() => catalog.setStatus(filter)}>{labels[filter]}<span>{count}</span></button>;
          })}
        </div>
        <p className="catalog-result-count" role="status" aria-live="polite" aria-atomic="true">{catalog.apps.length}{locale === "en" ? " " : ""}{labels.results}</p>
      </div>
    </div>
  );
}

export function CatalogEmpty({ locale, reset }: { locale: Locale; reset: () => void }) {
  const labels = catalogCopy[locale];
  return <div className="catalog-empty"><p>{labels.empty}</p><button type="button" onClick={reset}>{labels.reset} <span aria-hidden="true">↗</span></button></div>;
}
