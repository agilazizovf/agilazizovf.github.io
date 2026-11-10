# Agil Azizov — portfolio

**AgilOS** — a 90s desktop portfolio for [agilazizovf.github.io](https://agilazizovf.github.io/).
BIOS boot → splash → desktop with icons, taskbar, Start menu, and draggable app windows (EN / AZ / RU).

## Run locally

```bash
npm install
npm run dev
```

Open the URL Astro prints (usually `http://localhost:4321/`).

```bash
npm run build
npm run preview
```

## Layout

```
src/
  components/
    Desktop/          # wallpaper, icons, taskbar, Start, CRT overlay
    Window/           # WindowShell (title bar, min/max/close, resize)
    Apps/             # About, Experience, Skills, Projects, Engineering,
                      # Contact, Terminal, Welcome, Recycle Bin, Network
    Boot/             # power gate + BIOS lines + splash
    Icons/            # PixelIcon SVGs
  scripts/
    os.ts             # desktop wiring, hash routing, terminal CLI
    windowManager.ts  # drag, resize, z-order, session restore
    boot.ts           # power-on / splash / skip / reboot
    commands.ts       # Terminal app commands
    state.ts          # AppId, geometry, prefs
    retroAudio.ts     # Web Audio (no sound files)
  styles/
    tokens.css        # palette only
    os.css            # AgilOS UI
    crt.css           # scanlines / vignette
  i18n/               # en.ts, az.ts, ru.ts
  layouts/Base.astro
  pages/              # /, /az/, /ru/
```

## Desktop apps

| Icon / window | Content |
|---------------|---------|
| My Computer | About + education + certs |
| Experience | Explorer list of roles |
| Skills | Control Panel–style groups |
| Projects | Project cards + detail |
| Engineering | Request/ship flows + cases |
| Contact | Links + CV |
| Terminal | Optional CLI |
| Recycle Bin / Network | Easter eggs |

Hash routes: `#about`, `#experience`, `#skills`, `#projects`, `#engineering`, `#contact`, `#terminal`.

## Terminal commands

Open the Terminal app (or Start → Terminal):

| Command | Action |
|---------|--------|
| `help` | List commands |
| `open <app>` / `about` … `contact` / `terminal` | Open window |
| `cv` | Download CV |
| `lang en\|az\|ru` | Switch language |
| `mute` / `crt` / `theme` | Toggle prefs |
| `clear` | Clear output |
| `reboot` / `boot` | Replay intro |
| `ls` | List app ids |

## Edit boot intro

Copy keys in [src/i18n/en.ts](src/i18n/en.ts) (and `az.ts` / `ru.ts`):

- `intro.power`, `os.splash`, `intro.mute` / `intro.unmute`, `term.skip` / `term.resume`
- Desktop chrome: `os.*`

Typed BIOS lines and splash: [src/scripts/boot.ts](src/scripts/boot.ts).

Sounds: [src/scripts/retroAudio.ts](src/scripts/retroAudio.ts).

## Palette

All colors are CSS variables in [src/styles/tokens.css](src/styles/tokens.css).

- Neutrals: `#0a0e12` family; primary/accent `#8fb3ff` (light `#2f5fbf`)
- Dark: `:root` · Light: `html[data-theme="light"]`
- `npm run check:colors` (also in `prebuild`) fails if hex/rgb colors appear outside `tokens.css`

## Languages

| Path | Locale |
|------|--------|
| `/` | English |
| `/az/` | Azerbaijani |
| `/ru/` | Russian |

Section HTML stays in the DOM (SEO + noscript fallback). Window state is session-scoped.

## Assets

- CV: `public/Agil_Azizov_CV.pdf`
- Certificates: `public/images/`
- Display font: `public/fonts/VT323-Regular.ttf`
- Body mono: IBM Plex Mono (`public/fonts/`)

## Preferences

- Intro once per tab session (`sessionStorage`); return visits get a short resume splash
- Window positions in `sessionStorage`
- Mute + CRT + theme in `localStorage`
- Welcome dialog opt-out: `agilos-show-welcome`
- `prefers-reduced-motion`: CRT off, short boot, sound muted by default
- Mobile (`≤768px`): windows open fullscreen above the taskbar
- Skip / `Esc` during boot; `Esc` closes the focused window on the desktop

## Deploy (GitHub Pages)

1. Repo Settings → Pages → Source: **GitHub Actions**
2. Push to `main`. Workflow: [.github/workflows/deploy.yml](.github/workflows/deploy.yml) (`withastro/action`, Node 24).

Config: [astro.config.mjs](astro.config.mjs) — `site: 'https://agilazizovf.github.io'`, `base: '/'`.
