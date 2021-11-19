const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      translate: {
        110: '110%',
      },
      backgroundImage: {
        desktopImg0: "url('../images/wallpaper/img0.jpg')",
        desktopImg1: "url('../images/wallpaper/img1.jpg')",
      },
      invert: {
        14: '.14',
      },
      dropShadow: {
        battery: '1px 1px #fefefe',
      },
      height: {
        'desktop-height': 'calc(100vh - 2.5rem)',
      },
      border: {
        'side-panel-border': '.1px solid rgba(17,17,17,.1)',
      },
      width: {
        90: '22.5rem',
      },
    },
    colors: {
      'task-bar-bg': '#f3f3f3d9',
      'task-bar-bg-dark': '#202020bf',
      'icon-bg': '#fefefe00',
      'icon-hover-bg': '#ffffffcc',
      'side-panel-bg': '#f2f2f2e6',
      'side-panel-bg-dark': '#242424cc',
      'side-panel-btn-bg': '#fbfbfb',
      'side-panel-btn-bg-on': '#0067c0',
      'side-panel-btn-bg-dark': '#ffffff14',
      'side-panel-btn-bg-dark-on': '#4cc2ff',
      'side-panel-border': '#1111111a',
      'side-panel-slider': '#0067c0',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    borderWidth: {
      '01': '0.1px',
    },
  },
  variants: {
    extend: {
      scale: ['active'],
      backgroundImage: ['dark'],
      invert: ['dark'],
    },
  },
  plugins: [],
};
