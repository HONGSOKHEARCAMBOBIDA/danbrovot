import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { seoPlugin } from './vite/seoPlugin'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
    plugins: [
      vue(),
      // Imports only the Element Plus components (and styles) that are actually used.
      Components({ resolvers: [ElementPlusResolver({ importStyle: 'css' })], dts: false }),
      seoPlugin(env.VITE_SITE_URL),
    ],
    build: { chunkSizeWarningLimit: 900 },
  }
})
