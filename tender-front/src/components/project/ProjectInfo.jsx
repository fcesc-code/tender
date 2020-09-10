import React from 'react';
import './projectInfo.sass';

function ProjectInfo(props) {
  const project = { ...props.project };

  return (
    <div className="projectInfo__container">
      <div className='info__main'>
        <h2>{project.title}</h2>
      </div>
    </div>
  );
}

export default ProjectInfo;