import * as audio from "./retroAudio";

const SESSION_KEY = "agilos-intro-done";

export type BootApi = { skip: () => void; replay: () => void };

function sleep(ms: number, signal: AbortSignal) {
  return new Promise<void>((resolve, reject) => {
    if (signal.aborted) return reject(new DOMException("aborted", "AbortError"));
    const id = window.setTimeout(() => resolve(), ms);
    signal.addEventListener(
      "abort",
      () => {
        clearTimeout(id);
        reject(new DOMException("aborted", "AbortError"));
      },
      { once: true },
    );
  });
}

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function shouldAutoplayIntro() {
  try {
    return sessionStorage.getItem(SESSION_KEY) !== "1";
  } catch {
    return true;
  }
}

export function markIntroDone() {
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    /* ignore */
  }
}

export function clearIntroDone() {
  try {
    sessionStorage.removeItem(SESSION_KEY);
  } catch {
    /* ignore */
  }
}

export function initBoot(root: HTMLElement, onDone: () => void): BootApi {
  const output = root.querySelector<HTMLElement>("[data-boot-output]")!;
  const live = root.querySelector<HTMLElement>("[data-boot-live]")!;
  const powerGate = root.querySelector<HTMLElement>("[data-power-gate]")!;
  const splash = root.querySelector<HTMLElement>("[data-boot-splash]")!;
  const splashBar = root.querySelector<HTMLElement>("[data-splash-bar]")!;
  const skipBtn = root.querySelector<HTMLButtonElement>("[data-intro-skip]")!;
  const muteBtn = root.querySelector<HTMLButtonElement>("[data-intro-mute]")!;
  const resumeMsg = root.dataset.resumeMsg || "resuming session...";

  let controller: AbortController | null = null;
  let finished = false;
  const reduce = reducedMotion();
  audio.loadMutePreference(reduce);
  syncMute();

  function syncMute() {
    const muted = audio.isMuted();
    muteBtn.setAttribute("aria-pressed", muted ? "true" : "false");
    const label = muted ? muteBtn.dataset.labelUnmute : muteBtn.dataset.labelMute;
    if (label) {
      muteBtn.setAttribute("aria-label", label);
      muteBtn.textContent = label;
    }
  }

  function announce(text: string) {
    if (live) live.textContent = text;
  }

  function finish() {
    if (finished) return;
    finished = true;
    controller?.abort();
    audio.stopHum();
    markIntroDone();
    root.classList.add("is-done");
    root.setAttribute("aria-hidden", "true");
    root.inert = true;
    onDone();
  }

  async function typeLine(text: string, signal: AbortSignal, delay = 5) {
    const line = document.createElement("div");
    line.className = "boot-line";
    output.appendChild(line);
    if (reduce) {
      line.textContent = text;
      announce(text);
      return;
    }
    for (const ch of text) {
      if (signal.aborted) throw new DOMException("aborted", "AbortError");
      line.textContent += ch;
      await sleep(delay, signal);
    }
    announce(text);
  }

  async function runFull(signal: AbortSignal) {
    root.classList.remove("is-done");
    root.removeAttribute("aria-hidden");
    root.inert = false;
    powerGate.hidden = true;
    splash.hidden = true;
    output.innerHTML = "";
    audio.init();
    audio.play("thunk");
    audio.play("crtOn");
    audio.play("hum");

    let mem = 64;
    const memLine = document.createElement("div");
    memLine.className = "boot-line";
    output.appendChild(memLine);
    while (mem <= 640) {
      memLine.textContent = `Memory Test: ${mem}K OK`;
      audio.play("tick");
      mem += reduce ? 288 : 128;
      await sleep(reduce ? 8 : 20, signal);
    }
    audio.play("beep");
    await typeLine("Detecting drives ................ [ OK ]", signal);
    await typeLine("Loading JAVA .................... [ OK ]", signal);
    await typeLine("Loading SPRING BOOT ............. [ OK ]", signal);
    await typeLine("Mounting DOCKER ................. [ OK ]", signal);
    await typeLine("Starting CI/CD .................. [ OK ]", signal);

    splash.hidden = false;
    audio.play("startup");
    for (let i = 0; i <= 100; i += reduce ? 20 : 8) {
      splashBar.style.width = `${i}%`;
      await sleep(reduce ? 20 : 35, signal);
    }
    await sleep(reduce ? 100 : 250, signal);
    finish();
  }

  async function runQuick() {
    root.classList.remove("is-done");
    root.removeAttribute("aria-hidden");
    root.inert = false;
    powerGate.hidden = true;
    output.innerHTML = "";
    splash.hidden = false;
    const line = document.createElement("div");
    line.className = "boot-line";
    line.textContent = resumeMsg;
    output.appendChild(line);
    splashBar.style.width = "100%";
    await sleep(1000, new AbortController().signal).catch(() => undefined);
    finish();
  }

  function armPower() {
    finished = false;
    root.classList.remove("is-done");
    root.removeAttribute("aria-hidden");
    root.inert = false;
    powerGate.hidden = false;
    splash.hidden = true;
    output.innerHTML = "";
    splashBar.style.width = "0%";

    const go = () => {
      window.removeEventListener("keydown", onKey);
      powerGate.removeEventListener("click", go);
      controller?.abort();
      controller = new AbortController();
      runFull(controller.signal).catch((err) => {
        if (err?.name !== "AbortError") console.error(err);
      });
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return;
      go();
    };
    window.addEventListener("keydown", onKey);
    powerGate.addEventListener("click", go);
  }

  function skip() {
    controller?.abort();
    finish();
  }

  function replay() {
    clearIntroDone();
    audio.dispose();
    audio.loadMutePreference(reduce);
    syncMute();
    armPower();
  }

  skipBtn.addEventListener("click", skip);
  muteBtn.addEventListener("click", () => {
    audio.init();
    audio.setMuted(!audio.isMuted());
    syncMute();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !root.classList.contains("is-done")) skip();
  });

  if (shouldAutoplayIntro()) armPower();
  else void runQuick();

  return { skip, replay };
}
