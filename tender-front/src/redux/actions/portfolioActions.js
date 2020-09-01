import ACTION_TYPES from './ACTION_TYPES';
import { beginApiCall, apiCallError } from './apiStatusActions';

export function loadProjectsFlowFromPortfolioByUserIdSuccess(projects) {
  return { type: ACTION_TYPES.PORTFOLIO.LOAD_PORTFOLIO_FLOW, payload: projects };
}

export function loadProjectsInfoFromPortfolioByUserIdSuccess(projects) {
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

export function loadPortfolioInfoByUserId(_userid) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return api
      .getProjectsInfoFromPortfolioByUserId(_userid)
      .then(projects => {
        dispatch(loadProjectsInfoFromPortfolioByUserIdSuccess(projects));
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