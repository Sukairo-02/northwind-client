import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

import autoprefixer from 'autoprefixer'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@lib': path.resolve(__dirname, './src/lib'),
			'@api': path.resolve(__dirname, './src/api'),
			'@components': path.resolve(__dirname, './src/components')
		}
	},
	plugins: [svelte()],
	css: {
		postcss: {
			plugins: [autoprefixer]
		}
	}
})
