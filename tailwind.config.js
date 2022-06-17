module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "whale-dark": "#0f172a",
        "whale-light": "#fff",
        "facebook-color": "#3b5998",
        "twitter-color": "#55acee",
        "linkedin-color": "#3077b5",
        "github-color": "#161b22",
      },
    },
  },

  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
};
