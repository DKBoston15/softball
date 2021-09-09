// tailwind.config.js
module.exports = {
  purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        xxs: "10rem",
      },
      colors: {
        yellow: "#fbc42d",
        labelGray: "#dfe4ea",
        offWhite: "#f5f5f5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
