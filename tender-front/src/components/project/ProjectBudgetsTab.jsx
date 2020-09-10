import React from 'react';
import { Link } from 'react-router-dom';
import project_mock from '../../mockdata-front/project_mock';
import './projectBudgetsTab.sass';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function ProjectBudgetTab() {
  const projects = project_mock;
  // probably instead of a link it would be interesting to use a State - regular one, not redux since it is only for this component
  // change route of home in the first link
  // devolver la info al componente parent con una callback
  return (
    <div className="projectBudgetList__tab">
      <ul>
        {projects.map(budget => { 
          return (<li><Link to={budget.slug}>{budget.title}</Link></li>)
        })}
        <li className='specialRight'><ChevronRightIcon /></li>
      </ul>      
    </div>
  );
}

export default ProjectBudgetTab;