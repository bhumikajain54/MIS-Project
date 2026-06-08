/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'premium-primary': '#4F46E5',
        'premium-primary-hover': '#4338CA',
        'premium-secondary': '#ec4899',
        'premium-dark': '#111827',
        'premium-light': '#F9FAFB',
        'premium-surface': '#ffffff',
      },
      fontFamily: {
        'sans': ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'premium-sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'premium-md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'premium-lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'premium-hover': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      }
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}
