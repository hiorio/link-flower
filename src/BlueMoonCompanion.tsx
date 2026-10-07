import { useEffect, useRef, useState } from "react";
import { blueMoonCopy } from "./bluemoon-content";
import type { Locale } from "./i18n";

// Presentation only: never observes manuscripts, storage, or input fields.
export function BlueMoonCompanion({ locale, basePath }: { locale: Locale; basePath: string }) {
  const button = useRef<HTMLButtonElement>(null);
  const clearReaction = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const taps = useRef<number[]>([]);
  const [expression, setExpression] = useState("rest");
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const text = blueMoonCopy[locale];

  useEffect(() => {
    const target = button.current!;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    let gazeTimer = 0;
    let pointer = { x: 0, y: 0 };
    const reset = () => {
      window.clearTimeout(gazeTimer);
      gazeTimer = 0;
      target.style.setProperty("--bm-gaze-x", "0px");
      target.style.setProperty("--bm-gaze-y", "0px");
    };
    const move = (event: PointerEvent) => {
      if (!visible || document.hidden || motion.matches || event.pointerType === "touch") return;
      pointer = { x: event.clientX, y: event.clientY };
      if (gazeTimer) return;
      gazeTimer = window.setTimeout(() => {
        gazeTimer = 0;
        const box = target.getBoundingClientRect();
        const clamp = (value: number) => Math.max(-1, Math.min(1, value));
        target.style.setProperty("--bm-gaze-x", `${clamp((pointer.x - box.x - box.width / 2) / 250) * box.width * .035}px`);
        target.style.setProperty("--bm-gaze-y", `${clamp((pointer.y - box.y - box.height / 2) / 250) * box.height * .035}px`);
      }, 80);
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (!visible) reset(); });
    observer.observe(target);
    document.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("visibilitychange", reset);
    motion.addEventListener("change", reset);
    return () => {
      observer.disconnect();
      document.removeEventListener("pointermove", move);
      document.removeEventListener("visibilitychange", reset);
      motion.removeEventListener("change", reset);
      reset();
      clearTimeout(clearReaction.current);
    };
  }, []);

  function react() {
    const now = performance.now();
    taps.current = [...taps.current.filter((tap) => now - tap < 1400), now];
    const next = taps.current.length >= 3 ? "confused" : "happy";
    if (next === "confused") taps.current = [];
    setExpression(next);
    clearTimeout(clearReaction.current);
    clearReaction.current = setTimeout(() => setExpression("rest"), 950);
  }

  return <button className="bm-companion" type="button" ref={button} onClick={react}
    aria-label={text.companion} data-expression={expression}>
    {(!loaded || failed) && <img className="bm-companion-fallback" src={`${basePath}app-icons/bluemoon.png`} alt="" width="64" height="64" />}
    {!failed && <span className={`bm-companion-body${loaded ? " is-loaded" : ""}`}>
      <img src={`${basePath}bluemoon/companion-body.png`} alt="" width="64" height="64" onLoad={() => setLoaded(true)} onError={() => setFailed(true)} draggable={false} />
      {loaded && <span className="bm-companion-eyes" aria-hidden="true"><i /><i /></span>}
    </span>}
    <span className="bm-visually-hidden" aria-live="polite">{expression === "happy" ? text.happy : expression === "confused" ? text.confused : ""}</span>
  </button>;
}
