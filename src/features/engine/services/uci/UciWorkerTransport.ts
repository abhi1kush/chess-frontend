import type { EngineTransport } from '../types';

export class UciWorkerTransport implements EngineTransport {
  private worker: Worker | null = null;
  private messageHandler: ((raw: unknown) => void) | null = null;
  private errorHandler: ((error: Error) => void) | null = null;

  constructor(private readonly createWorker: () => Worker) {}

  get isStarted(): boolean {
    return this.worker != null;
  }

  start(): void {
    if (this.worker) {
      return;
    }
    this.worker = this.createWorker();
    this.worker.onmessage = (event: MessageEvent) => {
      this.messageHandler?.(event.data);
    };
    this.worker.onerror = (event: ErrorEvent) => {
      this.errorHandler?.(new Error(event.message || 'Engine worker error'));
    };
  }

  post(message: string): void {
    this.worker?.postMessage(message);
  }

  onMessage(handler: (raw: unknown) => void): void {
    this.messageHandler = handler;
  }

  onError(handler: (error: Error) => void): void {
    this.errorHandler = handler;
  }

  terminate(): void {
    this.worker?.terminate();
    this.worker = null;
  }
}
