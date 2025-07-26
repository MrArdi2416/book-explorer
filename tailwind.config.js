/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1a3066',
        'primary-light': '#484dff',
        accent: '#546681',
        bg: '#f0f7ff',
      },
    },
  },
  plugins: [],
}
