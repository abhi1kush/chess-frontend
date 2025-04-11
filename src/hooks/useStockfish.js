import { useEffect, useRef, useCallback } from 'react';

export default function useStockfish(onMessage, version = 'lite') {
  const workerRef = useRef(null);

  useEffect(() => {
    if (version === 'lite') {
      workerRef.current = new Worker('/stockfish/stockfish-17-lite-single.js') 
    } else {
      workerRef.current = new Worker(new URL('../workers/stockfishWorker.js', import.meta.url), {
        type: 'classic',
      });
    }

    workerRef.current.postMessage('init');
    workerRef.current.onmessage = (e) => {
      if (onMessage) onMessage(e.data);
    };

    return () => {
      workerRef.current.terminate();
    };
  }, [onMessage]);

  const sendCommand = useCallback((cmd) => {
    if (workerRef.current) {
      workerRef.current.postMessage(cmd);
    }
  }, []);

  return { sendCommand };
}

