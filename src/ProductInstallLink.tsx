import { productApps } from "./apps";
import type { Locale } from "./i18n";

const labels = {
  ko: { store: "App Store에서 보기", web: "서비스 열기", newWindow: "새 창에서 열기" },
  en: { store: "View on the App Store", web: "Open the service", newWindow: "Opens in a new tab" },
  ja: { store: "App Storeで見る", web: "サービスを開く", newWindow: "新しいタブで開く" },
};

// Use the verified registry destination across both dedicated and shared introductions.
export function ProductInstallLink({ id, locale, className }: { id: string; locale: Locale; className?: string }) {
  const app = productApps.find((item) => item.id === id);
  const link = app?.links.find((item) => item.kind === "appStore") ?? app?.links.find((item) => item.kind === "web");
  if (!app || !link) return null;
  const text = labels[locale];
  const label = link.kind === "appStore" ? text.store : text.web;
  return <a className={className} href={link.href} target="_blank" rel="noreferrer" aria-label={`${app.content[locale].displayName} · ${label} · ${text.newWindow}`}>{label}<span aria-hidden="true">↗</span></a>;
}
