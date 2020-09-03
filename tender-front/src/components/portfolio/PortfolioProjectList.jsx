import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PortfolioProjectItem from './PortfolioProjectItem';
import portfolio_mock from '../../mockdata-front/portfolio_mock';
import './portfolioProjectList.sass';
import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
import { loadProjectsByUserId } from '../../redux/actions/portfolioActions';

function PortfolioProjectList(props) {
  const [projects, setProjects] = useState([]);

  const mockUser = '5f4faca78b141a231040efad';

  useEffect(()=>{
    if(projects.length === 0){
      console.log('useEffect calls loadProjectsByUserId');
      props.store.dispatch(loadProjectsByUserId(mockUser));
    } else { 
      console.log('useEffect with projects length !== 0 setting project state');
      setProjects({ portfolio_mock });
    }
  }, [projects.length]);

  // const mock_projects = portfolio_mock;
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

PortfolioProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
  store: PropTypes.object.isRequired
}

function mapStateToProps(state){
  return ({
    projects: state.projects
  });
}

const mapDispatchToProps = {
  loadProjectsByUserId: loadProjectsByUserId
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioProjectList);