/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease forwards',
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      custom: "992px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
