"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveCurrentUser = saveCurrentUser;
exports.removeCurrentUser = removeCurrentUser;
exports.existCurrentUser = existCurrentUser;

var _ACTION_TYPES = _interopRequireDefault(require("./ACTION_TYPES"));

var _apiStatusActions = require("./apiStatusActions");

var _api = _interopRequireDefault(require("../../api/api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
function saveCurrentUser(uniqueUserId) {
  return function (dispatch) {
    dispatch({
      type: _ACTION_TYPES["default"].USER.SAVE_CURRENT_USER,
      payload: uniqueUserId
    });
  };
}

function removeCurrentUser() {
  return function (dispatch) {
    dispatch({
      type: _ACTION_TYPES["default"].USER.REMOVE_CURRENT_USER
    });
  };
}

function existCurrentUser(user) {
  console.log('entering exist current user action');
  return function (dispatch) {
    console.log('entering callback of the exist current user action');
    dispatch((0, _apiStatusActions.beginApiCall)());
    return (0, _api["default"])().checkIsNewUser(user).then(function (response) {
      console.log('api front function was called successfully and will dispatch this payload:', response);
      dispatch({
        type: _ACTION_TYPES["default"].USER.REMOVE_CURRENT_USER,
        payload: response
      });
    })["catch"](function (error) {
      console.log('an error was thrown in the api call of the exist current user function');
      dispatch((0, _apiStatusActions.apiCallError)(error));
      throw error;
    });
  };
} // ACTION_TYPES.USER.CREATE_USER
// ACTION_TYPES.USER.UPDATE_USER
// ACTION_TYPES.USER.DELETE_USER
// ACTION_TYPES.USER.LOAD_USER