import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './projectBudgetsTab.sass';
import { loadBudgetsByProjectId } from '../../redux/actions/projectActions';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Spinner from '../common/Spinner';

function ProjectBudgetTab( { dispatch, userId, budgets, project } ) {
  console.log('Project budgets tab - received props', project);

  useEffect(()=>{
    if( Object.keys(budgets).length === 0 && budgets.constructor === Object && project !== undefined ){
      console.log('project budgets tab - entering use effect with ', project._id, userId);
      dispatch(loadBudgetsByProjectId(project._id, userId));
    }
  }, [ project, budgets ]);

  return (
    ( Object.keys(budgets).length === 0 && budgets.constructor === Object ) ? (<Spinner/>) : (
      <div className="projectBudgetList__tab">
        <ul>
          {budgets.map(budget => { 
            return (<li><Link to={budget.slug}>{budget.title}</Link></li>)
          })}
          <li className='specialRight'><ChevronRightIcon /></li>
        </ul>      
      </div>
    )
  );
}

function mapStateToProps(state){
  return ({
    budgets: state.project.data,
    userId: state.user.uid,
    project: state.project.current
  });
}


export default connect(mapStateToProps)(ProjectBudgetTab);