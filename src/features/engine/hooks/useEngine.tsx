import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { createEngine } from '../services/EngineManager';
import type { ChessEngine, EngineKind, EngineStatus } from '../services/types';

type EngineContextValue = {
  engine: ChessEngine;
  engineReadyOk: boolean;
  engineWarmupPercent: number;
  engineStatus: EngineStatus;
};

const EngineContext = createContext<EngineContextValue | undefined>(undefined);

export const useChessEngineContext = (): EngineContextValue => {
  const context = useContext(EngineContext);
  if (!context) {
    throw new Error('useChessEngineContext must be used inside EngineProvider');
  }
  return context;
};

/** @deprecated Use useChessEngineContext */
export const useStockfishContext = useChessEngineContext;

type EngineProviderProps = {
  children: ReactNode;
  kind?: EngineKind;
};

const EngineProvider = ({ children, kind = 'stockfish-lite' }: EngineProviderProps) => {
  const engineRef = useRef<ChessEngine | null>(null);
  if (!engineRef.current) {
    engineRef.current = createEngine(kind, { autoStopMs: 8000 });
  }
  const engine = engineRef.current;

  const [engineStatus, setEngineStatus] = useState<EngineStatus>(engine.getStatus());
  const [engineReadyOk, setEngineReadyOk] = useState(false);
  const [engineWarmupPercent, setEngineWarmupPercent] = useState(33);

  useEffect(() => {
    const unsubscribe = engine.subscribe((event) => {
      if (event.type !== 'status') {
        return;
      }
      setEngineStatus(event.status);
      setEngineReadyOk(event.ready);
      setEngineWarmupPercent(event.warmupPercent);
    });

    const runPreload = (): void => {
      engine.start();
    };

    let cancelPreload: (() => void) | undefined;
    if (typeof window !== 'undefined' && typeof window.requestIdleCallback === 'function') {
      const idleId = window.requestIdleCallback(runPreload, { timeout: 1200 });
      cancelPreload = () => {
        window.cancelIdleCallback?.(idleId);
      };
    } else {
      const timeoutId = setTimeout(runPreload, 900);
      cancelPreload = () => clearTimeout(timeoutId);
    }

    return () => {
      cancelPreload?.();
      unsubscribe();
      engine.dispose();
    };
  }, [engine]);

  const contextValue = useMemo<EngineContextValue>(
    () => ({
      engine,
      engineReadyOk,
      engineWarmupPercent,
      engineStatus,
    }),
    [engine, engineReadyOk, engineWarmupPercent, engineStatus],
  );

  return <EngineContext.Provider value={contextValue}>{children}</EngineContext.Provider>;
};

export default EngineProvider;
