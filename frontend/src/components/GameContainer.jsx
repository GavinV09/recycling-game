import React, { useState, useEffect } from "react";
import { ITEMS } from "../utils/items.js";
import "../App.css";
import FallingGrid from "./FallingGrid.jsx";
import Bins from "./Bins.jsx";
import ScoreBoard from "./ScoreBoard.jsx";
import LeaderBoard from "./LeaderBoard.jsx";
import GameOverPopup from "./GameOverPopup.jsx";
import TriviaPop from "./TriviaPop.jsx";

function GameContainer() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    // Load high score from localStorage or default to 0
    const savedHighScore = localStorage.getItem("highScore");
    return savedHighScore ? parseInt(savedHighScore, 10) : 0;
  });
  const [items, setItems] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameOverReason, setGameOverReason] = useState(null);
  const [lastItemType, setLastItemType] = useState(null);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const [nextBackgroundIndex, setNextBackgroundIndex] = useState(1);
  const [isFading, setIsFading] = useState(false);
  const [starEffect, setStarEffect] = useState({ show: false, x: 0, y: 0 });
  const [showTrivia, setShowTrivia] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const backgrounds = ["/forest.jpg", "/beach.jpg", "/city.jpg"];

  // Toggle Pause/Play
  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  // Spawn Items
  const spawnItem = () => {
    if (isPaused || isGameOver) return;
  
    const itemTypes = ["recycling", "trash", "compost"];
    const randomType = itemTypes[Math.floor(Math.random() * itemTypes.length)];
    const matchingItems = ITEMS.filter((item) => item.type === randomType);
    const randomItem = matchingItems[Math.floor(Math.random() * matchingItems.length)];
  
    const gridLeft = 0;
    const gridWidth = 100;
    let randomX, randomY = 0; // Start at the top
    let isOverlapping;
  
    // Try to find a non-overlapping position
    let attempts = 0;
    const maxAttempts = 100; // Prevent infinite loops
  
    do {
      randomX = gridLeft + Math.random() * gridWidth;
  
      // Check if the new item overlaps with any existing item
      isOverlapping = items.some(
        (item) =>
          Math.abs(item.x - randomX) < 10 && Math.abs(item.y - randomY) < 10
      );
  
      attempts++;
    } while (isOverlapping && attempts < maxAttempts);
  
    // If no valid position is found after max attempts, skip spawning the item
    if (isOverlapping) {
      console.log("Could not find a non-overlapping position. Skipping item spawn.");
      return;
    }
  
    const newItem = {
      id: Date.now(),
      type: randomType,
      x: randomX,
      y: randomY,
      name: randomItem.name,
      image: randomItem.image,
    };
  
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // Move Items Downward
  const moveItems = () => {
    if (isPaused || isGameOver) return;

    setItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        y: item.y + 1 <= 100 ? item.y + 1 : item.y,
      }))
    );
  };

  // Show trivia at specific intervals
  useEffect(() => {
    if (isGameOver || isPaused) return;

    const interval = setInterval(() => {
      setShowTrivia(true);
    }, 30000);

    return () => clearInterval(interval);
  }, [isGameOver, isPaused]);

  const checkGameOver = () => {
    if (isPaused) return;

    const missedItem = items.find((item) => item.y >= 100);
    if (missedItem) {
      setIsGameOver(true);
      setGameOverReason("bottom");
    }
  };

  // Update high score when the game ends
  useEffect(() => {
    if (isGameOver) {
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem("highScore", score.toString());
      }
    }
  }, [isGameOver, score, highScore]);

  const onDropItem = (itemId, itemType, binType, binPosition) => {
    if (isPaused) return;
    console.log("Dropped item:", itemId, itemType, binType);
    if (itemType === binType) {
      setScore((prevScore) => prevScore + 10);
      setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
      setStarEffect({ show: true, x: binPosition.x, y: binPosition.y });
      setTimeout(() => setStarEffect({ show: false, x: 0, y: 0 }), 1000);
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
    }, 15000);

    return () => clearInterval(backgroundInterval);
  }, [isGameOver, backgrounds.length]);

  // Game Loop
  useEffect(() => {
    if (isGameOver || isPaused) return;

    const interval = setInterval(() => {
      spawnItem();
      moveItems();
      checkGameOver();
    }, 1000);

    return () => clearInterval(interval);
  }, [isGameOver, isPaused, items]);

  return (
    <div className="game-container">
      {/* Current Background */}
      <div
        className={`background current-background ${
          isFading ? "fade-out" : ""
        }`}
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

      {/* Star Effect */}
      {starEffect.show && (
        <div
          className="star-effect"
          style={{
            left: `${starEffect.x}px`,
            top: `${starEffect.y}px`,
          }}
        ></div>
      )}

      <FallingGrid items={items} />
      <Bins onDropItem={onDropItem} />
      <ScoreBoard score={score} highScore={highScore} />
      <LeaderBoard />

      {/* Pause/Play Button */}
      <button className="pause-play-btn" onClick={togglePause}>
        {isPaused ? "▶ Play" : "⏸ Pause"}
      </button>
      {isPaused && <div className="paused-overlay">Game Paused</div>}

      {/* Display the trivia pop-up */}
      {showTrivia && !isGameOver && <TriviaPop />}

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
