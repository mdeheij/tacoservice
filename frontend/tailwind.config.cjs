module.exports = {
  	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
  // purge: ['layouts/**/*.html'],
  // darkMode: 'media', // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: '3rem',
        sm: '3em',
        lg: '5em',
        xl: '6em',
        '2xl': '8em',
      },
    },

    fontFamily: {
      body: ['Merriweather', 'serif'],
      display: ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      // animation: {
      //   wiggle: 'wiggle 1s ease-in-out infinite',
      // },
      // keyframes: {
      //   wiggle: {
      //     '0%, 100%': { transform: 'rotate(-30deg)' },
      //     '30%': { transform: 'rotate(30deg)' },
      //   }
      // },
      colors: {
        // 'blue-light': '#c2d9ed',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}