/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-top": "url('/images/img-top-search.webp')",
        "hero-drop": "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))",
        "flight-section": "url('/images/img-flight-section.webp')",
        "hotel-section": "url('/images/img-hotel-section.webp')",
      },
      boxShadow: {
        "container-search": "0px 4px 16px 0px rgba(141, 211, 187, 0.15)",
        card: "0px 4px 16px 0px rgba(17, 34, 17, 0.05)",
        review: "2px 4px 16px 0px rgba(17, 34, 17, 0.10)",
      },
      colors: {
        transparent: "transparent",
        white: "#FFFFFF",
        black: {
          100: "#000000",
          200: "#1C1B1F",
          210: "#121",
          300: "#79747E",
        },
        primary: {
          100: "#A5EBD3",
          200: "#9BE0C8",
          300: "#8DD3BB",
          400: "#82CBB2",
          500: "#3A7D44",
        },
        gray: {
          100: "#D2D1D3",
          200: "#8F8C91",
          300: "#D7E2EE",
        },
        error: {
          100: "#FD736E",
        },
      },
    },
  },
  plugins: [],
}
