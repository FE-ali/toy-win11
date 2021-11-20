const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontSize: {
      '3xs': '.5rem',
      '2xs': '.625rem',
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '7rem',
    },
    extend: {
      translate: {
        110: '110%',
      },
      backgroundImage: {
        desktopImg0:
          "url('https://jzhmcoo1-1258918430.cos.ap-shanghai.myqcloud.com/markdown/img0@0.5x.webp')",
        desktopImg1:
          "url('https://jzhmcoo1-1258918430.cos.ap-shanghai.myqcloud.com/markdown/img1@0.5x.webp')",
      },
      invert: {
        14: '.14',
      },
      dropShadow: {
        battery: '1px 1px #fefefe',
      },
      height: {
        'desktop-height': 'calc(100vh - 2.5rem)',
        'window-height': 'calc(100vh - 2.5rem - 2.5 / 10 * 6rem)',
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
      'icon-hover-bg-dark': '#ffffff1a',
      'side-panel-bg': '#f2f2f2e6',
      'side-panel-bg-dark': '#242424cc',
      'side-panel-btn-bg': '#fbfbfb',
      'side-panel-btn-bg-on': '#0067c0',
      'side-panel-btn-bg-dark': '#ffffff14',
      'side-panel-btn-bg-dark-on': '#4cc2ff',
      'side-panel-border': '#1111111a',
      'side-panel-slider': '#0067c0',
      'window-default': '#00000060',
      'close-hover': '#ff000040',
      'resize-hover': '#00000040',
      'hide-hover': '#00000020',
      'dingtalk-primary': '#3077ee',
      'dingtalk-dialog-hover': '#eaebed',
      'dingtalk-dialog-active': '#e1e2e4',
      'dingtalk-dialog-bg': '#f1f2f3',
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
