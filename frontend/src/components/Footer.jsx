import "../styles/Footer.css";

import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-column">

          <h2 className="footer-logo">
            RMV Technologies
          </h2>

          <p>
            Empowering businesses and students through innovative IT
            solutions, software development, and professional training.
          </p>

          <div className="footer-social">

            <a href="#"><FaLinkedinIn /></a>

            <a href="#"><FaInstagram /></a>

            <a href="#"><FaFacebookF /></a>

            <a href="#"><FaWhatsapp /></a>

          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="#home"> Home</a>

          <a href="#about">About</a>

          <a href="#services"> Services</a>

          <a href="#why-us">Why Choose Us</a>

          <a href="#contact"> Contact</a>

        </div>

        {/* Services */}

        <div className="footer-column">

          <h3>Our Services</h3>

          <a href="#">Website Development</a>

          <a href="#"> Mobile App Development</a>

          <a href="#"> Full Stack Development</a>

          <a href="#"> Python Programming</a>

          <a href="#"> HR Management</a>

        </div>

        {/* Contact */}

        <div className="footer-column">

          <h3>Contact Us</h3>

          <p><FaPhoneAlt /> +91 9047660095</p>

          <p><FaEnvelope /> hr.rmvtechnologies@gmail.com</p>

          <p><FaMapMarkerAlt /> Madurai, Tamil Nadu</p>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 RMV Technologies. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;