import * as audio from "./retroAudio";

export const SECTIONS = [
  "home",
  "about",
  "experience",
  "skills",
  "projects",
  "engineering",
  "contact",
] as const;

export type SectionId = (typeof SECTIONS)[number];

const CRT_KEY = "agil-portfolio-crt";

export function isSection(id: string): id is SectionId {
  return (SECTIONS as readonly string[]).includes(id);
}

export function initTerminal(opts: {
  locale: string;
  onBootReplay?: () => void;
  resumeMessage?: string;
}) {
  const shell = document.querySelector<HTMLElement>(".terminal-shell");
  const live = document.querySelector<HTMLElement>("[data-term-live]");
  const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-section-link]"));
  const panels = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));

  let current: SectionId = "home";

  // CRT preference
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) document.documentElement.dataset.reduce = "1";
  try {
    const crt = localStorage.getItem(CRT_KEY);
    document.documentElement.dataset.crt = crt === "off" ? "off" : "on";
  } catch {
    document.documentElement.dataset.crt = "on";
  }

  function show(id: SectionId, pushHash = true) {
    current = id;
    panels.forEach((panel) => {
      const on = panel.dataset.section === id;
      panel.classList.toggle("is-active", on);
      panel.hidden = !on;
      panel.setAttribute("aria-hidden", on ? "false" : "true");
    });
    navLinks.forEach((a) => {
      const on = a.getAttribute("href") === `#${id}`;
      a.classList.toggle("is-active", on);
      if (on) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    if (pushHash) {
      const url = `${window.location.pathname}#${id}`;
      history.replaceState(null, "", url);
    }
    audio.play("beep");
    if (live) live.textContent = `Section ${id}`;
    document.getElementById(id)?.querySelector<HTMLElement>(".panel-title")?.focus({ preventScroll: true });
  }

  function fromHash(): SectionId {
    const raw = (window.location.hash || "#home").slice(1);
    return isSection(raw) ? raw : "home";
  }

  navLinks.forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href")?.slice(1);
      if (!id || !isSection(id)) return;
      e.preventDefault();
      audio.play("click");
      show(id);
    });
  });

  window.addEventListener("hashchange", () => show(fromHash(), false));

  // Keyboard: 1-7 and arrows when not typing in an input
  window.addEventListener("keydown", (e) => {
    const tag = (e.target as HTMLElement)?.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA") return;

    if (e.key >= "1" && e.key <= "7") {
      const idx = Number(e.key) - 1;
      if (SECTIONS[idx]) {
        e.preventDefault();
        show(SECTIONS[idx]);
      }
      return;
    }
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const i = SECTIONS.indexOf(current);
      show(SECTIONS[(i + 1) % SECTIONS.length]);
    }
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const i = SECTIONS.indexOf(current);
      show(SECTIONS[(i - 1 + SECTIONS.length) % SECTIONS.length]);
    }
  });

  // Experience expand
  document.querySelectorAll<HTMLButtonElement>("[data-job-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("aria-controls");
      if (!id) return;
      const detail = document.getElementById(id);
      if (!detail) return;
      const open = detail.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      audio.play("click");
    });
  });
  window.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const tag = (e.target as HTMLElement)?.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA") return;
    const open = document.querySelector(".job-detail.is-open");
    if (open) {
      open.classList.remove("is-open");
      const btn = document.querySelector(`[aria-controls="${open.id}"]`);
      btn?.setAttribute("aria-expanded", "false");
      return;
    }
    if (current !== "home") show("home");
  });

  // Mute / CRT toggles in status bar
  const muteBtn = document.querySelector<HTMLButtonElement>("[data-tool-mute]");
  const crtBtn = document.querySelector<HTMLButtonElement>("[data-tool-crt]");
  const syncMute = () => {
    if (!muteBtn) return;
    const muted = audio.isMuted();
    muteBtn.setAttribute("aria-pressed", muted ? "true" : "false");
    muteBtn.textContent = muted ? muteBtn.dataset.labelUnmute || "SOUND" : muteBtn.dataset.labelMute || "MUTE";
  };
  muteBtn?.addEventListener("click", () => {
    audio.init();
    audio.setMuted(!audio.isMuted());
    syncMute();
  });
  crtBtn?.addEventListener("click", () => {
    const next = document.documentElement.dataset.crt === "off" ? "on" : "off";
    document.documentElement.dataset.crt = next;
    try {
      localStorage.setItem(CRT_KEY, next);
    } catch {
      /* ignore */
    }
    crtBtn.setAttribute("aria-pressed", next === "on" ? "true" : "false");
    audio.play("click");
  });
  syncMute();
  crtBtn?.setAttribute("aria-pressed", document.documentElement.dataset.crt !== "off" ? "true" : "false");

  // Preserve hash when switching language
  document.querySelectorAll<HTMLAnchorElement>("[data-lang-link]").forEach((a) => {
    a.addEventListener("click", (e) => {
      const hash = window.location.hash || "#home";
      const base = a.getAttribute("href") || "/";
      e.preventDefault();
      window.location.href = base.endsWith("/") ? `${base}${hash}` : `${base}/${hash}`;
    });
  });

  show(fromHash(), false);

  return {
    show,
    current: () => current,
    replayBoot: () => opts.onBootReplay?.(),
    setMuted: (v: boolean) => {
      audio.setMuted(v);
      syncMute();
    },
    toggleCrt: () => {
      crtBtn?.click();
    },
    toggleTheme: () => {
      const root = document.documentElement;
      const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.classList.add("theme-switch");
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("agil-portfolio-theme", next);
      } catch {
        /* ignore */
      }
      window.setTimeout(() => root.classList.remove("theme-switch"), 450);
    },
  };
}
