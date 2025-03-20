import React, { useEffect, useRef } from "react";
import "../styles/components/moveHistory.css";
import PropTypes from "prop-types";

const MoveHistory = (props) => {
  const scrollRef = useRef(null);

  // Auto-scroll to the latest move
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [props.moveHistory]);
  console.log("🛠 MoveHistory rendered");
  return (
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
          <tbody ref={scrollRef}>
            {props.moveHistory.map((move, index) =>
              index % 2 === 0 ? (
                <tr key={index / 2}>
                  <td>{Math.floor(index / 2) + 1}.</td>
                  <td>{move}</td>
                  <td>{props.moveHistory[index + 1] || ""}</td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
  );
};

export default MoveHistory;

MoveHistory.propTypes = {
  moveHistory: PropTypes.array.isRequired,
};
