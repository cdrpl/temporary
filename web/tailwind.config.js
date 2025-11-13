/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",            // Next.js pages/components
    "../shared/components/**/*.{ts,tsx,js,jsx}" // your shared components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
