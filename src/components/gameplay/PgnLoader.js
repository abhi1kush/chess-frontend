import React, { useState, useRef } from 'react';
import { Chess } from 'chess.js';

const PGNLoader = () => {
  const [moves, setMoves] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      const pgnContent = e.target.result;

      try {
        const chess = new Chess();
        chess.loadPgn(pgnContent);
        const moveArray = chess.history();
        setMoves(moveArray);
      } catch (error) {
        console.error('Error parsing PGN:', error);
        setMoves([]); // Clear moves on error
      }
    };
    reader.readAsText(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Load PGN File</button>
      <input
        type="file"
        accept=".pgn"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      {moves.length > 0 && (
        <div>
          <h3>Moves:</h3>
          <pre>{JSON.stringify(moves, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default PGNLoader;