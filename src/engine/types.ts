export type EngineEval = {
  pawns: number;
  mate: number | null;
};

export type EngineInfo = {
  fen: string;
  eval?: EngineEval;
  depth?: number;
  pvUci?: string[];
  bestMoveUci?: string;
  multipv?: number;
};

export type AnalyzeOptions = {
  depth?: number;
  progressiveDepths?: number[];
  timeoutMs?: number;
  skipCache?: boolean;
};

export type EngineConfig = {
  threads?: number;
  hashMb?: number;
  multiPv?: number;
  autoStopMs?: number;
};

export type EngineStatus = 'idle' | 'loading' | 'ready' | 'searching' | 'error';

export type EngineEvent =
  | {
      type: 'status';
      status: EngineStatus;
      warmupPercent: number;
      ready: boolean;
    }
  | { type: 'info'; info: EngineInfo }
  | { type: 'bestMove'; fen: string; bestMoveUci: string }
  | { type: 'error'; error: Error };

export type EngineKind = 'stockfish-lite' | 'stockfish-full';

export interface ChessEngine {
  start(): void;
  dispose(): void;
  setEnabled(enabled: boolean): void;
  configure(config: EngineConfig): void;
  startLiveAnalysis(fen: string): void;
  stopLiveAnalysis(): void;
  analyzePosition(fen: string, options?: AnalyzeOptions): Promise<EngineInfo>;
  subscribe(listener: (event: EngineEvent) => void): () => void;
  getStatus(): EngineStatus;
}

export interface EngineTransport {
  readonly isStarted: boolean;
  start(): void;
  post(message: string): void;
  onMessage(handler: (raw: unknown) => void): void;
  onError(handler: (error: Error) => void): void;
  terminate(): void;
}
