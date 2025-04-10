import { useEffect, useRef, useCallback } from 'react';

export default function useStockfish(onMessage) {
  const workerRef = useRef(null);

  useEffect(() => {
    workerRef.current = new Worker(new URL('../workers/stockfishWorker.js', import.meta.url), {
      type: 'classic',
    });

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

