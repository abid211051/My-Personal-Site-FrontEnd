/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F2EEE7',
        'secondary' : '#29A587',

      },
    },
    fontFamily: {
      jost:['Jost', 'sans-serif'],
      caveat: ['Caveat', 'cursive'],
    },
  },
plugins: [require("daisyui")],
    daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
}

