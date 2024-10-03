// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt", "@nuxt/eslint"],
	pwa: {
		registerType: "autoUpdate",
		manifest: {
			name: "codeman1o1.me",
			short_name: "codeman1o1.me",
			icons: [
				{
					src: "pwa-64x64.png",
					sizes: "64x64",
					type: "image/png"
				},
				{
					src: "pwa-192x192.png",
					sizes: "192x192",
					type: "image/png"
				},
				{
					src: "pwa-512x512.png",
					sizes: "512x512",
					type: "image/png"
				},
				{
					src: "maskable-icon-512x512.png",
					sizes: "512x512",
					type: "image/png",
					purpose: "maskable"
				}
			],
			start_url: "/",
			display: "standalone",
			background_color: "#f1f5f9",
			theme_color: "#f1f5f9"
		},
		workbox: {
			navigateFallback: null
		}
	},
	css: ["~/assets/css/main.css"],
	typescript: {
		typeCheck: true
	},
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true }
})
