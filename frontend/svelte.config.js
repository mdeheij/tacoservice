// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [preprocess({
		defaults: {
			style: 'postcss',
		},
		postcss: true,
	})],

	kit: {
		ssr: true,
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: 'index.html'
		}),
		// hydrate the <div id="app"> element in src/app.html
		target: '#app',
		// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
		vite: () => ({
			server: {
				proxy: {
					'/api': {
						target: 'http://localhost:2323',
						changeOrigin: true,
					},
				}
			}
		})
	}
};

export default config;
