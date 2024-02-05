import { sveltekit } from "@sveltejs/kit/vite";
import UnoCSS from "unocss/vite";
import type { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [UnoCSS(), sveltekit()],
  build: {
    target: "ES2022",
  },
};

export default config;
