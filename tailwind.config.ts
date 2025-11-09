/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          500: '#4f46e5',
          700: '#3730a3'
        }
      }
    }
  },
  plugins: []
}
