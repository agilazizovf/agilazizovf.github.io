/**
 * Fail the build if hex / rgb(a) / hsl(a) colors appear outside tokens.css.
 * Allowed exceptions: data-URI favicons in Base.astro that must embed hex,
 * and this script itself.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const allowExact = new Set([
  join(root, "src", "styles", "tokens.css"),
  join(root, "scripts", "check-colors.mjs"),
]);

const COLOR_RE =
  /(?:#[0-9a-fA-F]{3,8}\b|(?:rgba?|hsla?)\(\s*[^)]+\))/g;

const SKIP_DIRS = new Set([
  "node_modules",
  "dist",
  ".git",
  ".astro",
  "dist-old",
  "public",
  "images",
]);

const EXT = new Set([".css", ".ts", ".tsx", ".js", ".mjs", ".astro", ".html", ".svg"]);

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name) || name.startsWith("dist")) continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (EXT.has(name.slice(name.lastIndexOf(".")))) out.push(p);
  }
  return out;
}

const offenders = [];
for (const file of walk(root)) {
  if (allowExact.has(file)) continue;
  const rel = relative(root, file).replaceAll("\\", "/");
  // Favicon SVG data URI in Base.astro must embed hex — skip that file's meta icon only via whitelist of known theme-color lines checked separately
  const text = readFileSync(file, "utf8");
  const lines = text.split(/\r?\n/);
  lines.forEach((line, i) => {
    if (rel === "src/layouts/Base.astro" && (line.includes("theme-color") || line.includes("data:image/svg+xml"))) {
      return;
    }
    const matches = line.match(COLOR_RE);
    if (!matches) return;
    for (const m of matches) {
      offenders.push(`${rel}:${i + 1}: ${m}`);
    }
  });
}

if (offenders.length) {
  console.error("Hard-coded colors found outside src/styles/tokens.css:\n");
  for (const o of offenders) console.error("  " + o);
  console.error("\nMove colors into tokens.css and use var(--…).");
  process.exit(1);
}

console.log("check-colors: ok");
