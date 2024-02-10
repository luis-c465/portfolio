import { sveltekit } from "@sveltejs/kit/vite";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
import topLevelAwait from "vite-plugin-top-level-await";

const config = defineConfig({
  plugins: [topLevelAwait(), UnoCSS(), sveltekit()],
  build: {
    target: "ES2022",
  },
});

export default config;
