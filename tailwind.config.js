/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'gold': {
          '50': '#fffef2',
          '100': '#fffde6',
          '200': '#fff9bf',
          '300': '#fff599',
          '400': '#ffe74d',
          '500': '#ffd700',
          '600': '#e6b800',
          '700': '#bf8f00',
          '800': '#996900',
          '900': '#734700',
          '950': '#4a2900'
        }
      }
    }
  },
  plugins: []
};