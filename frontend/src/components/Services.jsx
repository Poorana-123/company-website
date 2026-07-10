import { useState } from "react";
import "../styles/Services.css";

import {
  FaLaptopCode,
  FaMobileAlt,
  FaShoppingCart,
  FaPython,
  FaCloud,
  FaUserTie,
  FaPaintBrush,
} from "react-icons/fa";

import web from "../assets/web.jpg";
import mobile from "../assets/mobile-app.jpg";
import fullstack from "../assets/full-stack.png";
import python from "../assets/python.jpg";
import cloud from "../assets/cloud1.avif";
import hr from "../assets/HR.jpg";
import uiux from "../assets/ui.jpg";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Website Development",
      image: web,
      description:
        "We create responsive, secure and high-performance websites using modern technologies.",

      features: [
        "Responsive Website Design",
        "Custom Website Development",
        "Corporate Website Solutions",
        "Landing Page Development",
        "React.js Frontend",
        "REST API Integration",
        "Payment Gateway Integration",
        "Cloud Hosting & Deployment",
      ],
    },

    {
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      image: mobile,
      description:
        "Native Android and iOS applications with intuitive UI and excellent performance.",

      features: [
        "Android Development",
        "iOS Development",
        "Flutter Apps",
        "React Native",
        "Firebase Integration",
        "Push Notifications",
        "Google Maps",
        "App Store Deployment",
      ],
    },

    {
      icon: <FaShoppingCart />,
      title: "Full Stack Development",
      image: fullstack,
      description:
        "Learn frontend and backend development through live industry projects.",

      features: [
        "HTML & CSS",
        "JavaScript",
        "React.js",
        "Python",
        "Java",
        "MongoDB",
        "Git & GitHub",
        "Real-Time Projects",
      ],
    },

    {
      icon: <FaPython />,
      title: "Python Programming",
      image: python,
      description:
        "Master Python from beginner to advanced with practical applications.",

      features: [
        "Core Python",
        "Object-Oriented Programming",
        "File Handling",
        "Django Framework",
        "Flask Basics",
        "Automation Scripts",
        "API Development",
        "Mini Projects",
      ],
    },

    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      image: cloud,
      description:
        "Deploy scalable cloud infrastructure with security and performance.",

      features: [
         "AWS Services",
          "Microsoft Azure",
          "Docker",
          "Kubernetes",
          "CI/CD Pipelines",
          "Linux Server",
          "Cloud Security",
          "Monitoring & Logging",
      ],
    },

    {
      icon: <FaUserTie />,
      title: "HR Management",
      image: hr,
      description:
        "Professional HR training including recruitment, payroll and employee management.",

      features: [
         "Recruitment",
         "Payroll Management",
         "HR Compliance",
         "Performance Management",
         "Employee Engagement",
         "Labour Laws",
         "Interview Skills",
         "HR Analytics",
      ],
    },

    {
      icon: <FaPaintBrush />,
      title: "UI / UX Design",
      image: uiux,
      description:
        "Create attractive and user-friendly interfaces for web and mobile applications.",

      features: [
        "Figma",
        "Adobe XD",
        "Wireframing",
        "Prototyping",
        "Design Systems",
        "User Research",
        "Interaction Design",
        "Responsive UI",
      ],
    },
  ];

  const [active, setActive] = useState(0);

 return (
  <section id="services" className="services">

    <div className="services-header">

      <h2>
        Innovative IT Solutions &
        Professional Training
      </h2>

      <p>
        From custom software development to industry-focused training, we
        deliver technology solutions that empower businesses and prepare
        individuals for successful careers.
      </p>
    </div>

    <div className="services-wrapper">

      <div className="services-left">
        {services.map((service, index) => (
          <div
            key={index}
            className={`menu-item ${active === index ? "active" : ""}`}
            onClick={() => setActive(index)}
          >
            <span>{service.icon}</span>
            <h4>{service.title}</h4>
          </div>
        ))}
      </div>

      <div className="services-right">

        <img
          key={active}
          src={services[active].image}
          alt={services[active].title}
          className="service-image"
        />

        <h2>{services[active].title}</h2>

        <p>{services[active].description}</p>

        <div className="feature-grid">
          {services[active].features.map((feature, index) => (
            <div key={index} className="feature-card">
              {feature}
            </div>
          ))}
        </div>

      </div>

    </div>

  </section>
);
}

export default Services;