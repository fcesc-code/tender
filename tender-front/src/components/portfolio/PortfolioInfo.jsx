import React from 'react';
import portfolio_mock from '../../mockdata-front/portfolio_mock';

function PortfolioInfo() {
  const projects = portfolio_mock;
  return (
    <div className="portfolioInfo__container">
      <h2>Info</h2>
      <p>
        You have {projects.length} projects in your portfolio:&#32
        {projects.filter(project => project.status === 'ongoing').length} ongoing,&nbsp
        {projects.filter(project => project.status === 'planned').length} planned,&nbsp
        {projects.filter(project => project.status === 'closed').length} closed.
      </p>
    </div>
  );
}

export default PortfolioInfo;