import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(() => {
	return {
		resolve: {
			alias: {
			  '@core': path.resolve(__dirname, '../../../..', 'src'), 
			  '@assets': path.resolve(__dirname, '../../../..', 'src', 'assets'), 
			  '@frameworks': path.resolve(__dirname, '../../../..', 'src', 'frameworks'), 
			  '@webvue': path.resolve(__dirname, '../../../..', 'src', 'frameworks', 'web', 'vue')
			}
		},
		
		root: __dirname,
		publicDir: path.resolve(__dirname, '../../../../src/assets'),

		plugins: [vue()],

		server: {
			port: 5173,
			open: false
		},

		test: {
			environment: 'jsdom',
			include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		},

		build: {
			outDir: path.resolve(__dirname, '../../../../dist/vue'),
			emptyOutDir: true,
		},
	};
});
