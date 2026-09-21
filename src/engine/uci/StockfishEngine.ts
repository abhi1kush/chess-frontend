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
} from '../types';
import { UciCommandQueue } from './UciCommandQueue';
import {
  parseBestMoveUci,
  parseDepthFromInfoLine,
  parsePvFromInfoLine,
  parseScoreFromInfoLine,
  uciLinesFromWorkerData,
} from './parseUci';

type QuickAnalyzePending = {
  resolve: (result: EngineInfo) => void;
  reject: (error: Error) => void;
  fen: string;
  timeoutId: ReturnType<typeof setTimeout>;
  depths: number[] | null;
  depthIndex: number;
};

const DEFAULT_QUICK_ANALYZE_DEPTH = 8;
const DEFAULT_QUICK_ANALYZE_TIMEOUT_MS = 120000;

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
  private lastQuickEval: number | null = null;
  private autoStopMs: number;
  private config: EngineConfig;

  private stopTimeout: ReturnType<typeof setTimeout> | null = null;
  private searchTimeout: ReturnType<typeof setTimeout> | null = null;
  private pendingAnalyze: QuickAnalyzePending | null = null;
  private deferredAnalyzeSend: (() => void) | null = null;
  private lastMultiPv: number | null = null;

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
    this.deferredAnalyzeSend = null;
    this.rejectPending(new Error('Engine terminated'));
    this.transport.terminate();
    this.searching = false;
    this.clearTimers();
    this.lastMultiPv = null;
    this.queue.clear();
    this.setStatus('idle', 33);
  }

  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
    if (!enabled) {
      this.rejectPending(new Error('Engine disabled'));
      this.stopLiveAnalysis();
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
    if (!this.transport.isStarted) {
      this.start();
    }
    this.clearTimers();
    this.stopLiveAnalysis();
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

    const progressiveDepths =
      Array.isArray(options.progressiveDepths) && options.progressiveDepths.length > 0
        ? options.progressiveDepths.map((depth) => Math.min(24, Math.max(1, depth)))
        : null;
    const depth =
      typeof options.depth === 'number' && options.depth > 0
        ? Math.min(24, options.depth)
        : DEFAULT_QUICK_ANALYZE_DEPTH;
    const timeoutMs =
      typeof options.timeoutMs === 'number' && options.timeoutMs > 0
        ? options.timeoutMs
        : DEFAULT_QUICK_ANALYZE_TIMEOUT_MS;

    return new Promise<EngineInfo>((resolve, reject) => {
      if (!this.enabled) {
        reject(new Error('Engine disabled'));
        return;
      }
      this.rejectPending(new Error('Superseded'));
      this.deferredAnalyzeSend = null;
      if (!this.transport.isStarted) {
        this.start();
      }
      if (!this.transport.isStarted) {
        reject(new Error('Worker unavailable'));
        return;
      }

      this.lastQuickEval = null;
      const timeoutId = setTimeout(() => {
        if (this.pendingAnalyze && this.pendingAnalyze.timeoutId === timeoutId) {
          this.pendingAnalyze = null;
          reject(new Error('Quick analyze timeout'));
        }
      }, timeoutMs);

      const depths = progressiveDepths || [depth];
      this.pendingAnalyze = {
        resolve,
        reject,
        fen,
        timeoutId,
        depths: progressiveDepths,
        depthIndex: 0,
      };

      const sendQuickAnalyzeCommands = (): void => {
        this.clearTimers();
        if (this.searching) {
          this.queue.enqueue('stop', 'stop');
          this.searching = false;
        }
        if (this.lastMultiPv !== 1) {
          this.queue.enqueue('normal', 'setoption name MultiPV value 1');
          this.lastMultiPv = 1;
        }
        this.queue.enqueue('normal', `position fen ${fen}`);
        this.queue.enqueue('normal', `go depth ${depths[0]}`);
      };

      if (this.uciReady && this.readyOk) {
        sendQuickAnalyzeCommands();
      } else {
        this.deferredAnalyzeSend = sendQuickAnalyzeCommands;
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
    /** Review/analyze must resolve `bestmove` immediately; idle delay adds up across a PGN. */
    if (this.pendingAnalyze) {
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
      const deferred = this.deferredAnalyzeSend;
      if (deferred) {
        this.deferredAnalyzeSend = null;
        deferred();
      }
    }

    const fenForInfo = this.pendingAnalyze?.fen ?? this.liveFen;
    if (data.startsWith('info')) {
      const score = parseScoreFromInfoLine(data);
      const pvUci = parsePvFromInfoLine(data);
      const depth = parseDepthFromInfoLine(data);
      const info: EngineInfo = { fen: fenForInfo };
      if (score) {
        const pawns = fenForInfo ? normalizeEval(score.pawns, fenForInfo) : score.pawns;
        info.eval = { pawns, mate: score.mate };
        if (this.pendingAnalyze) {
          this.lastQuickEval = pawns;
        }
      }
      if (pvUci) {
        info.pvUci = pvUci;
        info.bestMoveUci = pvUci[0];
      }
      if (depth != null) {
        info.depth = depth;
      }
      if (!this.pendingAnalyze && (info.eval || info.pvUci || info.depth != null)) {
        this.emit({ type: 'info', info });
      }
    }

    const pending = this.pendingAnalyze;
    if (pending && data.startsWith('bestmove')) {
      const uci = parseBestMoveUci(data) ?? '';
      const ev = this.lastQuickEval;
      const evalScore = ev != null && Number.isFinite(ev) ? ev : 0;

      if (pending.depths && pending.depthIndex < pending.depths.length - 1) {
        pending.depthIndex += 1;
        const nextDepth = pending.depths[pending.depthIndex];
        this.lastQuickEval = null;
        this.queue.enqueue('normal', `go depth ${nextDepth}`);
        return;
      }

      clearTimeout(pending.timeoutId);
      this.pendingAnalyze = null;
      const result: EngineInfo = {
        fen: pending.fen,
        eval: { pawns: evalScore, mate: null },
        bestMoveUci: uci,
      };
      fenCacheSet(this.analyzeCache, pending.fen, result);
      pending.resolve(result);
      return;
    }

    const bestMoveUci = parseBestMoveUci(data);
    if (bestMoveUci != null && !this.pendingAnalyze) {
      this.emit({ type: 'bestMove', fen: fenForInfo, bestMoveUci });
    }
  }

  private handleWorkerError(error: Error): void {
    console.error('Error with engine worker:', error);
    this.rejectPending(error);
    this.setStatus('error', this.warmupPercent);
    this.emit({ type: 'error', error });
  }

  private rejectPending(error: Error): void {
    const pending = this.pendingAnalyze;
    if (!pending) {
      return;
    }
    clearTimeout(pending.timeoutId);
    pending.reject(error);
    this.pendingAnalyze = null;
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
