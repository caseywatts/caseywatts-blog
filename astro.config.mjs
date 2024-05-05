// https://astro.build/config

import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import cooklang from "astro-cooklang";

export default defineConfig({
  site: "https://www.caseywatts.com",
  integrations: [
    mdx(),
    sitemap({
      serialize(item) {
        if (/blog\/.*\/share/.test(item.url)) {
          return undefined;
        }
        if (/blog\/drafts.*/.test(item.url)) {
          return undefined;
        }
        return item;
      },
    }),
    svelte(),
    tailwind(),
    cooklang(),
  ],
});
