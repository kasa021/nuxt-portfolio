import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["bootstrap/dist/css/bootstrap.min.css"], //追加
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
