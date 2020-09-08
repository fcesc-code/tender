import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PortfolioProjectItem from './PortfolioProjectItem';
// import portfolio_mock from '../../mockdata-front/portfolio_mock';
import './portfolioProjectList.sass';
// import { bindActionCreators } from 'redux';
import { loadProjectsByUserId } from '../../redux/actions/portfolioActions';
import { store } from '../../index';
import Spinner from '../common/Spinner';

function PortfolioProjectList( props ) {
  console.log('%cSHOW PROPS', 'color: gray', props);

  const mockUser = '5f4faca78b141a231040efad';

  useEffect(()=>{
    if(Object.keys(props.projects).length === 0 && props.projects.constructor === Object){
      console.log('%cuseEffect calls loadProjectsByUserId', 'color: yellow');
      store.dispatch(loadProjectsByUserId(mockUser));
    }
  }, [ ]);

  return (
    Object.keys(props.projects).length === 0 && props.projects.constructor === Object ? (<Spinner/>) : (
      <div className="portfolioProjectList__container">
        <ul>
         {props.projects.map(project => { 
            return (<PortfolioProjectItem project={project}/>)
          })}
        </ul>      
      </div>
    )
  );
}

function mapStateToProps(state){
  return ({
    projects: state.portfolio
  });
}

function mapDispatchToProps(dispatch) {
  return( {loadProjectsByUserId: loadProjectsByUserId} );
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioProjectList);