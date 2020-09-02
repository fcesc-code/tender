import React from 'react';
import { Link } from 'react-router-dom';
import './portfolioProjectItem.sass';
import LINKS from '../../routes/ROUTES';
import PlaceIcon from '@material-ui/icons/Place';

function PortfolioProjectItem(props) {
  const project = props.project;
  return (
    <li key={project.title}>
      <div className='portfolioProjList__item'>
        <div className='item__content'>
          <div className='item__img'>
            <img className='img--insideCard' alt='' src={project.img} />
          </div>
          <div className='item__text'>
            <div className='item__title'>
              <h3>{project.title}</h3>
              <h5>{project.status}</h5>
            </div>
            <div className='text__subtitle'>
              <Link to={`project/${project.slug}`}><button className='card__button'>OPEN PROJECT</button></Link>
              <Link to={`project/${project.slug}`}><button className='card__button'>TOTAL BUDGET</button></Link>
              <Link to={`project/${project.slug}`}><button className='card__button'>TOTAL ACTUAL</button></Link>
            </div>
            <div className='text__body'>
              <p>{project.description}</p> 
            </div>
            <div className='location__bar'>
              <div className='location__icon'>
                <a href={`https://www.google.com/maps/search/?api=1&query=${project.location.latitude},${project.location.longitude}`}>
                  <PlaceIcon></PlaceIcon>
                </a>
              </div>
              <div className='location__text'>
                <p>{project.location.street}, {project.location.city}, {project.location.postalCode}</p>
                <p>{project.location.region}, {project.location.country}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default PortfolioProjectItem;









