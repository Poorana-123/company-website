import "../styles/Hero.css";
import { TypeAnimation } from "react-type-animation";

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
            Get Started
          </button>

          <button className="secondary-btn">
            Explore Courses
          </button>
        </div>

      </div>

    </section>
  );
}

export default Hero;