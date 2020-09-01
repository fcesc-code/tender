import React from 'react';
import PortfolioInfo from './PortfolioInfo';
import PortfolioFlow from './PortfolioFlow';
import PortfolioProjectList from './PortfolioProjectList';

function Portfolio() {
  return (
    <div className='portfolio__container'>
      <h2>Welcome to your portfolio</h2>
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