export type EngineEval = {
  pawns: number;
  mate: number | null;
};

export type EngineInfo = {
  fen: string;
  eval?: EngineEval;
  /** White-POV eval of MultiPV line 2, when the review search used two lines. */
  secondEval?: EngineEval;
  depth?: number;
  pvUci?: string[];
  bestMoveUci?: string;
  multipv?: number;
};

export type AnalyzeOptions = {
  /** Defaults to 8 → 12 → 16 → 20 → 24 for the Analyse button. */
  progressiveDepths?: number[];
  timeoutMs?: number;
  skipCache?: boolean;
};

export type ReviewGameOptions = {
  /** Fixed depth for every ply. Defaults to 16. */
  depth?: number;
  timeoutMsPerPly?: number;
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
  /** Current position: progressive depths, interrupts any previous analyzePosition or reviewGame. */
  analyzePosition(fen: string, options?: AnalyzeOptions): Promise<EngineInfo>;
  /** Whole PGN: one handshake, then a single depth-16 search per FEN. */
  reviewGame(
    fens: string[],
    options?: ReviewGameOptions,
    onPosition?: (index: number, info: EngineInfo) => void | Promise<void>,
  ): Promise<void>;
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
