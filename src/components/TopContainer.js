import React from "react";
import "../styles/topContainer.css"; // Add styles for the top bar
import Settings from "./Settings";
import TopBar from "./TopBar";
import PropTypes from "prop-types";

const TopContainer = (props) => {
  return (
    <div className="top-container">
        <TopBar resetGame={props.resetGame} flipBoard={props.flipBoard} isFlipped={props.isFlipped}/>
        <Settings theme={props.theme} setTheme={props.setTheme} enableSound={props.enableSound} setEnableSound={props.setEnableSound} />
    </div>
  );
};

export default TopContainer;

TopContainer.propTypes = {
  resetGame: PropTypes.func.isRequired,
  flipBoard: PropTypes.func.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
  enableSound: PropTypes.bool.isRequired,
  setEnableSound: PropTypes.func.isRequired,
}