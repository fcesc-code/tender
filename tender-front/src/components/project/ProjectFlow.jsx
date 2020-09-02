import React from 'react';
import CustomTimeLine from './../common/CustomTimeLine';
import './projectFlow.sass';

function ProjectFlow(props) {
  return (
    <div className='projectFlow__container'>
      <h2>FLOW</h2>
      <CustomTimeLine timeline={props.timeline}/>
    </div>
  );
}

export default ProjectFlow;