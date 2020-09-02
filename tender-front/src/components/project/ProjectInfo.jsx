import React from 'react';
import TuneIcon from '@material-ui/icons/Tune';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import './projectInfo.sass';

function ProjectInfo(props) {
  const project = { ...props.project };

  return (
    <div className="projectInfo__container">
      <div className='info__main'>
        <h2>{project.title}</h2>
      </div>
      <div className='info__icons'>
        <div className='icon'>
          <TuneIcon htmlColor='#ffffff' />
        </div>
        <div className='icon'>
          <SortByAlphaIcon htmlColor='#ffffff' /> 
        </div>
      </div>
    </div>
  );
}

export default ProjectInfo;