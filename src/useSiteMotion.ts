import { useEffect } from "react";

const revealSelector = [
  ".garden-hero-copy",
  ".garden-index-heading",
  ".garden-branch",
  ".development-copy",
  ".development-garden",
  ".development-products > .section-heading",
  ".catalog-entry",
  ".development-principles > .section-heading",
  ".principle-card",
  ".dohwaji-copy",
  ".dohwaji-web-shot",
  ".dohwaji-problem > *",
  ".dohwaji-section-heading",
  ".dohwaji-feature-grid > article",
  ".dohwaji-flow li",
  ".dohwaji-final > *",
  ".timeflower-hero > *",
  ".timeflower-premise > *",
  ".timeflower-section-heading",
  ".timeflower-proof-list > article",
  ".timeflower-flow li",
  ".timeflower-final > *",
  ".dailyplank-hero > *",
  ".dailyplank-origin > *",
  ".dailyplank-section-intro",
  ".dailyplank-routine-rail > article",
  ".dailyplank-coach > *",
  ".dailyplank-record > *",
  ".dailyplank-final > *",
].join(",");

const depthSelector = [
  ".development-garden",
  ".dohwaji-web-shot",
  ".timeflower-calendar",
  ".dailyplank-console",
].join(",");

export function useSiteMotion(route: string) {
  useEffect(() => {
    const shell = document.querySelector<HTMLElement>(".site-shell");
    if (!shell) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(shell.querySelectorAll<HTMLElement>(revealSelector));
    let observer: IntersectionObserver | undefined;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-revealed"));
    } else {
      shell.classList.add("motion-ready");
      revealItems.forEach((item, index) => {
        item.classList.add("reveal-item");
        item.style.setProperty("--reveal-delay", `${(index % 3) * 70}ms`);
      });

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer?.unobserve(entry.target);
        });
      }, { rootMargin: "0px 0px -7%", threshold: 0.08 });

      revealItems.forEach((item) => observer?.observe(item));
    }

    const header = shell.querySelector<HTMLElement>(".network-bar");
    const updateScrollState = () => {
      const scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100));
      header?.style.setProperty("--page-progress", `${progress}%`);
      shell.classList.toggle("is-scrolled", window.scrollY > 12);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    const depthCleanups: Array<() => void> = [];
    const hasPrecisePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!reduceMotion && hasPrecisePointer) {
      shell.querySelectorAll<HTMLElement>(depthSelector).forEach((item) => {
        item.classList.add("depth-item");

        const move = (event: PointerEvent) => {
          const bounds = item.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width;
          const y = (event.clientY - bounds.top) / bounds.height;
          item.style.setProperty("--tilt-x", `${(x - 0.5) * 4}deg`);
          item.style.setProperty("--tilt-y", `${(0.5 - y) * 4}deg`);
          item.style.setProperty("--parallax-x", `${(x - 0.5) * 10}px`);
          item.style.setProperty("--parallax-y", `${(y - 0.5) * 10}px`);
          item.style.setProperty("--pointer-x", `${x * 100}%`);
          item.style.setProperty("--pointer-y", `${y * 100}%`);
        };

        const reset = () => {
          item.style.setProperty("--tilt-x", "0deg");
          item.style.setProperty("--tilt-y", "0deg");
          item.style.setProperty("--parallax-x", "0px");
          item.style.setProperty("--parallax-y", "0px");
          item.style.setProperty("--pointer-x", "50%");
          item.style.setProperty("--pointer-y", "50%");
        };

        reset();
        item.addEventListener("pointermove", move);
        item.addEventListener("pointerleave", reset);
        depthCleanups.push(() => {
          item.removeEventListener("pointermove", move);
          item.removeEventListener("pointerleave", reset);
          item.classList.remove("depth-item");
        });
      });
    }

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", updateScrollState);
      depthCleanups.forEach((cleanup) => cleanup());
      shell.classList.remove("motion-ready", "is-scrolled");
      revealItems.forEach((item) => {
        item.classList.remove("reveal-item", "is-revealed");
        item.style.removeProperty("--reveal-delay");
      });
    };
  }, [route]);
}
