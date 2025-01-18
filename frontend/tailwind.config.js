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
      },  
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      'openSans': ['Open Sans', 'sans-serif'],
      'raleway': ['Raleway', 'sans-serif'],
      'merriweather': ['Merriweather', 'serif'],
      'playfair': ['Playfair Display', 'serif'],
      },
      scrollbar: {
        DEFAULT: {
          width: '8px',
          height: '8px',
        },
        thumb: {
          backgroundImage: 'linear-gradient(to bottom, gray, white)',
          borderRadius: '10px',
        },
        track: {
          backgroundColor: '#f0f0f0',
          borderRadius: '50%',
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
