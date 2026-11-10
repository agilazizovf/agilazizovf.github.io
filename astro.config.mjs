// @ts-check
import { defineConfig } from "astro/config";

// User GitHub Pages site: https://agilazizovf.github.io/
export default defineConfig({
  site: "https://agilazizovf.github.io",
  base: "/",
  output: "static",
  vite: {
    build: {
      // prebuild cleans dist; skip Vite emptyDir (can hang on Windows locks).
      emptyOutDir: false,
    },
  },
});
