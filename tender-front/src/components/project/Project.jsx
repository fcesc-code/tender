import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import ProjectInfo from './ProjectInfo';
import ProjectFlow from './ProjectFlow';
import ProjectBudgetTab from './ProjectBudgetTab';
import ProjectBudgetBoard from './ProjectBudgetBoard';
import ProjectBoard from './ProjectBoard';
import portfolio_mock from '../../mockdata-front/portfolio_mock';
import portfolio_timeline_mock from './../../mockdata-front/portfolio_timeline_mock';
import './project.sass';

function Project() {
  let urlQuery = useRouteMatch()
  let urlSlug = urlQuery.params.projectSlug;
  const [ slug ] = useState(urlSlug);
  const [ view ] = useState('another');
  const [ project, setProject ] = useState(undefined);
  const timeline = portfolio_timeline_mock;

  useEffect(() => {
    if( project === undefined){ setProject(loadProjectBySlug(slug)) }
  }, [project, slug]);

  function loadProjectBySlug(slugArg){
    // to be removed
    const data = portfolio_mock.filter(projectItem => projectItem.slug === slugArg)[0];
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
      <div className='project__side'>
        <ProjectFlow timeline={timeline}/>
      </div>
      <div className='project__main'>
        <ProjectInfo project={project} />
        <ProjectBudgetTab />
        {renderCurrentTab()}
      </div>
    </div>
  );
}

export default Project;