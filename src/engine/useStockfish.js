import { useEffect, useRef, useCallback } from 'react';

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

    if (version === 'lite') {
      workerRef.current = new Worker('/chess-frontend/stockfish/stockfish-17-lite-single.js');
    } else {
      workerRef.current = new Worker(new URL('../workers/stockfishWorker.js', import.meta.url), { type: 'classic' });
    }

    workerRef.current.postMessage('uci');
    console.log("Initializing worker ...");

    workerRef.current.onmessage = (e) => {
      const data = e.data;
      if (onMessage) onMessage(data);

      if (typeof data === 'string') {
        if (data === 'readyok' || data.startsWith('bestmove')) {
          isEngineReadyRef.current = true;
        }else if (data.startsWith('info') && data.includes('score')) {
          const match = data.match(/score (cp|mate) (-?\d+)/);
          if (match) {
            const type = match[1];
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

    workerRef.current.onerror = (error) => {
      console.error('Error with Stockfish worker:', error);
    };
  }, [onMessage, version]);

  // Initialize Stockfish
  const initEngine = useCallback(() => {
    if (workerRef.current) workerRef.current.terminate();

    if (version === 'lite') {
      workerRef.current = new Worker('/chess-frontend/stockfish/stockfish-17-lite-single.js');
    } else {
      workerRef.current = new Worker(new URL('../workers/stockfishWorker.js', import.meta.url), {
        type: 'classic',
      });
    }

    workerRef.current.postMessage('uci');
    console.log("Intialising worker ...");

    workerRef.current.onmessage = (e) => {
      const data = e.data;

      // Normal message handler
      if (onMessage) onMessage(data);

      // Resolve score when bestmove comes
      if (typeof data === 'string') {
        if (data === 'readyok' || data.startsWith('bestmove')) {
          isEngineReadyRef.current = true;
        } else if (data.startsWith('info') && data.includes('score')) {
          const match = data.match(/score (cp|mate) (-?\d+)/);
          if (match) {
            const type = match[1];
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

    workerRef.current.onerror = (error) => {
      console.error('Error with Stockfish worker:', error);
    };
  }, [onMessage, version]);

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
    console.log("Attempt stopSearch..", id);
    if (!workerRef.current) return;
    console.log("try stopSearch ...", id);
    if (!isSearchingRef.current) return;
    console.log("Interrupting current search...", id);
    enqueueCommand('stop', 'stop');
    isSearchingRef.current = false;
    if (stopTimeoutRef.current) {
      clearTimeout(stopTimeoutRef.current);
      stopTimeoutRef.current = null;
    }
  }, []);

  const startSearch = useCallback((fen) => {
    if (!engineEnabledRef.current) {
      console.warn("Engine disabled. Search not started.");
      return;
    }
    
    if (!workerRef.current) {
      console.log("Starting engine on demand...");
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
    if (!enabled) {
      console.log("Permission revoked: stopping engine");
      stopSearch("permission revoked");
      terminateEngine();
    } else {
      console.log("Permission granted: engine allowed to start if needed");
    }
  }, [stopSearch, terminateEngine]);

  useEffect(() => {
    return () => {
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
  };
}
