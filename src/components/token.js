import redToken from '../images/counter-red-large.svg'
import yellowToken from '../images/counter-yellow-large.svg'

const Token = ({ colour}) => {
  return (
    <img src={colour === "red" ? redToken : colour === "yellow" ? yellowToken : ""} alt=""></img>
  );
};

export default Token;
