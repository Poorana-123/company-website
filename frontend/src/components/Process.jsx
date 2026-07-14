import { useState, useEffect } from "react";
import "../styles/Process.css";

import {
  FaClipboardList,
  FaPencilRuler,
  FaLaptopCode,
  FaVial,
  FaRocket,
  FaHeadset,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function Process() {
  const steps = [
    {
  number: "01",
  icon: <FaClipboardList />,
  title: "Requirement Analysis",

  description:
    "We understand your business objectives, analyze project requirements, and create a clear roadmap to ensure successful development.",

  features: [
    "Business Consultation",
    "Requirement Gathering",
    "Project Planning",
    "Cost Estimation"
  ],

  duration: "2 - 5 Days",

  team: "Business Analysts"
},
   {
  number: "02",
  icon: <FaPencilRuler />,
  title: "UI / UX Design",

  description:
    "Our design team creates modern, intuitive, and engaging user interfaces that provide the best experience across all devices.",

  features: [
    "Wireframing",
    "Interactive Prototypes",
    "Responsive Design",
    "User Experience Research"
  ],

  duration: "3 - 7 Days",

  team: "UI / UX Designers"
},
    {
  number: "03",
  icon: <FaLaptopCode />,
  title: "Development",

  description:
    "Our developers build secure, scalable, and high-performance web and mobile applications using modern technologies.",

  features: [
    "Frontend Development",
    "Backend Development",
    "API Integration",
    "Database Development"
  ],

  duration: "2 - 8 Weeks",

  team: "Development Team"
},
    {
  number: "04",
  icon: <FaVial />,
  title: "Testing & QA",

  description:
    "We thoroughly test every feature to ensure security, reliability, performance, and a seamless user experience.",

  features: [
    "Functional Testing",
    "Performance Testing",
    "Security Testing",
    "Bug Fixing"
  ],

  duration: "3 - 5 Days",

  team: "QA Engineers"
},
    {
  number: "05",
  icon: <FaRocket />,
  title: "Deployment",

  description:
    "After successful testing, we deploy your application to a secure production environment with complete monitoring.",

  features: [
    "Cloud Deployment",
    "Server Configuration",
    "Domain & SSL Setup",
    "Performance Optimization"
  ],

  duration: "1 - 2 Days",

  team: "DevOps Engineers"
},
    {
  number: "06",
  icon: <FaHeadset />,
  title: "Support & Maintenance",

  description:
    "Our support team provides continuous monitoring, updates, performance improvements, and technical assistance after launch.",

  features: [
    "24/7 Technical Support",
    "Regular Updates",
    "Performance Monitoring",
    "Feature Enhancements"
  ],

  duration: "Ongoing",

  team: "Support Team"
},
  ];

  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [steps.length]);

  // Previous
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  // Next
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % steps.length);
  };

  return (
    <section id="process" className="process">
      <div className="process-header">
        <span className="process-tag">OUR PROCESS</span>

        <h2>
          How We Transform <span>Your Ideas Into Reality</span>
        </h2>

        <p>
          We follow a streamlined development process that ensures transparency,
          quality, and successful project delivery from concept to completion.
        </p>
      </div>

      <div className="process-slider">

        {/* Previous Button */}
        <button className="arrow left-arrow" onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        {/* Card */}
        {/* Card */}
<div className="process-card">

  <div className="process-number">
    {steps[current].number}
  </div>

  <div className="process-icon">
    {steps[current].icon}
  </div>

  <h3>{steps[current].title}</h3>

  <p>{steps[current].description}</p>

  {/* Features */}

  <div className="process-features">

    {steps[current].features.map((feature, index) => (

      <div className="feature-box" key={index}>

        ✓ {feature}

      </div>

    ))}

  </div>

  {/* Footer */}

  <div className="process-footer">

    <div className="footer-item">

      <span>Duration</span>

      <h4>{steps[current].duration}</h4>

    </div>

    <div className="footer-item">

      <span>Handled By</span>

      <h4>{steps[current].team}</h4>

    </div>

  </div>

  {/* Button */}

  <button className="learn-btn">

    Learn More →

  </button>

</div>

        {/* Next Button */}
        <button className="arrow right-arrow" onClick={nextSlide}>
          <FaChevronRight />
        </button>

      </div>

      {/* Dots */}
      <div className="dots">
        {steps.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Process;