/// <reference lib="webworker" />
interface StockfishEngine { 
  onmessage: ((event: MessageEvent) => void) | null; 
  postMessage(message: string): void; 
}

type StockfishFactory = () => StockfishEngine;

declare const Stockfish: 
| StockfishEngine 
| StockfishFactory 
| undefined;

let stockfish: StockfishEngine | null = null;

self.onmessage = function (event: MessageEvent) {
  const data = event.data;

  if (data?.type === 'init') {
      importScripts('/stockfish/stockfish-17.js');

      if (typeof Stockfish === "function") { 
        stockfish = Stockfish(); 
      } else if (Stockfish) { 
        stockfish = Stockfish; 
      }
      
      if (stockfish) {
        stockfish.onmessage = function (stockfishEvent: MessageEvent) {
          self.postMessage(stockfishEvent.data ?? stockfishEvent);
        };
      }
      return;
  } 
  
  if (stockfish) {
    stockfish.postMessage(data as string);
  } else {
    self.postMessage(data);
  }
};
