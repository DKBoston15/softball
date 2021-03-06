// tailwind.config.js
module.exports = {
  purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "softball-wide": "url('/src/images/softball-wide.png')",
      },
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
        linkBlue: "#0645AD",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
