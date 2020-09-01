import React from 'react';
import { Link } from 'react-router-dom';
import './portfolioProjectItem.sass';
import LINKS from '../../routes/ROUTES';

function PortfolioProjectItem(props) {
  const project = props.project;
  return (
    <li key={project.title}>
      <div className="portfolioProjectList__item">
        <div className='item__title'>
          <h3>{project.title}</h3>
          <h4>- {project.status}</h4>
        </div>
        <p><Link to={`project/${project.slug}`}>Find out more of this project</Link></p>    
        <p>Description: {project.description}</p> 
        <p>Location: {project.location.street}, {project.location.city}, {project.location.postalCode}</p>
        <p>{project.location.region}, {project.location.country}</p>
      </div>
    </li>
  );
}

export default PortfolioProjectItem;









