import { useId, useRef, useState, type KeyboardEvent } from "react";
import { productApps } from "./apps";
import { catalogCategories, catalogCopy, catalogNavigationCopy, filterApps, type CatalogFilter, type CatalogPurpose } from "./catalog";
import type { Locale } from "./i18n";
import "./catalog.css";

export function useCatalog() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<CatalogFilter>("all");
  const [purpose, setPurpose] = useState<CatalogPurpose>("all");
  const reset = () => { setQuery(""); setStatus("all"); setPurpose("all"); };
  return { query, setQuery, status, setStatus, purpose, setPurpose, reset, apps: filterApps(productApps, query, status, purpose) };
}

function ChipGroup<T extends string>({ label, options, value, onChange, resultsId, className = "" }: {
  label: string; options: { value: T; label: string; count: number }[]; value: T;
  onChange: (value: T) => void; resultsId: string; className?: string;
}) {
  const [focused, setFocused] = useState<T>(value);
  const handleKeys = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const offsets: Record<string, number> = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    const next = event.key === "Home" ? 0 : event.key === "End" ? options.length - 1
      : event.key in offsets ? (index + offsets[event.key] + options.length) % options.length : undefined;
    if (next === undefined) return;
    event.preventDefault();
    event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>("button")[next]?.focus();
  };
  return <div className={`catalog-filters ${className}`} role="group" aria-label={label}>
    {options.map((option, index) => <button type="button" key={option.value} aria-pressed={value === option.value}
      tabIndex={focused === option.value ? 0 : -1} aria-controls={resultsId}
      onFocus={() => setFocused(option.value)} onKeyDown={(event) => handleKeys(event, index)} onClick={() => onChange(option.value)}>
      {option.label}<span>{option.count}</span>
    </button>)}
  </div>;
}

export function CatalogControls({ catalog, locale, resultsId }: { catalog: ReturnType<typeof useCatalog>; locale: Locale; resultsId: string }) {
  const inputId = useId();
  const input = useRef<HTMLInputElement>(null);
  const labels = catalogCopy[locale];
  const navigation = catalogNavigationCopy[locale];
  const filters: CatalogFilter[] = ["all", "live", "testing", "development", "preparing", "demo"];
  const active = [
    ...(catalog.purpose !== "all" ? [{ label: navigation[catalog.purpose], remove: () => catalog.setPurpose("all") }] : []),
    ...(catalog.status !== "all" ? [{ label: labels[catalog.status], remove: () => catalog.setStatus("all") }] : []),
    ...(catalog.query ? [{ label: catalog.query, remove: () => catalog.setQuery("") }] : []),
  ];
  const removeFilter = (remove: () => void) => { remove(); input.current?.focus(); };
  return (
    <div className="catalog-controls">
      <label className="catalog-search-label" htmlFor={inputId}>{labels.search}</label>
      <div className="catalog-search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4.5 4.5" /></svg>
        <input ref={input} id={inputId} type="search" value={catalog.query} placeholder={labels.placeholder} onChange={(event) => catalog.setQuery(event.target.value)} aria-controls={resultsId} />
        {catalog.query && <button type="button" aria-label={labels.clear} onClick={() => removeFilter(() => catalog.setQuery(""))}>×</button>}
      </div>
      <div className="catalog-purpose-row">
        <p className="catalog-group-label">{navigation.purposes}</p>
        <ChipGroup label={navigation.purposes} className="catalog-purpose-chips" value={catalog.purpose} onChange={catalog.setPurpose} resultsId={resultsId}
          options={["all" as const, ...catalogCategories].map((value) => ({ value, label: value === "all" ? labels.all : navigation[value], count: filterApps(productApps, catalog.query, catalog.status, value).length }))} />
      </div>
      <div className="catalog-availability-row">
        <p className="catalog-group-label">{labels.filters}</p>
        <ChipGroup label={labels.filters} value={catalog.status} onChange={catalog.setStatus} resultsId={resultsId}
          options={filters.filter((value) => value === "all" || productApps.some((app) => app.status === value)).map((value) => ({ value, label: labels[value], count: filterApps(productApps, catalog.query, value, catalog.purpose).length }))} />
      </div>
      <div className="catalog-filter-row">
        <p className="catalog-filter-hint">{navigation.hint}</p>
        <p className="catalog-result-count" role="status" aria-live="polite" aria-atomic="true">{catalog.apps.length}{locale === "en" ? " " : ""}{labels.results}</p>
      </div>
      {active.length > 0 && <div className="catalog-active-filters" role="group" aria-label={navigation.selected}>
        {active.map((filter, index) => <button type="button" key={index} aria-label={`${navigation.remove}: ${filter.label}`} onClick={() => removeFilter(filter.remove)}><span>{filter.label}</span><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m4 4 8 8M12 4l-8 8" /></svg></button>)}
        <button type="button" className="catalog-reset" onClick={() => removeFilter(catalog.reset)}>{navigation.reset}</button>
      </div>}
    </div>
  );
}

export function CatalogEmpty({ locale, reset }: { locale: Locale; reset: () => void }) {
  const labels = catalogCopy[locale];
  return <div className="catalog-empty"><p>{labels.empty}</p><button type="button" onClick={(event) => {
    reset();
    event.currentTarget.closest("section")?.querySelector<HTMLInputElement>(".catalog-search input")?.focus();
  }}>{labels.reset} <span aria-hidden="true">↗</span></button></div>;
}
