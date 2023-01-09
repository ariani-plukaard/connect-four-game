import "./turnTracker.css";
import red from '../images/turn-background-red.svg'
import yellow from '../images/turn-background-yellow.svg'

const TurnTracker = ({ player, score, time, win, onClick }) => {
  if (win) {
    return (
      <div className="white-rectangle">
        <div>
          <p>{player === "red" ? "PLAYER 1" : "PLAYER 2"}</p>
          <p>WINS</p>
        </div>
        <button className="" onClick={onClick}>PLAY AGAIN</button>
      </div>
    )
  } else {
    return (
      <div>
        <img src={player === "red" ? red : yellow} className="turns" alt=""></img>
        <div className="turns-text">
          <p>{player === "red" ? "PLAYER 1'S TURN" : "PLAYER 2'S TURN"}</p>
          <p>{time}s</p>
        </div>
      </div>
    )
  }
};

export default TurnTracker;
