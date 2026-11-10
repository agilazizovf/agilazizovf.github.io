/**
 * Pixel rain + twinkle desktop background.
 * Tweak knobs live in the CONFIG object below.
 */

export const CONFIG = {
  /** Internal canvas scale vs CSS pixels (chunkier when higher). */
  scale: 3,
  /** Target animation rate. */
  fps: 30,
  /** Falling pixel count = area / this, clamped by maxParticles*. */
  densityDivisor: 14000,
  maxParticlesDesktop: 120,
  maxParticlesMobile: 40,
  /** Twinkle stars (subset of static dots). */
  twinkleRatio: 0.22,
  minTwinkles: 8,
  maxTwinkles: 28,
  /** Fall speed in internal pixels per second. */
  speedMin: 6,
  speedMax: 22,
  /** Trail length in stacked pixels. */
  trailMin: 3,
  trailMax: 6,
  /** Drawn square size in internal pixels (1 = one chunky cell). */
  pixelSize: 1,
  /** Fill alpha range for rain / trails / twinkles. */
  opacityMin: 0.08,
  opacityMax: 0.25,
  /** Glitch band: interval and duration (ms). */
  glitchEveryMinMs: 15000,
  glitchEveryMaxMs: 25000,
  glitchDurationMs: 300,
  /** Resize debounce (ms). */
  resizeDebounceMs: 150,
} as const;

type TokenColors = { primary: string; accent: string; muted: string };

type Drop = {
  x: number;
  y: number;
  speed: number;
  trail: number;
  opacity: number;
  color: "primary" | "accent" | "muted";
};

type Twinkle = {
  x: number;
  y: number;
  phase: number;
  speed: number;
  opacity: number;
  color: "primary" | "accent" | "muted";
};

function readTokens(): TokenColors {
  const css = getComputedStyle(document.documentElement);
  return {
    primary: css.getPropertyValue("--primary").trim() || "currentColor",
    accent: css.getPropertyValue("--accent").trim() || "currentColor",
    muted: css.getPropertyValue("--muted").trim() || "currentColor",
  };
}

function pickColor(): Drop["color"] {
  const r = Math.random();
  if (r < 0.45) return "primary";
  if (r < 0.8) return "accent";
  return "muted";
}

function colorOf(tokens: TokenColors, key: Drop["color"]) {
  return tokens[key];
}

export type PixelBackgroundApi = {
  setEnabled: (on: boolean) => void;
  setBootActive: (active: boolean) => void;
  setMaximized: (maximized: boolean) => void;
  destroy: () => void;
};

export function initPixelBackground(canvas: HTMLCanvasElement): PixelBackgroundApi {
  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) {
    return {
      setEnabled: () => undefined,
      setBootActive: () => undefined,
      setMaximized: () => undefined,
      destroy: () => undefined,
    };
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let enabled = true;
  let bootActive = false;
  let maximized = false;
  let hidden = document.visibilityState === "hidden";
  let tokens = readTokens();
  let drops: Drop[] = [];
  let twinkles: Twinkle[] = [];
  let iw = 1;
  let ih = 1;
  let raf = 0;
  let lastTs = 0;
  let frameInterval = 1000 / CONFIG.fps;
  let nextGlitchAt = performance.now() + CONFIG.glitchEveryMinMs;
  let glitchUntil = 0;
  let glitchY = 0;
  let resizeTimer = 0;

  const themeObserver = new MutationObserver(() => {
    tokens = readTokens();
    if (reduceMotion || !shouldAnimate()) drawStatic();
  });
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  function maxParticles() {
    return window.matchMedia("(max-width: 768px)").matches
      ? CONFIG.maxParticlesMobile
      : CONFIG.maxParticlesDesktop;
  }

  function seed() {
    const area = iw * ih;
    const count = Math.min(maxParticles(), Math.max(8, Math.round(area / CONFIG.densityDivisor)));
    drops = Array.from({ length: count }, () => ({
      x: Math.floor(Math.random() * iw),
      y: Math.floor(Math.random() * ih),
      speed: CONFIG.speedMin + Math.random() * (CONFIG.speedMax - CONFIG.speedMin),
      trail: CONFIG.trailMin + Math.floor(Math.random() * (CONFIG.trailMax - CONFIG.trailMin + 1)),
      opacity: CONFIG.opacityMin + Math.random() * (CONFIG.opacityMax - CONFIG.opacityMin),
      color: pickColor(),
    }));
    const twinkleCount = Math.min(
      CONFIG.maxTwinkles,
      Math.max(CONFIG.minTwinkles, Math.round(count * CONFIG.twinkleRatio)),
    );
    twinkles = Array.from({ length: twinkleCount }, () => ({
      x: Math.floor(Math.random() * iw),
      y: Math.floor(Math.random() * ih),
      phase: Math.random() * Math.PI * 2,
      speed: 0.6 + Math.random() * 1.4,
      opacity: CONFIG.opacityMin + Math.random() * (CONFIG.opacityMax - CONFIG.opacityMin),
      color: pickColor(),
    }));
  }

  function resize() {
    const cssW = window.innerWidth;
    const cssH = window.innerHeight;
    iw = Math.max(1, Math.floor(cssW / CONFIG.scale));
    ih = Math.max(1, Math.floor(cssH / CONFIG.scale));
    canvas.width = iw;
    canvas.height = ih;
    canvas.style.width = `${cssW}px`;
    canvas.style.height = `${cssH}px`;
    seed();
    if (reduceMotion || !shouldAnimate()) drawStatic();
  }

  function shouldAnimate() {
    return enabled && !bootActive && !maximized && !hidden && !reduceMotion;
  }

  function syncVisibility() {
    canvas.hidden = !enabled || maximized;
    if (shouldAnimate()) start();
    else {
      stop();
      if (enabled && !maximized) drawStatic();
    }
  }

  function fillPixel(x: number, y: number, color: string, alpha: number) {
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CONFIG.pixelSize, CONFIG.pixelSize);
  }

  function drawStatic() {
    ctx.globalAlpha = 1;
    ctx.clearRect(0, 0, iw, ih);
    for (const t of twinkles) {
      fillPixel(t.x, t.y, colorOf(tokens, t.color), t.opacity * 0.7);
    }
    for (let i = 0; i < Math.min(drops.length, 24); i++) {
      const d = drops[i];
      fillPixel(d.x, d.y, colorOf(tokens, d.color), d.opacity * 0.55);
    }
    ctx.globalAlpha = 1;
  }

  function frame(ts: number) {
    raf = 0;
    if (!shouldAnimate()) return;
    if (ts - lastTs < frameInterval) {
      raf = requestAnimationFrame(frame);
      return;
    }
    const dt = Math.min(0.05, (ts - lastTs) / 1000 || 1 / CONFIG.fps);
    lastTs = ts;

    ctx.globalAlpha = 1;
    ctx.clearRect(0, 0, iw, ih);

    for (const t of twinkles) {
      t.phase += dt * t.speed;
      const pulse = 0.45 + 0.55 * (0.5 + 0.5 * Math.sin(t.phase));
      fillPixel(t.x, t.y, colorOf(tokens, t.color), t.opacity * pulse);
    }

    for (const d of drops) {
      d.y += d.speed * dt;
      if (d.y - d.trail > ih) {
        d.y = -Math.random() * 8;
        d.x = Math.floor(Math.random() * iw);
      }
      for (let i = 0; i < d.trail; i++) {
        const fade = 1 - i / d.trail;
        fillPixel(d.x, Math.floor(d.y) - i, colorOf(tokens, d.color), d.opacity * fade);
      }
    }

    if (ts >= nextGlitchAt) {
      glitchUntil = ts + CONFIG.glitchDurationMs;
      glitchY = Math.floor(Math.random() * ih);
      nextGlitchAt =
        ts +
        CONFIG.glitchEveryMinMs +
        Math.random() * (CONFIG.glitchEveryMaxMs - CONFIG.glitchEveryMinMs);
    }
    if (ts < glitchUntil) {
      const bandH = 1 + Math.floor(Math.random() * 2);
      for (let x = 0; x < iw; x += 2 + Math.floor(Math.random() * 3)) {
        if (Math.random() < 0.55) {
          fillPixel(
            x,
            glitchY,
            colorOf(tokens, Math.random() < 0.5 ? "primary" : "accent"),
            CONFIG.opacityMax,
          );
          if (bandH > 1) {
            fillPixel(
              x,
              glitchY + 1,
              colorOf(tokens, Math.random() < 0.5 ? "primary" : "accent"),
              CONFIG.opacityMax * 0.7,
            );
          }
        }
      }
    }

    ctx.globalAlpha = 1;
    raf = requestAnimationFrame(frame);
  }

  function start() {
    if (raf || !shouldAnimate()) return;
    lastTs = performance.now();
    raf = requestAnimationFrame(frame);
  }

  function stop() {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
  }

  const onVisibility = () => {
    hidden = document.visibilityState === "hidden";
    syncVisibility();
  };
  const onResize = () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(resize, CONFIG.resizeDebounceMs);
  };

  document.addEventListener("visibilitychange", onVisibility);
  window.addEventListener("resize", onResize);
  resize();
  syncVisibility();

  return {
    setEnabled(on) {
      enabled = on;
      syncVisibility();
    },
    setBootActive(active) {
      bootActive = active;
      syncVisibility();
    },
    setMaximized(isMax) {
      maximized = isMax;
      syncVisibility();
    },
    destroy() {
      stop();
      themeObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
      window.clearTimeout(resizeTimer);
    },
  };
}
