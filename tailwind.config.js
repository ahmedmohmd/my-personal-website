module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        facebookColor: "#3b5998",
        twitterColor: "#55acee",
        linkedInColor: "#3077b5",
        githubColor: "#161b22",
      },
    },
  },

  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
};
