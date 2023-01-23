import "./header.css";
import logo from '../images/logo.svg'

const Header = ({ onClick }) => {
  return (
    <div className="header">
      <button className="header-btn">MENU</button>
      <img src={logo} className="" alt=""></img>
      <button className="header-btn" onClick={onClick}>RESTART</button>
    </div>
  )
};

export default Header;
