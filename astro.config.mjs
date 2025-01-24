import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://GabrielX3113.github.io",
    devToolbar : {
  enabled: false
},
  integrations: [tailwind()]
});
