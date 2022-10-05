import { defineConfig } from 'vite';
import { ViteAliases } from 'vite-aliases';
import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';

export default defineConfig({
	build: {
		target: 'es2017',
		outDir: 'build',
		rollupOptions: {
			output: {
				assetFileNames: ({ name }) => {
					if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
						return 'assets/images/[name]-[hash][extname]';
					}

					if (/\.(ttf|otf|fnt|woff)$/.test(name ?? '')) {
						return 'assets/fonts/[name]-[hash][extname]';
					}

					if (/\.css$/.test(name ?? '')) {
						return 'assets/css/[name]-[hash][extname]';
					}

					return 'assets/[name]-[hash][extname]';
				},
			},
		},
	},
	server: {
		port: 3000,
		host: '0.0.0.0',
		hmr: true,
	},
	plugins: [
		react(),
		ViteAliases({
			dir: 'src',
			prefix: '@',
			deep: true,
			depth: 3,
		}),
		legacy({
			targets: ['defaults', 'not IE 11'],
		}),
	],
});
