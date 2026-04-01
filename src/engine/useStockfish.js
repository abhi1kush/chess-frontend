import { useEffect, useRef, useCallback } from 'react';
import { normalizeEval } from '../utils/onMessage';

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

export default function useStockfish(onMessage, version = 'lite', autoStopTime = 8000) {
  const workerRef = useRef(null);
  const resolveRef = useRef(null);
  const stopTimeoutRef = useRef(null);
  const searchTimeoutRef = useRef(null);
  const isSearchingRef = useRef(false);
  const commandQueueRef = useRef([]);
  const isEngineReadyRef = useRef(true);
  const queueRunningRef = useRef(false);
  const engineEnabledRef = useRef(false);
  const quickAnalyzePendingRef = useRef(null);
  const lastQuickEvalRef = useRef(null);
  /** False until we see `uciok` — commands sent before that are ignored by Stockfish. */
  const uciReadyRef = useRef(false);
  /** Run after `uciok` when quick-analyze was queued before the engine was ready. */
  const deferredQuickAnalyzeSendRef = useRef(null);

  const processQueue = useCallback(() => {
    if (queueRunningRef.current || !workerRef.current) return;

    queueRunningRef.current = true;

    while (commandQueueRef.current.length > 0) {
      // Prioritize stop commands first
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
      const lines = uciLinesFromWorkerData(e.data);

      for (const data of lines) {
        if (data === 'uciok') {
          uciReadyRef.current = true;
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
            clearTimeout(pending.timeoutId);
            quickAnalyzePendingRef.current = null;
            const evalScore =
              ev != null && Number.isFinite(ev) ? ev : 0;
            pending.resolve({
              evalScore,
              bestMoveUci: uci,
            });
          }
        }

        if (onMessage) onMessage(data);

        if (data === 'readyok' || data.startsWith('bestmove')) {
          isEngineReadyRef.current = true;
        } else if (data.startsWith('info') && /\bscore\b/i.test(data)) {
          const match = data.match(/\bscore\s+(cp|mate)\s+(-?\d+)/i);
          if (match) {
            const type = match[1].toLowerCase();
            const value = parseInt(match[2], 10);
            const evalScore = type === 'cp' ? value / 100 : (value > 0 ? 10 : -10);
            if (resolveRef.current) {
              resolveRef.current(evalScore);
              resolveRef.current = null;
            }
          }
        }
      }
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
  }, [onMessage]);

  // const processNextCommand = () => {
  //   if (!workerRef.current || !isEngineReadyRef.current) return;

  //   // Prioritize 'stop' type commands
  //   const stopIndex = commandQueueRef.current.findIndex(c => c.type === 'stop');
  //   const nextCommand = stopIndex !== -1
  //     ? commandQueueRef.current.splice(stopIndex, 1)[0]
  //     : commandQueueRef.current.shift();

  //   if (nextCommand) {
  //     isEngineReadyRef.current = false;
  //     workerRef.current.postMessage(nextCommand.cmd);
  //   }
  // };

  const internalInitEngine = useCallback(() => {
    if (workerRef.current) return;

    uciReadyRef.current = false;

    if (version === 'lite') {
      workerRef.current = new Worker(STOCKFISH_LITE_PATH);
    } else {
      workerRef.current = new Worker(new URL('./stockfishWorker.js', import.meta.url), { type: 'classic' });
    }

    attachWorkerOnMessage(workerRef.current);
    workerRef.current.postMessage('uci');
    console.log("Initializing worker ...");
  }, [attachWorkerOnMessage, version]);

  // Initialize Stockfish
  const initEngine = useCallback(() => {
    if (workerRef.current) workerRef.current.terminate();

    uciReadyRef.current = false;

    if (version === 'lite') {
      workerRef.current = new Worker(STOCKFISH_LITE_PATH);
    } else {
      workerRef.current = new Worker(new URL('./stockfishWorker.js', import.meta.url), {
        type: 'classic',
      });
    }

    attachWorkerOnMessage(workerRef.current);
    workerRef.current.postMessage('uci');
    // console.log("Intialising worker ...");
  }, [attachWorkerOnMessage, version]);

  // Send command to Stockfish
  const sendCommand = useCallback((cmd) => {
    if (workerRef.current) {
      enqueueCommand('normal', cmd);
    }
  }, []);

  // Set UCI options
  const setOptions = useCallback((options) => {
    options.forEach(opt => {
      enqueueCommand('normal', `setoption name ${opt.name} value ${opt.value}`);
    });
  }, [sendCommand]);

  // Set position (fen and moves)
  const setFen = useCallback((fen, moves = []) => {
    let command = `position fen ${fen}`;
    if (moves.length > 0) {
      const movesStr = moves.join(' ');
      command += ` moves ${movesStr}`;
    }
    enqueueCommand('normal', command);
  }, [sendCommand]);

    // Stop search
  const stopSearch = useCallback((id) => {
    // console.log("Attempt stopSearch..", id);
    if (!workerRef.current) return;
    // console.log("try stopSearch ...", id);
    if (!isSearchingRef.current) return;
    // console.log("Interrupting current search...", id);
    enqueueCommand('stop', 'stop');
    isSearchingRef.current = false;
    if (stopTimeoutRef.current) {
      clearTimeout(stopTimeoutRef.current);
      stopTimeoutRef.current = null;
    }
  }, []);

  const startSearch = useCallback((fen) => {
    if (!engineEnabledRef.current) {
      return;
    }
    
    if (!workerRef.current) {
      // console.log("Starting engine on demand...");
      internalInitEngine();
    }

    clearTimeout(stopTimeoutRef.current); // clear any existing timeout
    stopSearch("pre startSearch"); 

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    } 
    searchTimeoutRef.current = setTimeout(() => {  
      isSearchingRef.current = true;                     // Always stop the previous search
      enqueueCommand('normal', `position fen ${fen}`);
      enqueueCommand('normal', "go infinite");

      // Auto-stop after X milliseconds
      stopTimeoutRef.current = setTimeout(() => {
        stopSearch("startSearch timer expire");
      }, autoStopTime);}, 50);
  }, [autoStopTime, stopSearch]);

  const terminateEngine = useCallback(() => {
    uciReadyRef.current = false;
    deferredQuickAnalyzeSendRef.current = null;
    if (quickAnalyzePendingRef.current) {
      clearTimeout(quickAnalyzePendingRef.current.timeoutId);
      quickAnalyzePendingRef.current.reject(new Error('Engine terminated'));
      quickAnalyzePendingRef.current = null;
    }
    if (workerRef.current) {
      // console.log("Terminating worker...");
      workerRef.current.terminate();
      workerRef.current = null;
    }
    isSearchingRef.current = false;
    isEngineReadyRef.current = true;
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
      stopSearch("permission revoked");
      terminateEngine();
    }
  }, [stopSearch, terminateEngine]);

  /** Depth search — slower but reliably emits `info` + `score` before `bestmove`. */
  const QUICK_ANALYZE_DEPTH = 14;

  const quickAnalyzeFen = useCallback((fen) => {
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
      }, 60000);

      quickAnalyzePendingRef.current = {
        resolve,
        reject,
        fen,
        timeoutId,
      };

      const sendQuickAnalyzeCommands = () => {
        enqueueCommand('stop', 'stop');
        isSearchingRef.current = false;
        enqueueCommand('normal', 'setoption name MultiPV value 1');
        enqueueCommand('normal', `position fen ${fen}`);
        enqueueCommand('normal', `go depth ${QUICK_ANALYZE_DEPTH}`);
      };

      const runAfterUciReady = () => {
        setTimeout(sendQuickAnalyzeCommands, 50);
      };

      if (uciReadyRef.current) {
        runAfterUciReady();
      } else {
        deferredQuickAnalyzeSendRef.current = runAfterUciReady;
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
  }, []);

  return {
    initEngine,
    setOptions,
    setFen,
    startSearch,
    stopSearch,
    terminateEngine,
    syncEnabledState,
    quickAnalyzeFen,
  };
}
