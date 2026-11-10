import { existsSync, mkdirSync, renameSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const dist = resolve(root, "dist");

if (existsSync(dist)) {
  try {
    rmSync(dist, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  } catch {
    // Windows file locks: move aside so the next build can write a fresh dist/
    const trash = resolve(root, `dist-trash-${Date.now()}`);
    try {
      renameSync(dist, trash);
    } catch {
      /* ignore — emptyOutDir is false in astro.config */
    }
  }
}

if (!existsSync(dist)) mkdirSync(dist, { recursive: true });
