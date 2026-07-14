import { useState } from "react";
import "../styles/Contact.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {

  const [formType, setFormType] = useState("business");

  return (

    <section className="contact-page">

      {/* Background Blobs */}

      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      {/* =========================================
                  HERO SECTION
      ========================================= */}

      <div className="contact-hero">

        <span className="contact-tag">
          CONTACT US
        </span>

        <h1>

          Let's Build Something

          <span> Amazing Together</span>

        </h1>

        <p>

          Whether you're looking for software development,
          IT consulting, or professional training, our
          experienced team is ready to help.

        </p>

      </div>

      {/* =========================================
              GET IN TOUCH
      ========================================= */}

      <div className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-left">

          <h2>Get In Touch</h2>

          <p>

            We'd love to hear from you.
            Select the appropriate category and
            send us your enquiry.

          </p>

          <div className="contact-info">

            <div className="info-card">

              <div className="info-icon">

                <FaPhoneAlt />

              </div>

              <div>

                <h4>Phone</h4>

                <span>

                  +91 98765 43210

                </span>

              </div>

            </div>

            <div className="info-card">

              <div className="info-icon">

                <FaEnvelope />

              </div>

              <div>

                <h4>Email</h4>

                <span>

                  info@rmvtechnologies.com

                </span>

              </div>

            </div>

            <div className="info-card">

              <div className="info-icon">

                <FaMapMarkerAlt />

              </div>

              <div>

                <h4>Office</h4>

                <span>

                  60, New Jail Rd,
                  <br />

                  Karimedu,

                  Arappalayam,

                  <br />

                  Madurai,

                  Tamil Nadu 625016

                </span>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================
                  RIGHT SIDE
        ===================================== */}

        <div className="contact-form-box">

          <h2>

            Send Your Enquiry

          </h2>

          {/* Form Toggle */}

          <div className="form-switch">

            <button

              className={
                formType === "business"
                  ? "active"
                  : ""
              }

              onClick={() =>
                setFormType("business")
              }

              type="button"
            >

              Business Inquiry

            </button>

            <button

              className={
                formType === "course"
                  ? "active"
                  : ""
              }

              onClick={() =>
                setFormType("course")
              }

              type="button"
            >

              Course Registration

            </button>

          </div>

          {/* =====================================
          BUSINESS FORM
===================================== */}

{formType === "business" && (

  <form className="contact-form">

    <div className="input-row">

      <input
        type="text"
        placeholder="Company Name"
      />

      <input
        type="text"
        placeholder="Contact Person"
      />

    </div>

    <div className="input-row">

      <input
        type="email"
        placeholder="Business Email"
      />

      <input
        type="tel"
        placeholder="Phone Number"
      />

    </div>

    <div className="input-row">

      <select>

        <option>Select Service</option>
        <option>Website Development</option>
        <option>Mobile App Development</option>
        <option>Custom Software Development</option>
        <option>Full Stack Development</option>
        <option>Cloud Solutions</option>
        <option>UI / UX Design</option>
        <option>Digital Marketing</option>
        <option>IT Consulting</option>

      </select>

      <select>

        <option>Estimated Budget</option>
        <option>Below ₹50,000</option>
        <option>₹50,000 - ₹1,00,000</option>
        <option>₹1,00,000 - ₹5,00,000</option>
        <option>Above ₹5,00,000</option>

      </select>

    </div>

    <textarea
      rows="6"
      placeholder="Tell us about your project..."
    ></textarea>

    <button
      type="submit"
      className="submit-btn"
    >
      <FaPaperPlane />
      Send Business Inquiry
    </button>

  </form>

)}

{/* =====================================
      COURSE REGISTRATION FORM
===================================== */}

{formType === "course" && (

  <form className="contact-form">

    <div className="input-row">

      <input
        type="text"
        placeholder="Student Name"
      />

      <input
        type="email"
        placeholder="Email Address"
      />

    </div>

    <div className="input-row">

      <input
        type="tel"
        placeholder="Mobile Number"
      />

      <select>

        <option>Select Course</option>
        <option>Python Programming</option>
        <option>Java Full Stack</option>
        <option>MERN Stack Development</option>
        <option>Data Science</option>
        <option>Artificial Intelligence</option>
        <option>Machine Learning</option>
        <option>UI / UX Design</option>
        <option>Digital Marketing</option>

      </select>

    </div>

    <div className="input-row">

      <input
        type="text"
        placeholder="College / Company"
      />

      <input
        type="text"
        placeholder="Qualification"
      />

    </div>

    <textarea
      rows="6"
      placeholder="Why do you want to join this course?"
    ></textarea>

    <button
      type="submit"
      className="submit-btn"
    >
      <FaPaperPlane />
      Register Now
    </button>

  </form>

)}

        

        </div>

      </div>

            {/* =========================================
                GOOGLE MAP
      ========================================= */}

      <div className="map-section">

        <div className="map-header">

          <span>OUR LOCATION</span>

          <h2>Visit Our Office</h2>

          <p>
            We welcome clients, students, and business partners to visit our
            office in Madurai for project discussions, consultations, and
            training enquiries.
          </p>

        </div>

        <div className="map-wrapper">

          <iframe
            title="RMV Technologies Location"
            src="https://www.google.com/maps?q=60,+New+Jail+Rd,+Karimedu,+Arappalayam,+Madurai,+Tamil+Nadu+625016&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>

      </div>

      {/* =========================================
                FINAL CALL TO ACTION
      ========================================= */}

      <section className="final-banner">

        <div className="banner-content">

          <span className="banner-tag">

            BUILD THE FUTURE WITH US

          </span>

          <h2>

            Have an Idea?

            <br />

            <span>We Build It.</span>

          </h2>

          <p>

            From modern websites and mobile applications to enterprise
            software, cloud solutions, and professional IT training,
            RMV Technologies transforms your ideas into innovative,
            scalable, and future-ready digital solutions.

          </p>

          <button className="banner-btn">

            Start Your Project

          </button>

        </div>

        {/* Floating Background */}

        <div className="floating-circle circle1"></div>

        <div className="floating-circle circle2"></div>

        <div className="floating-circle circle3"></div>

      </section>

    </section>

  );

}

export default Contact;