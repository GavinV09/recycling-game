import React from "react";
import "../App.css";

function GameOverPopup({ isGameOver, reason, itemType, onRestart }) {
  if (!isGameOver) return null;

  const getMessage = () => {
    if (reason === "incorrect") {
      const correctBin =
        itemType === "recycling"
          ? "Recycling"
          : itemType === "trash"
          ? "Trash"
          : "Compost";
      return `Incorrect placement! This item belonged in the ${correctBin} bin.`;
    } else if (reason === "bottom") {
      return "A tile hit the bottom!";
    }
    return "Game Over!";
  };

  return (
    <div className="game-over-popup">
      <div className="game-over-content">
        <h2>Game Over</h2>
        <p>{getMessage()}</p>
        <button onClick={onRestart}>Play Again</button>
      </div>
    </div>
  );
}

export default GameOverPopup;
