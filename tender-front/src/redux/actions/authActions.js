import ACTION_TYPES from './ACTION_TYPES';

export function isLogged(token) {
  return api
    .isLogged(token)
    .then(logged => {
      logged === true
        ? dispatch({ type: ACTION_TYPES.AUTH.IS_LOGGED, payload: true})
        : dispatch({ type: ACTION_TYPES.AUTH.IS_LOGGED, payload: false});
    })
    .catch(error => {
      dispatch(apiCallError(error));
      throw error;
    });
}
