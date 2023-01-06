import "./gameBoard.css";
import boardWhite from '../images/board-layer-white-large.svg'
import boardBlack from '../images/board-layer-black-large.svg'

const GameBoard = ({ children }) => {
  return (
  <div>
    <img src={boardWhite} className="board-white" alt=""></img>
    <img src={boardBlack} className="board-black" alt=""></img>
    <div className="board-grid">
      {children}
    </div>
  </div>
  )
};

export default GameBoard;
