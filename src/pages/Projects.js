import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/Projects";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
