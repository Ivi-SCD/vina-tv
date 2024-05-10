/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryblack: '#1c0113',
        primaryblackd: '#1c0113',
        primaryredb: '#6b0103',
        primaryredbb: '#a30006',
        primaryredbbb: '#c21a01',
        primaryorange: '#f03c02'
      }
    },
    fontFamily: {
      rblack: ["Roboto-Black", "sans-serif"],
      rblackitalic: ["Roboto-BlackItalic", "sans-serif"],
      rbold: ["Roboto-Bold", "sans-serif"],
      rbolditalic: ["Roboto-BoldItalic", "sans-serif"],
      rthin: ["Roboto-Thin", "sans-serif"],
      rthinitalic: ["Roboto-ThinItalic", "sans-serif"],
      rlight: ["Roboto-Light", "sans-serif"],
      rlightitalic: ["Roboto-LightItalic", "sans-serif"],
      rmedium: ["Roboto-Medium", "sans-serif"],
      rmediumitalic: ["Roboto-MediumItalic", "sans-serif"],
      rregular: ["Roboto-Regular", "sans-serif"],
      hvbold: ["HindVadodara-Bold", "sans-serif"],
      hvlight: ["HindVadodara-Light", "sans-serif"],
      hvmedium: ["HindVadodara-Medium", "sans-serif"],
      hvregular: ["HindVadodara-Regular", "sans-serif"],
      hvsemibold: ["HindVadodara-SemiBold", "sans-serif"]
    }
    
  },
  plugins: [],
}
