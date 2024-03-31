// ProjectItem.js
import React from 'react';

function ProjectItem({ project }) {
  const { id, name, technologies } = project;

  return (
    <div className="project-item" key={id}>
      <h3>{name}</h3>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
