import type { SectionId } from "./terminal";
import { isSection, SECTIONS } from "./terminal";
import * as audio from "./retroAudio";

type TerminalApi = {
  show: (id: SectionId) => void;
  replayBoot: () => void;
  setMuted: (v: boolean) => void;
  toggleCrt: () => void;
  toggleTheme: () => void;
};

export function initCommandLine(
  form: HTMLFormElement,
  api: TerminalApi,
  messages: { help: string; notFound: string; hint: string },
) {
  const input = form.querySelector<HTMLInputElement>("input");
  const log = form.parentElement?.querySelector<HTMLElement>("[data-command-log]");
  if (!input) return;

  const print = (text: string) => {
    if (log) log.textContent = text;
    audio.play("click");
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const raw = input.value.trim();
    input.value = "";
    if (!raw) return;
    const parts = raw.split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const arg = parts[1]?.toLowerCase();

    switch (cmd) {
      case "help":
        print(messages.help);
        break;
      case "home":
      case "about":
      case "experience":
      case "skills":
      case "projects":
      case "engineering":
      case "contact":
        if (isSection(cmd)) api.show(cmd);
        print(`> ${cmd}`);
        break;
      case "cv":
        window.location.href = "/Agil_Azizov_CV.pdf";
        print("> download agil_azizov.pdf");
        break;
      case "lang": {
        const loc = arg === "az" || arg === "ru" || arg === "en" ? arg : null;
        if (!loc) {
          print(messages.notFound.replace("{cmd}", raw));
          break;
        }
        const hash = window.location.hash || "#home";
        window.location.href = (loc === "en" ? "/" : `/${loc}/`) + hash;
        break;
      }
      case "mute":
        audio.init();
        api.setMuted(!audio.isMuted());
        print(audio.isMuted() ? "> mute on" : "> mute off");
        break;
      case "crt":
        api.toggleCrt();
        print("> crt toggled");
        break;
      case "clear":
        if (log) log.textContent = "";
        break;
      case "theme":
        api.toggleTheme();
        print("> theme toggled");
        break;
      case "boot":
        api.replayBoot();
        print("> boot");
        break;
      case "ls":
        print(SECTIONS.join("  "));
        break;
      default:
        print(messages.notFound.replace("{cmd}", cmd));
    }
  });
}
