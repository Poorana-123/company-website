import "../styles/Hero.css";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <span className="hero-tag">
          🚀 Welcome to RMV Technologies
        </span>

        <h1>
          We Build
          <br />

          <span className="typing">
            <TypeAnimation
              sequence={[
                "Modern Websites",
                2000,
                "Mobile Applications",
                2000,
                "Full Stack Applications",
                2000,
                "Python Solutions",
                2000,
                "HR Management Systems",
                2000,
                "Career-Oriented Training",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>

        <p>
          We empower businesses and students with innovative software
          development, professional training, internships, and digital
          transformation solutions.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            <Link to="/Contact">Get Started</Link>
          </button>

          <button className="secondary-btn">
            <HashLink to="/#services">Explore Courses</HashLink>
            
          </button>
        </div>

      </div>

    </section>
  );
}

export default Hero;