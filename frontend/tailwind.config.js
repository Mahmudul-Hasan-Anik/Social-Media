import("tailwindcss").Config;

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#166FE5",
      },
      screens: {
        tablet: "667px",
      },
    },
  },
  plugins: [],
};
