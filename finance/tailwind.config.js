module.exports = {
  mode:'jit',
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors:{
        primary:'#FFFFFF',
        primary_blue: '#2B2BD4',
        secondary_blue: '#4988FE',
        yellow: '#F7D06B',
        orange: '#FFC994',
        primary_green: '#9CCEA6',
        secondary_green: '#BBECFF',
        black: '#000000',
        tertiary_green:"#F0F3DE"
      }
    },
  },
  plugins: [],
}
