
/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: false, // Prevents Tailwind from using dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
