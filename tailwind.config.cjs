/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: ["aspect-square", "bg-red-400"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontWeight: 200,
            },
            h2: {
              fontWeight: 400,
            },
            h3: {
              fontWeight: 500,
            },
          },
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        heycaseywattsup: {
          ...require("daisyui/src/theming/themes")["[data-theme=pastel]"],
          primary: "rgb(221 214 254)",
          secondary: "rgb(191 219 254)",
          // "primary-focus": "mediumblue",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/line-clamp"), require("daisyui")],
};
