export type UciCommandPriority = 'normal' | 'stop';

type QueuedCommand = {
  type: UciCommandPriority;
  cmd: string;
};

export class UciCommandQueue {
  private queue: QueuedCommand[] = [];
  private running = false;

  constructor(
    private readonly post: (cmd: string) => void,
    private readonly canSend: () => boolean,
  ) {}

  enqueue(type: UciCommandPriority, cmd: string): void {
    this.queue.push({ type, cmd });
    this.process();
  }

  process(): void {
    if (this.running || !this.canSend()) {
      return;
    }
    this.running = true;
    while (this.queue.length > 0) {
      const stopCmdIndex = this.queue.findIndex((item) => item.type === 'stop');
      const cmdObj =
        stopCmdIndex >= 0
          ? this.queue.splice(stopCmdIndex, 1)[0]
          : this.queue.shift();
      if (cmdObj) {
        this.post(cmdObj.cmd);
      }
    }
    this.running = false;
  }

  clear(): void {
    this.queue = [];
    this.running = false;
  }
}
