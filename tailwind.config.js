module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        eretail_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
        eretail_header: {
          light: "#545bc4",
        },
        eretail_dark_neon: {
          blue: "#6C72CB",
          black: "#17181F",
          pink: "#CB69C1",
          grey: "#EEEDFO",
          green: "#57BE6C",
          orange: "#FD794F",
        },
        eretail_05: {
          dark: "#0E3854",
          blue: "#067EED",
          orange: "#FF7C1F",
          light_blue: "#C1E6FF",
          white: '#FFFFFF'
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
