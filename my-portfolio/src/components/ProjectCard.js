import React from "react";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={`${project.title} Thumbnail`} />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <div className="project-links">
        {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>}
        {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub</a>}
      </div>
    </div>
  );
}

export default ProjectCard;
