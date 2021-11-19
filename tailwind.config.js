module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      translate: {
        110: '110%',
      },
      backgroundImage: {
        desktopImg0: "url('images/wallpaper/img0.jpg')",
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
      'icon-bg': '#fefefe00',
      'icon-hover-bg': '#ffffffcc',
      'side-panel-bg': '#f2f2f2e6',
      'side-panel-btn-bg': '#fbfbfb',
      'side-panel-border': '#1111111a',
      'side-panel-slider': '#0067c0',
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
