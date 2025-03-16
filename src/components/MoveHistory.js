import React, { useEffect, useRef } from "react";
import "../styles/MoveHistory.css";

const MoveHistory = ({ moveHistory }) => {
  const scrollRef = useRef(null);

  // Auto-scroll to the latest move
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [moveHistory]);

  return (
    <div className="right-panel">
      <div className="move-history">
        <h3>Move History</h3>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>White</th>
              <th>Black</th>
            </tr>
          </thead>
          <tbody ref={scrollRef}> {/* Attach ref to tbody */}
            {moveHistory.map((move, index) =>
              index % 2 === 0 ? ( // Every even index is a new move row
                <tr key={index / 2}>
                  <td>{Math.floor(index / 2) + 1}.</td>
                  <td>{move}</td>
                  <td>{moveHistory[index + 1] || ""}</td> {/* Handle missing black moves */}
                </tr>
              ) : null // Skip rendering odd indices separately
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MoveHistory;
