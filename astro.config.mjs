import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

import unocss from "unocss/astro";
import { presetUno, presetIcons, transformerVariantGroup } from "unocss";
// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    unocss({
      presets: [presetUno(), presetIcons()],
      transformers: [transformerVariantGroup()],
    }),
  ],
});
