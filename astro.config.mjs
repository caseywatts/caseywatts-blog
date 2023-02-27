import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: "https://www.caseywatts.com",
  integrations: [
    mdx(),
    sitemap({
      serialize(item) {
        if (/blog\/.*\/share/.test(item.url)) {
          return undefined;
        }
        return item;
      },
    }),
    svelte(),
    tailwind(),
  ],
});
