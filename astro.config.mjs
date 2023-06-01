// import { fileURLToPath } from 'node:url';
// import fs from 'fs';
// import path from 'path';
// import postcss from 'postcss';

import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

import viteVue from '@vitejs/plugin-vue';
import viteVuetify from 'vite-plugin-vuetify';

// import compress from 'astro-compress';
// import compressor from 'astro-compressor';
// import purgecss from 'astro-purgecss';

// import purgecssSafeList from './purgecss.safelist.mjs';
// import purgecssBlocklist from './purgecss.blocklist.mjs';
// import autoprefixer from 'autoprefixer';
// import cssnanoPlugin from 'cssnano';

// function handleWindowsPath(outputPath) {
// 	if (process.platform !== 'win32') return outputPath;
// 	if (outputPath.endsWith('\\')) {
// 		outputPath = outputPath.substring(0, outputPath.length - 1);
// 	}
// 	outputPath = outputPath.replaceAll('\\', '/');
// 	return outputPath;
// }

export default defineConfig({
	integrations: [
		vue({
			appEntrypoint: '/src/main',
		}),
		// purgecss({
		// 	safelist: purgecssSafeList,
		// 	blocklist: purgecssBlocklist,
		// }),
		// {
		// 	name: 'PostCSS',
		// 	hooks: {
		// 		'astro:build:done': async ({ dir }) => {
		// 			const outDir = handleWindowsPath(fileURLToPath(dir));
		// 			const files = fs.readdirSync(path.join(outDir, '_astro'));

		// 			for (const file of files) {
		// 				if (path.extname(file) === '.css') {
		// 					const filepath = path.join(outDir, '_astro', file);
		// 					const css = fs.readFileSync(filepath, 'utf8');

		// 					await postcss([autoprefixer, cssnanoPlugin({ preset: 'default' })]).process(css, {
		// 						from: filepath,
		// 						to: filepath,
		// 					});
		// 				}
		// 			}
		// 		},
		// 	},
		// },
		// compress({
		// 	css: false,
		// 	js: false,
		// 	png: true,
		// 	jpg: true,
		// 	webp: true,
		// 	svg: true,
		// }),
		// compressor({
		// 	gzip: true,
		// 	brotli: false,
		// }),
	],
	vite: {
		build: {
			minify: true,
			plugins: [viteVue(), viteVuetify()],
		},
	},
});
