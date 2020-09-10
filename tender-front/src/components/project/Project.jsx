import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import ProjectInfo from './ProjectInfo';
import ProjectFlow from './ProjectFlow';
import ProjectBudgetsTab from './ProjectBudgetsTab';
import ProjectBudgetsTabOptions from './ProjectBudgetsTabOptions';
import ProjectBudgetBoard from './ProjectBudgetBoard';
import ProjectBoard from './ProjectBoard';
import { loadProjectBySlug } from './../../redux/actions/projectActions';
// import portfolio_mock from '../../mockdata-front/portfolio_mock';
// import portfolio_timeline_mock from './../../mockdata-front/portfolio_timeline_mock';
import './project.sass';

function Project( { dispatch, userId } ) {
  let urlQuery = useRouteMatch()
  let urlSlug = urlQuery.params.projectSlug;
  // const [ slug ] = useState(urlSlug);
  const [ view ] = useState('another');
  // const [ project, setProject ] = useState(undefined);
  // const timeline = portfolio_timeline_mock;

  useEffect(() => {
    if( urlSlug !== undefined){ dispatch(loadProjectBySlug(urlSlug, userId)) }
  }, [urlSlug]);

  // function loadProjectBySlug(slugArg){
  //   // to be removed
  //   const data = portfolio_mock.filter(projectItem => projectItem.slug === slugArg)[0];
  //   console.log('DATOS DEL MOCK', data)
  //   return data;
  // }

  function renderCurrentTab(){
    if(view === 'all'){
      return (<ProjectBoard />)
    } else {
      return (<ProjectBudgetBoard />)
    }
  }

  return (
    <div className='project__container'>
      <div className='project__side'>
        <ProjectFlow />
      </div>
      <div className='project__main'>
        <ProjectInfo />
        <ProjectBudgetsTabOptions />
        <ProjectBudgetsTab />
        {renderCurrentTab()}
      </div>
    </div>
  );
}

function mapStateToProps(state){
  return ({
    userId: state.user.uid
  });
}

export default connect(mapStateToProps)(Project);