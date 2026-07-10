import { useState } from "react";
import "../styles/Topbar.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import { IoClose } from "react-icons/io5";

function TopBar() {
  const [showBar, setShowBar] = useState(true);

  if (!showBar) return null;

  return (
    <div className="topbar">

      <div className="topbar-left">
        <span className="offer">
          🎉 Limited Offer! Get 25% OFF on Website Development
        </span>

        <span className="divider">|</span>

        <span>
          <FaPhoneAlt /> +91 9047660095
        </span>

        <span className="divider">|</span>

        <span>
          <FaEnvelope /> hr.rmvtechnologies@gmail.com
        </span>
      </div>

      <div className="topbar-right">

        <a href="https://wa.me/919047660095" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>

        <a href="#">
          <FaFacebookF />
        </a>

        <a href="#">
          <FaInstagram />
        </a>

        <a href="https://www.linkedin.com/in/your-profile-name/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>

        <button
          className="close-btn"
          onClick={() => setShowBar(false)}
        >
          <IoClose />
        </button>

      </div>

    </div>
  );
}

export default TopBar;