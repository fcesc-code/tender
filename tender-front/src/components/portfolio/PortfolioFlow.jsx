import React from 'react';
import CustomTimeLine from './../common/CustomTimeLine';
import './portfolioFlow.sass';

function PortfolioFlow(props) {
  return (
    <div className='portfolioFlow__container'>
      <h2>FLOW</h2>
      <CustomTimeLine timeline={props.timeline}/>
    </div>
  );
}

export default PortfolioFlow;