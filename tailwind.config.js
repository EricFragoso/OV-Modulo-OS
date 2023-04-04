/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/screens/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'OpenSansLight':['OpenSans_300Light'], 
      'OpenSansRegular': ['OpenSans_400Regular'], 
      'OpenSansMedium': ['OpenSans_500Medium'], 
      'OpenSansSemiBold': ['OpenSans_600SemiBold'], 
      'OpenSansBold': ['OpenSans_700Bold'], 
      'OpenSansExtraBold': ['OpenSans_800ExtraBold']
    },
    extend: {},
  },
  plugins: [],
}

