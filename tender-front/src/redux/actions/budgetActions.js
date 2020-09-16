import ACTION_TYPES from './ACTION_TYPES';
import { beginApiCall, apiCallError } from './apiStatusActions';

export function loadBudgetById(_id) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return getBudgetById(_id)
      .then(response =>{
        dispatch({ type: ACTION_TYPES.BUDGET.LOAD_BUDGET_SUCCESS });
        dispatch({
          type: ACTION_TYPES.BUDGET.LOAD_BUDGET,
          payload: (response.data) ? response.data[0] : null
        });
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveBudget(budget) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return createOrUpdateBudget(budget)
      .then(response => {
        if(budget._id){
          dispatch({ type: ACTION_TYPES.BUDGET.UPDATE_BUDGET_SUCCESS });
          dispatch({
            type: ACTION_TYPES.BUDGET.UPDATE_BUDGET,
            payload: (response.data) ? response.data[0] : null
          });
        } else {
          dispatch({ type: ACTION_TYPES.BUDGET.CREATE_BUDGET_SUCCESS });
          dispatch({
            type: ACTION_TYPES.BUDGET.CREATE_BUDGET,
            payload: (response.data) ? response.data[0] : null
          });
        }
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteBudget(budget) {
  return function(dispatch) {
    dispatch(deleteBudgetOptimistic(budget));
    return api.deleteBudget(budget,_id);
  };
}

/* || pending ||
ACTION_TYPES.BUDGET.CALCULATE_BUDGET
ACTION_TYPES.BUDGET.UPDATE_BUDGET_STATUS
ACTION_TYPES.BUDGET.SUBMIT_BUDGET
*/