import React from 'react';

function ProjectInfo(props) {
  const project = { ...props.project };

  return (
    <div className="projectInfo__container">
      <h2>{project.title} - highlights</h2>
      <h3>status: {project.status}</h3>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectInfo;