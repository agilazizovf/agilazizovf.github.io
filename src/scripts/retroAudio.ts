/** Procedural retro PC sounds via Web Audio API — no audio files. */

type SoundName =
  | "hum"
  | "thunk"
  | "tick"
  | "beep"
  | "floppy"
  | "click"
  | "chime"
  | "startup"
  | "winOpen"
  | "winClose"
  | "minimize"
  | "error"
  | "shutdown"
  | "crtOn"
  | "crtOff";

const MUTE_KEY = "agil-portfolio-mute";
const MASTER = 0.2;

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let muted = false;
let humNodes: { osc: OscillatorNode; gain: GainNode }[] = [];

function ensure(): { ctx: AudioContext; master: GainNode } | null {
  if (!ctx) return null;
  if (!master) {
    master = ctx.createGain();
    master.gain.value = muted ? 0 : MASTER;
    master.connect(ctx.destination);
  }
  return { ctx, master };
}

function noiseBuffer(context: AudioContext, seconds: number) {
  const len = Math.floor(context.sampleRate * seconds);
  const buffer = context.createBuffer(1, len, context.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
  return buffer;
}

export function init(): AudioContext {
  if (!ctx) {
    ctx = new AudioContext();
    master = ctx.createGain();
    master.gain.value = muted ? 0 : MASTER;
    master.connect(ctx.destination);
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

export function setMuted(value: boolean) {
  muted = value;
  try {
    localStorage.setItem(MUTE_KEY, value ? "1" : "0");
  } catch {
    /* ignore */
  }
  if (master && ctx) {
    const now = ctx.currentTime;
    master.gain.cancelScheduledValues(now);
    master.gain.linearRampToValueAtTime(value ? 0 : MASTER, now + 0.08);
  }
}

export function isMuted() {
  return muted;
}

export function loadMutePreference(preferMute = false) {
  try {
    const stored = localStorage.getItem(MUTE_KEY);
    if (stored === "1") muted = true;
    else if (stored === "0") muted = false;
    else muted = preferMute;
  } catch {
    muted = preferMute;
  }
  return muted;
}

function envGain(context: AudioContext, dest: AudioNode, peak: number, attack: number, release: number) {
  const g = context.createGain();
  g.gain.value = 0;
  g.connect(dest);
  const t = context.currentTime;
  g.gain.linearRampToValueAtTime(peak, t + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, t + attack + release);
  return g;
}

export function play(name: SoundName) {
  const bus = ensure();
  if (!bus || muted) return;
  const { ctx: context, master: out } = bus;

  switch (name) {
    case "hum": {
      stopHum();
      [50, 100, 150].forEach((freq, i) => {
        const osc = context.createOscillator();
        const gain = context.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        gain.gain.value = 0.04 / (i + 1);
        osc.connect(gain);
        gain.connect(out);
        osc.start();
        humNodes.push({ osc, gain });
      });
      break;
    }
    case "thunk": {
      const osc = context.createOscillator();
      const g = envGain(context, out, 0.35, 0.005, 0.12);
      osc.type = "square";
      osc.frequency.value = 80;
      osc.connect(g);
      osc.start();
      osc.stop(context.currentTime + 0.15);
      break;
    }
    case "tick": {
      const osc = context.createOscillator();
      const g = envGain(context, out, 0.12, 0.001, 0.04);
      osc.type = "square";
      osc.frequency.value = 880;
      osc.connect(g);
      osc.start();
      osc.stop(context.currentTime + 0.05);
      break;
    }
    case "beep": {
      const osc = context.createOscillator();
      const g = envGain(context, out, 0.2, 0.005, 0.14);
      osc.type = "square";
      osc.frequency.value = 1000;
      osc.connect(g);
      osc.start();
      osc.stop(context.currentTime + 0.15);
      break;
    }
    case "floppy": {
      const src = context.createBufferSource();
      src.buffer = noiseBuffer(context, 0.18);
      const filter = context.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.value = 1200;
      filter.Q.value = 0.8;
      const g = envGain(context, out, 0.18, 0.01, 0.16);
      src.connect(filter);
      filter.connect(g);
      src.start();
      const click = context.createOscillator();
      const cg = envGain(context, out, 0.1, 0.001, 0.03);
      click.type = "square";
      click.frequency.value = 220;
      click.connect(cg);
      click.start();
      click.stop(context.currentTime + 0.04);
      break;
    }
    case "click": {
      const osc = context.createOscillator();
      const g = envGain(context, out, 0.08, 0.001, 0.025);
      osc.type = "square";
      osc.frequency.value = 1400;
      osc.connect(g);
      osc.start();
      osc.stop(context.currentTime + 0.03);
      break;
    }
    case "chime":
    case "startup": {
      // Original AgilOS motif (not the Windows chord)
      [392, 494, 587, 740].forEach((freq, i) => {
        const osc = context.createOscillator();
        const g = envGain(context, out, 0.09, 0.01, 0.4);
        osc.type = "triangle";
        osc.frequency.value = freq;
        osc.connect(g);
        const t = context.currentTime + i * 0.11;
        osc.start(t);
        osc.stop(t + 0.45);
      });
      break;
    }
    case "winOpen": {
      const osc = context.createOscillator();
      const g = envGain(context, out, 0.1, 0.005, 0.12);
      osc.type = "square";
      osc.frequency.value = 520;
      osc.frequency.exponentialRampToValueAtTime(880, context.currentTime + 0.1);
      osc.connect(g);
      osc.start();
      osc.stop(context.currentTime + 0.12);
      break;
    }
    case "winClose": {
      const osc = context.createOscillator();
      const g = envGain(context, out, 0.1, 0.005, 0.12);
      osc.type = "square";
      osc.frequency.value = 880;
      osc.frequency.exponentialRampToValueAtTime(420, context.currentTime + 0.1);
      osc.connect(g);
      osc.start();
      osc.stop(context.currentTime + 0.12);
      break;
    }
    case "minimize": {
      const osc = context.createOscillator();
      const g = envGain(context, out, 0.08, 0.002, 0.08);
      osc.type = "triangle";
      osc.frequency.value = 700;
      osc.frequency.exponentialRampToValueAtTime(220, context.currentTime + 0.08);
      osc.connect(g);
      osc.start();
      osc.stop(context.currentTime + 0.09);
      break;
    }
    case "error": {
      [220, 180].forEach((freq, i) => {
        const osc = context.createOscillator();
        const g = envGain(context, out, 0.14, 0.005, 0.18);
        osc.type = "square";
        osc.frequency.value = freq;
        osc.connect(g);
        const t = context.currentTime + i * 0.12;
        osc.start(t);
        osc.stop(t + 0.2);
      });
      break;
    }
    case "shutdown": {
      [523, 392, 261].forEach((freq, i) => {
        const osc = context.createOscillator();
        const g = envGain(context, out, 0.1, 0.01, 0.35);
        osc.type = "sine";
        osc.frequency.value = freq;
        osc.connect(g);
        const t = context.currentTime + i * 0.16;
        osc.start(t);
        osc.stop(t + 0.4);
      });
      break;
    }
    case "crtOn": {
      const osc = context.createOscillator();
      const g = context.createGain();
      g.gain.value = 0;
      osc.type = "sawtooth";
      osc.frequency.value = 60;
      osc.connect(g);
      g.connect(out);
      const t = context.currentTime;
      g.gain.linearRampToValueAtTime(0.12, t + 0.05);
      osc.frequency.exponentialRampToValueAtTime(240, t + 0.35);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.45);
      osc.start(t);
      osc.stop(t + 0.5);
      break;
    }
    case "crtOff": {
      const osc = context.createOscillator();
      const g = context.createGain();
      g.gain.value = 0.1;
      osc.type = "sawtooth";
      osc.frequency.value = 200;
      osc.connect(g);
      g.connect(out);
      const t = context.currentTime;
      osc.frequency.exponentialRampToValueAtTime(40, t + 0.25);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
      osc.start(t);
      osc.stop(t + 0.3);
      break;
    }
  }
}

export function stopHum() {
  humNodes.forEach(({ osc, gain }) => {
    try {
      gain.gain.exponentialRampToValueAtTime(0.0001, (ctx?.currentTime ?? 0) + 0.2);
      osc.stop((ctx?.currentTime ?? 0) + 0.25);
    } catch {
      /* already stopped */
    }
  });
  humNodes = [];
}

export function dispose() {
  stopHum();
  if (ctx) {
    void ctx.close();
  }
  ctx = null;
  master = null;
}
