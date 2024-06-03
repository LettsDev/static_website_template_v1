import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  prefetch: true,
  integrations: [
    svelte({
      onwarn: (warning, handler) => {
        if (warning.code === "css-unused-selector") {
          return;
        }
        handler(warning);
      },
    }),
    sitemap(),
  ],
});
