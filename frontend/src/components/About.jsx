import "../styles/About.css";
import { FaLaptopCode, FaUsers, FaRocket, FaAward } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">

      <div className="section-title">
        <span>ABOUT US</span>
        <h2>Building Digital Success Stories</h2>
      </div>

      <p className="about-text">
        We are a passionate team of developers, designers, and technology
        experts dedicated to creating innovative digital solutions.
        From startups to enterprises, we help businesses grow through
        modern software, web applications, mobile apps, and cloud technologies.
      </p>

      <div className="about-cards">

        <div className="about-card">
          <FaAward className="icon"/>
          <h3>3+</h3>
          <p>Years Experience</p>
        </div>

        <div className="about-card">
          <FaRocket className="icon"/>
          <h3>100+</h3>
          <p>Projects Delivered</p>
        </div>

        <div className="about-card">
          <FaUsers className="icon"/>
          <h3>80+</h3>
          <p>Happy Clients</p>
        </div>

        <div className="about-card">
          <FaLaptopCode className="icon"/>
          <h3>30+</h3>
          <p>IT Professionals</p>
        </div>

      </div>

      <button className="about-btn">
        Learn More
      </button>

    </section>
  );
}

export default About;