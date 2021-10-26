module.exports = {
  mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
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
      colors: {
        'primary': '#c2d9ed',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}