/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {"50": "#f5f3ff",
                  "100": "#ede9fe",
                  "200": "#ddd6fe",
                  "300": "#c4b5fd",
                  "400": "#a78bfa",
                  "500": "#8b5cf6",
                  "600": "#7c3aed",
                  "700": "#6d28d9",
                  "800": "#5b21b6",
                  "900": "#4c1d95",
                  "950": "#3b0d7d",
                },
        darkPrimary: {
                  "50": "#18181b",
                  "100": "#27272a",
                  "200": "#3f3f46",
                  "300": "#52525b",
                  "400": "#71717a",
                  "500": "#a1a1aa",
                  "600": "#d4d4d8",
                  "700": "#e4e4e7",
                  "800": "#f4f4f5",
                  "900": "#fafafa",
                },
      }
    },
    fontFamily: {
      'body': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ],
      'sans': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ]
    }
  },
  plugins: [],
}

