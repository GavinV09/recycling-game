import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "../App.css";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        {/* Wrap the logo in a Link to navigate to the home page */}
        <Link to="/">
          <img src="/RecycleQuest game logo for React.png" alt="Logo" />
        </Link>
        <ul className="nav-links">
          {/* Replace <a> with <Link> for smooth navigation */}
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/impact">Impact</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="hero">
        <h1>Welcome to RecycleQuest</h1>
        <p>An interactive game to teach kids about recycling and environmental conservation.</p>
        {/* Wrap the button in a Link to navigate to the game page */}
        <Link to="/game">
          <button className="cta-button">Play Now</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;