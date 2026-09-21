import type { ChessEngine, EngineConfig, EngineKind } from './types';
import { StockfishEngine } from './uci/StockfishEngine';
import { UciWorkerTransport } from './uci/UciWorkerTransport';

type ImportMetaEnv = { readonly BASE_URL?: string };

const baseUrl = ((import.meta as ImportMeta & { env?: ImportMetaEnv }).env?.BASE_URL ?? '/');
const STOCKFISH_LITE_PATH = `${baseUrl}stockfish/stockfish-17-lite-single.js`;

export function createEngine(
  kind: EngineKind = 'stockfish-lite',
  config: EngineConfig = {},
): ChessEngine {
  if (kind === 'stockfish-full') {
    return new StockfishEngine(
      new UciWorkerTransport(
        () =>
          new Worker(new URL('./stockfishWorker.ts', import.meta.url), {
            type: 'classic',
          }),
      ),
      config,
    );
  }

  return new StockfishEngine(
    new UciWorkerTransport(() => new Worker(STOCKFISH_LITE_PATH)),
    config,
  );
}
