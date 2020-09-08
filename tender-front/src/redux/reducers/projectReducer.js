import ACTION_TYPES from './../actions/ACTION_TYPES';
import REDUCERS_INITIAL_STATE from './REDUCERS_INITIAL_STATE';

export default function projectReducer(state = REDUCERS_INITIAL_STATE.project, action = ACTION_TYPES.DEFAULT) {
  switch (action.type) {
    case ACTION_TYPES.PROJECT.CREATE_PROJECT:
      return action.payload;
    case ACTION_TYPES.PROJECT.UPDATE_PROJECT:
      return action.payload;
    case ACTION_TYPES.PROJECT.DELETE_PROJECT:
      return {};
    case ACTION_TYPES.PROJECT.LOAD_PROJECT:
      return action.payload;
    case ACTION_TYPES.PROJECT.CALCULATE_PROJECT:
      return action.payload;
    case ACTION_TYPES.PROJECT.UPDATE_PROJECT_STATUS:
      return action.payload;
    case ACTION_TYPES.PROJECT.ADD_USER_TO_PROJECT:
      return action.payload;
    case ACTION_TYPES.PROJECT.REMOVE_USER_FROM_PROJECT:
      return action.payload;
    case ACTION_TYPES.PROJECT.LOAD_PROJECT_FLOW:
      return action.payload;
    case ACTION_TYPES.PROJECT.LOAD_PROJECT_INFO:
      return action.payload;
    default:
      return state;
  }
}