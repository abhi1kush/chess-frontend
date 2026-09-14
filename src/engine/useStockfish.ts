import { useEffect, useRef, useCallback } from 'react';
import { normalizeEval } from '../utils/onMessage';
import { fenCacheGet, fenCacheSet } from './stockfishFenCache';

type ImportMetaEnv = { readonly BASE_URL?: string };

const baseUrl = ((import.meta as ImportMeta & { env?: ImportMetaEnv }).env?.BASE_URL ?? '/');
const STOCKFISH_LITE_PATH = `${baseUrl}stockfish/stockfish-17-lite-single.js`;

/* ---------------------------------- */ 
/* Types */ 
/* ---------------------------------- */ 
type EngineVersion = "lite" | string; 
type LifecycleCallbacks = { onUciReady?: () => void; 
  onReadyOk?: () => void; 
}; 

type StockfishOptions = { 
    timeoutMs?: number; 
    depth?: number; 
    progressiveDepths?: number[]; 
    skipCache?: boolean; 
  }; 
  
type CommandType = "normal" | "stop"; 
type Command = { 
    type: CommandType; 
    cmd: string; 
  }; 

type QuickAnalyzeResult = { 
    evalScore: number; 
    bestMoveUci: string; 
  };
type QuickAnalyzePending = { 
  resolve: (result: QuickAnalyzeResult) => void; 
  reject: (error: Error) => void; 
  fen: string; 
  timeoutId: ReturnType<typeof setTimeout>; 
  depths: number[] | null; 
  depthIndex: number; 
}; 

type StockfishMessageHandler = (data: string) => void; 

type StockfishWorker = Worker;

/* ---------------------------------- */ 
/* UCI Helpers */ 
/* ---------------------------------- */ 
/** Stockfish may send several UCI lines in one postMessage; split before parsing. */ 
function uciLinesFromWorkerData(raw: unknown): string[] { 
  if (raw == null) { 
    return []; 
  } 
  
  if (typeof raw === "string") { 
    return raw .split(/\r?\n/) .map((line) => line.trim()) .filter(Boolean); 
  } 
  
  if ( typeof ArrayBuffer !== "undefined" && raw instanceof ArrayBuffer ) { 
    return uciLinesFromWorkerData( new TextDecoder().decode(raw) ); 
  } 
  
  if ( ArrayBuffer.isView && ArrayBuffer.isView(raw) ) { 
    return uciLinesFromWorkerData( new TextDecoder().decode( raw.buffer.slice( raw.byteOffset, raw.byteOffset + raw.byteLength ) ) ); 
  } 
  
  if (Array.isArray(raw)) {
  const lines: string[] = [];

  for (const item of raw) {
    lines.push(...uciLinesFromWorkerData(item));
  }
    return lines;
  }
  
  if ( typeof raw === "object" && raw !== null && "data" in raw && typeof raw.data === "string" ) { 
    return uciLinesFromWorkerData(raw.data); 
  } 
  const value = String(raw).trim(); 
  return value ? [value] : []; 
} /** UCI `info` lines: allow tabs / variable spacing. */ 

function parseScoreFromInfoLine( line: string ): number | null { 
  const match = line.match( /\bscore\s+(cp|mate)\s+(-?\d+)/i ); 
  if (!match) { 
    return null; 
  } 
  const type = match[1].toLowerCase(); 
  const value = parseInt(match[2], 10); 
  if (Number.isNaN(value)) { 
    return null; 
  } 
  const evalValue = type === "cp" ? value / 100 : value > 0 ? 10 : -10; 
  return evalValue; 
} 
  
function scheduleIdle( fn: () => void ): void { 
  if ( typeof requestIdleCallback !== "undefined" ) { 
    requestIdleCallback(fn, { timeout: 48, }); 
  } else { 
    queueMicrotask(fn);     
  } 
}

/**
 * @param {((data: string) => void) | null | undefined} onMessage
 * @param {'lite' | string} [version]
 * @param {number} [autoStopTime]
 * @param {{ onUciReady?: () => void; onReadyOk?: () => void }} [lifecycle]
 */

/* ---------------------------------- */ 
/* Hook */ 
/* ---------------------------------- */
export default function useStockfish( 
  onMessage: StockfishMessageHandler | null | undefined, 
  version: EngineVersion = "lite", 
  autoStopTime: number = 8000, 
  lifecycle: LifecycleCallbacks = {} ) 
  { 
    /* ---------------------------------- */ 
    /* Lifecycle */ 
    /* ---------------------------------- */ 
    const lifecycleRef = useRef<LifecycleCallbacks>(lifecycle); 
    lifecycleRef.current = lifecycle; 
    
    /* ---------------------------------- */ 
    /* Engine Refs */ 
    /* ---------------------------------- */ 
    const workerRef = useRef<StockfishWorker | null>(null); 
    const stopTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>( null ); 
    const searchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>( null ); 
    const isSearchingRef = useRef<boolean>(false); 
    const commandQueueRef = useRef<Command[]>([]); 
    const queueRunningRef = useRef<boolean>(false); 
    const engineEnabledRef = useRef<boolean>(false); 
    const quickAnalyzePendingRef = useRef<QuickAnalyzePending | null>(null); 
    const lastQuickEvalRef = useRef<number | null>(null); 
    const uciReadyRef = useRef<boolean>(false); 
    const readyOkRef = useRef<boolean>(false); 
    const deferredQuickAnalyzeSendRef = useRef<(() => void) | null>(null); 
    const quickAnalyzeCacheRef = useRef<Map<string, QuickAnalyzeResult>>( new Map() ); 
    /* ---------------------------------- */ 
    /* Command Queue */ 
    /* ---------------------------------- */ 
    const processQueue = useCallback((): void => { 
      if ( queueRunningRef.current || !workerRef.current ) { 
        return; 
      } 
      queueRunningRef.current = true; 
      
      while (commandQueueRef.current.length > 0) { 
        const stopCmdIndex = commandQueueRef.current.findIndex( (item) => item.type === "stop" ); 
        const cmdObj = stopCmdIndex >= 0 ? commandQueueRef.current.splice( stopCmdIndex, 1 )[0] : commandQueueRef.current.shift(); 
        if (cmdObj) { 
          workerRef.current.postMessage( cmdObj.cmd ); 
        } 
      } 
      
      queueRunningRef.current = false; 
    }, []); 
    
    const enqueueCommand = useCallback( 
      ( type: CommandType, cmd: string ): void => { 
        commandQueueRef.current.push({ type, cmd, }); 
        processQueue(); 
      }, [processQueue] ); 
      
      /* ---------------------------------- */ 
      /* Worker Message Handler */ 
      /* ---------------------------------- */ 
      
      const attachWorkerOnMessage = useCallback( 
        (worker: StockfishWorker): void => { 
          worker.onmessage = ( event: MessageEvent ): void => { 
            scheduleIdle(() => { 
              const lines = uciLinesFromWorkerData(event.data); 
              for (const data of lines) { 
                /* -------------------------- */ 
                /* UCI Ready */ 
                /* -------------------------- */ 
                
                if (data === "uciok") { 
                  uciReadyRef.current = true; 
                  lifecycleRef.current .onUciReady?.(); enqueueCommand( "normal", "isready" ); 
                } 
                
                /* -------------------------- */ 
                /* Engine Ready */ 
                /* -------------------------- */ 
                
                if (data === "readyok") { 
                  readyOkRef.current = true; 
                  lifecycleRef.current .onReadyOk?.(); 
                  const deferred = deferredQuickAnalyzeSendRef.current; 
                  if (deferred) { 
                    deferredQuickAnalyzeSendRef.current = null; 
                    deferred(); 
                  } 
                } 
                
                /* -------------------------- */ 
                /* Quick Analysis */ 
                /* -------------------------- */ 
                
                const pending = quickAnalyzePendingRef.current; 
                if (pending) { 
                  if ( data.startsWith("info") && /\bscore\b/i.test(data) ) { 
                    const evalValue = parseScoreFromInfoLine(data); 
                    if (evalValue !== null) { 
                      lastQuickEvalRef.current = normalizeEval( evalValue, pending.fen ); 
                    } 
                  } 
                  if (data.startsWith("bestmove")) { 
                    const parts = data .trim() .split(/\s+/); 
                    const bm = parts[1]; 
                    const uci = bm && bm !== "(none)" ? bm : ""; 
                    const ev = lastQuickEvalRef.current; 
                    const evalScore = ev !== null && Number.isFinite(ev) ? ev : 0; 
                    
                    /* ------------------------ */ 
                    /* Progressive Depth */ 
                    /* ------------------------ */ 
                    
                    if ( pending.depths && pending.depthIndex < pending.depths.length - 1 ) { 
                      pending.depthIndex += 1; 
                      const nextDepth = pending.depths[ pending.depthIndex ]; 
                      lastQuickEvalRef.current = null; 
                      enqueueCommand( "stop", "stop" ); 
                      isSearchingRef.current = false; 
                      enqueueCommand( "normal", "setoption name MultiPV value 1" ); 
                      enqueueCommand( "normal", `position fen ${pending.fen}` ); 
                      enqueueCommand( "normal", `go depth ${nextDepth}` ); 
                      continue; 
                    } 
                    
                    /* ------------------------ */ 
                    /* Analysis Complete */ 
                    /* ------------------------ */ 
                    clearTimeout( pending.timeoutId ); 
                    quickAnalyzePendingRef.current = null; 
                    const result: QuickAnalyzeResult = { 
                      evalScore, bestMoveUci: uci, 
                    }; 
                    
                    fenCacheSet( 
                      quickAnalyzeCacheRef.current, 
                      pending.fen, result ); 
                      pending.resolve(result); 
                    } 
                  } 
                  /* -------------------------- */ 
                  /* External Message Handler */ 
                  /* -------------------------- */ 
                  if (onMessage) { 
                    onMessage(data); 
                  } 
                } 
              }); 
            }; 
            
            worker.onerror = ( event: ErrorEvent ): void => { 
              console.error( "Error with Stockfish worker:", event ); 
              const pending = quickAnalyzePendingRef.current; 
              if (pending) { 
                clearTimeout( pending.timeoutId ); 
                const message = event.message || "Stockfish worker error"; 
                pending.reject( new Error(message) ); 
                quickAnalyzePendingRef.current = null; 
              } 
            }; 
          }, [onMessage, enqueueCommand] ); 
          /* ---------------------------------- */ 
          /* Initialize Engine */ 
          /* ---------------------------------- */ 
          const internalInitEngine = useCallback((): void => { 
            if (workerRef.current) { 
              return; 
            } 
            uciReadyRef.current = false; 
            readyOkRef.current = false; 
            if (version === "lite") { 
              workerRef.current = new Worker( STOCKFISH_LITE_PATH ); 
            } 
            else { 
              workerRef.current = new Worker( 
                new URL( "./stockfishWorker.ts", import.meta.url ), 
                { type: "classic", } 
              ); 
            } 
            
            attachWorkerOnMessage( workerRef.current ); 
            workerRef.current.postMessage("uci"); 
          }, [ attachWorkerOnMessage, version, ]); 
          
          
          /* ---------------------------------- */ 
          /* Public Engine Methods */ 
          /* ---------------------------------- */ 
          const initEngine = useCallback((): void => { 
            internalInitEngine(); 
          }, [internalInitEngine]); 
          
          const preloadEngine = useCallback((): void => { 
            internalInitEngine(); 
          }, [internalInitEngine]); 
          
          const sendCommand = useCallback( (cmd: string): void => { 
            if (workerRef.current) { 
              enqueueCommand( "normal", cmd ); 
            } 
          }, [enqueueCommand] ); 
          
          const setOptions = useCallback( 
            ( options: Array<{ name: string; value: string | number; }> ): void => { 
              options.forEach((option) => { 
                enqueueCommand( "normal", `setoption name ${option.name} value ${option.value}` ); 
              }); 
            }, [enqueueCommand] ); 
            const setFen = useCallback( 
              ( fen: string, moves: string[] = [] ): void => { 
                let command = `position fen ${fen}`; 
                if (moves.length > 0) { 
                  const movesStr = moves.join(" "); command += ` moves ${movesStr}`; 
                } 
                enqueueCommand( "normal", command ); 
              }, [enqueueCommand] ); 
              
              const stopSearch = useCallback( (_id?: string): void => { 
                if (!workerRef.current) { return; } if (!isSearchingRef.current) { return; } 
                enqueueCommand( "stop", "stop" ); 
                isSearchingRef.current = false; 
                if (stopTimeoutRef.current) { clearTimeout( stopTimeoutRef.current ); 
                  stopTimeoutRef.current = null; 
                } }, [enqueueCommand] ); 
                
                
                /* ---------------------------------- */ /* Start Search */ /* ---------------------------------- */ 
                const startSearch = useCallback( (fen: string): void => { 
                  if (!engineEnabledRef.current) { 
                    return; 
                  } if (!workerRef.current) { 
                    internalInitEngine(); 
                  } if (searchTimeoutRef.current) { 
                    clearTimeout( searchTimeoutRef.current ); 
                  } if (stopTimeoutRef.current) { 
                    clearTimeout( stopTimeoutRef.current ); 
                  } 
                  stopSearch("pre startSearch"); searchTimeoutRef.current = setTimeout(() => { 
                    isSearchingRef.current = true; 
                    enqueueCommand( "normal", `position fen ${fen}` ); 
                    enqueueCommand( "normal", "go infinite" ); 
                    stopTimeoutRef.current = setTimeout(() => { 
                      stopSearch( "startSearch timer expire" ); }, autoStopTime); }, 50); 
                    }, [ autoStopTime, stopSearch, enqueueCommand, internalInitEngine, ] ); 
                    
                    /* ---------------------------------- */ 
                    /* Terminate Engine */ 
                    /* ---------------------------------- */ 
                    const terminateEngine = useCallback((): void => { 
                      uciReadyRef.current = false; 
                      readyOkRef.current = false; deferredQuickAnalyzeSendRef.current = null; 
                      const pending = quickAnalyzePendingRef.current; 
                      if (pending) { 
                        clearTimeout( pending.timeoutId ); 
                        pending.reject( new Error("Engine terminated") ); 
                        quickAnalyzePendingRef.current = null; 
                      } 
                      if (workerRef.current) { 
                        workerRef.current.terminate(); 
                        workerRef.current = null; 
                      } 
                      isSearchingRef.current = false; 
                      if (stopTimeoutRef.current) { 
                        clearTimeout( stopTimeoutRef.current ); 
                        stopTimeoutRef.current = null; 
                      } 
                      if (searchTimeoutRef.current) { 
                        clearTimeout( searchTimeoutRef.current ); 
                        searchTimeoutRef.current = null; 
                      } 
                      commandQueueRef.current = []; 
                      queueRunningRef.current = false; 
                    }, []); 
                    
                    /* ---------------------------------- */ 
                    /* Engine Enabled State */ 
                    /* ---------------------------------- */ 
                    const syncEnabledState = useCallback( (enabled: boolean): void => { 
                      engineEnabledRef.current = enabled; if (!enabled) { 
                        const pending = quickAnalyzePendingRef.current; 
                        if (pending) { 
                          clearTimeout( pending.timeoutId ); 
                          pending.reject( new Error("Engine disabled") ); 
                          quickAnalyzePendingRef.current = null; 
                        } 
                        stopSearch( "permission revoked" ); 
                        /* * Keep worker alive (singleton). * Do not terminate on toggle off. */ 
                      } 
                    }, [stopSearch] ); 
                    
                    /* ---------------------------------- */ 
                    /* Quick Analysis */ 
                    /* ---------------------------------- */ 
                    
                    const DEFAULT_QUICK_ANALYZE_DEPTH = 8; 
                    const DEFAULT_QUICK_ANALYZE_TIMEOUT_MS = 120000; 
                    const quickAnalyzeFen = useCallback( 
                      ( fen: string, options: StockfishOptions = {} ): Promise<QuickAnalyzeResult> => { 
                      const skipCache = options.skipCache === true; 
                      if (!skipCache && fen) { 
                        const hit = fenCacheGet( quickAnalyzeCacheRef.current, fen ); 
                        if (hit) { 
                          return Promise.resolve(hit); 
                        } 
                      } 
                      
                      const progressiveDepths = Array.isArray( options.progressiveDepths ) 
                      && options.progressiveDepths.length > 0 ? 
                      options.progressiveDepths.map((depth) => Math.min( 24, Math.max(1, depth) ) ) : null; 
                      const depth = typeof options.depth === "number" 
                      && options.depth > 0 ? Math.min(24, options.depth) : DEFAULT_QUICK_ANALYZE_DEPTH; 
                      const timeoutMs = typeof options.timeoutMs === "number" && options.timeoutMs > 0 ? options.timeoutMs : DEFAULT_QUICK_ANALYZE_TIMEOUT_MS; 
                      return new Promise<QuickAnalyzeResult>( 
                        (resolve, reject) => { 
                          if (!engineEnabledRef.current) { reject( new Error("Engine disabled") ); 
                            return; 
                          } 
                          const existing = quickAnalyzePendingRef.current; 
                          if (existing) { 
                            clearTimeout( existing.timeoutId ); 
                            existing.reject( new Error("Superseded") );
                            quickAnalyzePendingRef.current = null; 
                          } 
                          deferredQuickAnalyzeSendRef.current = null; 
                          if (!workerRef.current) { 
                            internalInitEngine(); 
                          } 
                          if (!workerRef.current) { 
                            reject( new Error( "Worker unavailable" ) ); return; 
                          } 
                          lastQuickEvalRef.current = null; 
                          const timeoutId = setTimeout(() => { 
                            const pending = quickAnalyzePendingRef.current; 
                            if (pending) { 
                              quickAnalyzePendingRef.current = null; 
                              pending.reject( new Error( "Quick analyze timeout" ) ); 
                            } }, timeoutMs); 
                            
                            const depths = progressiveDepths || [depth]; 
                            const firstDepth = depths[0]; 
                            quickAnalyzePendingRef.current = { 
                              resolve, reject, fen, timeoutId, depths: progressiveDepths, depthIndex: 0, 
                            }; 
                            
                            const sendQuickAnalyzeCommands = (): void => { 
                              enqueueCommand( "stop", "stop" );
                              isSearchingRef.current = false; 
                              enqueueCommand( "normal", "setoption name MultiPV value 1" ); 
                              enqueueCommand( "normal", `position fen ${fen}` ); 
                              enqueueCommand( "normal", `go depth ${firstDepth}` ); 
                            }; 
                            
                            const runAfterEngineReady = (): void => { 
                              setTimeout( sendQuickAnalyzeCommands, 50 ); 
                            }; 
                            if ( uciReadyRef.current && readyOkRef.current ) { 
                              runAfterEngineReady(); 
                            } 
                            else { 
                              deferredQuickAnalyzeSendRef.current = runAfterEngineReady; 
                            } 
                          } ); }, [ enqueueCommand, internalInitEngine, ] ); 
                          
                          /* ---------------------------------- */ 
                          /* Cleanup */ 
                          /* ---------------------------------- */ 
                          
                          useEffect(() => { return () => { 
                            const pending = quickAnalyzePendingRef.current; 
                            if (pending) { clearTimeout( pending.timeoutId ); 
                              pending.reject( new Error("Unmounted") ); 
                              quickAnalyzePendingRef.current = null; 
                            } terminateEngine(); }; }, [terminateEngine]); 
                            
                            /* ---------------------------------- */ 
                            /* Public API */ 
                            /* ---------------------------------- */ 
                            return { 
                              initEngine, 
                              preloadEngine, 
                              sendCommand, 
                              setOptions, 
                              setFen, 
                              startSearch, 
                              stopSearch, 
                              terminateEngine, 
                              syncEnabledState, 
                              quickAnalyzeFen, 
                            }; 
                          }
