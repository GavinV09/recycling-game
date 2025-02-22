import '../App.css';
import FallingGrid from './FallingGrid.jsx'
import Bins from './Bins.jsx'
import ScoreBoard from './ScoreBoard.jsx'
import LeaderBoard from './LeaderBoard.jsx'

function GameContainer() {
    const score = 100;

    return (
        <div className="game-container">    
            <div className="background"></div>
            <FallingGrid />
            <Bins />
            <ScoreBoard score={score}/>
            <LeaderBoard />
        </div>
    );
}

export default GameContainer;   