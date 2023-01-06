import "./pointer.css";
import redPointer from '../images/marker-red.svg'
import yellowPointer from '../images/marker-yellow.svg'

const Pointer = ({ colour, onFocus, onClick }) => {
  return (
    <div onMouseEnter={onFocus} onClick={onClick}>
      <img src={colour === "red" ? redPointer : colour === "yellow" ? yellowPointer : ""} className="pointer" alt=""></img>
    </div>
  );
};

export default Pointer;
