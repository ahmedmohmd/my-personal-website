module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
};
