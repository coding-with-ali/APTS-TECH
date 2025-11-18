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
          50: '#F7FBFF',   // Off White
          100: '#E9F2FA',
          500: '#1F6FBF',  // Accent Blue
          700: '#113B65',  // Soft Navy
          900: '#0A1A2F',  // Deep Navy
        },
      },
    },
  },
  plugins: []
}
