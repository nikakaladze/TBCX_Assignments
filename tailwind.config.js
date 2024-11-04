/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
    
        darkBg: '#121212',
        darkText: '#ffffff',
        lightBg: '#f9f9f9',
        lightText: '#333333',
      },
    },
  },
  plugins: [],
}

