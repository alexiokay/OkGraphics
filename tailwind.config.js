module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    extend: {
      colors: {
        themeBackground: 'var(--background)',
        themeText: 'var(--text)',
      }
    },
    fontFamily: {
      brown: ["BROWN", "sans-serif"],
    },
  },
  plugins: [],
}