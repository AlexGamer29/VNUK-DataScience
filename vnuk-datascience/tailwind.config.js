module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#191123",
        "white": "#ffffff",
        "vnuk-blue": "#2B2355",
        "vnuk-red": "#8E0D34",
      },
      lineHeight: {
        '12': '4rem',
      }
    },
  },
  plugins: [],
}
