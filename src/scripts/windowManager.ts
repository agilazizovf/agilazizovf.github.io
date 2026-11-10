import type { AppId, WinState } from "./state";
import {
  APP_TITLES,
  DEFAULT_GEOM,
  isMobile,
  loadWindows,
  saveWindows,
} from "./state";
import * as audio from "./retroAudio";

type Listener = (wins: Record<AppId, WinState>, focused: AppId | null) => void;

const ALL: AppId[] = [
  "welcome",
  "about",
  "experience",
  "skills",
  "projects",
  "engineering",
  "contact",
  "terminal",
  "recycle",
  "browser",
];

function blank(id: AppId, z: number): WinState {
  const g = DEFAULT_GEOM[id];
  return { id, open: false, minimized: false, maximized: false, ...g, z };
}

export function createWindowManager() {
  const wins = {} as Record<AppId, WinState>;
  let zTop = 20;
  let focused: AppId | null = null;
  let cascade = 0;
  const listeners = new Set<Listener>();

  const saved = loadWindows();
  for (const id of ALL) {
    wins[id] = saved?.[id] ? { ...blank(id, 10), ...saved[id], id } : blank(id, 10);
  }

  const emit = () => {
    saveWindows(wins);
    listeners.forEach((fn) => fn(wins, focused));
    syncDom();
  };

  function el(id: AppId) {
    return document.querySelector<HTMLElement>(`[data-window="${id}"]`);
  }

  function applyGeom(id: AppId) {
    const node = el(id);
    if (!node) return;
    const w = wins[id];
    if (isMobile() || w.maximized) {
      node.style.left = "0";
      node.style.top = "0";
      node.style.width = "100%";
      node.style.height = "calc(100% - 48px)";
      node.style.right = "0";
      node.style.bottom = "48px";
      return;
    }
    node.style.left = `${w.x}px`;
    node.style.top = `${w.y}px`;
    node.style.width = `${w.w}px`;
    node.style.height = `${w.h}px`;
    node.style.right = "auto";
    node.style.bottom = "auto";
  }

  function syncDom() {
    for (const id of ALL) {
      const node = el(id);
      if (!node) continue;
      const w = wins[id];
      const show = w.open && !w.minimized;
      node.hidden = !show;
      node.classList.toggle("is-minimized", w.minimized);
      node.classList.toggle("is-active", focused === id && show);
      node.classList.toggle("is-maximized", w.maximized || isMobile());
      node.style.zIndex = String(w.z);
      if (show) applyGeom(id);
    }
  }

  function focus(id: AppId) {
    focused = id;
    zTop += 1;
    wins[id].z = zTop;
    emit();
    el(id)?.querySelector<HTMLElement>(".window-title")?.focus({ preventScroll: true });
  }

  function open(id: AppId) {
    const w = wins[id];
    const wasClosed = !w.open;
    if (wasClosed && !isMobile()) {
      cascade = (cascade + 1) % 8;
      w.x = DEFAULT_GEOM[id].x + cascade * 18;
      w.y = DEFAULT_GEOM[id].y + cascade * 18;
    }
    if (isMobile()) {
      for (const other of ALL) {
        if (other !== id && wins[other].open && !wins[other].minimized) {
          wins[other].minimized = true;
        }
      }
      w.maximized = true;
    }
    w.open = true;
    w.minimized = false;
    audio.play(wasClosed ? "winOpen" : "click");
    focus(id);
    if (location.hash !== `#${id}` && id !== "welcome" && id !== "recycle" && id !== "browser") {
      history.replaceState(null, "", `${location.pathname}#${id}`);
    }
  }

  function close(id: AppId) {
    wins[id].open = false;
    wins[id].minimized = false;
    if (focused === id) focused = null;
    audio.play("winClose");
    emit();
  }

  function minimize(id: AppId) {
    wins[id].minimized = true;
    if (focused === id) focused = null;
    audio.play("minimize");
    emit();
  }

  function toggleMax(id: AppId) {
    if (isMobile()) return;
    wins[id].maximized = !wins[id].maximized;
    audio.play("click");
    focus(id);
  }

  function restore(id: AppId) {
    wins[id].minimized = false;
    focus(id);
  }

  function bindChrome(root: HTMLElement) {
    root.querySelectorAll<HTMLElement>("[data-window]").forEach((node) => {
      const id = node.dataset.window as AppId;
      const title = node.querySelector<HTMLElement>(".window-title");
      const btnMin = node.querySelector<HTMLButtonElement>("[data-win-min]");
      const btnMax = node.querySelector<HTMLButtonElement>("[data-win-max]");
      const btnClose = node.querySelector<HTMLButtonElement>("[data-win-close]");
      const grip = node.querySelector<HTMLElement>("[data-win-resize]");

      node.addEventListener("mousedown", () => {
        if (wins[id].open) focus(id);
      });

      btnMin?.addEventListener("click", (e) => {
        e.stopPropagation();
        minimize(id);
      });
      btnMax?.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMax(id);
      });
      btnClose?.addEventListener("click", (e) => {
        e.stopPropagation();
        close(id);
      });

      title?.addEventListener("dblclick", () => toggleMax(id));

      // drag
      title?.addEventListener("pointerdown", (e) => {
        if (isMobile() || wins[id].maximized || (e.target as HTMLElement).closest("button")) return;
        e.preventDefault();
        focus(id);
        const startX = e.clientX;
        const startY = e.clientY;
        const ox = wins[id].x;
        const oy = wins[id].y;
        const move = (ev: PointerEvent) => {
          wins[id].x = Math.max(0, ox + (ev.clientX - startX));
          wins[id].y = Math.max(0, oy + (ev.clientY - startY));
          applyGeom(id);
        };
        const up = () => {
          window.removeEventListener("pointermove", move);
          window.removeEventListener("pointerup", up);
          emit();
        };
        window.addEventListener("pointermove", move);
        window.addEventListener("pointerup", up);
      });

      // resize
      grip?.addEventListener("pointerdown", (e) => {
        if (isMobile() || wins[id].maximized) return;
        e.preventDefault();
        focus(id);
        const startX = e.clientX;
        const startY = e.clientY;
        const ow = wins[id].w;
        const oh = wins[id].h;
        const move = (ev: PointerEvent) => {
          wins[id].w = Math.max(260, ow + (ev.clientX - startX));
          wins[id].h = Math.max(180, oh + (ev.clientY - startY));
          applyGeom(id);
        };
        const up = () => {
          window.removeEventListener("pointermove", move);
          window.removeEventListener("pointerup", up);
          emit();
        };
        window.addEventListener("pointermove", move);
        window.addEventListener("pointerup", up);
      });
    });
  }

  return {
    ALL,
    APP_TITLES,
    subscribe: (fn: Listener) => {
      listeners.add(fn);
      fn(wins, focused);
      return () => listeners.delete(fn);
    },
    open,
    close,
    minimize,
    restore,
    toggleMax,
    focus,
    get: (id: AppId) => wins[id],
    focused: () => focused,
    bindChrome,
    syncDom,
    snapshot: () => ({ ...wins }),
  };
}

export type WindowManager = ReturnType<typeof createWindowManager>;
