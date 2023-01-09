import "./scoreBoard.css";
import playerOne from '../images/player-one.svg'
import playerTwo from '../images/player-two.svg'

const ScoreBoard = ({ playerNum, value }) => {
  return (
    <div>
      <img src={playerNum === "playerOne" ? playerOne : playerTwo} className={playerNum === "playerOne" ? "image-one" : "image-two"} alt=""></img>
      <div className={playerNum === "playerOne" ? "white-box-one" : "white-box-two"}>
        <div className={playerNum === "playerOne" ? "score-text-one" : "score-text-two"}>
          <p>{playerNum === "playerOne" ? "PLAYER 1" : "PLAYER 2"}</p>
          <p>{value}</p>
        </div>
      </div>
    </div>
  )
};

export default ScoreBoard;

// className={playerNum === "playerOne" ? "score-board-one" : "score-board-two"}
