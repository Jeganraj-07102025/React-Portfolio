import React from "react";
import "./Contact.css";
import resumeFile from "../assets/Jeganraj.P.pdf";

const Contact = () => {
  const email = "jegandhara99@gmail.com.com";
  const phone = "7339397568";

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <p className="contact-intro">
        "I look forward to connecting and learning about any opportunities that
        align with my skills. Please feel free to contact me."
      </p>

      <div className="contact-info">
        <p>
          <strong>Phone:</strong> <a href={`tel:${phone}`}>{phone}</a>
        </p>

        <p>
          <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
        </p>

        <p>
          <strong>Resume:</strong>{" "}
          <a
            href={resumeFile}
            download="Jeganraj.P.pdf"
            className="resume-button"
          >
            Download My Resume
          </a>
        </p>
        <p className="note">
          "Explore my experience and skills to see how I can contribute to your
          team."
        </p>
      </div>

      <p className="contact-outro">
        Looking forward to hearing from you. Let’s build something amazing
        together!
      </p>
    </section>
  );
};

export default Contact;
