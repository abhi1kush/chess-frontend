import React, { createContext, useContext, useRef, useCallback } from 'react';
import useStockfish from '../engine/useStockfish';

const StockfishContext = createContext();
export const useStockfishContext = () => useContext(StockfishContext);

const StockfishProvider = ({ children }) => {
  const onMessageRef = useRef(null);

  const handleMessage = useCallback((data) => {
    if (onMessageRef.current) {
      onMessageRef.current(data);
    }
  }, []);

  const stockfish = useStockfish(handleMessage);

  const setOnMessage = useCallback((handler) => {
    onMessageRef.current = handler;
  }, []);

  return (
    <StockfishContext.Provider value={{ ...stockfish, setOnMessage }}>
      {children}
    </StockfishContext.Provider>
  );
};

export default StockfishProvider; 
