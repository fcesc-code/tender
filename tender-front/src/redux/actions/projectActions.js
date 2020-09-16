import ACTION_TYPES from './ACTION_TYPES';
import { beginApiCall, apiCallError } from './apiStatusActions';
import { getProjectFlowByUserId, getBudgetsByProjectId, getProjectBySlug } from '../../api/api';

export function loadProjectBySlug(slug) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return getProjectBySlug(slug)
      .then(response => {
        dispatch({ type: ACTION_TYPES.PROJECT.LOAD_PROJECT_BYSLUG_SUCCESS });
        dispatch({
          type: ACTION_TYPES.PROJECT.LOAD_PROJECT_BYSLUG,
          payload: (response.data) ? response.data[0] : null
        });
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

// export function saveProject(project) {
//   return function(dispatch) {
//     dispatch(beginApiCall());
//     return saveProject(project)
//       .then(response => {
//         dispatch({ type: ACTION_TYPES.PROJECT.UPDATE_PROJECT_SUCCESS });
//         dispatch({
//           type: ACTION_TYPES.PROJECT.UPDATE_PROJECT,
//           payload: response.data
//         });
//       })
//       .catch(error => {
//         dispatch(apiCallError(error));
//         throw error;
//       });
//   };
// }

// export function deleteProject(project_id) {
//   return function(dispatch) {
//     dispatch({ type: ACTION_TYPES.PROJECT.DELETE_PROJECT });
//     return deleteProject(project_id);
//   };
// }

export function loadProjectFlowByUserId(_userId) {
  // console.log('action loadProjectFlowByUserId');
  return function(dispatch) {
    // console.log('loadProjectFlowByUserId action called with userID', _userId);
    dispatch(beginApiCall());

    return getProjectFlowByUserId(_userId)
      .then(response => {
        // console.log('data received from api into action, and ready for dispatch', response.data);
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
  return function (dispatch) {
  // console.log('loadBudgetsByProjectId action called with ', _projectId, _userId);
  dispatch(beginApiCall());
  
  return getBudgetsByProjectId(_projectId, _userId)
    .then(response => {
      // console.log('loadBudgetsByProjectId: data received from api into action, and ready for dispatch', response.data);
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

// function setCurrentBudgetFromProject(budget_id){

//   return dispatch({
//     type: ACTION_TYPES.BUDGET.LOAD_BUDGET,
//     payload: budget
//   })
// }