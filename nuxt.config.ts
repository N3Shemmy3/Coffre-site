import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/icon", "@nuxt/scripts", "@nuxtjs/color-mode"],
  colorMode: {
    classSuffix: "",
  },
  css: ["~/assets/css/main.css"],
  vite: { plugins: [tailwindcss()] },
});
