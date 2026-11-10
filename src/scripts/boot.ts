import * as audio from "./retroAudio";

const SESSION_KEY = "agil-portfolio-intro-done";

export type BootApi = {
  skip: () => void;
  replay: () => void;
};

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

export function initBoot(
  root: HTMLElement,
  onDone: () => void,
): BootApi {
  const output = root.querySelector<HTMLElement>("[data-boot-output]")!;
  const live = root.querySelector<HTMLElement>("[data-boot-live]")!;
  const powerGate = root.querySelector<HTMLElement>("[data-power-gate]")!;
  const welcomeBlock = root.querySelector<HTMLElement>("[data-boot-welcome]")!;
  const continueBtn = root.querySelector<HTMLButtonElement>("[data-intro-continue]")!;
  const skipBtn = root.querySelector<HTMLButtonElement>("[data-intro-skip]")!;
  const muteBtn = root.querySelector<HTMLButtonElement>("[data-intro-mute]")!;

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
    audio.play("crtOff");
    markIntroDone();
    root.classList.add("is-done");
    root.setAttribute("aria-hidden", "true");
    root.inert = true;
    onDone();
    window.setTimeout(() => audio.stopHum(), 300);
  }

  async function typeLine(text: string, signal: AbortSignal, delay = 18) {
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
      if (ch !== " ") audio.play("click");
      await sleep(delay, signal);
    }
    announce(text);
    output.scrollTop = output.scrollHeight;
  }

  async function run(signal: AbortSignal) {
    root.classList.remove("is-done");
    root.removeAttribute("aria-hidden");
    root.inert = false;
    powerGate.hidden = true;
    welcomeBlock.hidden = true;
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
      mem += reduce ? 192 : 64;
      await sleep(reduce ? 15 : 55, signal);
    }
    audio.play("beep");
    await typeLine("Keyboard ........................ OK", signal, 10);
    await typeLine("Detecting drives ................ OK", signal, 10);
    await typeLine("Loading JAVA .................... OK", signal, 10);
    await typeLine("Loading SPRING BOOT ............. OK", signal, 10);
    await typeLine("Mounting DOCKER ................. OK", signal, 10);
    await typeLine("Starting CI/CD .................. OK", signal, 10);

    const bar = document.createElement("div");
    bar.className = "boot-line";
    output.appendChild(bar);
    const blocks = reduce ? 8 : 16;
    for (let i = 1; i <= blocks; i++) {
      audio.play("floppy");
      bar.textContent = `LOADING ${"█".repeat(i)}${"░".repeat(blocks - i)} ${Math.round((i / blocks) * 100)}%`;
      await sleep(reduce ? 30 : 90, signal);
    }

    welcomeBlock.hidden = false;
    audio.play("chime");
    announce(welcomeBlock.querySelector(".boot-welcome")?.textContent || "WELCOME");
    continueBtn.focus();

    await new Promise<void>((resolve, reject) => {
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Enter") done();
      };
      const done = () => {
        window.removeEventListener("keydown", onKey);
        continueBtn.removeEventListener("click", done);
        signal.removeEventListener("abort", onAbort);
        resolve();
      };
      const onAbort = () => {
        window.removeEventListener("keydown", onKey);
        continueBtn.removeEventListener("click", done);
        reject(new DOMException("aborted", "AbortError"));
      };
      window.addEventListener("keydown", onKey);
      continueBtn.addEventListener("click", done);
      signal.addEventListener("abort", onAbort, { once: true });
    });

    finish();
  }

  function armPower() {
    finished = false;
    root.classList.remove("is-done");
    root.removeAttribute("aria-hidden");
    root.inert = false;
    powerGate.hidden = false;
    welcomeBlock.hidden = true;
    output.innerHTML = "";

    const go = () => {
      window.removeEventListener("keydown", onKey);
      powerGate.removeEventListener("click", go);
      controller?.abort();
      controller = new AbortController();
      run(controller.signal).catch((err) => {
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
  else {
    root.classList.add("is-done");
    root.setAttribute("aria-hidden", "true");
    root.inert = true;
    onDone();
  }

  return { skip, replay };
}
