/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Upewnij się, że ścieżki są poprawne
  ],
  theme: {
    extend: {
      colors: {
        customBlack: '#121212',
        customBlack4: '#1B1B1B',
        customBlack6: '#202020',
        customBlack8: '#242424',
        customBlack10: '#292929',
        customBlack12: '#2E2E2E',
        customBlack14: '#333333',
        customBlack16: '#383838',
        customBlack18: '#3D3D3D',
        customBlack20: '#414141',
        customLightGreen100: 'rgb(3, 218, 198)',
        customLightGreen87: 'rgb(3, 218, 198, 0.87)',
        customLightGreen67: 'rgb(3, 218, 198, 0.67)',
        customWhite100: 'rgba(255, 255, 255)',
        customWhite87: 'rgba(255, 255, 255, 0.87)',
        customWhite67: 'rgba(255, 255, 255, 0.67)',
        customWhite47: 'rgba(255, 255, 255, 0.47)',
      },
      boxShadow: {
        'right-only': '9px -5px 20px 6px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
};
