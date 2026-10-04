import type { ChessEngine, EngineConfig, EngineKind } from './types';
import { StockfishEngine } from './WasmStockfishEngine';
import { UciWorkerTransport } from './uci/UciWorkerTransport';
import { TauriUciTransport } from './uci/TauriUciTransport';

type ImportMetaEnv = { readonly BASE_URL?: string };

const metaEnv = (import.meta as ImportMeta & { env?: ImportMetaEnv }).env;
const baseUrl = metaEnv?.BASE_URL ?? '/';
const STOCKFISH_LITE_PATH = `${baseUrl}stockfish/stockfish-17-lite-single.js`;

export function isTauriRuntime(): boolean {
  return typeof window !== 'undefined' && '__TAURI_INTERNALS__' in window;
}

function nativeThreadCount(): number {
  const cores = typeof navigator !== 'undefined' ? navigator.hardwareConcurrency || 4 : 4;
  return Math.max(2, Math.min(8, cores - 1));
}

export function resolvePreferredEngineKind(preferred?: EngineKind | null): EngineKind {
  if (!isTauriRuntime()) {
    return 'stockfish-lite';
  }
  return preferred === 'stockfish-lite' ? 'stockfish-lite' : 'stockfish-native';
}

export function createEngine(
  kind?: EngineKind,
  config: EngineConfig = {},
): ChessEngine {
  let resolved: EngineKind = kind ?? (isTauriRuntime() ? 'stockfish-native' : 'stockfish-lite');
  if (resolved === 'stockfish-native' && !isTauriRuntime()) {
    resolved = 'stockfish-lite';
  }

  if (resolved === 'stockfish-native') {
    return new StockfishEngine(
      new TauriUciTransport(),
      {
        threads: nativeThreadCount(),
        hashMb: 128,
        multiPv: 1,
        autoStopMs: 8000,
        ...config,
      },
      'stockfish-native',
    );
  }

  if (resolved === 'stockfish-full') {
    return new StockfishEngine(
      new UciWorkerTransport(
        () =>
          new Worker(new URL('./stockfishWorker.ts', import.meta.url), {
            type: 'classic',
          }),
      ),
      config,
      'stockfish-full',
    );
  }

  return new StockfishEngine(
    new UciWorkerTransport(() => new Worker(STOCKFISH_LITE_PATH)),
    { threads: 1, hashMb: 16, multiPv: 1, autoStopMs: 8000, ...config },
    'stockfish-lite',
  );
}

export const EngineManager = { createEngine, isTauriRuntime };
