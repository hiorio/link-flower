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
  const scrollSway: SpringAxis = { position: 0, target: 0, velocity: 0 };
  let gust = 0;
  let gustTarget = 0;
  let animationFrame = 0;
  let lastScrollY = window.scrollY;
  let lastPointerX = 0;
  let lastPointerY = 0;
  let lastPointerTime = 0;

  const render = () => {
    advanceSpring(horizontal);
    advanceSpring(vertical);
    advanceSpring(scrollSway, 0.038, 0.84);
    gust += (gustTarget - gust) * 0.16;
    gustTarget *= 0.82;

    const x = clampMotion(horizontal.position + scrollSway.position, -1.1, 1.1);
    const y = vertical.position;
    const momentumX = clampMotion(horizontal.velocity + scrollSway.velocity, -0.25, 0.25);
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

    if (!springIsSettled(horizontal) || !springIsSettled(vertical) || !springIsSettled(scrollSway)
      || gust > 0.002 || gustTarget > 0.002) {
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

  const press = (event: PointerEvent) => {
    if (event.pointerType === "mouse") return;
    gust = Math.max(gust, 0.38);
    move(event);
  };

  const release = (event: PointerEvent) => {
    if (event.pointerType !== "mouse") settle();
  };

  const scroll = () => {
    const nextScrollY = window.scrollY;
    const delta = nextScrollY - lastScrollY;
    lastScrollY = nextScrollY;
    if (Math.abs(delta) < 0.25) return;

    const wave = Math.sin((nextScrollY + delta * 3) * 0.018);
    const impulse = wave * Math.min(Math.abs(delta) * 0.0028, 0.11);
    scrollSway.velocity = clampMotion(scrollSway.velocity + impulse, -0.14, 0.14);
    gust = Math.max(gust, clampMotion(Math.abs(delta) * 0.006, 0, 0.28));
    wake();
  };

  stage.classList.add("botanical-pointer-ready");
  hero.addEventListener("pointerdown", press);
  hero.addEventListener("pointermove", move);
  hero.addEventListener("pointerup", release);
  hero.addEventListener("pointercancel", release);
  hero.addEventListener("pointerleave", settle);
  window.addEventListener("scroll", scroll, { passive: true });
  window.addEventListener("blur", settle);

  return () => {
    if (animationFrame) window.cancelAnimationFrame(animationFrame);
    hero.removeEventListener("pointerdown", press);
    hero.removeEventListener("pointermove", move);
    hero.removeEventListener("pointerup", release);
    hero.removeEventListener("pointercancel", release);
    hero.removeEventListener("pointerleave", settle);
    window.removeEventListener("scroll", scroll);
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
  const scrollSway: SpringAxis = { position: 0, target: 0, velocity: 0 };
  let gust = 0;
  let gustTarget = 0;
  let animationFrame = 0;
  let lastScrollY = window.scrollY;
  let lastScrollTime = performance.now();
  let scrollPhase = 0.65;
  let regionIsNearViewport = true;
  let lastPointerX = 0;
  let lastPointerY = 0;
  let lastPointerTime = 0;

  const render = () => {
    advanceSpring(horizontal, 0.065, 0.8);
    advanceSpring(vertical, 0.065, 0.8);
    advanceSpring(scrollSway, 0.034, 0.85);
    gust += (gustTarget - gust) * 0.14;
    gustTarget *= 0.84;

    const combinedX = clampMotion(horizontal.position + scrollSway.position, -1.15, 1.15);
    const combinedVelocity = clampMotion(horizontal.velocity + scrollSway.velocity, -0.28, 0.28);
    const treeLineX = combinedX * 0.55 + combinedVelocity * 1.1;
    shell.style.setProperty("--garden-trunk-x", `${treeLineX.toFixed(3)}px`);
    shell.style.setProperty("--garden-branch-x", `${treeLineX.toFixed(3)}px`);
    shell.style.setProperty("--garden-branch-y", `${(vertical.position * 0.18).toFixed(3)}px`);
    shell.style.setProperty("--garden-branch-rotate", `${(combinedX * 0.12 + combinedVelocity * 1.35).toFixed(3)}deg`);
    shell.style.setProperty("--garden-future-x", `${(combinedX * 1.1 + combinedVelocity * 2.5).toFixed(3)}px`);
    shell.style.setProperty("--garden-future-y", `${(vertical.position * 0.24).toFixed(3)}px`);
    shell.style.setProperty("--garden-future-rotate", `${(combinedX * 0.18 + combinedVelocity * 1.45).toFixed(3)}deg`);

    const leafDirections = [-1, 1, -1, 1, -1, -1, -1, 1];
    leaves.forEach((leaf, index) => {
      const depth = 0.42 + (index % 4) * 0.12;
      const direction = leafDirections[index] ?? (index % 2 === 0 ? -1 : 1);
      const leafX = combinedX * depth * 2.2 + combinedVelocity * depth * 6;
      const leafY = vertical.position * depth * 0.65;
      const leafRotate = combinedX * direction * depth * 1.8
        + combinedVelocity * direction * depth * 9
        + gust * direction * depth * 1.15;

      leaf.style.setProperty("--garden-leaf-x", `${leafX.toFixed(3)}px`);
      leaf.style.setProperty("--garden-leaf-y", `${leafY.toFixed(3)}px`);
      leaf.style.setProperty("--garden-leaf-rotate", `${leafRotate.toFixed(3)}deg`);
    });

    if (!springIsSettled(horizontal) || !springIsSettled(vertical) || !springIsSettled(scrollSway)
      || gust > 0.002 || gustTarget > 0.002) {
      animationFrame = window.requestAnimationFrame(render);
    } else {
      animationFrame = 0;
      shell.classList.remove("is-tree-moving");
    }
  };

  const wake = () => {
    if (!animationFrame) {
      shell.classList.add("is-tree-moving");
      animationFrame = window.requestAnimationFrame(render);
    }
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

  const press = (event: PointerEvent) => {
    if (event.pointerType === "mouse") return;
    gust = Math.max(gust, 0.3);
    move(event);
  };

  const release = (event: PointerEvent) => {
    if (event.pointerType !== "mouse") settle();
  };

  const scroll = () => {
    const now = performance.now();
    const nextScrollY = window.scrollY;
    const delta = nextScrollY - lastScrollY;
    const elapsed = Math.max(now - lastScrollTime, 16);
    lastScrollY = nextScrollY;
    lastScrollTime = now;
    if (!regionIsNearViewport || Math.abs(delta) < 0.25) return;

    const viewport = Math.max(window.innerHeight, 1);
    const normalizedVelocity = delta / viewport / (elapsed / 16.667);
    scrollPhase += (delta / viewport) * 9;
    const impulse = Math.sin(scrollPhase) * Math.min(Math.abs(normalizedVelocity) * 5, 0.11);
    scrollSway.velocity = clampMotion(scrollSway.velocity + impulse, -0.16, 0.16);
    gust = Math.max(gust, clampMotion(Math.abs(normalizedVelocity) * 3, 0, 0.24));
    wake();
  };

  let visibilityObserver: IntersectionObserver | undefined;
  if ("IntersectionObserver" in window) {
    visibilityObserver = new IntersectionObserver(([entry]) => {
      regionIsNearViewport = entry?.isIntersecting ?? false;
      lastScrollY = window.scrollY;
      lastScrollTime = performance.now();
    }, { rootMargin: "35% 0px", threshold: 0 });
    visibilityObserver.observe(region);
  }

  shell.classList.add("garden-pointer-ready");
  region.addEventListener("pointerdown", press);
  region.addEventListener("pointermove", move);
  region.addEventListener("pointerup", release);
  region.addEventListener("pointercancel", release);
  region.addEventListener("pointerleave", settle);
  window.addEventListener("scroll", scroll, { passive: true });
  window.addEventListener("blur", settle);

  return () => {
    if (animationFrame) window.cancelAnimationFrame(animationFrame);
    visibilityObserver?.disconnect();
    region.removeEventListener("pointerdown", press);
    region.removeEventListener("pointermove", move);
    region.removeEventListener("pointerup", release);
    region.removeEventListener("pointercancel", release);
    region.removeEventListener("pointerleave", settle);
    window.removeEventListener("scroll", scroll);
    window.removeEventListener("blur", settle);
    shell.classList.remove("garden-pointer-ready", "is-tree-moving");
    [
      "--garden-trunk-x",
      "--garden-branch-x",
      "--garden-branch-y",
      "--garden-branch-rotate",
      "--garden-future-x",
      "--garden-future-y",
      "--garden-future-rotate",
    ].forEach((property) => shell.style.removeProperty(property));
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

    }

    if (!reduceMotion && route === "root") {
      depthCleanups.push(setupBotanicalPointerMotion(shell));
      depthCleanups.push(setupGardenLeafMotion(shell));
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
