export type AppId =
  | "welcome"
  | "about"
  | "experience"
  | "skills"
  | "projects"
  | "engineering"
  | "contact"
  | "terminal"
  | "recycle"
  | "browser";

export type WinState = {
  id: AppId;
  open: boolean;
  minimized: boolean;
  maximized: boolean;
  x: number;
  y: number;
  w: number;
  h: number;
  z: number;
};

const SESSION_WINS = "agilos-windows";
const WELCOME_KEY = "agilos-show-welcome";
const CRT_KEY = "agil-portfolio-crt";
const THEME_KEY = "agil-portfolio-theme";
const FX_KEY = "agilos-fx";

export const APP_TITLES: Record<AppId, string> = {
  welcome: "Welcome",
  about: "My Computer",
  experience: "Experience",
  skills: "Skills",
  projects: "Projects",
  engineering: "Engineering",
  contact: "Contact",
  terminal: "Terminal",
  recycle: "Recycle Bin",
  browser: "Network",
};

export const DEFAULT_GEOM: Record<AppId, Pick<WinState, "x" | "y" | "w" | "h">> = {
  welcome: { x: 120, y: 80, w: 420, h: 280 },
  about: { x: 60, y: 40, w: 520, h: 420 },
  experience: { x: 80, y: 50, w: 640, h: 460 },
  skills: { x: 100, y: 60, w: 560, h: 420 },
  projects: { x: 90, y: 40, w: 600, h: 460 },
  engineering: { x: 70, y: 30, w: 580, h: 440 },
  contact: { x: 140, y: 90, w: 440, h: 360 },
  terminal: { x: 160, y: 100, w: 520, h: 360 },
  recycle: { x: 180, y: 120, w: 360, h: 220 },
  browser: { x: 200, y: 110, w: 380, h: 220 },
};

export function isMobile() {
  return window.matchMedia("(max-width: 768px)").matches;
}

export function loadWelcomePref() {
  try {
    return localStorage.getItem(WELCOME_KEY) !== "0";
  } catch {
    return true;
  }
}

export function setWelcomePref(show: boolean) {
  try {
    localStorage.setItem(WELCOME_KEY, show ? "1" : "0");
  } catch {
    /* ignore */
  }
}

export function loadCrt(): "on" | "off" {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return "off";
  try {
    return localStorage.getItem(CRT_KEY) === "off" ? "off" : "on";
  } catch {
    return "on";
  }
}

export function saveCrt(v: "on" | "off") {
  try {
    localStorage.setItem(CRT_KEY, v);
  } catch {
    /* ignore */
  }
}

export function loadTheme(): "dark" | "light" {
  try {
    const t = localStorage.getItem(THEME_KEY);
    return t === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

export function saveTheme(t: "dark" | "light") {
  try {
    localStorage.setItem(THEME_KEY, t);
  } catch {
    /* ignore */
  }
}

export function loadFx(): "on" | "off" {
  if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return "off";
  }
  try {
    return localStorage.getItem(FX_KEY) === "off" ? "off" : "on";
  } catch {
    return "on";
  }
}

export function saveFx(v: "on" | "off") {
  try {
    localStorage.setItem(FX_KEY, v);
  } catch {
    /* ignore */
  }
}

export function loadWindows(): Partial<Record<AppId, WinState>> | null {
  try {
    const raw = sessionStorage.getItem(SESSION_WINS);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function saveWindows(map: Record<AppId, WinState>) {
  try {
    sessionStorage.setItem(SESSION_WINS, JSON.stringify(map));
  } catch {
    /* ignore */
  }
}

export function hashToApp(hash: string): AppId | null {
  const id = (hash || "").replace(/^#/, "");
  if (!id || id === "home") return null;
  if (id in APP_TITLES) return id as AppId;
  return null;
}
