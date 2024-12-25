/** @type {import('tailwindcss').Config} */
import plugin from 'flowbite/plugin';
module.exports = {
  content: [
    './src/**/*.{html,js,svelte}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {"50":"#fdf2f8","100":"#fce7f3","200":"#fbcfe8","300":"#f9a8d4","400":"#f472b6","500":"#ec4899","600":"#db2777","700":"#be185d","800":"#9d174d","900":"#831843"},
        secondary: {"50":"#faf5ff","100":"#f3e8ff","200":"#e9d5ff","300":"#d8b4fe","400":"#c084fc","500":"#a855f7","600":"#9333ea","700":"#7e22ce","800":"#6b21a8","900":"#581c87"},
        background: '#111112',
        navbar:'rgba(17, 17, 18, 0.9)',
        lightNavbar:'rgba(253, 251, 252, 0.9)',
        lightBackground: '#fdfbfc',
        fontPrimary : '#fffafc',
        fontPrimaryLight: '#090507',
        paragraph: '#e4e6ed',
        paragraphLight: '#475569',
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein300: "slidein 1s ease 300ms forwards",
        slidein500: "slidein 1s ease 500ms forwards",
        slidein700: "slidein 1s ease 700ms forwards",
      },
    },
  },
  plugins: [require('flowbite/plugin'),require('tailwind-scrollbar'),],
};
