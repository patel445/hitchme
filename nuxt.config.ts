export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: ['~/plugins/gtm.js'],
  css: ["~/assets/css/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})