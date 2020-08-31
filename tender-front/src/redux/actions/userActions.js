import ACTION_TYPES from './ACTION_TYPES';
import { beginApiCall, apiCallError } from './apiStatusActions';

export function createUserSuccess(user) {
  return { type: ACTION_TYPES.USER.CREATE_USER, payload: user };
}

export function updateUserSuccess(user) {
  return { type: ACTION_TYPES.USER.UPDATE_USER, payload: user };
}

export function deleteUserOptimistic(_id) {
  return { type: ACTION_TYPES.USER.DELETE_USER, payload: _id };
}

export function loadUserByIdSuccess(_id) {
  return { type: ACTION_TYPES.USER.LOAD_USER, payload: _id };
}

export function loadUserById(_id) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return api
      .getUserById(_id)
      .then(user => {
        dispatch(loadUserByIdSuccess(user));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveUser(user) {
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return api
      .saveUser(user)
      .then(savedUser => {
        user._id
          ? dispatch(updateUserSuccess(savedUser))
          : dispatch(createUserSuccess(savedUser));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteUser(user) {
  return function(dispatch) {
    dispatch(deleteUserOptimistic(user));
    return api.deleteUser(user,_id);
  };
}










ACTION_TYPES.USER.CREATE_USER
ACTION_TYPES.USER.UPDATE_USER
ACTION_TYPES.USER.DELETE_USER
ACTION_TYPES.USER.LOAD_USER