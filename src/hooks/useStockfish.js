import { useEffect, useRef, useCallback } from 'react';

export default function useStockfish(onMessage, version = 'lite', autoStopTime = 8000) {
  const workerRef = useRef(null);
  const resolveRef = useRef(null);
  const stopTimeoutRef = useRef(null);
  let startTime = Date.now();


  // Initialize Stockfish
  const initEngine = useCallback(() => {
    if (workerRef.current) workerRef.current.terminate();

    if (version === 'lite') {
      workerRef.current = new Worker('/stockfish/stockfish-17-lite-single.js');
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
        if (data.startsWith('info') && data.includes('score')) {
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
        const endTime = Date.now();
        console.log(`Elapsed: ${endTime - startTime} ms`);
        console.log("onMsg :", data);
      }
    };
  }, [onMessage, version]);

  // Send command to Stockfish
  const sendCommand = useCallback((cmd) => {
    if (workerRef.current) {
      workerRef.current.postMessage(cmd);
    }
  }, []);

  // Set UCI options
  const setOptions = useCallback((options) => {
    options.forEach(opt => {
      sendCommand(`setoption name ${opt.name} value ${opt.value}`);
    });
  }, [sendCommand]);

  // Set position (fen and moves)
  const setFen = useCallback((fen, moves = []) => {
    let command = `position fen ${fen}`;
    if (moves.length > 0) {
      const movesStr = moves.join(' ');
      command += ` moves ${movesStr}`;
    }
    sendCommand(command);
  }, [sendCommand]);

  const startSearch = useCallback((fen) => {
    if (!workerRef.current) return;

    clearTimeout(stopTimeoutRef.current); // clear any existing timeout
    
    stopSearch();                         // Always stop the previous search
    startTime = Date.now();
    sendCommand(`position fen ${fen}`);
    sendCommand("go infinite");

    // Auto-stop after X milliseconds
    stopTimeoutRef.current = setTimeout(() => {
      stopSearch();
    }, autoStopTime);
  }, [sendCommand, autoStopTime]);

  // Stop search
  const stopSearch = useCallback(() => {
    sendCommand('stop');
    clearTimeout(stopTimeoutRef.current);
  }, [sendCommand]);

  const terminateEngine = useCallback(() => {
    if (workerRef.current) {
      console.log("Terminating worker...");
      workerRef.current.terminate();
      workerRef.current = null;
    }
    clearTimeout(stopTimeoutRef.current);
  }, []);

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
    startSearch,
    terminateEngine,
  };
}
