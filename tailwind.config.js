module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        desktopImg0: "url('images/wallpaper/img0.jpg')",
      },
    },
    colors: {
      'task-bar-bg': '#f3f3f3d9',
      'icon-bg': '#fefefe00',
      'icon-hover-bg': '#ffffffcc',
    },
  },
  variants: {
    extend: {
      scale: ['active'],
    },
  },
  plugins: [],
};
