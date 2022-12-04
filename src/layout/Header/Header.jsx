import { Link } from "react-router-dom";
import logo_header from "../../assets/logo_header.png";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="h_container">
        <div className="logo">
          <img src={logo_header} alt="coucou" />
        </div>

        <nav>
          <ul className="list">
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">A propos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
