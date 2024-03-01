/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,css}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./src/app/*.{js,ts,jsx,tsx,mdx,css}",
    "./src/app/contact-us/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
