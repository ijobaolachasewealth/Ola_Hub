module.exports = {
  theme: {
    extend: {
      colors: {
        // Your custom colors (HEX format)
        'sky-blue': '#8ECAE6',
        'blue-green': '#219EBC',
        'prussian-blue': '#023047',
        'selective-yellow': '#FFB703',
        'ut-orange': '#FB8500',
        
        // Optional: Add shades (light/dark variants)
        'sky-blue-light': '#B0E0F0',
        'prussian-blue-dark': '#011A26',
      },
      animation: {
        // Preloader glow (using your UT Orange)
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { 'box-shadow': '0 0 5px #FB8500' },
          '50%': { 'box-shadow': '0 0 20px #FB8500' },
        }
      }
    }
  },
  plugins: [],
}
