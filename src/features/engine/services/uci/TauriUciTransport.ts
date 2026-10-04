import type { EngineTransport } from '../types';

type TauriApi = {
  invoke: <T>(cmd: string, args?: Record<string, unknown>) => Promise<T>;
  listen: <T>(
    event: string,
    handler: (event: { payload: T }) => void,
  ) => Promise<() => void>;
};

async function loadTauriApi(): Promise<TauriApi> {
  const [{ invoke }, { listen }] = await Promise.all([
    import('@tauri-apps/api/core'),
    import('@tauri-apps/api/event'),
  ]);
  return { invoke, listen };
}

/**
 * stdin/stdout bridge to the native Stockfish process spawned by Tauri.
 */
export class TauriUciTransport implements EngineTransport {
  private started = false;
  private ready = false;
  private booting: Promise<void> | null = null;
  private pending: string[] = [];
  private messageHandler: ((raw: unknown) => void) | null = null;
  private errorHandler: ((error: Error) => void) | null = null;
  private unlisten: (() => void) | null = null;
  private api: TauriApi | null = null;

  get isStarted(): boolean {
    return this.started;
  }

  start(): void {
    if (this.started || this.booting) {
      return;
    }
    this.started = true;
    this.booting = this.boot().catch((error: unknown) => {
      this.started = false;
      this.booting = null;
      const err = error instanceof Error ? error : new Error(String(error));
      this.errorHandler?.(err);
    });
  }

  post(message: string): void {
    if (!this.ready || !this.api) {
      this.pending.push(message);
      return;
    }
    void this.api.invoke('stockfish_write', { line: message }).catch((error: unknown) => {
      const err = error instanceof Error ? error : new Error(String(error));
      this.errorHandler?.(err);
    });
  }

  onMessage(handler: (raw: unknown) => void): void {
    this.messageHandler = handler;
  }

  onError(handler: (error: Error) => void): void {
    this.errorHandler = handler;
  }

  terminate(): void {
    this.started = false;
    this.ready = false;
    this.booting = null;
    this.pending = [];
    this.unlisten?.();
    this.unlisten = null;
    if (this.api) {
      void this.api.invoke('stockfish_stop');
    }
    this.api = null;
  }

  private async boot(): Promise<void> {
    const api = await loadTauriApi();
    this.api = api;
    this.unlisten = await api.listen<string>('stockfish-output', (event) => {
      this.messageHandler?.(event.payload);
    });
    const path = await api.invoke<string>('stockfish_start');
    console.log(`[engine] native Stockfish process: ${path}`);
    this.ready = true;
    this.booting = null;
    const queued = this.pending.splice(0, this.pending.length);
    for (const line of queued) {
      await api.invoke('stockfish_write', { line });
    }
  }
}
