import React, {
  createContext,
  useContext,
  useRef,
  useCallback,
  useState,
  useEffect,
  useMemo,
  type ReactNode,
} from 'react';
import useStockfish from '../engine/useStockfish';

/* ---------------------------------- */ 
/* Types */ 
/* ---------------------------------- */ 
type StockfishMessageHandler = (data: string) => void; interface StockfishProviderProps { 
  children: ReactNode; 
}

/* ---------------------------------- */ 
/* Context */ 
/* ---------------------------------- */ 
// We initialize this later through the provider. 
// // undefined is useful because it forces consumers to use the provider. 
type StockfishContextValue = ReturnType<typeof useStockfish> & { 
  setOnMessage: (handler: StockfishMessageHandler) => void; 
  engineUciOk: boolean; 
  engineReadyOk: boolean; 
  engineWarmupPercent: number; 
};

const StockfishContext = createContext<StockfishContextValue | undefined>( undefined );

export const useStockfishContext = (): StockfishContextValue => { 
  const context = useContext(StockfishContext); 
  if (!context) { 
    throw new Error( "useStockfishContext must be used inside StockfishProvider" ); 
  } return context; 
};

const StockfishProvider = ({ children, }: StockfishProviderProps) => { 
  const onMessageRef = useRef<StockfishMessageHandler | null>(null); 
  const [engineUciOk, setEngineUciOk] = useState<boolean>(false); 
  const [engineReadyOk, setEngineReadyOk] = useState<boolean>(false); 
  const handleMessage = useCallback( (data: string): void => { 
    if (onMessageRef.current) { onMessageRef.current(data); 

    } 
  }, [] );

  const stockfish = useStockfish(handleMessage, "lite", 8000, 
    { onUciReady: () => setEngineUciOk(true), 
      onReadyOk: () => setEngineReadyOk(true), 
    });

  const { preloadEngine } = stockfish;

useEffect(() => { 
  const runPreload = (): void => { preloadEngine(); }; 
  if ( typeof window !== "undefined" && typeof window.requestIdleCallback === "function" ) 
    { 
      const idleId = window.requestIdleCallback(runPreload, { timeout: 1200, }); 
      return () => { window.cancelIdleCallback?.(idleId); }; 
    } 
    const timeoutId = setTimeout(runPreload, 900); 
    return () => clearTimeout(timeoutId); 
  }, [preloadEngine]);

  /** Stages: worker + UCI (33%) → uciok (66%) → readyok (100%, banner hidden). */
  const engineWarmupPercent = useMemo((): number => { 
    if (engineReadyOk) { return 100; } 
    if (engineUciOk) { return 66; } 
    return 33; 
  }, [engineUciOk, engineReadyOk]);

  const setOnMessage = useCallback( (handler: StockfishMessageHandler): void => { 
      onMessageRef.current = handler; }, [] 
    );

    const contextValue = useMemo<StockfishContextValue>(() => ({
      ...stockfish,
      setOnMessage,
      engineUciOk,
      engineReadyOk,
      engineWarmupPercent,
    }), [
      stockfish,
      setOnMessage,
      engineUciOk,
      engineReadyOk,
      engineWarmupPercent,
    ]);
    return ( <StockfishContext.Provider value={contextValue}> {children} </StockfishContext.Provider> ); 
  }; 
  
  export default StockfishProvider;

  // useEffect(() => {
  //   const runPreload = () => {
  //     preloadEngine();
  //   };

  //   if (typeof window !== 'undefined' && typeof window.requestIdleCallback === 'function') {
  //     const idleId = window.requestIdleCallback(runPreload, { timeout: 1200 });
  //     return () => {
  //       window.cancelIdleCallback?.(idleId);
  //     };
  //   }

  //   const timeoutId = setTimeout(runPreload, 900);
  //   return () => clearTimeout(timeoutId);
  // }, [preloadEngine]);

