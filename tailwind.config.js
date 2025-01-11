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
      colors: {
        transparent: "transparent",
        white: "#FFFFFF",
        black: {
          100: "#000000",
          200: "#1C1B1F",
          300: "#79747E",
        },
        primary: {
          100: "#A5EBD3",
          200: "#9BE0C8",
          300: "#8DD3BB",
          400: "#82CBB2",
        },
        gray: {
          100: "#D2D1D3",
          200: "#8F8C91",
        },
        error: {
          100: "#FD736E",
        },
      },
    },
  },
  plugins: [],
}
