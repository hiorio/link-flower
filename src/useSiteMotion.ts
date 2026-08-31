import { useEffect } from "react";

const revealSelector = [
  ".garden-hero-copy",
  ".garden-index-heading",
  ".garden-branch",
  ".apps-section-heading",
  ".apps-catalog-jump",
  ".apps-product-card",
  ".apps-method-intro",
  ".apps-method-item",
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
  ".leafmessage-hero > *",
  ".leafmessage-premise > *",
  ".leafmessage-section-heading",
  ".leafmessage-presentation-grid > *",
  ".leafmessage-steps > li",
  ".leafmessage-self > *",
  ".leafmessage-final > *",
].join(",");

const depthSelector = [
  ".dohwaji-web-shot",
  ".timeflower-calendar",
  ".dailyplank-console",
  ".leafmessage-hero-screen",
].join(",");

type SpringAxis = {
  position: number;
  target: number;
  velocity: number;
};

const clampMotion = (value: number, min = -1, max = 1) => Math.min(max, Math.max(min, value));

function advanceSpring(axis: SpringAxis, stiffness = 0.075, damping = 0.78) {
  axis.velocity = (axis.velocity + (axis.target - axis.position) * stiffness) * damping;
  axis.position += axis.velocity;
}

function springIsSettled(axis: SpringAxis) {
  return Math.abs(axis.target - axis.position) < 0.0005 && Math.abs(axis.velocity) < 0.0005;
}

function setupBotanicalPointerMotion(shell: HTMLElement) {
  const hero = shell.querySelector<HTMLElement>(".garden-hero");
  const stage = shell.querySelector<HTMLElement>(".botanical-stage");
  if (!hero || !stage) return () => undefined;

  const petals = Array.from(stage.querySelectorAll<HTMLElement>(".botanical-petal"));
  const horizontal: SpringAxis = { position: 0, target: 0, velocity: 0 };
  const vertical: SpringAxis = { position: 0, target: 0, velocity: 0 };
  let gust = 0;
  let gustTarget = 0;
  let animationFrame = 0;
  let lastPointerX = 0;
  let lastPointerY = 0;
  let lastPointerTime = 0;

  const render = () => {
    advanceSpring(horizontal);
    advanceSpring(vertical);
    gust += (gustTarget - gust) * 0.16;
    gustTarget *= 0.82;

    const x = horizontal.position;
    const y = vertical.position;
    const momentumX = horizontal.velocity;
    const momentumY = vertical.velocity;

    stage.style.setProperty("--flower-stage-x", `${(x * 5.5).toFixed(3)}px`);
    stage.style.setProperty("--flower-stage-y", `${(y * 3).toFixed(3)}px`);
    stage.style.setProperty("--flower-stage-rotate", `${(x * 0.65).toFixed(3)}deg`);
    stage.style.setProperty("--flower-head-x", `${(x * 5 + momentumX * 17).toFixed(3)}px`);
    stage.style.setProperty("--flower-head-y", `${(y * 2.6 + momentumY * 11).toFixed(3)}px`);
    stage.style.setProperty("--flower-head-rotate", `${(x * 1.45 + momentumX * 7).toFixed(3)}deg`);
    stage.style.setProperty("--flower-stem-x", `${(x * 0.7).toFixed(3)}px`);
    stage.style.setProperty("--flower-stem-rotate", `${(x * 0.58).toFixed(3)}deg`);
    stage.style.setProperty("--flower-center-x", `${(x * 0.65 + momentumX * 3).toFixed(3)}px`);
    stage.style.setProperty("--flower-center-y", `${(y * 0.45 + momentumY * 2).toFixed(3)}px`);

    petals.forEach((petal, index) => {
      const phase = (index / Math.max(petals.length, 1)) * Math.PI * 2 - Math.PI * 0.76;
      const depth = 0.58 + (index % 3) * 0.12;
      const outward = gust * (1.45 + depth) + Math.min(1.4, Math.hypot(momentumX, momentumY) * 8);
      const petalX = x * depth * 0.85 + Math.cos(phase) * outward;
      const petalY = y * depth * 0.5 + Math.sin(phase) * outward;
      const petalRotate = (momentumX * Math.sin(phase) - momentumY * Math.cos(phase)) * 8
        + x * Math.sin(phase) * 0.55;

      petal.style.setProperty("--petal-react-x", `${petalX.toFixed(3)}px`);
      petal.style.setProperty("--petal-react-y", `${petalY.toFixed(3)}px`);
      petal.style.setProperty("--petal-react-rotate", `${petalRotate.toFixed(3)}deg`);
    });

    if (!springIsSettled(horizontal) || !springIsSettled(vertical) || gust > 0.002 || gustTarget > 0.002) {
      animationFrame = window.requestAnimationFrame(render);
    } else {
      animationFrame = 0;
    }
  };

  const wake = () => {
    if (!animationFrame) animationFrame = window.requestAnimationFrame(render);
  };

  const move = (event: PointerEvent) => {
    const bounds = stage.getBoundingClientRect();
    const centerX = bounds.left + bounds.width * 0.5;
    const centerY = bounds.top + bounds.height * 0.3;
    horizontal.target = clampMotion((event.clientX - centerX) / Math.max(bounds.width * 0.72, 1));
    vertical.target = clampMotion((event.clientY - centerY) / Math.max(bounds.height * 0.5, 1));

    const now = performance.now();
    if (lastPointerTime) {
      const elapsed = Math.max(now - lastPointerTime, 16);
      const pointerSpeed = Math.hypot(event.clientX - lastPointerX, event.clientY - lastPointerY) / elapsed;
      gustTarget = Math.max(gustTarget, clampMotion(pointerSpeed * 0.09, 0, 0.85));
    }
    lastPointerX = event.clientX;
    lastPointerY = event.clientY;
    lastPointerTime = now;
    wake();
  };

  const settle = () => {
    horizontal.target = 0;
    vertical.target = 0;
    gustTarget = 0;
    lastPointerTime = 0;
    wake();
  };

  stage.classList.add("botanical-pointer-ready");
  hero.addEventListener("pointermove", move);
  hero.addEventListener("pointerleave", settle);
  window.addEventListener("blur", settle);

  return () => {
    if (animationFrame) window.cancelAnimationFrame(animationFrame);
    hero.removeEventListener("pointermove", move);
    hero.removeEventListener("pointerleave", settle);
    window.removeEventListener("blur", settle);
    stage.classList.remove("botanical-pointer-ready");
    [
      "--flower-stage-x",
      "--flower-stage-y",
      "--flower-stage-rotate",
      "--flower-head-x",
      "--flower-head-y",
      "--flower-head-rotate",
      "--flower-stem-x",
      "--flower-stem-rotate",
      "--flower-center-x",
      "--flower-center-y",
    ].forEach((property) => stage.style.removeProperty(property));
    petals.forEach((petal) => {
      petal.style.removeProperty("--petal-react-x");
      petal.style.removeProperty("--petal-react-y");
      petal.style.removeProperty("--petal-react-rotate");
    });
  };
}

function setupGardenLeafMotion(shell: HTMLElement) {
  const region = shell.querySelector<HTMLElement>(".garden-index");
  const leaves = Array.from(shell.querySelectorAll<HTMLElement>(".spine-leaf, .future-leaf"));
  if (!region || !leaves.length) return () => undefined;

  const horizontal: SpringAxis = { position: 0, target: 0, velocity: 0 };
  const vertical: SpringAxis = { position: 0, target: 0, velocity: 0 };
  let gust = 0;
  let gustTarget = 0;
  let animationFrame = 0;
  let lastPointerX = 0;
  let lastPointerY = 0;
  let lastPointerTime = 0;

  const render = () => {
    advanceSpring(horizontal, 0.065, 0.8);
    advanceSpring(vertical, 0.065, 0.8);
    gust += (gustTarget - gust) * 0.14;
    gustTarget *= 0.84;

    leaves.forEach((leaf, index) => {
      const depth = 0.42 + (index % 4) * 0.12;
      const direction = index % 2 === 0 ? -1 : 1;
      const leafX = horizontal.position * depth * 2.2 + horizontal.velocity * depth * 6;
      const leafY = vertical.position * depth * 0.65;
      const leafRotate = horizontal.position * direction * depth * 1.8
        + horizontal.velocity * direction * depth * 9
        + gust * direction * depth * 1.15;

      leaf.style.setProperty("--garden-leaf-x", `${leafX.toFixed(3)}px`);
      leaf.style.setProperty("--garden-leaf-y", `${leafY.toFixed(3)}px`);
      leaf.style.setProperty("--garden-leaf-rotate", `${leafRotate.toFixed(3)}deg`);
    });

    if (!springIsSettled(horizontal) || !springIsSettled(vertical) || gust > 0.002 || gustTarget > 0.002) {
      animationFrame = window.requestAnimationFrame(render);
    } else {
      animationFrame = 0;
    }
  };

  const wake = () => {
    if (!animationFrame) animationFrame = window.requestAnimationFrame(render);
  };

  const move = (event: PointerEvent) => {
    horizontal.target = clampMotion((event.clientX / Math.max(window.innerWidth, 1) - 0.5) * 2);
    vertical.target = clampMotion((event.clientY / Math.max(window.innerHeight, 1) - 0.5) * 2);

    const now = performance.now();
    if (lastPointerTime) {
      const elapsed = Math.max(now - lastPointerTime, 16);
      const pointerSpeed = Math.hypot(event.clientX - lastPointerX, event.clientY - lastPointerY) / elapsed;
      gustTarget = Math.max(gustTarget, clampMotion(pointerSpeed * 0.08, 0, 0.75));
    }
    lastPointerX = event.clientX;
    lastPointerY = event.clientY;
    lastPointerTime = now;
    wake();
  };

  const settle = () => {
    horizontal.target = 0;
    vertical.target = 0;
    gustTarget = 0;
    lastPointerTime = 0;
    wake();
  };

  shell.classList.add("garden-pointer-ready");
  region.addEventListener("pointermove", move);
  region.addEventListener("pointerleave", settle);
  window.addEventListener("blur", settle);

  return () => {
    if (animationFrame) window.cancelAnimationFrame(animationFrame);
    region.removeEventListener("pointermove", move);
    region.removeEventListener("pointerleave", settle);
    window.removeEventListener("blur", settle);
    shell.classList.remove("garden-pointer-ready");
    leaves.forEach((leaf) => {
      leaf.style.removeProperty("--garden-leaf-x");
      leaf.style.removeProperty("--garden-leaf-y");
      leaf.style.removeProperty("--garden-leaf-rotate");
    });
  };
}

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

      if (route === "root") {
        depthCleanups.push(setupBotanicalPointerMotion(shell));
        depthCleanups.push(setupGardenLeafMotion(shell));
      }
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
