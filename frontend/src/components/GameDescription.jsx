import React from 'react';
import '../App.css';

function GameDescription() {
  return (
    <section id="about" className="game-description">
      <h2>About the Game</h2>
      <p>
        RecycleQuest is an engaging and educational game designed to teach school children about the importance of recycling and environmental conservation. Players are challenged to sort recyclable items into the correct bins while learning fun facts about sustainability.
      </p>
      <div className="features">
        <div className="feature">
          <h3>Interactive Gameplay</h3>
          <p>Drag and drop recyclable items into the correct bins.</p>
        </div>
        <div className="feature">
          <h3>Educational Trivia</h3>
          <p>Learn interesting facts about recycling and the environment.</p>
        </div>
        <div className="feature">
          <h3>Progressive Difficulty</h3>
          <p>The game gets faster as you progress, keeping kids engaged.</p>
        </div>
      </div>
    </section>
  );
}

export default GameDescription;