import "../styles/Projects.css";
import { Link } from "react-router-dom";

import {
  FaExternalLinkAlt,
  FaArrowRight,
} from "react-icons/fa";

import construction from "../assets/construction-3.avif";
import saree from "../assets/sare.avif";
import ecommerce from "../assets/ecommerce.png";
import hr from "../assets/HR.jpg";
import erp from "../assets/erp.webp";
import hospital from "../assets/hm.webp";

const projects = [
  {
    id: 1,
    title: "Construction Company Website",
    image: construction,
    description:
      "A responsive website with project gallery, enquiry forms, cost estimator and modern UI.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    demo: "#",
    details: "#",
  },
  {
  id: 2,
  title: "Silk Saree Store Website",
  image: saree,
  description:
    "A responsive online silk saree store with product browsing, category filtering, user authentication, shopping cart, wishlist, secure checkout, and an intuitive user interface.",
  tech: ["React", "Express.js", "MongoDB", "Node.js"],
  demo: "#",
  details: "#",
},
  {
    id: 3,
    title: "E-Commerce Platform",
    image: ecommerce,
    description:
      "Complete MERN stack shopping website with authentication, cart and order management.",
    tech: ["React", "Node", "Express", "MongoDB"],
    demo: "#",
    details: "#",
  },
  {
    id: 4,
    title: "HR Management System",
    image: hr,
    description:
      "Employee management system with attendance, payroll and performance tracking.",
    tech: ["React", "Django", "PostgreSQL"],
    demo: "#",
    details: "#",
  },
  {
    id: 5,
    title: "College ERP",
    image: erp,
    description:
      "Student portal with attendance, fee management, examination and faculty dashboard.",
    tech: ["React", "Python", "MySQL"],
    demo: "#",
    details: "#",
  },
  {
    id: 6,
    title: "Hospital Management",
    image: hospital,
    description:
      "Hospital management software with appointments, billing and patient records.",
    tech: ["React", "Django", "PostgreSQL"],
    demo: "#",
    details: "#",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="section-title">

        <span>OUR PORTFOLIO</span>

        <h2>
          Transforming Ideas Into
          <span> Digital Solutions</span>
        </h2>

        <p>
          We deliver innovative software solutions,
          websites, mobile applications and enterprise
          systems that help businesses grow.
        </p>

      </div>

      <div className="projects-grid">

        {projects.map((project) => (

          <div className="project-card" key={project.id}>

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="project-overlay">

                <a
                  href={project.demo}
                  className="overlay-btn"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

                <a
                  href={project.details}
                  className="overlay-btn secondary"
                >
                  <FaArrowRight />
                  View Details
                </a>

              </div>

            </div>

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">

                {project.tech.map((item, index) => (

                  <span key={index}>
                    {item}
                  </span>

                ))}

              </div>

            </div>

          </div>

        ))}

      </div>

      <div className="projects-btn">
  <Link to="/Contact" className="view-more-btn">
    View More Projects →
  </Link>
</div>

    </section>
  );
}

export default Projects;