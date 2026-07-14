import "../styles/Navbar.css";
import logo from "../assets/RMV-logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Company Logo" />
        </Link>
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <a href="/#about">About</a>
        </li>

        <li>
          <a href="/#services">Services</a>
        </li>

        <li>
          <a href="/#portfolio">Portfolio</a>
        </li>

        <li>
          <Link to="/Contact">Contact</Link>
        </li>

      </ul>

      <button className="nav-btn">
        <Link to="/Contact">Get Quote</Link>
      </button>

    </nav>
  );
}

export default Navbar;