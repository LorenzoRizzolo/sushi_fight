import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
	plugins: [
		sveltekit(),
		VitePWA({
			registerType: 'autoUpdate',
			manifest: {
				"name": "SushiFight",
				"short_name": "SushiFight",
				"description": "Sfida i tuoi amici a colpi di sushi !!",
				"start_url": "/",
				"display": "standalone",
				"background_color": "#ff7e5f",
				"theme_color": "#ff7e5f",
				"icons": [
					{
					"src": "/icons/icon-192x192.png",
					"sizes": "192x192",
					"type": "image/png"
					},
					{
					"src": "/icons/icon-512x512.png",
					"sizes": "512x512",
					"type": "image/png"
					}
				]
			}
		})
	]
});
