import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../App.css";

function About() {
  return (
    <div className="about">
      <h1>About RecycleQuest</h1>
      <p>
        RecycleQuest is not just a game—it’s a <strong>fun, interactive, and educational adventure</strong> designed to teach kids the importance of recycling and environmental conservation. Through engaging gameplay, captivating visuals, and real-world challenges, RecycleQuest transforms learning into an exciting journey that inspires young minds to make a difference.
      </p>

      <h2>Why RecycleQuest?</h2>
      <p>
        In today’s world, environmental awareness is more important than ever. But how do we make learning about recycling fun and engaging for kids? That’s where RecycleQuest comes in! By combining <strong>gamification</strong> with <strong>educational content</strong>, we’ve created a unique experience that:
      </p>
      <ul>
        <li>Teaches kids about recycling in a way that’s both fun and memorable.</li>
        <li>Encourages critical thinking as players sort recyclable items into the correct bins.</li>
        <li>Raises awareness about the impact of waste on our planet.</li>
        <li>Inspires action by showing kids how their choices can make a real difference.</li>
      </ul>

      <h2>How It Works</h2>
      <p>
        RecycleQuest is designed to be simple yet impactful. Here’s what makes it special:
      </p>
      <h3>1. Interactive Gameplay</h3>
      <ul>
        <li><strong>Drag and Drop</strong>: Players drag recyclable items (like plastic bottles, paper, and glass) into the correct bins.</li>
        <li><strong>Progressive Difficulty</strong>: The game gets faster and more challenging as players progress, keeping them engaged and motivated.</li>
      </ul>
      <h3>2. Educational Trivia</h3>
      <ul>
        <li><strong>Fun Facts</strong>: Players learn interesting facts about recycling and environmental conservation as they play.</li>
        <li><strong>Real-World Impact</strong>: Discover how recycling saves energy, reduces waste, and protects our planet.</li>
      </ul>
      <h3>3. Gamification Elements</h3>
      <ul>
        <li><strong>Achievements</strong>: Unlock badges and rewards for completing levels and mastering recycling skills.</li>
        <li><strong>Leaderboards</strong>: Compete with friends and other players to see who can recycle the most items correctly.</li>
      </ul>
      <h3>4. Real-World Challenges</h3>
      <ul>
        <li><strong>Eco-Friendly Tips</strong>: Learn practical tips for reducing waste and living a more sustainable lifestyle.</li>
        <li><strong>Community Impact</strong>: See how your actions in the game translate to real-world benefits for the environment.</li>
      </ul>

      <h2>The RecycleQuest Experience</h2>
      <p>
        Imagine a world where kids are excited to learn about recycling. With RecycleQuest, that world is here! Here’s what players can expect:
      </p>
      <ul>
        <li><strong>Engaging Visuals</strong>: Bright, colorful graphics and animations that bring the game to life.</li>
        <li><strong>Immersive Soundtrack</strong>: A lively soundtrack that keeps players energized and focused.</li>
        <li><strong>Interactive Learning</strong>: Hands-on activities that make learning about recycling fun and interactive.</li>
      </ul>

      <h2>Why Gamification Works</h2>
      <p>
        Gamification is a powerful tool for learning because it:
      </p>
      <ul>
        <li><strong>Motivates kids</strong> to stay engaged and complete challenges.</li>
        <li><strong>Reinforces learning</strong> through repetition and rewards.</li>
        <li><strong>Makes complex topics</strong> like recycling easy to understand and remember.</li>
      </ul>

      <h2>Join the RecycleQuest Movement</h2>
      <p>
        RecycleQuest is more than just a game—it’s a movement to inspire the next generation of environmental stewards. By playing RecycleQuest, kids don’t just learn about recycling; they become <strong>eco-heroes</strong> who are empowered to make a difference in their communities.
      </p>

      <div className="cta-section">
        <p>Ready to embark on an exciting recycling adventure?</p>
        <Link to="/game">
          <button className="cta-button">Play RecycleQuest Now</button>
        </Link>
      </div>
    </div>
  );
}

export default About;