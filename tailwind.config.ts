import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "heading-gradient":
          "linear-gradient(141deg, #278ea5 20%, transparent 20%), linear-gradient(215deg, #278ea5 20%, transparent 20%)",
      }),
      spacing: {
        nav: "72px",
      },
      borderRadius: {
        circle: "50%",
      },
      backgroundSize: {
        heading: "26px 30px",
      },
      boxShadow: {
        100: "0 0 10px var(--tw-shadow-color) ",
        lg: "0 0 50px 20px var(--tw-shadow-color)",
      },
      gridTemplateColumns: {
        responsive: "repeat(auto-fill, minmax(200px, 1fr))",
      },
    },

    container: {
      center: true,
      padding: "2rem",
    },

    colors: {
      transparent: "transparent",
      blue: {
        transparent: "#00bcd491",
        100: "#071e3d",
        200: "#1f4287",
        hover: "rgb(44, 99, 209)",
        300: "#278ea5",
      },

      green: {
        100: "#2e4f4f",
        200: "#4caf50",
        300: "#21e6c1",
      },

      gray: {
        100: "#393646",
        200: "#4f4557",
        300: "#6d5d6e",
      },

      white: "white",

      black: {
        DEFAULT: "#2c3333",
        shadow1: "#000000a0",
        shadow2: "#0000002c",
        text: "rgb(221 221 221)",
      },

      beige: "#f4eee0",

      /* brands colors */
      html: "rgb(227, 79, 38)",
      js: "rgb(247, 223, 30)",
      sass: "rgb(207, 100, 154)",
      css: "rgb(20, 159, 217)",
      gulp: "rgb(207, 69, 69)",
      pug: "rgb(239, 204, 163)",
      react: "#61DBFB",
      redux: "#764abc",
      next: "#000",
      git: "#F54D27",
    },
  },
  plugins: [],
};
export default config;
