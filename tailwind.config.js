/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        coal: '#070505',
        onyx: '#11100f',
        wine: '#661421',
        wineDeep: '#3a0710',
        gold: '#d6aa55',
        goldLight: '#f2d28a',
        cream: '#f6ead7',
        smoke: '#b9aa96',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 24px 80px rgba(214, 170, 85, 0.18)',
        wine: '0 20px 70px rgba(102, 20, 33, 0.32)',
        glass: '0 18px 60px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'gold-line': 'linear-gradient(90deg, transparent, rgba(214,170,85,.75), transparent)',
        'premium-radial': 'radial-gradient(circle at 20% 20%, rgba(214,170,85,.18), transparent 32%), radial-gradient(circle at 80% 10%, rgba(102,20,33,.36), transparent 34%), linear-gradient(135deg, #070505 0%, #15090c 52%, #090606 100%)',
      },
    },
  },
  plugins: [],
};
