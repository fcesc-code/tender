import ACTION_TYPES from './../actions/ACTION_TYPES';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case ACTION_TYPES.USER.CREATE_USER:
      return action.payload;
    case ACTION_TYPES.USER.UPDATE_USER:
      return action.payload;
    case ACTION_TYPES.USER.DELETE_USER:
      return {};
    case ACTION_TYPES.USER.LOAD_USER:
      return action.payload;
    default:
      return state;
  }
}