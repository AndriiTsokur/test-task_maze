import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
	plugins: [react(), svgr()],
	server: {
		port: 7777,
	},
	resolve: {
		alias: {
			src: '/src',
			components: '/src/components',
		},
	},

	base: '/test-task_maze/',
});
