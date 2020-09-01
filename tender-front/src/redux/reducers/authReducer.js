import ACTION_TYPES from './../actions/ACTION_TYPES';
import initialState from './initialState';

export default function authReducer(state = initialState.auth, action) {
  switch (action.type) {
    case ACTION_TYPES.AUTH.IS_LOGGED:
      return action.payload;
    default:
      return state;
  }
}