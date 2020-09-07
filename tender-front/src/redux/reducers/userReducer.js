import ACTION_TYPES from './../actions/ACTION_TYPES';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case ACTION_TYPES.USER.UPDATE_USER:
      return { ...state, userToUpdate: action.payload };
    case ACTION_TYPES.USER.DELETE_USER:
      return { ...state, userToUpdate: undefined, userToDelete: action.payload };
    case ACTION_TYPES.USER.SAVE_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case ACTION_TYPES.USER.REMOVE_CURRENT_USER:
      return { ...state, currentUser: undefined };
    case ACTION_TYPES.USER.EXIST_CURRENT_USER:
      return { ...state, currentUserType: action.payload }
    default:
      return state;
  }
}