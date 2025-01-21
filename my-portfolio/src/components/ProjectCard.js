import React from "react";
import '../styles/ProjectCard.css'

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h2>{project.title}</h2>
      <img src={project.image} alt={`${project.title} Thumbnail`} />
      <pb>{project.date}</pb>
      <p>{project.description}</p>
      {project.technical && (
        <div className="technical-section">
          <h4>Technical Highlights:</h4>
          <ul>
            {project.technical.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="project-links">
        {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub</a>}
      </div>
    </div>
  );
}

export default ProjectCard;
