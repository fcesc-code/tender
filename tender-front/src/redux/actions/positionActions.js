import ACTION_TYPES from './ACTION_TYPES';
import { beginApiCall, apiCallError } from './apiStatusActions';

export function createPositionSuccess(position) {
  return { type: ACTION_TYPES.POSITION.CREATE_POSITION, payload: position };
}

export function updatePositionSuccess(position) {
  return { type: ACTION_TYPES.POSITION.UPDATE_POSITION, payload: position };
}

export function deletePositionOptimistic(_id) {
  return { type: ACTION_TYPES.POSITION.DELETE_POSITION, payload: _id };
}

export function loadPositionByIdSuccess(_id) {
  return { type: ACTION_TYPES.POSITION.LOAD_POSITION, payload: _id };
}

export function loadPositionById(_id) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return api
      .getPositionById(_id)
      .then(position => {
        dispatch(loadPositionByIdSuccess(position));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function savePosition(position) {
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return api
      .savePosition(position)
      .then(savedPosition => {
        position._id
          ? dispatch(updatePositionSuccess(savedPosition))
          : dispatch(createPositionSuccess(savedPosition));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deletePosition(position) {
  return function(dispatch) {
    dispatch(deletePositionOptimistic(position));
    return api.deletePosition(position,_id);
  };
}

/* || pending ||
ACTION_TYPES.POSITION.ADD_DISCOUNT_POSITION
ACTION_TYPES.POSITION.UPDATE_DISCOUNT_POSITION
*/