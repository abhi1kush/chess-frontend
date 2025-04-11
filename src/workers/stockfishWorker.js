let stockfish;

self.onmessage = function (e) {
<<<<<<< Updated upstream
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

=======
  if (e.data.type === 'init') {
      importScripts('/stockfish/stockfish-17.js');
      stockfish = typeof Stockfish === 'function' ? Stockfish() : Stockfish;

      stockfish.onmessage = function (event) {
        self.postMessage(event.data || event);
      };
  } else if (stockfish) {
    stockfish.postMessage(e.data);
  } else {
    postMessage(e.data);
  }
};
>>>>>>> Stashed changes
