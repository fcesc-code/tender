import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PortfolioProjectItem from './PortfolioProjectItem';
import './portfolioProjectList.sass';
import { loadProjectsByUserId } from '../../redux/actions/portfolioActions';
import Spinner from '../common/Spinner';

function PortfolioProjectList( { dispatch, projects, userId } ) {
  console.log('%cSHOW PROPS', 'color: gray', projects);

  // const mockUser = '5f4faca78b141a231040efad';

  useEffect(()=>{
    if( Object.keys(projects).length === 0 && projects.constructor === Object ){
      console.log('%cuseEffect calls loadProjectsByUserId', 'color: yellow');
      dispatch(loadProjectsByUserId(userId));
    }
  }, [ ]);

  return (
    ( Object.keys(projects).length === 0 && projects.constructor === Object ) ? (<Spinner/>) : (
      <div className="portfolioProjectList__container">
        <ul>
         {projects.data.map(project => { 
            return (<PortfolioProjectItem key={project._id} project={project}/>)
          })}
        </ul>      
      </div>
    )
  );
}

function mapStateToProps(state){
  return ({
    projects: state.portfolio,
    userId: state.user.uid
  });
}


export default connect(mapStateToProps)(PortfolioProjectList);