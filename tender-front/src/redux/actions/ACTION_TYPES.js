const ACTION_TYPES = {
  PROJECT: {
    CREATE_PROJECT: 'CREATE_PROJECT',
    UPDATE_PROJECT: 'UPDATE_PROJECT',
    DELETE_PROJECT: 'DELETE_PROJECT',
    LOAD_PROJECT: 'LOAD_PROJECT',
    UPDATE_PROJECT_STATUS: 'UPDATE_PROJECT_STATUS',
    CALCULATE_PROJECT: 'CALCULATE_PROJECT',
    LOAD_PROJECT_FLOW: 'LOAD_PROJECT_FLOW',
    LOAD_PROJECT_FLOW_SUCCESS: 'LOAD_PROJECT_FLOW_SUCCESS',
    LOAD_PROJECT_INFO: 'LOAD_PROJECT_INFO',
    LOAD_PROJECT_INFO_SUCCESS: 'LOAD_PROJECT_INFO_SUCCESS'
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
  QUOTATION: {
    CREATE_QUOTATION: 'CREATE_QUOTATION',
    UPDATE_QUOTATION: 'UPDATE_QUOTATION',
    DELETE_QUOTATION: 'DELETE_QUOTATION',
    LOAD_QUOTATION: 'LOAD_QUOTATION',
    UPDATE_DISCOUNT_QUOTATION: 'UPDATE_DISCOUNT_QUOTATION'
  },
  USER: {
    UPDATE_USER: 'UPDATE_USER',
    DELETE_USER: 'DELETE_USER',
    SAVE_CURRENT_USER: 'SAVE_CURRENT_USER',
    REMOVE_CURRENT_USER: 'REMOVE_CURRENT_USER',
    EXIST_CURRENT_USER: 'EXIST_CURRENT_USER',
    EXIST_CURRENT_USER_SUCCESSFUL: 'EXIST_CURRENT_USER_SUCCESS'
  },
  PORTFOLIO: {
    CALCULATE_PORTFOLIO: 'CALCULATE_PORTFOLIO',
    LOAD_PORTFOLIO_FLOW: 'LOAD_PORTFOLIO_FLOW',
    LOAD_PORTFOLIO_FLOW_SUCCESS: 'LOAD_PORTFOLIO_FLOW_SUCCESS',
    LOAD_PORTFOLIO_INFO: 'LOAD_PORTFOLIO_INFO',
    LOAD_PORTFOLIO_INFO_SUCCESS: 'LOAD_PORTFOLIO_INFO_SUCCESS'
  },
  PEOPLE: {
    ADD_USER_TO_PROJECT: 'ADD_USER_TO_PROJECT',
    REMOVE_USER_FROM_PROJECT: 'REMOVE_USER_FROM_PROJECT'
  },
  AUTH: {
    IS_LOGGED: 'IS_LOGGED'
  },
  API: {
    BEGIN_API_CALL: 'BEGIN_API_CALL',
    ERROR_API_CALL: 'ERROR_API_CALL'
  },
  DEFAULT: 'DEFAULT'
}

/* All delete operations are by default optimistic deletes */
/* All calculate operations are by default optimistic calculations */

export default ACTION_TYPES;