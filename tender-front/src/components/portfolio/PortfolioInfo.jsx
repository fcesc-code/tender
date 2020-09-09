import React from 'react';
import { connect } from 'react-redux';
import TuneIcon from '@material-ui/icons/Tune';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import './portfolioInfo.sass';

function PortfolioInfo({ projects }) {

  function displayInfo(){
  return ( projects !== undefined && projects.length !== 0 ) ? 
    (
      <p>
        <span>You have {projects.length} projects in your portfolio:</span>
        <span> {projects.filter(project => project.status === 'ongoing').length} ongoing,</span>
        <span> {projects.filter(project => project.status === 'planned').length} planned,</span>
        <span> {projects.filter(project => project.status === 'closed').length} closed.</span>
      </p>
    ) : '';
  }

  return (
    <div className="portfolioInfo__container">
      <div className='info__main'>
        <h2>YOUR PROJECTS</h2>
        {displayInfo()}
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

function mapStateToProps(state){
  return ({
    projects: state.portfolio.data,
    userId: state.user.uid
  });
}

export default connect(mapStateToProps)(PortfolioInfo);