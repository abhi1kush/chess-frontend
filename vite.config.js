import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const famousGameDir = path.join(rootDir, 'public/assets/famousGames');
const famousGamesVirtualId = 'virtual:famous-games';
const famousGamesResolvedId = `\0${famousGamesVirtualId}`;

function titleFromPgnFile(file) {
  return file
    .replace(/\.pgn$/i, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function listFamousGames() {
  if (!fs.existsSync(famousGameDir)) return [];
  return fs
    .readdirSync(famousGameDir)
    .filter((file) => file.toLowerCase().endsWith('.pgn'))
    .sort((a, b) => a.localeCompare(b))
    .map((file) => ({
      id: file.replace(/\.pgn$/i, ''),
      title: titleFromPgnFile(file),
      file,
    }));
}

function famousGamesPlugin() {
  return {
    name: 'famous-games',
    resolveId(id) {
      if (id === famousGamesVirtualId) return famousGamesResolvedId;
      return undefined;
    },
    load(id) {
      if (id !== famousGamesResolvedId) return undefined;
      return `export const FAMOUS_GAMES = ${JSON.stringify(listFamousGames(), null, 2)};`;
    },
    configureServer(server) {
      server.watcher.add(famousGameDir);
      server.watcher.on('all', (_event, file) => {
        if (!file.startsWith(famousGameDir) || !file.toLowerCase().endsWith('.pgn')) {
          return;
        }
        const mod = server.moduleGraph.getModuleById(famousGamesResolvedId);
        if (mod) {
          void server.reloadModule(mod);
        }
      });
    },
  };
}

// https://vite.dev/config/

export default defineConfig(({ command }) => {
  const isTauri = Boolean(process.env.TAURI_ENV_PLATFORM);
  return {
    plugins: [famousGamesPlugin(), react(), wasm(), topLevelAwait()],
    clearScreen: false,
    envPrefix: ['VITE_', 'TAURI_ENV_'],
    server: {
      port: 5173,
      strictPort: true,
    },
    build: {
      target: 'esnext',
    },
    assetsInclude: ['**/*.wasm'],
    // Local / desktop: serve at /. GitHub Pages production build keeps the repo subpath.
    base: isTauri || command === 'serve' ? '/' : '/chess-frontend/',
  };
});
