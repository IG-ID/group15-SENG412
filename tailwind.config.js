/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Outfit', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'primary': '#0A0A0A',
        'secondary': '#F8F8F8',
        'accent': '#E5E5E5',
      },
    },
  },
  plugins: [],
}
