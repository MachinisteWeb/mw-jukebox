import path from 'path';
import { fileURLToPath } from 'url';
import { readdirSync, existsSync } from 'fs';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, 'src');
const distDir = path.join(__dirname, 'dist');

const vueEntries = existsSync(srcDir)
	? readdirSync(srcDir)
			.filter((f) => f.endsWith('.vue'))
			.reduce((acc, f) => {
				const name = f.replace(/\.vue$/, '');
				acc[name] = path.join(srcDir, f);
				return acc;
			}, {})
	: {};

export default defineConfig(({ command, mode }) => {
	const isTest = mode === 'test';
	const isServe = command === 'serve' && !isTest;
  
	return {
	  plugins: [vue()],

	  root: isServe ? 'dist' : '.', 
  
	  resolve: {
		alias: [
		  {
			find: /^\/js\/(.*)\.mjs$/,
			replacement: path.join(srcDir, '$1.vue'),
		  },
		]
	  },
  
	  server: {
		fs: {
		  allow: [__dirname]
		}
	  },
  
      test: {
		environment: 'jsdom', 
		include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
	  },

	  build: {
		minify: false,
		emptyOutDir: false,
      	outDir: isServe ? '.vite-temp' : distDir,
		lib: {
		  entry: vueEntries,
		  name: 'mw-jukebox',
		  formats: ['es'],
		  fileName: (_, name) => `js/${name}.mjs`,
		  cssFileName: 'mw-jukebox',
		},
		rollupOptions: {
		  external: ['vue'],
		  output: {
			entryFileNames: 'js/[name].mjs',
			assetFileNames: (assetInfo) => {
			  if (assetInfo.name?.endsWith('.css')) {
				return 'css/[name][extname]';
			  }
			  return 'assets/[name]-[hash][extname]';
			},
		  },
		},
	  },
	};
});