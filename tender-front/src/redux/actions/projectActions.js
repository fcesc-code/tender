import ACTION_TYPES from './ACTION_TYPES';
import { beginApiCall, apiCallError } from './apiStatusActions';

export function createProjectSuccess(project) {
  return { type: ACTION_TYPES.PROJECT.CREATE_PROJECT, payload: project };
}

export function updateProjectSuccess(project) {
  return { type: ACTION_TYPES.PROJECT.UPDATE_PROJECT, payload: project };
}

export function deleteProjectOptimistic(_id) {
  return { type: ACTION_TYPES.PROJECT.DELETE_PROJECT, payload: _id };
}

export function loadProjectByIdSuccess(_id) {
  return { type: ACTION_TYPES.PROJECT.LOAD_PROJECT, payload: _id };
}

export function loadProjectById(_id) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return api
      .getProjectById(_id)
      .then(project => {
        dispatch(loadProjectByIdSuccess(project));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveProject(project) {
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return api
      .saveProject(project)
      .then(savedProject => {
        project._id
          ? dispatch(updateProjectSuccess(savedProject))
          : dispatch(createProjectSuccess(savedProject));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteProject(project) {
  return function(dispatch) {
    dispatch(deleteProjectOptimistic(project));
    return api.deleteProject(project,_id);
  };
}

/* || pending ||
ACTION_TYPES.PROJECT.CALCULATE_PROJECT
ACTION_TYPES.PROJECT.UPDATE_PROJECT_STATUS
ACTION_TYPES.PROJECT.ADD_USER_TO_PROJECT
ACTION_TYPES.PROJECT.REMOVE_USER_FROM_PROJECT
ACTION_TYPES.PROJECT.LOAD_PROJECT_FLOW
ACTION_TYPES.PROJECT.LOAD_PROJECT_INFO
*/