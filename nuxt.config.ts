import { defineNuxtConfig } from "nuxt/config";
import colorModeModule from './src/module'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  modules: ["@nuxtjs/color-mode"],
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },

});
