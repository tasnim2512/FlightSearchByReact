module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        darkBlue: "#1F2937",
        darkBlue2: "#2E3791",
        lightGray: "#E5E7EB",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',  // Default padding for all breakpoints
          sm: '2rem',       // Custom padding at 'sm' breakpoint
          lg: '4rem',       // Custom padding at 'lg' breakpoint
          xl: '5rem',       // Custom padding at 'xl' breakpoint
          '2xl': '6rem'     // Custom padding at '2xl' breakpoint
        },
        screens: {
          sm: '640px',  // Assuming you want a specific max-width for small screens
          md: '768px',  // Max-width for medium screens
          lg: '1024px', // Max-width for large screens
          xl: '1280px', // Max-width for extra-large screens
          '2xl': '1536px' // Max-width for 2xl screens
        },
      },
    },
  },
  plugins: [],
}
