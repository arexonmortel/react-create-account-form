/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      figtree: ['Figtree', 'sans-serif']
    },
    colors: {
      'btn-color-disabled': '#549FF7',
      'primary-color': '#000000',
      'secondary-color': '#393D41',
      'placeholder-color': '#7A7D80',
      'border-color': '#C2C3C4',
      'btn-text': '#FFFFFF',
      'error-color' : '#EF4444',
      'link-color': '#0070F3',
    },
  },
  plugins: [],
}
