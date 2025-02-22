import React, { useState, useEffect } from "react";
import { ITEMS } from "../utils/items.js";
import "../App.css";
import FallingGrid from "./FallingGrid.jsx";
import Bins from "./Bins.jsx";
import ScoreBoard from "./ScoreBoard.jsx";
import LeaderBoard from "./LeaderBoard.jsx";
import GameOverPopup from "./GameOverPopup.jsx";

function GameContainer() {
  const [score, setScore] = useState(0);
  const [items, setItems] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameOverReason, setGameOverReason] = useState(null);
  const [lastItemType, setLastItemType] = useState(null);

  const spawnItem = () => {
    const itemTypes = ["recycling", "trash", "compost"];
    const randomType = itemTypes[Math.floor(Math.random() * itemTypes.length)];

    const matchingItems = ITEMS.filter((item) => item.type === randomType);
    const randomItem =
      matchingItems[Math.floor(Math.random() * matchingItems.length)];

    const gridLeft = 0;
    const gridWidth = 100;
    const randomX = gridLeft + Math.random() * gridWidth;

    const newItem = {
      id: Date.now(),
      type: randomType,
      x: randomX,
      name: randomItem.name,
      image: randomItem.image,
      y: 0,
    };

    const isOverlapping = items.some(
      (item) =>
        Math.abs(item.x - newItem.x) < 10 && Math.abs(item.y - newItem.y) < 10
    );

    if (!isOverlapping) {
      setItems((prevItems) => [...prevItems, newItem]);
    }
  };

  const moveItems = () => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        const newY = item.y + 1;
        return {
          ...item,
          y: newY <= 100 ? newY : item.y,
        };
      })
    );
  };

  const checkGameOver = () => {
    const missedItem = items.find((item) => item.y >= 100);
    if (missedItem) {
      setIsGameOver(true);
      setGameOverReason("bottom");
    }
  };

  const onDropItem = (itemId, itemType, binType) => {
    console.log("Dropped item:", itemId, itemType, binType);
    if (itemType === binType) {
      setScore((prevScore) => prevScore + 10);
      setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    } else {
      setIsGameOver(true);
      setGameOverReason("incorrect");
      setLastItemType(itemType);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setItems([]);
    setIsGameOver(false);
    setGameOverReason(null);
    setLastItemType(null);
  };

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
      <GameOverPopup
        isGameOver={isGameOver}
        reason={gameOverReason}
        itemType={lastItemType}
        onRestart={handleRestart}
      />
    </div>
  );
}

export default GameContainer;