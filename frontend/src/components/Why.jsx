import "../styles/Why.css";

import {
  FaUserTie,
  FaLaptopCode,
  FaBriefcase,
  FaCertificate,
  FaHeadset,
  FaClock,
} from "react-icons/fa";

function Why() {
  const features = [
    {
      icon: <FaUserTie />,
      title: "Industry Experts",
      description:
        "Experienced professionals delivering real-world IT solutions.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Hands-on Projects",
      description:
        "Build practical applications through live industry projects.",
    },
    {
      icon: <FaBriefcase />,
      title: "Placement Support",
      description:
        "Resume building, interview preparation, and career guidance.",
    },
    {
      icon: <FaCertificate />,
      title: "Professional Certification",
      description:
        "Earn certificates recognized by industry professionals.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Technical Support",
      description:
        "Continuous assistance from our experienced technical team.",
    },
    {
      icon: <FaClock />,
      title: "Flexible Learning",
      description:
        "Online, offline, and hybrid learning designed for your schedule.",
    },
  ];

  return (
    <section id="why-us" className="why">

      <div className="why-header">

        <span className="why-tag">
          WHY CHOOSE US
        </span>

        <h2>
          Why Businesses &
          <span> Students Choose RMV Technologies</span>
        </h2>

        <p>
          We combine innovation, technical expertise, and practical learning
          to deliver outstanding IT solutions and career-focused training
          programs that help businesses grow and students succeed.
        </p>

      </div>

      <div className="orbit-container">

        {/* Center Circle */}
        <div className="center-circle">

          <h2>RMV</h2>

          <p>Technologies</p>

        </div>

        {/* Orbit Ring */}
        <div className="orbit-ring">

          {features.map((feature, index) => (

            <div
              key={index}
              className={`orbit-card orbit-${index + 1}`}
            >

              <div className="card-content">

                <div className="orbit-icon">
                  {feature.icon}
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Why;