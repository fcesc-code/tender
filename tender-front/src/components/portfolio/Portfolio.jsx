import React from 'react';
import PortfolioInfo from './PortfolioInfo';
import PortfolioFlow from './PortfolioFlow';
import PortfolioProjectList from './PortfolioProjectList';
import './portfolio.sass';
import portfolio_timeline_mock from './../../mockdata-front/portfolio_timeline_mock';
import { withAuthenticationRequired } from '@auth0/auth0-react';

function Portfolio() {
  const timeline = portfolio_timeline_mock; // remove once real data is feeded - state is in component that renders timeline, not here (would force rerender of other components)

  return (
      <div className='portfolio__container'>
        <div className='portfolio__side'>
          <PortfolioFlow timeline={timeline} />
        </div>
        <div className='portfolio__main'>
          <PortfolioInfo />
          <PortfolioProjectList />
        </div>
      </div>
  );
}

export default withAuthenticationRequired(Portfolio, {
  onRedirecting: () => (<div>Redirecting you to the login page...</div>)
});