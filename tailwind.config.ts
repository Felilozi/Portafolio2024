import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#EAAE59',
        darkBg: '#0B625A'
      },      
      backgroundImage: {
        'gradient-cover': 
          'linear-gradient(90.21deg, rgb(11, 98, 90)-5.91%, rgb(11, 98, 90) 111.58%)',
      },
    },
  },
  plugins: [
   
  ],
  
};
export default config;