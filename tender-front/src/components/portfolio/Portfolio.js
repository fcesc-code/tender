import React from 'react';
import PortfoiolInfo from './PortfolioInfo';
import PortfolioFlow from './PortfolioFlow';
import PortfolioProjectList from './PortfolioProjectList';

function Portfolio() {
  return (
    <div className='porfolio__container'>
      <h2>Welcome to your portfolio</h2>
      <div className='portfolio__side'></div>
        <PortfolioFlow />
      <div className='portfolio__main'>
        <PortfoiolInfo />
        <PortfolioProjectList />
      </div>
    </div>
  );
}

export default Portfolio;