import { rmSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const dist = resolve(process.cwd(), "dist");
if (existsSync(dist)) {
  rmSync(dist, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
}
