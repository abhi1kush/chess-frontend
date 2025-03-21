import React, { useState } from "react";
import ChessGame from "./components/ChessGame";
import AnalysisGame from "./components/AnalysisGame";
import { ConfigProvider } from "./context/configContext";

const App = () => {
  const [gameMode, setGameMode] = useState("gameplay"); // 'gameplay' or 'analysis'

  return (
    <ConfigProvider>
      {gameMode === "gameplay" ? (
        <ChessGame onEnterAnalysis={() => setGameMode("analysis")} />
      ) : (
        <AnalysisGame onExitAnalysis={() => setGameMode("gameplay")} />
      )}
    </ConfigProvider>
  );
};

export default App;