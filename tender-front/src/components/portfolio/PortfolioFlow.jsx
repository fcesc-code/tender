import React from 'react';
import CustomTimeLine from './../common/CustomTimeLine';

function PortfolioFlow(props) {
  return (
    <div className='portfolioFlow__container'>
      <h2>Portfolio Flow</h2>
      <CustomTimeLine timeline={props.timeline}/>
    </div>
  );
}

export default PortfolioFlow;