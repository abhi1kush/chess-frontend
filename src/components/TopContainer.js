import React from "react";
import "../styles/topContainer.css"; // Add styles for the top bar
import Settings from "./Settings";
import TopBar from "./TopBar";

const TopContainer = ({ resetGame, flipBoard, isFlipped, theme, setTheme, enableSound, setEnableSound}) => {
  return (
    <div className="top-container">
        <TopBar resetGame={resetGame} flipBoard={flipBoard} isFlipped={isFlipped}/>
        <Settings theme={theme} setTheme={setTheme} enableSound={enableSound} setEnableSound={setEnableSound} />
    </div>
  );
};

export default TopContainer;