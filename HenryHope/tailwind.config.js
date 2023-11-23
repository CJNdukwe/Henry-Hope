const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Craftwork Grotesk", ...fontFamily.sans],
        secondary: ["Mona Sans", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};