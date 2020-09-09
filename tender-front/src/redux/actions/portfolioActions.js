import ACTION_TYPES from './ACTION_TYPES';
import { beginApiCall, apiCallError } from './apiStatusActions';
import { getPortfolioFlowByUserId, getProjectsByUserId } from '../../api/api';

export function loadPortfolioFlowByUserId(_userid) {
  return function(dispatch) {
    dispatch(beginApiCall());

    return getPortfolioFlowByUserId(_userid)
      .then(flowData => {
        dispatch({ type: ACTION_TYPES.PORTFOLIO.LOAD_PORTFOLIO_FLOW_SUCCESS });
        return flowData;
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function loadProjectsByUserId(_userId) { 
  console.log('action loadProjectsByUserId');
  return function (dispatch) {
  console.log('loadProjectsByUserId action called with userID', _userId);
  dispatch(beginApiCall());
  
  return getProjectsByUserId(_userId)
    .then(response => {
      console.log('data received from api into action, and ready for dispatch', response.data);
      dispatch({ type: ACTION_TYPES.PORTFOLIO.LOAD_PORTFOLIO_INFO_SUCCESS });
      dispatch({
        type: ACTION_TYPES.PORTFOLIO.LOAD_PORTFOLIO_INFO,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch(apiCallError(error));
      throw error;
    });
  }
}


/* || pending ||
ACTION_TYPES.PORTFOLIO.CALCULATE_PORTFOLIO
*/