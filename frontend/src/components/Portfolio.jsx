import { useState } from "react";
import "../styles/Portfolio.css";
import Tech from "./Tech";

import {
  FaLaptopCode,
  FaMobileAlt,
  FaRobot,
  FaCloud,
  FaPalette,
  FaArrowRight,
  FaProjectDiagram,
  FaUsers,
  FaAward,
  FaSmile,
} from "react-icons/fa";

function Portfolio() {

  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [

    {
      id: 1,
      category: "Web Development",
      title: "E-Commerce Platform",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
      description:
        "Modern e-commerce platform with secure payment gateway, inventory management, and responsive shopping experience.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      client: "Retail Business",
      duration: "3 Months",
    },

    {
      id: 2,
      category: "Mobile Apps",
      title: "Healthcare Mobile App",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200",
      description:
        "A healthcare application for appointment booking, online consultation, and medical record management.",
      technologies: ["Flutter", "Firebase", "REST API"],
      client: "Healthcare",
      duration: "4 Months",
    },

    {
      id: 3,
      category: "AI & ML",
      title: "AI Interview Platform",
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1200",
      description:
        "AI-powered interview preparation platform with resume analysis, coding practice, and speech evaluation.",
      technologies: ["Python", "React", "OpenAI", "Machine Learning"],
      client: "Education",
      duration: "5 Months",
    },

    {
      id: 4,
      category: "Cloud",
      title: "Cloud ERP Solution",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200",
      description:
        "Enterprise cloud ERP system for inventory, finance, HR, and business process automation.",
      technologies: ["AWS", "Docker", "Node.js"],
      client: "Manufacturing",
      duration: "6 Months",
    },

    {
      id: 5,
      category: "UI/UX",
      title: "Finance Dashboard",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
      description:
        "Interactive analytics dashboard with real-time reports, charts, and financial insights.",
      technologies: ["Figma", "React", "Chart.js"],
      client: "Finance",
      duration: "2 Months",
    },

    {
      id: 6,
      category: "Web Development",
      title: "Construction Company Website",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200",
      description:
        "Modern construction company website with quotation system, project showcase, and customer enquiry.",
      technologies: ["React", "CSS", "JavaScript"],
      client: "Construction",
      duration: "2 Months",
    },

  ];

  /* =====================================
        FILTER PROJECTS
  ===================================== */

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  const featuredProject = filteredProjects[0];

  return (

    <section className="portfolio-page">

      {/* Floating Background */}

      <div className="portfolio-blob blob1"></div>
      <div className="portfolio-blob blob2"></div>
      <div className="portfolio-blob blob3"></div>

      {/* ================= HERO ================= */}

      <section className="portfolio-hero">

        <span className="portfolio-tag">
          OUR PORTFOLIO
        </span>

        <h1>
          Building
          <span> Digital Excellence</span>
        </h1>

        <p>
          Explore our successful projects in Web Development,
          Mobile Applications, Artificial Intelligence,
          Cloud Computing, UI/UX Design, and Enterprise Solutions.
        </p>

        <div className="hero-buttons">

          <button>
            View Projects
          </button>

          <button className="outline-btn">
            Start Your Project
            <FaArrowRight />
          </button>

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="portfolio-stats">

        <div className="stat-card">

          <FaProjectDiagram className="stat-icon" />

          <h2>150+</h2>

          <p>Projects Delivered</p>

        </div>

        <div className="stat-card">

          <FaUsers className="stat-icon" />

          <h2>120+</h2>

          <p>Happy Clients</p>

        </div>

        <div className="stat-card">

          <FaAward className="stat-icon" />

          <h2>8+</h2>

          <p>Years Experience</p>

        </div>

        <div className="stat-card">

          <FaSmile className="stat-icon" />

          <h2>98%</h2>

          <p>Client Satisfaction</p>

        </div>

      </section>

            {/* =====================================
              CATEGORY FILTER
      ===================================== */}

      <section className="portfolio-filter">

        {[
          "All",
          "Web Development",
          "Mobile Apps",
          "AI & ML",
          "Cloud",
          "UI/UX",
        ].map((category) => (

          <button
            key={category}
            className={
              activeCategory === category
                ? "active-filter"
                : ""
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>

        ))}

      </section>

      {/* =====================================
            FEATURED PROJECT
      ===================================== */}

      <section className="featured-project">

        {/* Left Image */}

        <div className="featured-image">

          <img
            src={featuredProject.image}
            alt={featuredProject.title}
          />

          <div className="featured-badge">
            Featured Project
          </div>

        </div>

        {/* Right Content */}

        <div className="featured-content">

          <span className="project-category">

            {featuredProject.category}

          </span>

          <h2>

            {featuredProject.title}

          </h2>

          <p>

            {featuredProject.description}

          </p>

          {/* Client Details */}

          <div className="project-info">

            <div>

              <h4>Client</h4>

              <span>

                {featuredProject.client}

              </span>

            </div>

            <div>

              <h4>Timeline</h4>

              <span>

                {featuredProject.duration}

              </span>

            </div>

          </div>

          {/* Technologies */}

          <div className="tech-stack">

            {featuredProject.technologies.map((tech, index) => (

              <span key={index}>

                {tech}

              </span>

            ))}

          </div>

          {/* Buttons */}

          <div className="project-buttons">

            <button>

              View Project

            </button>

            <button className="outline-btn">

              Case Study

            </button>

          </div>

        </div>

      </section>

      {/* =====================================
            PROJECT GRID TITLE
      ===================================== */}

      <section className="portfolio-grid-section">

        <div className="section-heading">

          <span>

            LATEST PROJECTS

          </span>

          <h2>

            Explore Our Recent Work

          </h2>

          <p>

            Every project reflects our commitment to innovation,
            quality, performance, and delivering real business value
            to our clients.

          </p>

        </div>

        {/* Project Grid starts in Part 3 */}

                {/* =====================================
                PROJECT GRID
        ===================================== */}

        <div className="portfolio-grid">

          {filteredProjects.map((project) => (

            <div
              className="project-card"
              key={project.id}
            >

              {/* Image */}

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="project-overlay">

                  <button>

                    View Details

                  </button>

                </div>

              </div>

              {/* Content */}

              <div className="project-content">

                <span className="project-type">

                  {project.category}

                </span>

                <h3>

                  {project.title}

                </h3>

                <p>

                  {project.description}

                </p>

                {/* Technologies */}

                <div className="project-tech">

                  {project.technologies.map((tech, index) => (

                    <span key={index}>

                      {tech}

                    </span>

                  ))}

                </div>

                {/* Footer */}

                <div className="project-footer">

                  <div>

                    <small>

                      Client

                    </small>

                    <h5>

                      {project.client}

                    </h5>

                  </div>

                  <div>

                    <small>

                      Duration

                    </small>

                    <h5>

                      {project.duration}

                    </h5>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* =====================================
            TECHNOLOGY STACK
      ===================================== */}

      <section className="technology-section">

        

       <Tech/>
      </section>
            {/* =====================================
              CLIENT SUCCESS
      ===================================== */}

      <section className="success-section">

        <div className="section-heading">

          <span>CLIENT SUCCESS</span>

          <h2>Delivering Results That Matter</h2>

          <p>
            We build long-term partnerships by delivering
            innovative, scalable, and business-focused digital
            solutions.
          </p>

        </div>

        <div className="success-grid">

          <div className="success-card">

            <h2>150+</h2>

            <p>Projects Successfully Delivered</p>

          </div>

          <div className="success-card">

            <h2>120+</h2>

            <p>Satisfied Clients</p>

          </div>

          <div className="success-card">

            <h2>15+</h2>

            <p>Countries Served</p>

          </div>

          <div className="success-card">

            <h2>25+</h2>

            <p>Professional Developers</p>

          </div>

        </div>

      </section>

      {/* =====================================
              DEVELOPMENT TIMELINE
      ===================================== */}

      <section className="timeline-section">

        <div className="section-heading">

          <span>OUR WORKFLOW</span>

          <h2>How Every Project Comes To Life</h2>

          <p>
            Every successful project follows a streamlined
            development process from planning to deployment.
          </p>

        </div>

        <div className="timeline-container">

          <div className="timeline-item">

            <div className="timeline-circle">1</div>

            <h4>Discovery</h4>

            <p>
              Understanding business goals and gathering
              project requirements.
            </p>

          </div>

          <div className="timeline-item">

            <div className="timeline-circle">2</div>

            <h4>Planning</h4>

            <p>
              Preparing architecture, timeline,
              and project milestones.
            </p>

          </div>

          <div className="timeline-item">

            <div className="timeline-circle">3</div>

            <h4>Design</h4>

            <p>
              Creating beautiful UI/UX prototypes
              before development.
            </p>

          </div>

          <div className="timeline-item">

            <div className="timeline-circle">4</div>

            <h4>Development</h4>

            <p>
              Building scalable, secure,
              and high-performance applications.
            </p>

          </div>

          <div className="timeline-item">

            <div className="timeline-circle">5</div>

            <h4>Deployment</h4>

            <p>
              Launching, monitoring,
              and providing long-term support.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================
              TESTIMONIALS
      ===================================== */}

      <section className="testimonial-section">

        <div className="section-heading">

          <span>CLIENT REVIEWS</span>

          <h2>What Our Clients Say</h2>

        </div>

        <div className="testimonial-grid">

          <div className="testimonial-card">

            <p>
              "RMV Technologies exceeded our expectations.
              Their team delivered a high-quality solution
              before the deadline."
            </p>

            <h4>Rajesh Kumar</h4>

            <span>CEO • Retail Business</span>

          </div>

          <div className="testimonial-card">

            <p>
              "Excellent communication,
              modern design,
              and reliable support throughout
              the project."
            </p>

            <h4>Priya Sharma</h4>

            <span>Healthcare Startup</span>

          </div>

          <div className="testimonial-card">

            <p>
              "Professional developers,
              transparent workflow,
              and outstanding technical expertise."
            </p>

            <h4>Arun Prakash</h4>

            <span>Manufacturing Industry</span>

          </div>

        </div>

      </section>

      {/* =====================================
                  CTA
      ===================================== */}

      <section className="portfolio-cta">

        <div className="cta-content">

          <span>

            LET'S BUILD SOMETHING AMAZING

          </span>

          <h2>

            Ready To Start Your Next Project?

          </h2>

          <p>

            Whether you're a startup,
            SME,
            or enterprise,
            we help transform your ideas
            into world-class digital products.

          </p>

          <div className="cta-buttons">

            <button>

              Start Your Project

            </button>

            <button className="outline-btn">

              Contact Our Team

            </button>

          </div>

        </div>

      </section>

    </section>

  );

}

export default Portfolio;