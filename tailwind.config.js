/** @type {import('tailwindcss').Config} */
module.exports = {
  pages: true,
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      maxWidth: {
        "custom-container": "1200px",
      },
    },
  },
};
