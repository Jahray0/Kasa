//import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import logo_header from "../assets/logo_header.png";
import "../styles/layout/Header.css";

function Header() {
  return (
    <header>
      <div className="header_container">
        <div className="logo">
          <img src={logo_header} alt="Logo Kasa" />
        </div>
        <nav>
          <ul className="list">
            <li>
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/about">A propos</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
