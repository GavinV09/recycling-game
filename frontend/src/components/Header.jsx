import React from "react";
import { Link } from "react-router-dom";
import TeamMembers from "./TeamMembers"; 
import "../App.css";

function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-and-team">
          <Link to="/">
            <img src="/RecycleQuest game logo for React.png" alt="Logo" className="logo-image" />
          </Link>
          <TeamMembers /> 
        </div>
        <ul className="nav-links">
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
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </nav>
      <div className="hero">
        <h1>Welcome to RecycleQuest</h1>
        <p>An interactive game to teach kids about recycling and environmental conservation.</p>
        <Link to="/game">
          <button className="cta-button">Play Now</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;