import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

// https://vite.dev/config/

const isTauri = Boolean(process.env.TAURI_ENV_PLATFORM);

export default defineConfig({
  plugins: [react(), wasm(), topLevelAwait()],
  clearScreen: false,
  server: {
    port: 5173,
    strictPort: true,
  },
  build: {
    target: 'esnext',
  },
  assetsInclude: ['**/*.wasm'],
  // GitHub Pages needs the repo subpath. The desktop app is served from the app root.
  base: isTauri ? '/' : '/chess-frontend/',
});
