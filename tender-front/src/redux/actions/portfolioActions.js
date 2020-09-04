import ACTION_TYPES from './ACTION_TYPES';
import { beginApiCall, apiCallError } from './apiStatusActions';
import api from '../../api/api';

export function loadProjectsFlowFromPortfolioByUserIdSuccess(projects) {
  return { type: ACTION_TYPES.PORTFOLIO.LOAD_PORTFOLIO_FLOW, payload: projects };
}

export function loadProjectsByUserId_success(projects) {
  console.log('dispatching action LOAD_PORTFOLIO_INFO');
  return { type: ACTION_TYPES.PORTFOLIO.LOAD_PORTFOLIO_INFO, payload: projects };
}

export function loadPortfolioFlowByUserId(_userid) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return api
      .getProjectsFlowFromPortfolioByUserId(_userid)
      .then(projects => {
        dispatch(loadProjectsFlowFromPortfolioByUserIdSuccess(projects));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function loadProjectsByUserId(_userId) { 
  console.log('loadProjectsByUserId action called with userID', _userId);
  return function(dispatch) {
    console.log('callback from loadProjectsByUserId action called');
    console.log('%cbeginApiCall dispatched', 'color: green');
    dispatch(beginApiCall());
    console.log(api());
    return api().getProjectsByUserId(_userId)
      .then(projects => {
        console.log('data received from api into action, and ready for dispatch', projects);
        dispatch(loadProjectsByUserId_success(projects.data));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}


/* || pending ||
ACTION_TYPES.PORTFOLIO.CALCULATE_PORTFOLIO
*/