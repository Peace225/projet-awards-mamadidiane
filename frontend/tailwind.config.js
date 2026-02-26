export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        fallStar: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '0.7' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(100px) rotate(360deg)', opacity: '0.7' },
        },
      },
      animation: {
        fallStar: 'fallStar 6s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}