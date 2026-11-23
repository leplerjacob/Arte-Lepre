// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.artelepre.com",
  // Emit /gallery/index.html etc. so plain Apache hosting (HostGator) serves clean URLs.
  build: { format: "directory" },
  trailingSlash: "ignore",
});
