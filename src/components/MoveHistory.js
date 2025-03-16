import React from "react";

const MoveHistory = ({ moveHistory }) => {
  return (
    <div className="right-panel">
      <div className="move-history">
        <h3>Move History</h3>
        <ol>
          {moveHistory.map((move, index) => (
            <li key={index}>{move}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default MoveHistory;