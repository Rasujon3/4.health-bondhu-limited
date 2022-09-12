module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#2D89FF",
          secondary: "#642DFF",
          accent: "#3A4256",
          neutral: "#3d4451",
          paragraph1: "#575757",
          white: "#FFFFFF",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
