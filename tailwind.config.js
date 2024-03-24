export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '100px',
      sm: '500px',
      md: '750px',
      lg: '1000px',
      xl: '1440px',
      xxl: '1680px'
    },
    colors: {
      'blue': '#94a3b8',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#737373',
      'gray-extra-dark': '#27272a',
      'gray': '#e4e4e7',
      'gray-light': '#d3dce6',
      'black': "#71717a",
      'black-dark': "#020617",
      'white': "#ffffff",
      'red': "#dc2626"
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    boxShadow: {
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    }
  },
  plugins: [],
}

