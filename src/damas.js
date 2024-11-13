import React, { useState } from 'react';
import './App.css';

// Function to create a checkers board with alternating black and white squares
const createBoard = () => {
  const board = [];
  
  for (let row = 0; row < 8; row++) {
    const squares = [];
    for (let col = 0; col < 8; col++) {
      const isBlack = (row + col) % 2 === 1;
      let piece = null;
      
      // Place pieces on the first three and last three rows on black squares
      if (isBlack && row < 3) {
        piece = { color: 'red', type: 'normal' }; // Red pieces at the top
      } else if (isBlack && row > 4) {
        piece = { color: 'green', type: 'normal' }; // Black pieces at the bottom
      }
      
      squares.push({ isBlack, piece });
    }
    board.push(squares);
  }
  return board;
};

// Checkers component
const CheckersBoard = () => {
  const [board, setBoard] = useState(createBoard());

  const renderPiece = (row, col) => {
    const piece = board[row][col].piece;
    if (piece) {
      return (
        <div className={`piece ${piece.color}`}>
          {piece.type === 'king' ? 'K' : ''}
        </div>
      );
    }
    return null;
  };

  const handleSquareClick = (row, col) => {
    console.log(`Square clicked: Row ${row}, Column ${col}`);
    // Add game logic here: movement, turns, etc.
  };

  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((square, colIndex) => (
            <div
              key={colIndex}
              className={`square ${square.isBlack ? 'black' : 'white'}`}
              onClick={() => handleSquareClick(rowIndex, colIndex)}
            >
              {renderPiece(rowIndex, colIndex)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

// Main App Component
const Hyt = () => {
  return (
    <div className="App">
      <h1>Checkers Game (Damas)</h1>
      <CheckersBoard />
    </div>
  );
};

export default Hyt;
