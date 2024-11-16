/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/primevue/**/*.{js,vue}', // Ajoute les composants PrimeVue
  ],
  theme: {
    screens: {
      sm: '316px',
      // => @media (min-width: 316px) { ... }

      md: '760px',
      // => @media (min-width: 760px) { ... }

      lg: '1000px',
      // => @media (min-width: 1000px) { ... }

      lx: '1300px',
      // => @media (min-width: 1300px) { ... }
    },
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(1px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-in forwards',
      },
    },
  },
  plugins: [],
}
