import React from 'react';
import portfolio_mock from '../../mockdata-front/portfolio_mock';
import TuneIcon from '@material-ui/icons/Tune';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import './portfolioInfo.sass';

function PortfolioInfo() {
  const projects = portfolio_mock;
  return (
    <div className="portfolioInfo__container">
      <div className='info__main'>
        <h2>YOUR PROJECTS</h2>
        <p>
          <span>You have {projects.length} projects in your portfolio:</span>
          <span> {projects.filter(project => project.status === 'ongoing').length} ongoing,</span>
          <span> {projects.filter(project => project.status === 'planned').length} planned,</span>
          <span> {projects.filter(project => project.status === 'closed').length} closed.</span>
        </p>
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

export default PortfolioInfo;