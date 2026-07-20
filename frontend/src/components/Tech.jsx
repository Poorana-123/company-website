import { useState } from "react";
import "../styles/Tech.css";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaPython,
  FaNodeJs,
  FaMobileAlt,
  FaDatabase,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaFigma,
  FaRobot,
  FaServer
} from "react-icons/fa";

function Tech() {

  const [activeTab, setActiveTab] = useState("Frontend");

  const technologies = {

    Frontend: [

      {
        icon: <FaReact />,
        name: "React"
      },

      {
        icon: <FaHtml5 />,
        name: "HTML5"
      },

      {
        icon: <FaCss3Alt />,
        name: "CSS3"
      },

      {
        icon: <FaJs />,
        name: "JavaScript"
      },

      {
        icon: <FaBootstrap />,
        name: "Bootstrap"
      }

    ],

    Backend: [

      {
        icon: <FaNodeJs />,
        name: "Node JS"
      },

      {
        icon: <FaServer />,
        name: "Express JS"
      },
      {
        icon: <FaPython />,
        name: "Python"
      },

      {
        icon: <FaServer />,
        name: "Django"
      }

    ],

    Mobile: [

      {
        icon: <FaMobileAlt />,
        name: "Flutter"
      },

      {
        icon: <FaMobileAlt />,
        name: "Android"
      },

      {
        icon: <FaMobileAlt />,
        name: "iOS"
      }

    ],

    Database: [

      {
        icon: <FaDatabase />,
        name: "MySQL"
      },

      {
        icon: <FaDatabase />,
        name: "MongoDB"
      },

      {
        icon: <FaDatabase />,
        name: "PostgreSQL"
      }

    ],

    Cloud: [

      {
        icon: <FaAws />,
        name: "AWS"
      },

      {
        icon: <FaDocker />,
        name: "Docker"
      },

      {
        icon: <FaGitAlt />,
        name: "Git"
      }

    ],

    "UI/UX": [

      {
        icon: <FaFigma />,
        name: "Figma"
      },

      {
        icon: <FaRobot />,
        name: "AI Design"
      }

    ],

    AI: [

      {
        icon: <FaRobot />,
        name: "Artificial Intelligence"
      },

      {
        icon: <FaRobot />,
        name: "Machine Learning"
      }

    ]

  };

  return (

    <section className="technology-section">

      <div className="container">

        <div className="section-heading">

          <span>

            TECHNOLOGY STACK

          </span>

          <h2>

            Modern Technologies We Use

          </h2>

          <p>

            We leverage the latest technologies to build
            secure, scalable and future-ready digital
            solutions.

          </p>

        </div>

        {/* Tabs */}

        <div className="technology-tabs">

          {

            Object.keys(technologies).map((tab) => (

              <button

                key={tab}

                className={
                  activeTab === tab
                    ? "tab active"
                    : "tab"
                }

                onClick={() => setActiveTab(tab)}

              >

                {tab}

              </button>

            ))

          }

        </div>

        {/* Technology Grid */}

        <div className="technology-grid">

          {

            technologies[activeTab].map((item, index) => (

              <div

                className="technology-card"

                key={index}

                style={{

                  animationDelay: `${index * 0.18}s`

                }}

              >

                <div className="technology-icon">

                  {item.icon}

                </div>

                <h4>

                  {item.name}

                </h4>

              </div>

            ))

          }

        </div>

      </div>

    </section>

  );

}

export default Tech;