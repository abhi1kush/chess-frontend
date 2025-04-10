import React, { useEffect } from "react";

export default function StockfishHello() {
  useEffect(() => {
    const worker = new Worker("/stockfish/stockfish-17-lite-single.js");

    worker.onmessage = (event) => {
      const msg = event.data;
      console.log("💬 Stockfish says:", msg);

      if (typeof msg === "string" && msg.startsWith("bestmove")) {
        const move = msg.split(" ")[1];
        console.log("✅ Best move:", move);
      }
    };

    // Initialize engine
    worker.postMessage("uci");

    // Wait a bit before sending position and go command
    setTimeout(() => {
      const fen = "rn1qkbnr/pp3ppp/2p1p3/3p4/3P4/2N1PN2/PPP2PPP/R1BQKB1R w KQkq - 0 1"; // sample midgame
      worker.postMessage(`position fen ${fen}`);
      worker.postMessage("go depth 10");
    }, 1000);

    return () => worker.terminate();
  }, []);

  return (
    <div className="p-4 text-white bg-black text-center rounded">
      Stockfish is thinking... Check your console!
    </div>
  );
}

