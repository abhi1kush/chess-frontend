import React, { useEffect, useState, useRef } from "react";
import useStockfish from "../hooks/useStockfish";
import EvalBar from "./analysis/EvalBar";
import "../styles/Stockfish.css"

const StockfishHello = () => {
  const [fenInput, setFenInput] = useState(
    "rn1qkbnr/pp3ppp/2p1p3/3p4/3P4/2N1PN2/PPP2PPP/R1BQKB1R w KQkq - 0 1"
  );
  const [bestMove, setBestMove] = useState(null);
  const [evalScore, setEvalScore] = useState(null);
  const [isThinking, setIsThinking] = useState(false);

  const latestScoreRef = useRef(null); // this is key

  const { sendCommand } = useStockfish((data) => {
    // console.log("💬 Stockfish says:", data);

    if (typeof data === "string") {
      // Capture eval scores during thinking
      if (data.startsWith("info") && data.includes("score")) {
        const match = data.match(/score (cp|mate) (-?\d+)/);
        if (match) {
          const type = match[1];
          const value = parseInt(match[2], 10);
          const displayValue =
            type === "cp" ? `${(value / 100).toFixed(2)}` : `Mate in ${value}`;

          latestScoreRef.current = displayValue; // set value in ref
        }
      }

      // Capture best move when analysis completes
      if (data.startsWith("bestmove")) {
        const move = data.split(" ")[1];
        setBestMove(move);
        setEvalScore(latestScoreRef.current); // show latest score
        setIsThinking(false);
      }
    }
  });

  useEffect(() => {
    sendCommand("uci");
  }, [sendCommand]);

  const handleAnalyze = () => {
    if (!fenInput.trim()) return;

    setBestMove(null);
    setEvalScore(null);
    latestScoreRef.current = null;
    setIsThinking(true);

    sendCommand(`position fen ${fenInput}`);
    sendCommand("go depth 20");
  };

  return (
    <div className="stockfish-container">
      <h2>FEN Stockfish Analyzer</h2>
      <EvalBar
        isFlipped={false}
        evalScore={0}/>
      <input
        type="text"
        value={fenInput}
        onChange={(e) => setFenInput(e.target.value)}
        placeholder="Enter FEN string"
        style={{
          width: "90%",
          maxWidth: "600px",
          padding: "0.5rem",
          marginTop: "1rem",
          fontSize: "1rem",
          borderRadius: "4px",
          border: "1px solid #ccc"
        }}
      />

      <br />
      <button
        onClick={handleAnalyze}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        Analyze Position
      </button>

      {isThinking && <p style={{ marginTop: "1rem" }}>🧠 Stockfish is thinking...</p>}

      {bestMove && (
        <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
          <strong>Best Move:</strong> {bestMove}
        </p>
      )}

      {evalScore && (
        <p style={{ fontSize: "1.2rem", marginTop: "0.5rem" }}>
          <strong>Evaluation:</strong> {evalScore}
        </p>
      )}
    </div>
  );
};

export default StockfishHello;
