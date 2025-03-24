// src/components/MoveHistory.js
import React, { useEffect, useRef } from 'react';
import '../styles/components/moveHistory.css';

const MoveHistory = ({moveHistory}) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [moveHistory]);

  console.log('🛠 MoveHistory rendered %d', moveHistory.length);

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
          {moveHistory.map((move, index) =>
            index % 2 === 0 ? (
              <tr key={index / 2}>
                <td>{Math.floor(index / 2) + 1}.</td>
                <td>{move}</td>
                <td>{moveHistory[index + 1] || ''}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
    </div>
  );
};

MoveHistory.propTypes = {
  // moveHistory is now taken from redux, so the prop is no longer needed.
};

export default MoveHistory;