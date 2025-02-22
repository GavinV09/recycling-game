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
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const [nextBackgroundIndex, setNextBackgroundIndex] = useState(1);
  const [isFading, setIsFading] = useState(false);

  const backgrounds = [
    "/forest.jpg",
    "/beach.jpg",
    "/city.jpg",
  ];

  // Spawn Items
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

  // Move Items Downward
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
    setCurrentBackgroundIndex(0);
    setNextBackgroundIndex(1);
  };

  // Switch Backgrounds
  useEffect(() => {
    if (isGameOver) return;
    const backgroundInterval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentBackgroundIndex((prev) => (prev + 1) % backgrounds.length);
        setNextBackgroundIndex((prev) => (prev + 1) % backgrounds.length);
        setIsFading(false); 
      }, 1000); 
    }, 30000); 

    return () => clearInterval(backgroundInterval);
  }, [isGameOver, backgrounds.length]);

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
      {/* Current Background */}
      <div
        className={`background current-background ${isFading ? "fade-out" : ""}`}
        style={{
          backgroundImage: `url(${backgrounds[currentBackgroundIndex]})`,
        }}
      ></div>

      {/* Next Background */}
      <div
        className={`background next-background ${isFading ? "fade-in" : ""}`}
        style={{
          backgroundImage: `url(${backgrounds[nextBackgroundIndex]})`,
        }}
      ></div>

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