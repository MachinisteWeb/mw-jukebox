import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(() => {
	return {
		resolve: {
			alias: {
				'@core': path.resolve(__dirname, '../../../..', 'src'),
				'@assets': path.resolve(__dirname, '../../../..', 'src', 'assets'),
				'@frameworks': path.resolve(__dirname, '../../../..', 'src', 'frameworks'),
				'@webreact': path.resolve(__dirname, '../../../..', 'src', 'frameworks', 'web', 'react'),
			},
		},

		root: __dirname,
		publicDir: path.resolve(__dirname, '../../../../src/assets'),

		plugins: [react()],

		server: {
			port: 5174,
			open: false,
		},

		test: {
			environment: 'jsdom',
			include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
			setupFiles: ['./vitest.setup.ts'],
		},

		build: {
			outDir: path.resolve(__dirname, '../../../../dist/react'),
			emptyOutDir: true,
		},
	};
});
