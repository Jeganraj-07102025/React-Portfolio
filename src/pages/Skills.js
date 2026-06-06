import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = {
    languages: ["JavaScript","Java"],
    frontend: ["React", "CSS","HTML"],
    backend: ["Java"],
    database: ["MongoDB", "MySQL"],
    tools: [ "GitHub", "Postman", "Git","Eclipse", "VS Code"]
  };

  const categoryColors = {
    languages: "#f39c12", // orange
    frontend: "#3498db",  // blue
    backend: "#e74c3c",   // red
    database: "#2ecc71",  // green
    tools: "#9b59b6"      // purple
  };

  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {Object.keys(skills).map((category, idx) => (
          <aside
            key={idx}
            className="skills-category"
            style={{ borderTop: `4px solid ${categoryColors[category]}` }}
          >
            <h3 style={{ color: categoryColors[category] }}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
            <ul className={category === "tools" ? "tools-list" : ""}>
              {skills[category].map((skill, index) => (
                <li key={index} className={category === "tools" ? "tool-badge" : ""}>
                  {skill}
                </li>
              ))}
            </ul>
          </aside>
        ))}
      </div>
    </section>
  );
};

export default Skills;