import { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/RMV-logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Company Logo" />
        </Link>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>

        <li>
          <HashLink smooth to="/#about" onClick={closeMenu}>
            About
          </HashLink>
        </li>

        <li>
          <HashLink smooth to="/#services" onClick={closeMenu}>
            Services
          </HashLink>
        </li>

        <li>
          <Link to="/Port">Portfolio</Link>
        </li>

        <li>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>

      </ul>

      <button className="nav-btn">
        <Link to="/contact">
          Get Quote
        </Link>
      </button>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    </nav>
  );
}

export default Navbar;