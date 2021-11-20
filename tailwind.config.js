module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
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
        desktopImg0: "url('../images/wallpaper/img0.jpg')",
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
      'icon-bg': '#fefefe00',
      'icon-hover-bg': '#ffffffcc',
      'side-panel-bg': '#f2f2f2e6',
      'side-panel-btn-bg': '#fbfbfb',
      'side-panel-border': '#1111111a',
      'side-panel-slider': '#0067c0',
      black: '#000',
      white: '#fff',
      transparent: 'transparent',
      red: '#ff0000',
      'window-default': '#00000060',
      'close-hover': '#ff000040',
      'resize-hover': '#00000040',
      'hide-hover': '#00000020',
      'dingtalk-primary': '#3077ee',
      'dingtalk-dialog-hover': '#eaebed',
      'dingtalk-dialog-active': '#e1e2e4',
      'dingtalk-dialog-bg': '#f1f2f3',
    },
    borderWidth: {
      '01': '0.1px',
    },
  },
  variants: {
    extend: {
      scale: ['active'],
    },
  },
  plugins: [],
};
