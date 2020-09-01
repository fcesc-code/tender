import React from 'react';
import PortfolioProjectItem from './PortfolioProjectItem';
import portfolio_mock from '../../mockdata-front/portfolio_mock';

function PortfolioProjectList() {
  const projects = portfolio_mock;
  return (
    <div className="portfolioProjectList__container">
      <ul>
        {projects.map(project => { 
          return (<PortfolioProjectItem project={project}/>)
        })}
      </ul>      
    </div>
  );
}

export default PortfolioProjectList;