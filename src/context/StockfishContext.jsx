import React, {
  createContext,
  useContext,
  useRef,
  useCallback,
  useState,
  useEffect,
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
      }}
    >
      {children}
    </StockfishContext.Provider>
  );
};

export default StockfishProvider;
