import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			// Output an HTML file with Prism.js and theme references
			output: {
				// Change 'public' to your actual public directory path
				dir: 'public',
			},
		},
	},
	base: '/Portfolio-8-23/',
});
