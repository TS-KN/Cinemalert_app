import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsConfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), tsConfigPaths()],
  // 追加
  server: {
    host: true
  }
})
