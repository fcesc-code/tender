import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PortfolioProjectItem from './PortfolioProjectItem';
import portfolio_mock from '../../mockdata-front/portfolio_mock';
import './portfolioProjectList.sass';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { loadProjectsByUserId } from '../../redux/actions/portfolioActions';

function PortfolioProjectList(props) {
  const [projects, setProjects] = useState({ ...props.state });

  const mockUser = '5f4faca78b141a231040efad';

  useEffect(()=>{
    if(projects.length === 0){
      loadProjectsByUserId(mockUser);
    } else { 
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
  projects: PropTypes.array.isRequired
}

function mapStateToProps(state){
  return (state.projects);
}

function mapDispatchToProps(dispatch) {
  return{
    actions: {
      loadProjectsByUserId: bindActionCreators(loadProjectsByUserId, dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioProjectList);