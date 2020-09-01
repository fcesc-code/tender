import ACTION_TYPES from './../actions/ACTION_TYPES';
import initialState from './initialState';

export default function budgetReducer(state = initialState.budget, action) {
  switch (action.type) {
    case ACTION_TYPES.BUDGET.CREATE_BUDGET:
      return action.payload;
    case ACTION_TYPES.BUDGET.UPDATE_BUDGET:
      return action.payload;
    case ACTION_TYPES.BUDGET.DELETE_BUDGET:
      return {};
    case ACTION_TYPES.BUDGET.LOAD_BUDGET:
      return action.payload;
    case ACTION_TYPES.BUDGET.CALCULATE_BUDGET:
      return action.payload;
    case ACTION_TYPES.BUDGET.UPDATE_BUDGET_STATUS:
      return action.payload;
    case ACTION_TYPES.BUDGET.SUBMIT_BUDGET:
      return action.payload;
    default:
      return state;
  }
}