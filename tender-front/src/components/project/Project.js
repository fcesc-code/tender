import React, { useState } from 'react';
import ProjectInfo from './ProjectInfo';
import ProjectFlow from './ProjectFlow';
import ProjectBudgetList from './ProjectBudgetList';
import ProjectBudgetBoard from './ProjectBudgetBoard';
import ProjectBoard from './ProjectBoard';

function Project() {
  const [ view, setView ] = useState('all');

  function renderCurrentTab(){
    if(view === 'all'){
      return (<ProjectBoard />)
    } else {
      return (<ProjectBudgetBoard />)
    }
  }

  return (
    <div className='project__container'>
      <h2>Welcome to your Project</h2>
      <div className='project__side'></div>
        <ProjectFlow />
      <div className='project__main'>
        <ProjectInfo />
        <ProjectBudgetList />
        {renderCurrentTab()}
      </div>
    </div>
  );
}

export default Project;