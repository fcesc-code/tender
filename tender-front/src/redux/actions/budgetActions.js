import ACTION_TYPES from './ACTION_TYPES';
import { beginApiCall, apiCallError } from './apiStatusActions';

export function createBudgetSuccess(budget) {
  return { type: ACTION_TYPES.BUDGET.CREATE_PROJECT, payload: budget };
}

export function updateBudgetSuccess(budget) {
  return { type: ACTION_TYPES.BUDGET.UPDATE_PROJECT, payload: budget };
}

export function deleteBudgetOptimistic(_id) {
  return { type: ACTION_TYPES.BUDGET.DELETE_PROJECT, payload: _id };
}

export function loadBudgetByIdSuccess(_id) {
  return { type: ACTION_TYPES.BUDGET.LOAD_PROJECT, payload: _id };
}

export function loadBudgetById(_id) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return api
      .getBudgetById(_id)
      .then(budget => {
        dispatch(loadBudgetByIdSuccess(budget));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveBudget(budget) {
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return api
      .saveBudget(budget)
      .then(savedBudget => {
        budget._id
          ? dispatch(updateBudgetSuccess(savedBudget))
          : dispatch(createBudgetSuccess(savedBudget));
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