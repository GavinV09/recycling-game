import '../App.css';

function LeaderBoard() {
  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <div className="leaderboard-entry">
        <span className="rank">1</span>
        <span className="player">Player 1</span>
        <span className="score">1000</span>
      </div>
      <div className="leaderboard-entry">
        <span className="rank">2</span>
        <span className="player">Player 2</span>
        <span className="score">900</span>
      </div>
      <div className="leaderboard-entry">
        <span className="rank">3</span>
        <span className="player">Player 3</span>
        <span className="score">800</span>
      </div>
      <div className="leaderboard-entry">
        <span className="rank">4</span>
        <span className="player">Player 4</span>
        <span className="score">700</span>
      </div>
      <div className="leaderboard-entry">
        <span className="rank">5</span>
        <span className="player">Player 5</span>
        <span className="score">600</span>
      </div>
      <div className="leaderboard-entry">
        <span className="rank">6</span>
        <span className="player">Player 6</span>
        <span className="score">500</span>
      </div>
      <div className="leaderboard-entry">
        <span className="rank">7</span>
        <span className="player">Player 7</span>
        <span className="score">400</span>
      </div>
      <div className="leaderboard-entry">
        <span className="rank">8</span>
        <span className="player">Player 8</span>
        <span className="score">300</span>
      </div>
      <div className="leaderboard-entry">
        <span className="rank">9</span>
        <span className="player">Player 9</span>
        <span className="score">200</span>
      </div>
      <div className="leaderboard-entry">
        <span className="rank">10</span>
        <span className="player">Player 10</span>
        <span className="score">100</span>
      </div>
    </div>
  );
}

export default LeaderBoard;