const adapter = require('@sveltejs/adapter-vercel');
const { vitePreprocess } = require('@sveltejs/kit/vite');
const { preprocessMeltUI } = require('@melt-ui/pp')
const sequence = require('svelte-sequential-preprocessor')

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: sequence([vitePreprocess(), preprocessMeltUI()])
};

module.exports = config;
