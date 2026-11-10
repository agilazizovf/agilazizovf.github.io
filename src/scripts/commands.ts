import type { AppId } from "./state";
import type { WindowManager } from "./windowManager";
import * as audio from "./retroAudio";
import { saveCrt, saveTheme, loadCrt } from "./state";

const APPS: AppId[] = [
  "about",
  "experience",
  "skills",
  "projects",
  "engineering",
  "contact",
  "terminal",
  "recycle",
  "browser",
  "welcome",
];

export function runCommand(
  raw: string,
  wm: WindowManager,
  opts: {
    help: string;
    notFound: string;
    onReboot?: () => void;
    print: (msg: string) => void;
  },
) {
  const parts = raw.trim().split(/\s+/);
  const cmd = (parts[0] || "").toLowerCase();
  const arg = (parts[1] || "").toLowerCase();
  if (!cmd) return;

  switch (cmd) {
    case "help":
      opts.print(opts.help);
      break;
    case "open":
      if (APPS.includes(arg as AppId)) {
        wm.open(arg as AppId);
        opts.print(`> open ${arg}`);
      } else opts.print(opts.notFound.replace("{cmd}", raw));
      break;
    case "about":
    case "experience":
    case "skills":
    case "projects":
    case "engineering":
    case "contact":
    case "terminal":
      wm.open(cmd);
      opts.print(`> ${cmd}`);
      break;
    case "cv":
      window.location.href = "/Agil_Azizov_CV.pdf";
      opts.print("> download cv");
      break;
    case "lang": {
      const loc = arg === "az" || arg === "ru" || arg === "en" ? arg : null;
      if (!loc) {
        opts.print(opts.notFound.replace("{cmd}", raw));
        break;
      }
      const hash = window.location.hash || "";
      window.location.href = (loc === "en" ? "/" : `/${loc}/`) + hash;
      break;
    }
    case "mute":
      audio.init();
      audio.setMuted(!audio.isMuted());
      opts.print(audio.isMuted() ? "> mute on" : "> mute off");
      break;
    case "crt": {
      const next = loadCrt() === "off" ? "on" : "off";
      document.documentElement.dataset.crt = next;
      saveCrt(next);
      opts.print(`> crt ${next}`);
      break;
    }
    case "theme": {
      const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      saveTheme(next);
      opts.print(`> theme ${next}`);
      break;
    }
    case "clear":
      opts.print("");
      break;
    case "reboot":
    case "boot":
      opts.onReboot?.();
      opts.print("> reboot");
      break;
    case "ls":
      opts.print(APPS.join("  "));
      break;
    default:
      opts.print(opts.notFound.replace("{cmd}", cmd));
  }
}
