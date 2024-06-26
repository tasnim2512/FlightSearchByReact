module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        darkBlue: "#1F2937",
        darkBlue2: "#2E3791",
        lightGray: "#E5E7EB",
        lightGray2: "#E5E7EB",
        lightGray3: "#F3F4F6",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',  
          sm: '2rem',       
          lg: '4rem',       
          xl: '5rem',      
          '2xl': '6rem'     
        },
        screens: {
          sm: '640px',  
          md: '768px',  
          lg: '1024px', 
          xl: '1280px', 
          '2xl': '1536px' 
        },
      },
    },
  },
  plugins: [],
}
