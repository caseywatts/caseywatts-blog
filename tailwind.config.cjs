/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
  plugins: [require("@tailwindcss/typography")],
};
