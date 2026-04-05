import React, {
  createContext,
  useContext,
  useRef,
  useCallback,
  useState,
  useEffect,
  useMemo,
} from 'react';
import useStockfish from '../engine/useStockfish';

const StockfishContext = createContext();
export const useStockfishContext = () => useContext(StockfishContext);

const StockfishProvider = ({ children }) => {
  const onMessageRef = useRef(null);
  const [engineUciOk, setEngineUciOk] = useState(false);
  const [engineReadyOk, setEngineReadyOk] = useState(false);

  const handleMessage = useCallback((data) => {
    if (onMessageRef.current) {
      onMessageRef.current(data);
    }
  }, []);

  const stockfish = useStockfish(handleMessage, 'lite', 8000, {
    onUciReady: () => setEngineUciOk(true),
    onReadyOk: () => setEngineReadyOk(true),
  });

  const { preloadEngine } = stockfish;

  useEffect(() => {
    preloadEngine();
  }, [preloadEngine]);

  /** Stages: worker + UCI (33%) → uciok (66%) → readyok (100%, banner hidden). */
  const engineWarmupPercent = useMemo(() => {
    if (engineReadyOk) return 100;
    if (engineUciOk) return 66;
    return 33;
  }, [engineUciOk, engineReadyOk]);

  const setOnMessage = useCallback((handler) => {
    onMessageRef.current = handler;
  }, []);

  return (
    <StockfishContext.Provider
      value={{
        ...stockfish,
        setOnMessage,
        engineUciOk,
        engineReadyOk,
        engineWarmupPercent,
      }}
    >
      {children}
    </StockfishContext.Provider>
  );
};

export default StockfishProvider;
