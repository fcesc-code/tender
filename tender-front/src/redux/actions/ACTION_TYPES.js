const ACTION_TYPES = {
  PROJECT: {
    CREATE_PROJECT: 'CREATE_PROJECT',
    UPDATE_PROJECT: 'UPDATE_PROJECT',
    DELETE_PROJECT: 'DELETE_PROJECT',
    LOAD_PROJECT: 'LOAD_PROJECT',
    CALCULATE_PROJECT: 'CALCULATE_PROJECT',
    UPDATE_PROJECT_STATUS: 'UPDATE_PROJECT_STATUS',
    ADD_USER_TO_PROJECT: 'ADD_USER_TO_PROJECT',
    REMOVE_USER_FROM_PROJECT: 'REMOVE_USER_FROM_PROJECT',
    LOAD_PROJECT_FLOW: 'LOAD_PROJECT_FLOW',
    LOAD_PROJECT_INFO: 'LOAD_PROJECT_INFO'
  },
  BUDGET: {
    CREATE_BUDGET: 'CREATE_BUDGET',
    UPDATE_BUDGET: 'UPDATE_BUDGET',
    DELETE_BUDGET: 'DELETE_BUDGET',
    LOAD_BUDGET: 'LOAD_BUDGET',
    CALCULATE_BUDGET: 'CALCULATE_BUDGET',
    UPDATE_BUDGET_STATUS: 'UPDATE_BUDGET_STATUS',
    SUBMIT_BUDGET: 'SUBMIT_BUDGET'
  },
  POSITION: {
    CREATE_POSITION: 'CREATE_POSITION',
    UPDATE_POSITION: 'UPDATE_POSITION',
    DELETE_POSITION: 'DELETE_POSITION',
    LOAD_POSITION: 'LOAD_POSITION',
    ADD_DISCOUNT_POSITION: 'ADD_DISCOUNT_POSITION',
    UPDATE_DISCOUNT_POSITION: 'UPDATE_DISCOUNT_POSITION'
  },
  USER: {
    UPDATE_USER: 'UPDATE_USER',
    DELETE_USER: 'DELETE_USER',
    SAVE_CURRENT_USER: 'SAVE_CURRENT_USER',
    REMOVE_CURRENT_USER: 'REMOVE_CURRENT_USER',
    EXIST_CURRENT_USER: 'EXIST_CURRENT_USER'
  },
  PORTFOLIO: {
    CALCULATE_PORTFOLIO: 'CALCULATE_PORTFOLIO',
    LOAD_PORTFOLIO_FLOW: 'LOAD_PORTFOLIO_FLOW',
    LOAD_PORTFOLIO_INFO: 'LOAD_PORTFOLIO_INFO'
  },
  AUTH: {
    IS_LOGGED: 'IS_LOGGED'
  },
  API: {
    BEGIN_API_CALL: 'BEGIN_API_CALL',
    ERROR_API_CALL: 'ERROR_API_CALL'
  }
}

/* All delete operations are by default optimistic deletes */
/* All calculate operations are by default optimistic calculations */

export default ACTION_TYPES;