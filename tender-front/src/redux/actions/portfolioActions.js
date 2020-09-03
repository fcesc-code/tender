import ACTION_TYPES from './ACTION_TYPES';
import { beginApiCall, apiCallError } from './apiStatusActions';
import api from '../../api/api';

export function loadProjectsFlowFromPortfolioByUserIdSuccess(projects) {
  return { type: ACTION_TYPES.PORTFOLIO.LOAD_PORTFOLIO_FLOW, payload: projects };
}

export function loadProjectsByUserId_success(projects) {
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

export function loadProjectsByUserId(_userid) { 
  return function(dispatch) {
    dispatch(beginApiCall());
    return api
      .getProjectsByUserId(_userid)
      .then(projects => {
        dispatch(loadProjectsByUserId_success(projects));
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