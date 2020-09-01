import React from 'react';
import portfolio_mock from '../../mockdata-front/portfolio_mock';

function PortfolioInfo() {
  const projects = portfolio_mock;
  return (
    <div className="portfolioInfo__container">
      <h2>YOUR PROJECTS</h2>
      <p>
        You have {projects.length} projects in your portfolio:
        {projects.filter(project => project.status === 'ongoing').length} ongoing,
        {projects.filter(project => project.status === 'planned').length} planned,
        {projects.filter(project => project.status === 'closed').length} closed.
      </p>
    </div>
  );
}

export default PortfolioInfo;