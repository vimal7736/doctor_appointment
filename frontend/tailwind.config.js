/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3490dc', 
        'secondary': '#38b2ac',  
        'danger': '#FF6F61',  
      },
      gridTemplateColumns : {
        'auto': 'repeat(auto-fill, minmax(150px, 1fr))'
      }
    },
  },
  plugins: [],
}
