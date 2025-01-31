/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
import theming from "daisyui/src/theming/themes"
export default {
  daisyui: {
    themes: [
      {
        light: {
          ...theming["light"],
          "primary": "#101010",
          "secondary": "#FCB712",
          "accent": "#FCB712",
        }
      },
      {
        black: {
          ...theming["black"],
          "primary": "#101010",
          "secondary": "#FCB712",
          "accent": "#FCB712",
        }
      }
    ],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  darkMode: ['selector', '[data-theme="black"]'],
  lightMode: ['selector', '[data-theme="light"]']
}

