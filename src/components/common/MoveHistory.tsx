// src/components/MoveHistory.js
import { useEffect, useRef } from 'react';
// @ts-ignore The stylesheet is loaded for its side effects and has no TypeScript declarations.
import '../../styles/components/moveHistory.css';

type MoveHistoryType = {
  moveHistory: string[];
}

const MoveHistory = ({ moveHistory }: MoveHistoryType) => {
  const scrollRef = useRef<HTMLTableSectionElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [moveHistory]);

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
          {moveHistory?.map((move: string, index: number) =>
            index % 2 === 0 ? (
              <tr key={index / 2}>
                <td>{Math.floor(index / 2) + 1}.</td>
                <td>{move}</td>
                <td>{moveHistory[index + 1] ?? ''}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MoveHistory;