let stockfish;

self.onmessage = function (e) {
  if (e.data === 'init') {
    importScripts('/stockfish/stockfish-17-lite-single.js');

    stockfish = typeof Stockfish === 'function' ? Stockfish() : Stockfish;

    stockfish.onmessage = function (event) {
      self.postMessage(event.data || event);
    };
  } else if (stockfish) {
    stockfish.postMessage(e.data);
  }
};

