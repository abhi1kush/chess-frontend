import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { useSelector } from 'react-redux';
import { createEngine, resolvePreferredEngineKind } from '../services/EngineManager';
import type { ChessEngine, EngineKind, EngineStatus } from '../services/types';
import type { RootState } from '../../../app/rootReducer';

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

const EngineProvider = ({ children, kind: kindOverride }: EngineProviderProps) => {
  const preferredKind = useSelector((state: RootState) => state.settings.engineKind);
  const resolvedKind = kindOverride ?? resolvePreferredEngineKind(preferredKind);

  const engineRef = useRef<ChessEngine | null>(null);
  if (!engineRef.current) {
    engineRef.current = createEngine(resolvedKind, { autoStopMs: 8000 });
  }

  const [engine, setEngine] = useState<ChessEngine>(engineRef.current);
  const [engineStatus, setEngineStatus] = useState<EngineStatus>(engine.getStatus());
  const [engineReadyOk, setEngineReadyOk] = useState(false);
  const [engineWarmupPercent, setEngineWarmupPercent] = useState(33);

  useEffect(() => {
    let instance = engineRef.current;
    if (!instance || instance.getKind() !== resolvedKind) {
      instance?.dispose();
      instance = createEngine(resolvedKind, { autoStopMs: 8000 });
      engineRef.current = instance;
      setEngine(instance);
      setEngineStatus(instance.getStatus());
      setEngineReadyOk(false);
      setEngineWarmupPercent(33);
    }

    const unsubscribe = instance.subscribe((event) => {
      if (event.type !== 'status') {
        return;
      }
      setEngineStatus(event.status);
      setEngineReadyOk(event.ready);
      setEngineWarmupPercent(event.warmupPercent);
    });

    const runPreload = (): void => {
      const rec = instance.getRecommendedConfig();
      console.log(
        `[engine] using ${instance.getKind()} (${rec.threads ?? 1} threads, ${rec.hashMb ?? 16}MB hash)`,
      );
      instance.start();
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
    };
  }, [resolvedKind]);

  useEffect(() => {
    return () => {
      engineRef.current?.dispose();
      engineRef.current = null;
    };
  }, []);

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
