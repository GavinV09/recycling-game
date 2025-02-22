import React, { useState, useEffect } from "react";
import { ITEMS } from "../utils/items.js";
import "../App.css";
import FallingGrid from "./FallingGrid.jsx";
import Bins from "./Bins.jsx";
import ScoreBoard from "./ScoreBoard.jsx";
import LeaderBoard from "./LeaderBoard.jsx";

function GameContainer() {
  const [score, setScore] = useState(0);
  const [items, setItems] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  // Spawn new items
  const spawnItem = () => {
    const itemTypes = ["recycling", "trash", "compost"];
    const randomType = itemTypes[Math.floor(Math.random() * itemTypes.length)];

    const matchingItems = ITEMS.filter((item) => item.type === randomType);
    const randomItem =
      matchingItems[Math.floor(Math.random() * matchingItems.length)];

    const gridLeft = 30;
    const gridWidth = 40;
    const randomX = gridLeft + Math.random() * gridWidth;

    const newItem = {
      id: Date.now(),
      type: randomType,
      x: randomX,
      name: randomItem.name,
      image: randomItem.image,
      y: 0,
    };

    // Check for overlap with existing items
    const isOverlapping = items.some(
      (item) =>
        Math.abs(item.x - newItem.x) < 10 && Math.abs(item.y - newItem.y) < 10
    );

    if (!isOverlapping) {
      setItems((prevItems) => [...prevItems, newItem]);
    }
  };

  // Move items downward
  const moveItems = () => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        const newY = item.y + 1;
        return {
          ...item,
          y: newY <= 70 ? newY : item.y, // Stop at the bottom of the grid
        };
      })
    );
  };

  // Check for missed items
  const checkGameOver = () => {
    const missedItem = items.find((item) => item.y >= 70);
    if (missedItem) {
      setIsGameOver(true);
    }
  };

  // Check if item is placed correctly
  const onDropItem = (itemId, itemType, binType) => {
    console.log('Dropped item:', itemId, itemType, binType); // Debugging
    if (itemType === binType) {
      setScore((prevScore) => prevScore + 10);
      setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    } else {
      console.log('Incorrect placement! Game Over.'); // Debugging
      setIsGameOver(true); // End the game if the item is placed in the wrong bin
    }
  };

  // Game Loop
  useEffect(() => {
    if (isGameOver) return;

    const interval = setInterval(() => {
      spawnItem();
      moveItems();
      checkGameOver();
    }, 1000);

    return () => clearInterval(interval);
  }, [isGameOver, items]);

  return (
    <div className="game-container">
      <div className="background"></div>
      <FallingGrid items={items} />
      <Bins onDropItem={onDropItem} />
      <ScoreBoard score={score} />
      <LeaderBoard />
      {isGameOver && <div className="game-over">Game Over!</div>}
    </div>
  );
}

export default GameContainer;