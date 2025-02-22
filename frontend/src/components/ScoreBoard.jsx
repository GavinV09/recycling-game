import '../App.css'

function ScoreBoard({score}) {
    return (
        <div className="score-board">
            <h1>Current Score: <span className="score">{score}</span></h1>
        </div>
    )
}

export default ScoreBoard;