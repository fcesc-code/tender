import React from 'react';
import { Link } from 'react-router-dom';
import './portfolioProjectItem.sass';
import LINKS from '../../routes/ROUTES';

function PortfolioProjectItem(props) {
  const project = props.project;
  return (
    <li key={project.title}>
      <div className='portfolioProjectList__item'>
        <div className='item__content'>
          <div className='item__img'>
            <img className='img--insideCard' alt='' src={project.img} />
          </div>
          <div className='item__text'>
            <div className='item__title'>
              <h3>{project.title}</h3>
              <h5>{project.status}</h5>
            </div>
            <p>Description: {project.description}</p> 
            <div className='text__subtitle'>
              <Link to={`project/${project.slug}`}><button className='card__button'>MORE</button></Link>
              <Link to={`project/${project.slug}`}><button className='card__button'>T BUDGET {project.estimate.budget / 100}</button></Link>
              <Link to={`project/${project.slug}`}><button className='card__button'>T ACTUAL {project.current.budget / 100}</button></Link>
            </div>
            <p>Location: {project.location.street}, {project.location.city}, {project.location.postalCode}</p>
            <p>{project.location.region}, {project.location.country}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default PortfolioProjectItem;









