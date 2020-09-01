import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import ProjectInfo from './ProjectInfo';
import ProjectFlow from './ProjectFlow';
import ProjectBudgetTab from './ProjectBudgetTab';
import ProjectBudgetBoard from './ProjectBudgetBoard';
import ProjectBoard from './ProjectBoard';
import portfolio_mock from '../../mockdata-front/portfolio_mock';

function Project() {
  let urlQuery = useRouteMatch()
  let urlSlug = urlQuery.params.projectSlug;
  const [ slug, setSlug ] = useState(urlSlug);
  const [ view ] = useState('all');
  const [ project, setProject ] = useState(undefined);
  console.log('AQUI', urlSlug);

  useEffect(() => {
    if( project === undefined){ setProject(loadProjectBySlug(slug)) }
  });

  function loadProjectBySlug(slug){
    // to be removed
    const data = portfolio_mock.filter(project => project.slug === slug)[0];
    console.log('DATOS DEL MOCK', data)
    return data;
  }

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
        <ProjectInfo project={project} />
        <ProjectBudgetTab />
        {renderCurrentTab()}
      </div>
    </div>
  );
}

export default Project;