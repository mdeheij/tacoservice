// svelte.config.js
import preprocess from 'svelte-preprocess';
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    // preprocess: preprocess({
    //     postcss: {
    //         plugins: [
    //             tailwind, 
    //             autoprefixer
    //         ]
    //     }
    // }),
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
