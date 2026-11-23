// @ts-check
import process from "node:process";
import { defineConfig } from "astro/config";

// The live site is served from the domain root. A preview copy can be built for a sub-folder
// (GitHub Pages) with: npm run build:preview   (see package.json and README)
const base = process.env.BASE_PATH || "/";
const site = process.env.SITE_URL || "https://www.artelepre.com";

export default defineConfig({
  site,
  base,
  // Emit /gallery/index.html etc. so plain Apache hosting (HostGator) serves clean URLs.
  build: { format: "directory" },
  trailingSlash: "ignore",
});
