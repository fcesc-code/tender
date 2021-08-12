import ACTION_TYPES from "./ACTION_TYPES";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import {
  getBudgetById,
  saveBudget,
  deleteBudget,
  getQuotationsByBudgetId,
} from "../../api/api";

export function loadQuotationsByBudgetId(_projectId, _userId) {
  return function actionLoadQuotationsByBudgetId(dispatch) {
    dispatch(beginApiCall());

    return getQuotationsByBudgetId(_projectId, _userId)
      .then((response) => {
        dispatch({ type: ACTION_TYPES.BUDGET.LOAD_BUDGET_INFO_SUCCESS });
        dispatch({
          type: ACTION_TYPES.BUDGET.LOAD_BUDGET_INFO,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function loadBudgetById(_id) {
  return function actionLoadBudgetById(dispatch) {
    dispatch(beginApiCall());
    return getBudgetById(_id)
      .then((response) => {
        dispatch({ type: ACTION_TYPES.BUDGET.LOAD_BUDGET_SUCCESS });
        dispatch({
          type: ACTION_TYPES.BUDGET.LOAD_BUDGET,
          payload: response.data ? response.data[0] : null,
        });
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function updateOrCreateBudget(budget) {
  return function actionupdateOrCreateBudget(dispatch) {
    dispatch(beginApiCall());
    return saveBudget(budget)
      .then((response) => {
        if (budget._id) {
          dispatch({ type: ACTION_TYPES.BUDGET.UPDATE_BUDGET_SUCCESS });
          dispatch({
            type: ACTION_TYPES.BUDGET.UPDATE_BUDGET,
            payload: response.data ? response.data[0] : null,
          });
        } else {
          dispatch({ type: ACTION_TYPES.BUDGET.CREATE_BUDGET_SUCCESS });
          dispatch({
            type: ACTION_TYPES.BUDGET.CREATE_BUDGET,
            payload: response.data ? response.data[0] : null,
          });
        }
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteBudgetOptimistic(projectId) {
  return function actionDeleteBudgetOptimistic(dispatch) {
    dispatch({ type: ACTION_TYPES.BUDGET.DELETE_BUDGET });
    return deleteBudget(projectId);
  };
}
