import React from 'react';
import PortfolioInfo from './PortfolioInfo';
import PortfolioFlow from './PortfolioFlow';
import PortfolioProjectList from './PortfolioProjectList';
import './portfolio.sass';

function Portfolio() {
  return (
    <div className='portfolio__container'>
      <div className='portfolio__side'></div>
        <PortfolioFlow />
      <div className='portfolio__main'>
        <PortfolioInfo />
        <PortfolioProjectList />
      </div>
    </div>
  );
}

export default Portfolio;