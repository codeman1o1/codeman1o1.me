import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "codeman1o1.me",
        short_name: "codeman1o1.me",
        icons: [{ src: "/icon.png", sizes: "1024x1024", type: "image/png" }, { src: "/icon-small.png", sizes: "512x512", type: "image/png" }, { src: "/icon-tiny.png", sizes: "192x192", type: "image/png" }],
      }
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
})
