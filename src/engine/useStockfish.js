import { useEffect, useRef, useCallback } from 'react';
import { normalizeEval } from '../utils/onMessage';
import { fenCacheGet, fenCacheSet } from './stockfishFenCache';

const STOCKFISH_LITE_PATH = `${import.meta.env.BASE_URL}stockfish/stockfish-17-lite-single.js`;

/** Stockfish may send several UCI lines in one postMessage; split before parsing. */
function uciLinesFromWorkerData(raw) {
  if (raw == null) return [];
  if (typeof raw === 'string') {
    return raw.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  }
  if (typeof ArrayBuffer !== 'undefined' && raw instanceof ArrayBuffer) {
    return uciLinesFromWorkerData(new TextDecoder().decode(raw));
  }
  if (ArrayBuffer.isView && ArrayBuffer.isView(raw)) {
    return uciLinesFromWorkerData(new TextDecoder().decode(raw));
  }
  if (Array.isArray(raw)) {
    return raw.flatMap((x) => uciLinesFromWorkerData(x));
  }
  if (typeof raw === 'object' && raw !== null && typeof raw.data === 'string') {
    return uciLinesFromWorkerData(raw.data);
  }
  return [String(raw).trim()].filter(Boolean);
}

/** UCI `info` lines: allow tabs / variable spacing (Stockfish 17 variants). */
function parseScoreFromInfoLine(line) {
  const m = line.match(/\bscore\s+(cp|mate)\s+(-?\d+)/i);
  if (!m) return null;
  const type = m[1].toLowerCase();
  const value = parseInt(m[2], 10);
  if (Number.isNaN(value)) return null;
  const evalValue = type === 'cp' ? value / 100 : (value > 0 ? 10 : -10);
  return evalValue;
}

function scheduleIdle(fn) {
  if (typeof requestIdleCallback !== 'undefined') {
    requestIdleCallback(fn, { timeout: 48 });
  } else {
    queueMicrotask(fn);
  }
}

/**
 * @param {((data: string) => void) | null | undefined} onMessage
 * @param {'lite' | string} [version]
 * @param {number} [autoStopTime]
 * @param {{ onUciReady?: () => void; onReadyOk?: () => void }} [lifecycle]
 */
export default function useStockfish(onMessage, version = 'lite', autoStopTime = 8000, lifecycle = {}) {
  const lifecycleRef = useRef(lifecycle);
  lifecycleRef.current = lifecycle;

  const workerRef = useRef(null);
  const stopTimeoutRef = useRef(null);
  const searchTimeoutRef = useRef(null);
  const isSearchingRef = useRef(false);
  const commandQueueRef = useRef([]);
  const queueRunningRef = useRef(false);
  const engineEnabledRef = useRef(false);
  const quickAnalyzePendingRef = useRef(null);
  const lastQuickEvalRef = useRef(null);
  const uciReadyRef = useRef(false);
  const readyOkRef = useRef(false);
  const deferredQuickAnalyzeSendRef = useRef(null);
  const quickAnalyzeCacheRef = useRef(new Map());

  const processQueue = useCallback(() => {
    if (queueRunningRef.current || !workerRef.current) return;

    queueRunningRef.current = true;

    while (commandQueueRef.current.length > 0) {
      const stopCmdIndex = commandQueueRef.current.findIndex(item => item.type === 'stop');
      const cmdObj = stopCmdIndex >= 0
        ? commandQueueRef.current.splice(stopCmdIndex, 1)[0]
        : commandQueueRef.current.shift();

      if (cmdObj) {
        workerRef.current.postMessage(cmdObj.cmd);
      }
    }

    queueRunningRef.current = false;
  }, []);

  const enqueueCommand = useCallback((type, cmd) => {
    commandQueueRef.current.push({ type, cmd });
    processQueue();
  }, [processQueue]);

  const attachWorkerOnMessage = useCallback((worker) => {
    worker.onmessage = (e) => {
      scheduleIdle(() => {
        const lines = uciLinesFromWorkerData(e.data);

        for (const data of lines) {
          if (data === 'uciok') {
            uciReadyRef.current = true;
            lifecycleRef.current.onUciReady?.();
            enqueueCommand('normal', 'isready');
          }

          if (data === 'readyok') {
            readyOkRef.current = true;
            lifecycleRef.current.onReadyOk?.();
            const deferred = deferredQuickAnalyzeSendRef.current;
            if (deferred) {
              deferredQuickAnalyzeSendRef.current = null;
              deferred();
            }
          }

          const pending = quickAnalyzePendingRef.current;
          if (pending) {
            if (data.startsWith('info') && /\bscore\b/i.test(data)) {
              const evalValue = parseScoreFromInfoLine(data);
              if (evalValue != null) {
                lastQuickEvalRef.current = normalizeEval(evalValue, pending.fen);
              }
            }
            if (data.startsWith('bestmove')) {
              const parts = data.trim().split(/\s+/);
              const bm = parts[1];
              const uci = bm && bm !== '(none)' ? bm : '';
              const ev = lastQuickEvalRef.current;
              const evalScore =
                ev != null && Number.isFinite(ev) ? ev : 0;

              if (
                pending.depths &&
                pending.depthIndex < pending.depths.length - 1
              ) {
                pending.depthIndex += 1;
                const nextDepth = pending.depths[pending.depthIndex];
                lastQuickEvalRef.current = null;
                enqueueCommand('stop', 'stop');
                isSearchingRef.current = false;
                enqueueCommand('normal', 'setoption name MultiPV value 1');
                enqueueCommand('normal', `position fen ${pending.fen}`);
                enqueueCommand('normal', `go depth ${nextDepth}`);
                continue;
              }

              clearTimeout(pending.timeoutId);
              quickAnalyzePendingRef.current = null;
              const result = { evalScore, bestMoveUci: uci };
              fenCacheSet(quickAnalyzeCacheRef.current, pending.fen, result);
              pending.resolve(result);
            }
          }

          if (onMessage) onMessage(data);
        }
      });
    };

    worker.onerror = (ev) => {
      console.error('Error with Stockfish worker:', ev);
      if (quickAnalyzePendingRef.current) {
        clearTimeout(quickAnalyzePendingRef.current.timeoutId);
        const msg =
          ev?.message || (typeof ev === 'string' ? ev : 'Stockfish worker error');
        quickAnalyzePendingRef.current.reject(new Error(msg));
        quickAnalyzePendingRef.current = null;
      }
    };
  }, [onMessage, enqueueCommand]);

  const internalInitEngine = useCallback(() => {
    if (workerRef.current) return;

    uciReadyRef.current = false;
    readyOkRef.current = false;

    if (version === 'lite') {
      workerRef.current = new Worker(STOCKFISH_LITE_PATH);
    } else {
      workerRef.current = new Worker(new URL('./stockfishWorker.js', import.meta.url), { type: 'classic' });
    }

    attachWorkerOnMessage(workerRef.current);
    workerRef.current.postMessage('uci');
  }, [attachWorkerOnMessage, version]);

  /** Singleton: only creates worker if missing — do not terminate here. */
  const initEngine = useCallback(() => {
    internalInitEngine();
  }, [internalInitEngine]);

  const preloadEngine = useCallback(() => {
    internalInitEngine();
  }, [internalInitEngine]);

  const sendCommand = useCallback((cmd) => {
    if (workerRef.current) {
      enqueueCommand('normal', cmd);
    }
  }, [enqueueCommand]);

  const setOptions = useCallback((options) => {
    options.forEach(opt => {
      enqueueCommand('normal', `setoption name ${opt.name} value ${opt.value}`);
    });
  }, [enqueueCommand]);

  const setFen = useCallback((fen, moves = []) => {
    let command = `position fen ${fen}`;
    if (moves.length > 0) {
      const movesStr = moves.join(' ');
      command += ` moves ${movesStr}`;
    }
    enqueueCommand('normal', command);
  }, [enqueueCommand]);

  const stopSearch = useCallback((id) => {
    if (!workerRef.current) return;
    if (!isSearchingRef.current) return;
    enqueueCommand('stop', 'stop');
    isSearchingRef.current = false;
    if (stopTimeoutRef.current) {
      clearTimeout(stopTimeoutRef.current);
      stopTimeoutRef.current = null;
    }
  }, [enqueueCommand]);

  const startSearch = useCallback((fen) => {
    if (!engineEnabledRef.current) {
      return;
    }

    if (!workerRef.current) {
      internalInitEngine();
    }

    clearTimeout(stopTimeoutRef.current);
    stopSearch('pre startSearch');

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
    searchTimeoutRef.current = setTimeout(() => {
      isSearchingRef.current = true;
      enqueueCommand('normal', `position fen ${fen}`);
      enqueueCommand('normal', 'go infinite');

      stopTimeoutRef.current = setTimeout(() => {
        stopSearch('startSearch timer expire');
      }, autoStopTime);
    }, 50);
  }, [autoStopTime, stopSearch, enqueueCommand, internalInitEngine]);

  const terminateEngine = useCallback(() => {
    uciReadyRef.current = false;
    readyOkRef.current = false;
    deferredQuickAnalyzeSendRef.current = null;
    if (quickAnalyzePendingRef.current) {
      clearTimeout(quickAnalyzePendingRef.current.timeoutId);
      quickAnalyzePendingRef.current.reject(new Error('Engine terminated'));
      quickAnalyzePendingRef.current = null;
    }
    if (workerRef.current) {
      workerRef.current.terminate();
      workerRef.current = null;
    }
    isSearchingRef.current = false;
    if (stopTimeoutRef.current) {
      clearTimeout(stopTimeoutRef.current);
      stopTimeoutRef.current = null;
    }
  }, []);

  const syncEnabledState = useCallback((enabled) => {
    engineEnabledRef.current = enabled;
    if (!enabled) {
      if (quickAnalyzePendingRef.current) {
        clearTimeout(quickAnalyzePendingRef.current.timeoutId);
        quickAnalyzePendingRef.current.reject(new Error('Engine disabled'));
        quickAnalyzePendingRef.current = null;
      }
      stopSearch('permission revoked');
      /** Keep worker alive (singleton) — do not terminate on toggle off. */
    }
  }, [stopSearch]);

  const DEFAULT_QUICK_ANALYZE_DEPTH = 8;
  const DEFAULT_QUICK_ANALYZE_TIMEOUT_MS = 120000;

  /**
   * @param {string} fen
   * @param {{ timeoutMs?: number; depth?: number; progressiveDepths?: number[]; skipCache?: boolean }} [options]
   */
  const quickAnalyzeFen = useCallback((fen, options = {}) => {
    const skipCache = options.skipCache === true;
    if (!skipCache && fen) {
      const hit = fenCacheGet(quickAnalyzeCacheRef.current, fen);
      if (hit) {
        return Promise.resolve(hit);
      }
    }

    const progressiveDepths =
      Array.isArray(options.progressiveDepths) && options.progressiveDepths.length > 0
        ? options.progressiveDepths.map((d) => Math.min(24, Math.max(1, d)))
        : null;

    const depth =
      typeof options.depth === 'number' && options.depth > 0
        ? Math.min(24, options.depth)
        : DEFAULT_QUICK_ANALYZE_DEPTH;
    const timeoutMs =
      typeof options.timeoutMs === 'number' && options.timeoutMs > 0
        ? options.timeoutMs
        : DEFAULT_QUICK_ANALYZE_TIMEOUT_MS;

    return new Promise((resolve, reject) => {
      if (!engineEnabledRef.current) {
        reject(new Error('Engine disabled'));
        return;
      }
      if (quickAnalyzePendingRef.current) {
        const stale = quickAnalyzePendingRef.current;
        clearTimeout(stale.timeoutId);
        stale.reject(new Error('Superseded'));
        quickAnalyzePendingRef.current = null;
      }
      deferredQuickAnalyzeSendRef.current = null;

      if (!workerRef.current) {
        internalInitEngine();
      }
      if (!workerRef.current) {
        reject(new Error('Worker unavailable'));
        return;
      }

      lastQuickEvalRef.current = null;
      const timeoutId = setTimeout(() => {
        if (quickAnalyzePendingRef.current) {
          const p = quickAnalyzePendingRef.current;
          quickAnalyzePendingRef.current = null;
          p.reject(new Error('Quick analyze timeout'));
        }
      }, timeoutMs);

      const depths = progressiveDepths || [depth];
      const firstDepth = depths[0];

      quickAnalyzePendingRef.current = {
        resolve,
        reject,
        fen,
        timeoutId,
        depths: progressiveDepths || null,
        depthIndex: 0,
      };

      const sendQuickAnalyzeCommands = () => {
        enqueueCommand('stop', 'stop');
        isSearchingRef.current = false;
        enqueueCommand('normal', 'setoption name MultiPV value 1');
        enqueueCommand('normal', `position fen ${fen}`);
        enqueueCommand('normal', `go depth ${firstDepth}`);
      };

      const runAfterEngineReady = () => {
        setTimeout(sendQuickAnalyzeCommands, 50);
      };

      if (uciReadyRef.current && readyOkRef.current) {
        runAfterEngineReady();
      } else {
        deferredQuickAnalyzeSendRef.current = runAfterEngineReady;
      }
    });
  }, [enqueueCommand, internalInitEngine]);

  useEffect(() => {
    return () => {
      if (quickAnalyzePendingRef.current) {
        clearTimeout(quickAnalyzePendingRef.current.timeoutId);
        quickAnalyzePendingRef.current.reject(new Error('Unmounted'));
        quickAnalyzePendingRef.current = null;
      }
      terminateEngine();
    };
  }, [terminateEngine]);

  return {
    initEngine,
    preloadEngine,
    setOptions,
    setFen,
    startSearch,
    stopSearch,
    terminateEngine,
    syncEnabledState,
    quickAnalyzeFen,
  };
}
