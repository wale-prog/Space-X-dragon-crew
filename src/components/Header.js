import planet from '../images/001-uranus.png';
import './Header.css';

const Header = () => (
  <div className="header">
    <img src={planet} alt="Uranus" />
    <p>Dragon Crew</p>
  </div>
);
export default Header;
