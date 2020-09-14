import ACTION_TYPES from './../actions/ACTION_TYPES';
import REDUCERS_INITIAL_STATE from './REDUCERS_INITIAL_STATE';

export default function errorReducer(state = REDUCERS_INITIAL_STATE.errors, action = ACTION_TYPES.DEFAULT) {
  let newState;
  switch (action.type) {
    case ACTION_TYPES.ERRORS.LOG_ERROR:
      newState = [ ...state ];
      return newState.push(action.payload);
    case ACTION_TYPES.ERRORS.REMOVE_ERROR:
      newState = [ ...state ];
      return (newState.length >= 1) ? newState.pop() : state;
    default:
      return state;
  }
}