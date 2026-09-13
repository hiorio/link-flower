import type { CSSProperties } from "react";
import type { ProductApp } from "./apps";
import { catalogCopy } from "./catalog";
import type { Locale } from "./i18n";

export function AppIcon({ app, basePath, locale, size, className = "", priority = false }: {
  app: Pick<ProductApp, "icon">; basePath: string; locale: Locale; size: number; className?: string; priority?: boolean;
}) {
  if (!app.icon) return <span className={`app-icon-placeholder ${className}`} style={{ "--placeholder-size": `${size}px` } as CSSProperties} role="img" aria-label={catalogCopy[locale].iconPending}>TJ</span>;
  return <img className={className} src={`${basePath}${app.icon}`} alt="" width={size} height={size} decoding="async" loading={priority ? "eager" : "lazy"} />;
}
