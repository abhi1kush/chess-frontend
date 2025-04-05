// src/components/MoveHistory.js
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import '../../styles/components/moveHistory.css';
import { jumpToMove } from '../../redux/actions/analysisActions';
import boardSetupSound from "../../assets/sounds/board-start.mp3"

const Moves = () => {
  const scrollRef = useRef(null);
  const { moves, termination} = useSelector((state) => state.pgn);
  const { currentMoveIndex, fenLength } = useSelector((state) => state.analysis); 
  const dispatch = useDispatch();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [moves]);

    useEffect(() => {
    if (scrollRef.current) {
      const highlightedRow = scrollRef.current.querySelector(`.move-row-${currentMoveIndex}`);
      if (highlightedRow) {
        highlightedRow.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }
  }, [currentMoveIndex]);

  const handleMoveClick = (index) => {
    const sound = new Audio(boardSetupSound)
    sound.play()
    dispatch(jumpToMove(index));
  };
  return (
    <div className="move-history-wrapper">
      {currentMoveIndex == fenLength - 1 && <div className='termination-msg bold-text'>{termination}</div>}
    <div className="move-history">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>White</th>
            <th>Black</th>
          </tr>
        </thead>
        <tbody ref={scrollRef}>
          {moves && moves.map((move, index) =>
            index % 2 === 0 ? (
              <tr key={index / 2} className={`move-row-${index}`}>
                <td>{Math.floor(index / 2) + 1}.</td>
                <td className="clickable" style={{backgroundColor: index + 1 === currentMoveIndex ? 'lightblue' : 'transparent'}} 
                onClick={() => handleMoveClick(index + 1)}
                >
                  {move}
                </td>
                <td className="clickable" style={{backgroundColor: index + 2 === currentMoveIndex ? 'lightblue' : 'transparent'}}
                onClick={() => handleMoveClick(index + 2)}
                >
                  {moves[index + 1] || ''}
                </td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Moves;