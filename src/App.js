import React from "react";
import ChessGame from "./components/ChessGame";
import "./styles/global.css"; // Global styles

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Chess Game</h1>
      <ChessGame />
    </div>
  );
};

export default App;

