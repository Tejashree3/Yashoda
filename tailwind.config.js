 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js,jsx,tsx}"],
   theme: {
     extend: {
   boxShadow: {
        '3xl': '0 20px 40px rgba(0, 0, 0, 0.5)', // stronger shadow
      },

     },
   },
   plugins: [],
 }