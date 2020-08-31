import React from 'react';
import project_mock from '../../mockdata-front/project_mock';

function ProjectProjectList() {
  const projects = project_mock;
  // probably instead of a link it would be interesting to use a State - regular one, not redux since it is only for this component
  return (
    <div className="projectBudgetList__tab">
      <ul>
        {projects.map(budget => { 
          return (<li><Link to={budget.slug}>{budget.title}</Link></li>)
        })}
      </ul>      
    </div>
  );
}

export default ProjectProjectList;