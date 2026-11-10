import { initBoot } from "./boot";
import { createWindowManager } from "./windowManager";
import { runCommand } from "./commands";
import * as audio from "./retroAudio";
import { initPixelBackground } from "./pixelBackground";
import type { AppId } from "./state";
import {
  hashToApp,
  loadCrt,
  loadFx,
  loadTheme,
  loadWelcomePref,
  saveCrt,
  saveFx,
  saveTheme,
  setWelcomePref,
  isMobile,
} from "./state";

export function initOs() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  audio.loadMutePreference(reduce);
  document.documentElement.dataset.crt = loadCrt();
  document.documentElement.setAttribute("data-theme", loadTheme());

  const wm = createWindowManager();
  wm.bindChrome(document.body);
  wm.syncDom();

  const bootRoot = document.querySelector<HTMLElement>("[data-boot-root]");
  const startBtn = document.querySelector<HTMLButtonElement>("[data-start-btn]");
  const startMenu = document.querySelector<HTMLElement>("[data-start-menu]");
  const taskButtons = document.querySelector<HTMLElement>("[data-task-buttons]");
  const clock = document.querySelector<HTMLElement>("[data-clock]");
  const ctx = document.querySelector<HTMLElement>("[data-ctx-menu]");
  const shutdown = document.querySelector<HTMLElement>("[data-shutdown]");
  const desktop = document.querySelector<HTMLElement>("[data-desktop]");
  const bgCanvas = document.querySelector<HTMLCanvasElement>("[data-desktop-bg]");
  const fx = bgCanvas ? initPixelBackground(bgCanvas) : null;
  const bootRunning = () => !!bootRoot && !bootRoot.classList.contains("is-done");
  fx?.setBootActive(bootRunning());

  let bootApi: ReturnType<typeof initBoot> | null = null;
  let selectedIcon: string | null = null;
  let clickTimer: number | null = null;

  const openApp = (id: string) => {
    if (id === "cv") {
      window.location.href = "/Agil_Azizov_CV.pdf";
      return;
    }
    wm.open(id as AppId);
    startMenu && (startMenu.hidden = true);
    startBtn?.setAttribute("aria-expanded", "false");
  };

  // Taskbar buttons from WM state
  wm.subscribe((wins, focused) => {
    if (taskButtons) {
      taskButtons.innerHTML = "";
      (Object.keys(wins) as AppId[]).forEach((id) => {
        const w = wins[id];
        if (!w.open) return;
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "os-btn task-btn" + (focused === id && !w.minimized ? " is-pressed" : "");
        btn.textContent = wm.APP_TITLES[id];
        btn.addEventListener("click", () => {
          if (w.minimized || focused !== id) wm.restore(id);
          else wm.minimize(id);
        });
        taskButtons.appendChild(btn);
      });
    }
    const anyMax = (Object.keys(wins) as AppId[]).some(
      (id) => wins[id].open && !wins[id].minimized && (wins[id].maximized || isMobile()),
    );
    fx?.setMaximized(anyMax);
  });

  // Icon labels: shrink only if a single word still overflows the cell
  const fitDeskLabels = () => {
    document.querySelectorAll<HTMLElement>(".desk-icon span").forEach((span) => {
      span.classList.remove("is-tight");
      const prev = span.style.whiteSpace;
      span.style.whiteSpace = "nowrap";
      const overflows = span.scrollWidth > span.clientWidth + 1;
      span.style.whiteSpace = prev;
      if (overflows) span.classList.add("is-tight");
    });
  };
  let labelFitTimer = 0;
  fitDeskLabels();
  window.addEventListener("resize", () => {
    window.clearTimeout(labelFitTimer);
    labelFitTimer = window.setTimeout(fitDeskLabels, 120);
  });

  // Desktop icons: single click select / double open; touch = open
  document.querySelectorAll<HTMLElement>("[data-desk-icon]").forEach((node) => {
    const id = node.dataset.deskIcon || node.dataset.openApp;
    if (!id) return;
    node.addEventListener("click", (e) => {
      if (id === "cv") return; // real link
      e.preventDefault();
      const touch = matchMedia("(pointer: coarse)").matches || isMobile();
      if (touch) {
        openApp(id);
        return;
      }
      document.querySelectorAll(".desk-icon.is-selected").forEach((el) => el.classList.remove("is-selected"));
      node.classList.add("is-selected");
      if (selectedIcon === id) {
        if (clickTimer) window.clearTimeout(clickTimer);
        selectedIcon = null;
        openApp(id);
        return;
      }
      selectedIcon = id;
      if (clickTimer) window.clearTimeout(clickTimer);
      clickTimer = window.setTimeout(() => {
        selectedIcon = null;
      }, 350);
    });
    node.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openApp(id);
      }
    });
  });

  document.querySelectorAll<HTMLElement>("[data-open-app]").forEach((el) => {
    el.addEventListener("click", (e) => {
      const id = el.dataset.openApp;
      if (!id) return;
      if (el.tagName === "A" && el.getAttribute("href")?.startsWith("#")) e.preventDefault();
      openApp(id);
    });
  });

  // Start menu
  startBtn?.addEventListener("click", () => {
    if (!startMenu) return;
    const open = startMenu.hidden;
    startMenu.hidden = !open;
    startBtn.setAttribute("aria-expanded", open ? "true" : "false");
    audio.play("click");
  });
  document.addEventListener("click", (e) => {
    if (!startMenu || startMenu.hidden) return;
    const t = e.target as Node;
    if (startMenu.contains(t) || startBtn?.contains(t)) return;
    startMenu.hidden = true;
    startBtn?.setAttribute("aria-expanded", "false");
  });

  // Tray tools
  const muteBtn = document.querySelector<HTMLButtonElement>("[data-tool-mute]");
  const syncMute = () => {
    document.querySelectorAll<HTMLButtonElement>("[data-tool-mute]").forEach((btn) => {
      const muted = audio.isMuted();
      btn.setAttribute("aria-pressed", muted ? "true" : "false");
      btn.textContent = muted ? btn.dataset.labelUnmute || "SOUND" : btn.dataset.labelMute || "MUTE";
    });
  };
  document.querySelectorAll("[data-tool-mute]").forEach((btn) => {
    btn.addEventListener("click", () => {
      audio.init();
      audio.setMuted(!audio.isMuted());
      syncMute();
    });
  });
  document.querySelectorAll("[data-tool-crt]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = document.documentElement.dataset.crt === "off" ? "on" : "off";
      document.documentElement.dataset.crt = next;
      saveCrt(next);
      audio.play("click");
    });
  });
  document.querySelectorAll("[data-tool-theme]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      document.documentElement.classList.add("theme-switch");
      document.documentElement.setAttribute("data-theme", next);
      saveTheme(next);
      audio.play("click");
      window.setTimeout(() => document.documentElement.classList.remove("theme-switch"), 400);
    });
  });
  const syncFx = () => {
    const on = loadFx() === "on" && !reduce;
    document.querySelectorAll<HTMLButtonElement>("[data-tool-fx]").forEach((btn) => {
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
    fx?.setEnabled(on);
  };
  document.querySelectorAll("[data-tool-fx]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (reduce) return;
      const next = loadFx() === "off" ? "on" : "off";
      saveFx(next);
      syncFx();
      audio.play("click");
    });
  });
  syncMute();
  syncFx();

  // Clock
  const tickClock = () => {
    if (!clock) return;
    const d = new Date();
    clock.textContent = d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };
  tickClock();
  window.setInterval(tickClock, 15000);

  // Context menu
  desktop?.addEventListener("contextmenu", (e) => {
    if ((e.target as HTMLElement).closest(".window, .desk-icon, .taskbar, .start-menu")) return;
    e.preventDefault();
    if (!ctx) return;
    ctx.hidden = false;
    ctx.style.left = `${Math.min(e.clientX, window.innerWidth - 200)}px`;
    ctx.style.top = `${Math.min(e.clientY, window.innerHeight - 160)}px`;
  });
  document.addEventListener("click", () => {
    if (ctx) ctx.hidden = true;
  });
  ctx?.querySelector('[data-ctx="refresh"]')?.addEventListener("click", () => location.reload());
  ctx?.querySelector('[data-ctx="theme"]')?.addEventListener("click", () => {
    document.querySelector<HTMLButtonElement>("[data-tool-theme]")?.click();
  });
  ctx?.querySelector('[data-ctx="about"]')?.addEventListener("click", () => openApp("about"));

  // Tabs / explorers / projects
  document.querySelectorAll("[data-tabs]").forEach((group) => {
    const tabs = group.querySelectorAll<HTMLButtonElement>("[data-tab]");
    const parent = group.parentElement;
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const name = tab.dataset.tab;
        tabs.forEach((t) => {
          t.classList.toggle("is-active", t === tab);
          t.setAttribute("aria-selected", t === tab ? "true" : "false");
        });
        parent?.querySelectorAll<HTMLElement>("[data-tab-panel]").forEach((panel) => {
          panel.hidden = panel.dataset.tabPanel !== name;
        });
      });
    });
  });

  document.querySelectorAll("[data-explorer]").forEach((ex) => {
    const buttons = ex.querySelectorAll<HTMLButtonElement>("[data-job]");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.job;
        buttons.forEach((b) => {
          b.classList.toggle("is-active", b === btn);
          b.setAttribute("aria-selected", b === btn ? "true" : "false");
        });
        ex.querySelectorAll<HTMLElement>("[data-job-panel]").forEach((p) => {
          p.hidden = p.dataset.jobPanel !== id;
        });
      });
    });
  });

  document.querySelectorAll("[data-project-grid]").forEach((grid) => {
    const host = grid.parentElement;
    const buttons = grid.querySelectorAll<HTMLButtonElement>("[data-project]");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.project;
        buttons.forEach((b) => b.setAttribute("aria-pressed", b === btn ? "true" : "false"));
        host?.querySelectorAll<HTMLElement>("[data-project-panel]").forEach((p) => {
          p.hidden = p.dataset.projectPanel !== id;
        });
      });
    });
  });

  // Welcome dialog
  document.querySelector("[data-win-close-welcome]")?.addEventListener("click", () => wm.close("welcome"));
  const welcomeCb = document.querySelector<HTMLInputElement>("[data-welcome-startup]");
  if (welcomeCb) welcomeCb.checked = loadWelcomePref();
  welcomeCb?.addEventListener("change", () => setWelcomePref(welcomeCb.checked));

  // Terminal
  const termForm = document.querySelector<HTMLFormElement>("[data-term-form]");
  const termOut = document.querySelector<HTMLElement>("[data-term-out]");
  termForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = termForm.querySelector("input");
    if (!input) return;
    const value = input.value;
    input.value = "";
    runCommand(value, wm, {
      help: document.body.dataset.termHelp || "",
      notFound: document.body.dataset.termNotfound || "",
      onReboot: () => bootApi?.replay(),
      print: (msg) => {
        if (termOut) termOut.textContent = msg;
      },
    });
  });

  // Restart / shutdown
  document.querySelector("[data-os-restart]")?.addEventListener("click", () => {
    startMenu && (startMenu.hidden = true);
    fx?.setBootActive(true);
    bootApi?.replay();
  });
  document.querySelector("[data-os-shutdown]")?.addEventListener("click", () => {
    startMenu && (startMenu.hidden = true);
    audio.play("shutdown");
    if (shutdown) shutdown.hidden = false;
  });
  document.querySelector("[data-power-again]")?.addEventListener("click", () => {
    if (shutdown) shutdown.hidden = true;
    fx?.setBootActive(true);
    bootApi?.replay();
  });

  // Esc closes focused window (after boot)
  window.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (bootRoot && !bootRoot.classList.contains("is-done")) return;
    if (startMenu && !startMenu.hidden) {
      startMenu.hidden = true;
      return;
    }
    const id = wm.focused();
    if (id) wm.close(id);
  });

  // Hash routing
  const applyHash = () => {
    const app = hashToApp(location.hash);
    if (app) wm.open(app);
  };
  window.addEventListener("hashchange", applyHash);

  // Lang preserve hash
  document.querySelectorAll<HTMLAnchorElement>("[data-lang-link]").forEach((a) => {
    a.addEventListener("click", (e) => {
      const hash = location.hash || "";
      const base = a.getAttribute("href") || "/";
      e.preventDefault();
      location.href = base.endsWith("/") ? `${base}${hash}` : `${base}/${hash}`;
    });
  });

  const afterBoot = () => {
    fx?.setBootActive(false);
    applyHash();
    if (!location.hash && loadWelcomePref()) wm.open("welcome");
  };

  if (bootRoot) bootApi = initBoot(bootRoot, afterBoot);
  else afterBoot();
}
