# Agil Azizov — portfolio

Full-screen retro terminal portfolio for [agilazizovf.github.io](https://agilazizovf.github.io/).
The browser viewport **is** the screen — boot, navigation, and every section live inside one DOS/BIOS-style terminal (EN / AZ / RU).

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
    Terminal/
      Terminal.astro      # shell: status bar + main + CLI + boot
      StatusBar.astro
      CommandLine.astro
      BootSequence.astro
      CrtOverlay.astro
    sections/             # Home, About, Experience, Skills, Projects, Engineering, Contact
  scripts/
    boot.ts               # power-on + typed boot lines
    terminal.ts           # hash routing, keyboard nav, mute/CRT
    commandLine.ts        # optional CLI
    retroAudio.ts         # Web Audio sounds (no files)
  styles/
    tokens.css            # palette only
    terminal.css          # terminal UI
    crt.css               # scanlines / vignette overlay
  i18n/                   # en.ts, az.ts, ru.ts
  layouts/Base.astro
  pages/                  # /, /az/, /ru/
```

## Terminal commands

Optional bottom prompt (`agil@portfolio:~$`). Menu / hash links work without typing.

| Command | Action |
|---------|--------|
| `help` | List commands |
| `home` `about` `experience` `skills` `projects` `engineering` `contact` | Open section |
| `cv` | Download CV |
| `lang en\|az\|ru` | Switch language |
| `mute` | Toggle sound |
| `crt` | Toggle CRT overlay |
| `theme` | Toggle light/dark |
| `clear` | Clear command log |
| `boot` | Replay boot intro |
| `ls` | List section ids |

Keyboard: `1`–`7` and arrow keys switch sections; `Esc` collapses a job or returns to Home; `Tab` / `Enter` for focus and links.

## Edit boot intro

Copy keys in [src/i18n/en.ts](src/i18n/en.ts) (and `az.ts` / `ru.ts`):

- `intro.power`, `intro.welcome`, `intro.tagline`, `intro.continue`, `intro.skip`, `intro.mute`, `intro.unmute`
- Terminal chrome: `term.*`, `cmd.hint`

Typed POST lines, memory test, and loading bar: [src/scripts/boot.ts](src/scripts/boot.ts).

Sounds: [src/scripts/retroAudio.ts](src/scripts/retroAudio.ts).

## Palette

All colors are CSS variables in [src/styles/tokens.css](src/styles/tokens.css).

- Background `--bg`, text `--text`, dim `--muted`, headings/prompt `--primary`, links `--accent`, borders `--border`
- Dark: `:root` · Light: `html[data-theme="light"]`
- Do not invent colors outside this file

## Languages

| Path | Locale |
|------|--------|
| `/` | English |
| `/az/` | Azerbaijani |
| `/ru/` | Russian |

Sections are also hash-routed (`#about`, `#projects`, …) for shareable URLs and the back button. All section HTML stays in the DOM for SEO.

## Assets

- CV: `public/Agil_Azizov_CV.pdf`
- Certificates: `public/images/`
- Display font: `public/fonts/VT323-Regular.ttf`
- Body mono: IBM Plex Mono (Google Fonts)

## Preferences

- Intro once per tab session (`sessionStorage`); returning visitors get a short resume line
- Mute + CRT on/off in `localStorage`
- Theme in `localStorage` (`agil-portfolio-theme`)
- `prefers-reduced-motion`: no flicker, instant/short boot, sound muted by default
- Skip / `Esc` always available during boot; Contact has **Replay intro**

## Deploy (GitHub Pages)

1. Repo Settings → Pages → Source: **GitHub Actions**
2. Push to `main`. Workflow: [.github/workflows/deploy.yml](.github/workflows/deploy.yml) (`withastro/action`).

Config: [astro.config.mjs](astro.config.mjs) — `site: 'https://agilazizovf.github.io'`, `base: '/'`.
