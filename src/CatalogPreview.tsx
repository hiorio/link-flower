import { createContext, useCallback, useContext, useEffect, useId, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import type { ProductApp } from "./apps";
import { catalogCopy, catalogNavigationCopy } from "./catalog";
import { catalogPreviewImage } from "./catalog-preview";
import type { Locale } from "./i18n";
import "./catalog-preview.css";

type Selection = { app: ProductApp; anchor: HTMLButtonElement; pinned: boolean };
type PreviewContext = {
  activeId?: string; tooltipId: string;
  show: (app: ProductApp, anchor: HTMLButtonElement, mode: "hover" | "focus" | "tap") => void;
  leave: (force?: boolean) => void; cancel: () => void; closeFor: (anchor: HTMLButtonElement) => void;
};
const Preview = createContext<PreviewContext | null>(null);

const imageCopy = {
  ko: { loading: "이미지 불러오는 중", error: "이미지를 불러오지 못했어요. 제품 소개에서 다시 확인해 주세요." },
  en: { loading: "Loading image", error: "The image could not load. Please check the product introduction." },
  ja: { loading: "画像を読み込み中", error: "画像を読み込めませんでした。製品紹介でご確認ください。" },
};

function PreviewImage({ src, alt, locale }: { src: string; alt: string; locale: Locale }) {
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");
  return <div className="catalog-preview-image">
    <img src={src} alt={alt} decoding="async" onLoad={() => setState("ready")} onError={() => setState("error")} style={{ visibility: state === "ready" ? "visible" : "hidden" }} />
    {state !== "ready" && <p role="status">{imageCopy[locale][state]}</p>}
  </div>;
}

export function CatalogPreviewProvider({ children, locale, basePath, theme = "light" }: {
  children: ReactNode; locale: Locale; basePath: string; theme?: "light" | "dark";
}) {
  const tooltipId = useId();
  const [selection, setSelection] = useState<Selection>();
  const current = useRef<Selection | undefined>(undefined);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const pendingAnchor = useRef<HTMLButtonElement | undefined>(undefined);
  const panel = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ left: 12, top: 12 });
  const cancel = useCallback(() => { clearTimeout(timer.current); pendingAnchor.current = undefined; }, []);
  const close = useCallback(() => { cancel(); current.current = undefined; setSelection(undefined); }, [cancel]);
  const closeFor = useCallback((anchor: HTMLButtonElement) => { if (current.current?.anchor === anchor || pendingAnchor.current === anchor) close(); }, [close]);
  const show = useCallback((app: ProductApp, anchor: HTMLButtonElement, mode: "hover" | "focus" | "tap") => {
    cancel();
    if (mode === "tap" && current.current?.anchor === anchor && current.current.pinned) { close(); return; }
    if (mode !== "tap" && current.current?.anchor === anchor) return;
    const open = () => { pendingAnchor.current = undefined; if (!anchor.isConnected) return; const next = { app, anchor, pinned: mode === "tap" }; current.current = next; setSelection(next); };
    if (mode === "hover") { pendingAnchor.current = anchor; timer.current = setTimeout(open, 350); } else open();
  }, [cancel, close]);
  const leave = useCallback((force = false) => {
    cancel();
    if (!force && current.current?.pinned) return;
    timer.current = setTimeout(close, 180);
  }, [cancel, close]);

  useEffect(() => () => { clearTimeout(timer.current); }, []);
  const positionPanel = useCallback(() => {
    if (!selection || !panel.current) return;
    const rect = selection.anchor.getBoundingClientRect();
    if (!selection.anchor.isConnected || rect.bottom < 0 || rect.top > window.innerHeight) { close(); return; }
    const box = panel.current.getBoundingClientRect();
    const left = Math.max(12, Math.min(rect.right - box.width, window.innerWidth - box.width - 12));
    const below = rect.bottom + 10;
    const top = below + box.height <= window.innerHeight - 12 ? below : Math.max(12, rect.top - box.height - 10);
    setPosition({ left, top });
  }, [selection, close]);
  useLayoutEffect(positionPanel, [positionPanel, locale]);
  useEffect(() => {
    if (!selection) return;
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !panel.current?.contains(event.target) && !selection.anchor.contains(event.target)) close();
    };
    const key = (event: KeyboardEvent) => { if (event.key === "Escape") close(); };
    const scroll = (event: Event) => { if (!(event.target instanceof Node) || !panel.current?.contains(event.target)) positionPanel(); };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", key);
    window.addEventListener("scroll", scroll, true);
    window.addEventListener("resize", close);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", key);
      window.removeEventListener("scroll", scroll, true);
      window.removeEventListener("resize", close);
    };
  }, [selection, close, positionPanel]);

  const image = selection && catalogPreviewImage(selection.app.id, locale);
  return <Preview.Provider value={{ activeId: selection?.app.id, tooltipId, show, leave, cancel, closeFor }}>
    {children}
    {selection && image && createPortal(<div ref={panel} id={tooltipId} role="tooltip" className="catalog-preview-panel" data-theme={theme}
      style={{ left: position.left, top: position.top }} onPointerEnter={cancel} onPointerLeave={() => leave()}>
      <header><strong>{selection.app.content[locale].displayName}</strong><span>{catalogCopy[locale][selection.app.status]}</span></header>
      <figure><PreviewImage key={`${image.src}/${locale}`} src={`${basePath}${image.src}`} alt={image.alt} locale={locale} /><figcaption>{image.caption}</figcaption></figure>
      <p className="catalog-preview-dismiss">{catalogNavigationCopy[locale].dismiss}</p>
    </div>, document.body)}
  </Preview.Provider>;
}

export function CatalogPreviewTrigger({ app, locale }: { app: ProductApp; locale: Locale }) {
  const context = useContext(Preview);
  const button = useRef<HTMLButtonElement>(null);
  const closeFor = context?.closeFor;
  useEffect(() => { const anchor = button.current; return () => { if (anchor) closeFor?.(anchor); }; }, [closeFor]);
  if (!context || !catalogPreviewImage(app.id, locale)) return null;
  const open = context.activeId === app.id;
  const label = catalogNavigationCopy[locale].preview;
  return <button ref={button} type="button" className="catalog-preview-trigger" aria-label={`${app.content[locale].displayName} · ${label}`}
    aria-describedby={open ? context.tooltipId : undefined} aria-expanded={open}
    onPointerEnter={(event) => { if (event.pointerType === "mouse") context.show(app, event.currentTarget, "hover"); }}
    onPointerLeave={() => context.leave()} onFocus={(event) => { if (event.currentTarget.matches(":focus-visible")) context.show(app, event.currentTarget, "focus"); }}
    onBlur={(event) => { if (!(event.relatedTarget instanceof Node) || !document.getElementById(context.tooltipId)?.contains(event.relatedTarget)) context.leave(true); }}
    onClick={(event) => context.show(app, event.currentTarget, "tap")}>
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><rect x="2.5" y="3.5" width="15" height="13" rx="2" /><circle cx="7" cy="8" r="1.4" /><path d="m3 14 4-3 3 2 4-5 3 5" /></svg>
    <span>{label}</span>
  </button>;
}
