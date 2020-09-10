import ACTION_TYPES from './ACTION_TYPES';
import { beginApiCall, apiCallError } from './apiStatusActions';
import { getProjectFlowByUserId, getBudgetsByUserId } from '../../api/api';


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

// export function loadProjectById(_id) {
//   return function(dispatch) {
//     dispatch(beginApiCall());
//     return getProjectById(_id)
//       .then(project => {
//         dispatch({ type: ACTION_TYPES.PROJECT.LOAD });
//         dispatch({
//           type: ACTION_TYPES.PROJECT.LOAD_PROJECT_FLOW,
//           payload: response.data
//         });
//       })
//       .catch(error => {
//         dispatch(apiCallError(error));
//         throw error;
//       });
//   };
// }

export function saveProject(project) {
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return saveProject(project)
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

export function deleteProject(project_id) {
  return function(dispatch) {
    dispatch(deleteProjectOptimistic(project_id));
    return deleteProject(project_id);
  };
}

export function loadProjectFlowByUserId(_userId) {
  console.log('action loadProjectFlowByUserId');
  return function(dispatch) {
    console.log('loadProjectFlowByUserId action called with userID', _userId);
    dispatch(beginApiCall());

    return getProjectFlowByUserId(_userId)
      .then(response => {
        console.log('data received from api into action, and ready for dispatch', response.data);
        dispatch({ type: ACTION_TYPES.PROJECT.LOAD_PROJECT_FLOW_SUCCESS });
        dispatch({
          type: ACTION_TYPES.PROJECT.LOAD_PROJECT_FLOW,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

// export function loadBudgetsByUserId(_userId) { 
//   // console.log('action loadProjectsByUserId');
//   return function (dispatch) {
//   // console.log('loadProjectsByUserId action called with userID', _userId);
//   dispatch(beginApiCall());
  
//   return getBudgetsByUserId(_userId)
//     .then(response => {
//       // console.log('data received from api into action, and ready for dispatch', response.data);
//       dispatch({ type: ACTION_TYPES.PROJECT.LOAD_PORTFOLIO_INFO_SUCCESS });
//       dispatch({
//         type: ACTION_TYPES.PROJECT.LOAD_PORTFOLIO_INFO,
//         payload: response.data
//       });
//     })
//     .catch(error => {
//       dispatch(apiCallError(error));
//       throw error;
//     });
//   }
// }

export function loadBudgetsByProjectId(_projectId, _userId) { 
  // console.log('action loadBudgetsByProjectId');
  return function (dispatch) {
  // console.log('loadBudgetsByProjectId action called with userID', _userId);
  dispatch(beginApiCall());
  
  return getBudgetsByUserId(_projectId, _userId)
    .then(response => {
      // console.log('data received from api into action, and ready for dispatch', response.data);
      dispatch({ type: ACTION_TYPES.PROJECT.LOAD_PROJECT_INFO_SUCCESS });
      dispatch({
        type: ACTION_TYPES.PROJECT.LOAD_PROJECT_INFO,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch(apiCallError(error));
      throw error;
    });
  }
}

/* || pending ||
ACTION_TYPES.PROJECT.CALCULATE_PROJECT
ACTION_TYPES.PROJECT.UPDATE_PROJECT_STATUS
ACTION_TYPES.PROJECT.ADD_USER_TO_PROJECT
ACTION_TYPES.PROJECT.REMOVE_USER_FROM_PROJECT
ACTION_TYPES.PROJECT.LOAD_PROJECT_INFO
*/