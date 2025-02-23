import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "../App.css"; // Correct import path

function Home() {
    return (
      <div className="home">
        <h1>Welcome to RecycleQuest</h1>
        <p>An interactive game to teach kids about recycling and environmental conservation.</p>
        <Link to="/game"> {/* Use Link for navigation */}
          <button className="cta-button">Play Now</button>
        </Link>
      </div>
    );
  }
  
  export default Home;