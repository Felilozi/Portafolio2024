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
        secondary: '#1c9df5',
        darkBg: '#1cf5e1'
      },      
      backgroundImage: {
        'gradient-cover': 
          'linear-gradient(90.21deg, rgb(0,169,116) -5.91%, rgb(11, 98, 90) 111.58%)',
      },
    },
  },
  plugins: [],
};
export default config;
