/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
  safelist: [
    'text-[#FFFFFF]',
    'text-[#011962]', 
    'border-[#FFFFFF]',
    'border-[#011962]',
    'bg-[#FFFFFF]',
    'bg-[#61584F]',
    'bg-[#F3F4F6]'
  ],
}
