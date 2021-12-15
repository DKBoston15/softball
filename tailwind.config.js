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
        labelGray: "#ecf0f1",
        offWhite: "#f5f5f5",
        custom: "#000",
        tomato: "#fc5548",
        cadetblue: "#187A8C",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
