import '../App.css'

function ScoreBoard({ score, highScore }) {
    return (
      <div className="score-board">
        <h1>Score: {score}</h1>
        <h2>High Score: {highScore}</h2>
      </div>
    );
  }
  export default ScoreBoard;