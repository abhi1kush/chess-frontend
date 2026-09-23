import { normalizeEval } from '../../utils/onMessage';
import { fenCacheGet, fenCacheSet } from '../stockfishFenCache';
import type {
  AnalyzeOptions,
  ChessEngine,
  EngineConfig,
  EngineEvent,
  EngineInfo,
  EngineStatus,
  EngineTransport,
  ReviewGameOptions,
} from '../types';
import { UciCommandQueue } from './UciCommandQueue';
import {
  parseBestMoveUci,
  parseDepthFromInfoLine,
  parseMultiPvFromInfoLine,
  parsePvFromInfoLine,
  parseScoreFromInfoLine,
  uciLinesFromWorkerData,
} from './parseUci';

type SearchKind = 'position' | 'review';

type PendingSearch = {
  kind: SearchKind;
  resolve: (result: EngineInfo) => void;
  reject: (error: Error) => void;
  fen: string;
  timeoutId: ReturnType<typeof setTimeout>;
  depths: number[];
  depthIndex: number;
  gen: number;
};

const POSITION_PROGRESSIVE_DEPTHS = [8, 12, 16, 20, 24];
const POSITION_ANALYZE_TIMEOUT_MS = 30000;
const REVIEW_DEPTH_DEFAULT = 16;
const REVIEW_PLY_TIMEOUT_MS = 120000;

function scheduleIdle(fn: () => void): void {
  if (typeof requestIdleCallback !== 'undefined') {
    requestIdleCallback(fn, { timeout: 48 });
  } else {
    queueMicrotask(fn);
  }
}

export class StockfishEngine implements ChessEngine {
  private readonly queue: UciCommandQueue;
  private readonly listeners = new Set<(event: EngineEvent) => void>();
  private readonly analyzeCache = new Map<string, EngineInfo>();

  private status: EngineStatus = 'idle';
  private warmupPercent = 33;
  private ready = false;
  private enabled = false;
  private uciReady = false;
  private readyOk = false;
  private searching = false;
  private liveFen = '';
  private lastEvalPawns: number | null = null;
  private lastMate: number | null = null;
  private lastSecondEvalPawns: number | null = null;
  private lastSecondMate: number | null = null;
  private lastPvUci: string[] = [];
  private autoStopMs: number;
  private config: EngineConfig;

  private stopTimeout: ReturnType<typeof setTimeout> | null = null;
  private searchTimeout: ReturnType<typeof setTimeout> | null = null;
  private pending: PendingSearch | null = null;
  private readyWait: {
    gen: number;
    resolve: () => void;
    reject: (error: Error) => void;
  } | null = null;
  private lastMultiPv: number | null = null;
  private workGen = 0;

  constructor(
    private readonly transport: EngineTransport,
    defaults: EngineConfig = {},
  ) {
    this.config = { ...defaults };
    this.autoStopMs = defaults.autoStopMs ?? 8000;
    this.queue = new UciCommandQueue(
      (cmd) => this.transport.post(cmd),
      () => this.transport.isStarted,
    );
    this.transport.onMessage((raw) => this.handleRaw(raw));
    this.transport.onError((error) => this.handleWorkerError(error));
  }

  subscribe(listener: (event: EngineEvent) => void): () => void {
    this.listeners.add(listener);
    listener(this.statusEvent());
    return () => {
      this.listeners.delete(listener);
    };
  }

  getStatus(): EngineStatus {
    return this.status;
  }

  start(): void {
    if (this.transport.isStarted) {
      return;
    }
    this.uciReady = false;
    this.readyOk = false;
    this.ready = false;
    this.setStatus('loading', 33);
    this.transport.start();
    this.queue.process();
    this.transport.post('uci');
  }

  dispose(): void {
    this.uciReady = false;
    this.readyOk = false;
    this.ready = false;
    this.cancelWork(new Error('Engine terminated'));
    this.transport.terminate();
    this.lastMultiPv = null;
    this.queue.clear();
    this.setStatus('idle', 33);
  }

  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
    if (!enabled) {
      this.cancelWork(new Error('Engine disabled'));
    }
  }

  configure(config: EngineConfig): void {
    this.config = { ...this.config, ...config };
    if (typeof config.autoStopMs === 'number' && config.autoStopMs > 0) {
      this.autoStopMs = config.autoStopMs;
    }
    if (config.threads != null) {
      this.queue.enqueue('normal', `setoption name Threads value ${config.threads}`);
    }
    if (config.hashMb != null) {
      this.queue.enqueue('normal', `setoption name Hash value ${config.hashMb}`);
    }
    if (config.multiPv != null && this.lastMultiPv !== config.multiPv) {
      this.queue.enqueue('normal', `setoption name MultiPV value ${config.multiPv}`);
      this.lastMultiPv = config.multiPv;
    }
  }

  startLiveAnalysis(fen: string): void {
    if (!this.enabled) {
      return;
    }
    this.cancelWork(new Error('Live analysis started'));
    if (!this.transport.isStarted) {
      this.start();
    }
    this.liveFen = fen;
    this.searchTimeout = setTimeout(() => {
      this.searching = true;
      this.setStatus('searching', this.warmupPercent);
      this.queue.enqueue('normal', `position fen ${fen}`);
      this.queue.enqueue('normal', 'go infinite');
      this.stopTimeout = setTimeout(() => {
        this.stopLiveAnalysis();
      }, this.autoStopMs);
    }, 50);
  }

  stopLiveAnalysis(): void {
    if (this.pending?.kind === 'position') {
      this.workGen += 1;
      this.rejectPending(new Error('Stopped'));
    }
    if (!this.transport.isStarted || !this.searching) {
      return;
    }
    this.queue.enqueue('stop', 'stop');
    this.searching = false;
    if (this.readyOk) {
      this.setStatus('ready', 100);
    }
    if (this.stopTimeout) {
      clearTimeout(this.stopTimeout);
      this.stopTimeout = null;
    }
  }

  analyzePosition(fen: string, options: AnalyzeOptions = {}): Promise<EngineInfo> {
    const skipCache = options.skipCache === true;
    if (!skipCache && fen) {
      const hit = fenCacheGet(this.analyzeCache, fen) as EngineInfo | undefined;
      if (hit) {
        return Promise.resolve(hit);
      }
    }

    const depths = (
      Array.isArray(options.progressiveDepths) && options.progressiveDepths.length > 0
        ? options.progressiveDepths
        : POSITION_PROGRESSIVE_DEPTHS
    ).map((d) => Math.min(24, Math.max(1, d)));
    const timeoutMs =
      typeof options.timeoutMs === 'number' && options.timeoutMs > 0
        ? options.timeoutMs
        : POSITION_ANALYZE_TIMEOUT_MS;

    const gen = this.beginWork();
    this.liveFen = fen;

    return new Promise<EngineInfo>((resolve, reject) => {
      if (!this.enabled) {
        reject(new Error('Engine disabled'));
        return;
      }
      if (!this.transport.isStarted) {
        this.start();
      }
      if (!this.transport.isStarted) {
        reject(new Error('Worker unavailable'));
        return;
      }

      const timeoutId = setTimeout(() => {
        if (this.pending && this.pending.gen === gen) {
          const snapshot = this.snapshotPending(this.pending);
          this.pending = null;
          this.searching = false;
          resolve(snapshot);
        }
      }, timeoutMs);

      this.pending = {
        kind: 'position',
        resolve,
        reject,
        fen,
        timeoutId,
        depths,
        depthIndex: 0,
        gen,
      };
      this.lastEvalPawns = null;
      this.lastMate = null;
      this.lastSecondEvalPawns = null;
      this.lastSecondMate = null;
      this.lastPvUci = [];

      void this.handshake(gen)
        .then(() => {
          if (this.workGen !== gen || !this.pending || this.pending.gen !== gen) {
            return;
          }
          this.sendGo(this.pending);
        })
        .catch(reject);
    });
  }

  async reviewGame(
    fens: string[],
    options: ReviewGameOptions = {},
    onPosition?: (index: number, info: EngineInfo) => void | Promise<void>,
  ): Promise<void> {
    if (!this.enabled) {
      throw new Error('Engine disabled');
    }
    if (!fens.length) {
      return;
    }

    const depth = Math.min(
      24,
      Math.max(1, typeof options.depth === 'number' && options.depth > 0 ? options.depth : REVIEW_DEPTH_DEFAULT),
    );
    const timeoutMsPerPly =
      typeof options.timeoutMsPerPly === 'number' && options.timeoutMsPerPly > 0
        ? options.timeoutMsPerPly
        : REVIEW_PLY_TIMEOUT_MS;

    const gen = this.beginWork();
    if (!this.transport.isStarted) {
      this.start();
    }
    if (!this.transport.isStarted) {
      throw new Error('Worker unavailable');
    }

    await this.handshake(gen);
    if (this.workGen !== gen) {
      throw new Error('Review cancelled');
    }

    for (let i = 0; i < fens.length; i++) {
      if (this.workGen !== gen) {
        throw new Error('Review cancelled');
      }
      const info = await this.searchFixedDepth(fens[i], depth, gen, timeoutMsPerPly);
      if (this.workGen !== gen) {
        throw new Error('Review cancelled');
      }
      await onPosition?.(i, info);
    }
  }

  private searchFixedDepth(
    fen: string,
    depth: number,
    gen: number,
    timeoutMs: number,
  ): Promise<EngineInfo> {
    return new Promise<EngineInfo>((resolve, reject) => {
      if (this.workGen !== gen) {
        reject(new Error('Review cancelled'));
        return;
      }

      const timeoutId = setTimeout(() => {
        if (this.pending && this.pending.gen === gen) {
          this.pending = null;
          this.searching = false;
          reject(new Error('Review ply timeout'));
        }
      }, timeoutMs);

      this.pending = {
        kind: 'review',
        resolve,
        reject,
        fen,
        timeoutId,
        depths: [depth],
        depthIndex: 0,
        gen,
      };
      this.lastEvalPawns = null;
      this.lastMate = null;
      this.lastSecondEvalPawns = null;
      this.lastSecondMate = null;
      this.lastPvUci = [];
      this.sendGo(this.pending);
    });
  }

  private beginWork(): number {
    this.workGen += 1;
    this.rejectPending(new Error('Superseded'));
    if (this.readyWait) {
      this.readyWait.reject(new Error('Superseded'));
      this.readyWait = null;
    }
    this.stopLiveAnalysis();
    this.clearTimers();
    this.searching = false;
    return this.workGen;
  }

  private cancelWork(error: Error): void {
    this.workGen += 1;
    this.rejectPending(error);
    if (this.readyWait) {
      this.readyWait.reject(error);
      this.readyWait = null;
    }
    this.stopLiveAnalysis();
    this.clearTimers();
    this.searching = false;
  }

  private handshake(gen: number): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.workGen !== gen) {
        reject(new Error('Cancelled'));
        return;
      }
      this.readyWait = { gen, resolve, reject };
      if (this.uciReady && this.readyOk) {
        this.queue.enqueue('stop', 'stop');
        this.queue.enqueue('normal', 'isready');
      }
    });
  }

  private handleRaw(raw: unknown): void {
    const lines = uciLinesFromWorkerData(raw);
    const dispatch = (): void => {
      for (const data of lines) {
        this.handleLine(data);
      }
    };
    if (this.pending || this.readyWait) {
      dispatch();
      return;
    }
    scheduleIdle(dispatch);
  }

  private handleLine(data: string): void {
    if (data === 'uciok') {
      this.uciReady = true;
      this.setStatus('loading', 66);
      this.queue.enqueue('normal', 'isready');
    }

    if (data === 'readyok') {
      this.readyOk = true;
      this.ready = true;
      this.setStatus(this.searching ? 'searching' : 'ready', 100);
      if (this.readyWait && this.readyWait.gen === this.workGen) {
        const wait = this.readyWait;
        this.readyWait = null;
        wait.resolve();
        return;
      }
    }

    const fenForInfo = this.pending?.fen ?? this.liveFen;
    if (data.startsWith('info')) {
      const score = parseScoreFromInfoLine(data);
      const pvUci = parsePvFromInfoLine(data);
      const depth = parseDepthFromInfoLine(data);
      const info: EngineInfo = { fen: fenForInfo };
      const exactScore = score && !/\b(lowerbound|upperbound)\b/i.test(data);
      const multipv = parseMultiPvFromInfoLine(data) ?? 1;
      if (exactScore && score && !this.readyWait) {
        const pawns = fenForInfo ? normalizeEval(score.pawns, fenForInfo) : score.pawns;
        const mate =
          score.mate == null
            ? null
            : fenForInfo
              ? normalizeEval(score.mate, fenForInfo)
              : score.mate;
        if (multipv <= 1) {
          info.eval = { pawns, mate };
          this.lastEvalPawns = pawns;
          this.lastMate = mate;
        } else if (multipv === 2) {
          info.secondEval = { pawns, mate };
          this.lastSecondEvalPawns = pawns;
          this.lastSecondMate = mate;
        }
      }
      if (pvUci) {
        info.pvUci = pvUci;
        info.bestMoveUci = pvUci[0];
        this.lastPvUci = pvUci;
      }
      if (depth != null) {
        info.depth = depth;
      }
      if (
        !this.readyWait &&
        this.pending?.kind === 'position' &&
        (info.eval || info.pvUci || info.depth != null)
      ) {
        this.emit({ type: 'info', info });
      }
    }

    const pending = this.pending;
    if (pending && data.startsWith('bestmove')) {
      if (this.readyWait || pending.gen !== this.workGen) {
        return;
      }
      const uci = parseBestMoveUci(data) ?? this.lastPvUci[0] ?? '';
      if (pending.kind === 'position' && pending.depthIndex < pending.depths.length - 1) {
        pending.depthIndex += 1;
        this.queue.enqueue('normal', `go depth ${pending.depths[pending.depthIndex]}`);
        return;
      }

      clearTimeout(pending.timeoutId);
      this.pending = null;
      this.searching = false;
      const result = this.finishInfo(pending.fen, uci, pending.depths[pending.depthIndex]);
      if (pending.kind === 'position') {
        fenCacheSet(this.analyzeCache, pending.fen, result);
        this.emit({ type: 'bestMove', fen: pending.fen, bestMoveUci: result.bestMoveUci ?? '' });
      }
      pending.resolve(result);
      this.setStatus('ready', 100);
      return;
    }

    const bestMoveUci = parseBestMoveUci(data);
    if (bestMoveUci != null && !this.pending) {
      this.emit({ type: 'bestMove', fen: fenForInfo, bestMoveUci });
    }
  }

  private sendGo(pending: PendingSearch): void {
    const multiPv = pending.kind === 'review' ? 2 : 1;
    if (this.lastMultiPv !== multiPv) {
      this.queue.enqueue('normal', `setoption name MultiPV value ${multiPv}`);
      this.lastMultiPv = multiPv;
    }
    const depth = pending.depths[pending.depthIndex];
    this.searching = true;
    this.setStatus('searching', this.warmupPercent);
    this.queue.enqueue('normal', `position fen ${pending.fen}`);
    this.queue.enqueue('normal', `go depth ${depth}`);
  }

  private snapshotPending(pending: PendingSearch): EngineInfo {
    return this.finishInfo(
      pending.fen,
      this.lastPvUci[0] ?? '',
      pending.depths[pending.depthIndex],
    );
  }

  private finishInfo(fen: string, bestMoveUci: string, depth?: number): EngineInfo {
    const pawns = this.lastEvalPawns != null && Number.isFinite(this.lastEvalPawns) ? this.lastEvalPawns : 0;
    const second =
      this.lastSecondEvalPawns != null && Number.isFinite(this.lastSecondEvalPawns)
        ? { pawns: this.lastSecondEvalPawns, mate: this.lastSecondMate }
        : undefined;
    return {
      fen,
      eval: { pawns, mate: this.lastMate },
      secondEval: second,
      bestMoveUci,
      pvUci: this.lastPvUci.length ? this.lastPvUci : bestMoveUci ? [bestMoveUci] : [],
      depth,
    };
  }

  private handleWorkerError(error: Error): void {
    console.error('Error with engine worker:', error);
    this.cancelWork(error);
    this.setStatus('error', this.warmupPercent);
    this.emit({ type: 'error', error });
  }

  private rejectPending(error: Error): void {
    const pending = this.pending;
    if (!pending) {
      return;
    }
    clearTimeout(pending.timeoutId);
    pending.reject(error);
    this.pending = null;
  }

  private clearTimers(): void {
    if (this.stopTimeout) {
      clearTimeout(this.stopTimeout);
      this.stopTimeout = null;
    }
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = null;
    }
  }

  private setStatus(status: EngineStatus, warmupPercent: number): void {
    this.status = status;
    this.warmupPercent = warmupPercent;
    this.emit(this.statusEvent());
  }

  private statusEvent(): EngineEvent {
    return {
      type: 'status',
      status: this.status,
      warmupPercent: this.warmupPercent,
      ready: this.ready,
    };
  }

  private emit(event: EngineEvent): void {
    this.listeners.forEach((listener) => listener(event));
  }
}
