// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/eslint-module", "@nuxtjs/google-fonts", "@nuxt/image"],
  typescript: {
    typeCheck: true,
  },
  imports: {
    autoImport: false,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],
  googleFonts: {
    families: {
      Montserrat: [400, 500, 600, 700],
    },
  },
  image: {
    dir: "assets",
  },
})
