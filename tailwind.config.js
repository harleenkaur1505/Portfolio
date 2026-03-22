/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        futuristic: '#0A0F1C',
        accent: {
          lavender: '#A78BFA',
          teal: '#2DD4BF',
          pink: '#F9A8D4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}
