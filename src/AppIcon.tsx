import type { CSSProperties } from "react";
import type { ProductApp } from "./apps";
import { catalogCopy } from "./catalog";
import type { Locale } from "./i18n";

export function AppIcon({ app, basePath, locale, size, className = "", priority = false }: {
  app: Pick<ProductApp, "icon" | "id" | "content">; basePath: string; locale: Locale; size: number; className?: string; priority?: boolean;
}) {
  if (!app.icon) {
    const initials = app.id === "time-journey" ? "TJ" : app.content.en.displayName.replace(/[^a-z0-9]/gi, "").slice(0, 2).toUpperCase();
    return <span className={`app-icon-placeholder ${className}`} style={{ "--placeholder-size": `${size}px` } as CSSProperties} role="img" aria-label={`${app.content[locale].displayName} · ${catalogCopy[locale].iconPending}`}>{initials}</span>;
  }
  return <img className={className} src={`${basePath}${app.icon}`} alt="" width={size} height={size} decoding="async" loading={priority ? "eager" : "lazy"} />;
}
