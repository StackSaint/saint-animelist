/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      color: { 
        primary: "#eeeeee",
        accent: "#ffc639",
        secondary: "#393e46",
        dark: "#222831",
      },
      cyberpunk: {
        primary: "#00000F",
        main: "#FFFFFF",
        accent: "#05d9e8",
        secondary: "#d1f7ff",
        third: "#1C4BA1",
      },
    },
  },
  plugins: [],
};
