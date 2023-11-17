import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          background: "#FFFFFF",
          foreground: "#11181C",
          primary: {
            foreground: "#FFFFFF",
            DEFAULT: "#006FEE",
          },
        },
      },
      dark: {
        colors: {
          background: "#000000",
          foreground: "#ECEDEE",
          primary: {
            foreground: "#000000",
            DEFAULT: "#BEF264",
          },
        },
        // ... rest of the colors
      },
    },
  }),],
}
