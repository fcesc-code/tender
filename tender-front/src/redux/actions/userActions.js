import ACTION_TYPES from './ACTION_TYPES';
import { beginApiCall, apiCallError } from './apiStatusActions';
import api from '../../api/api';

// import { beginApiCall, apiCallError } from './apiStatusActions';

// export function createUserSuccess(user) {
//   return { type: ACTION_TYPES.USER.CREATE_USER, payload: user };
// }

// export function updateUserSuccess(user) {
//   return { type: ACTION_TYPES.USER.UPDATE_USER, payload: user };
// }

// export function deleteUserOptimistic(_id) {
//   return { type: ACTION_TYPES.USER.DELETE_USER, payload: _id };
// }

// export function loadUserByIdSuccess(_id) {
//   return { type: ACTION_TYPES.USER.LOAD_USER, payload: _id };
// }

// export function loadUserById(_id) {
//   return function(dispatch) {
//     dispatch(beginApiCall());
//     return api
//       .getUserById(_id)
//       .then(user => {
//         dispatch(loadUserByIdSuccess(user));
//       })
//       .catch(error => {
//         dispatch(apiCallError(error));
//         throw error;
//       });
//   };
// }

// export function saveUser(user) {
//   return function(dispatch, getState) {
//     dispatch(beginApiCall());
//     return api
//       .saveUser(user)
//       .then(savedUser => {
//         user._id
//           ? dispatch(updateUserSuccess(savedUser))
//           : dispatch(createUserSuccess(savedUser));
//       })
//       .catch(error => {
//         dispatch(apiCallError(error));
//         throw error;
//       });
//   };
// }

// export function deleteUser(user) {
//   return function(dispatch) {
//     dispatch(deleteUserOptimistic(user));
//     return api.deleteUser(user,_id);
//   };
// }

export function saveCurrentUser(uniqueUserId) {
  return function(dispatch) {
    dispatch({
      type: ACTION_TYPES.USER.SAVE_CURRENT_USER,
      payload: uniqueUserId
    });
  };
}

export function removeCurrentUser() {
  return function(dispatch) {
    dispatch({
      type: ACTION_TYPES.USER.REMOVE_CURRENT_USER
    });
  };
}

export function existCurrentUser(user) {
  console.log('entering exist current user action')
  return function(dispatch) {
    console.log('entering callback of the exist current user action')
    dispatch(beginApiCall());
    return api()
      .checkIsNewUser(user)
      .then( response => { 
        console.log('api front function was called successfully and will dispatch this payload:', response)
        dispatch({
          type: ACTION_TYPES.USER.EXIST_CURRENT_USER,
          payload: response
        });
      })
      .catch(error => {
        console.log('an error was thrown in the api call of the exist current user function');
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

// ACTION_TYPES.USER.CREATE_USER
// ACTION_TYPES.USER.UPDATE_USER
// ACTION_TYPES.USER.DELETE_USER
// ACTION_TYPES.USER.LOAD_USER