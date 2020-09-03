import ACTION_TYPES from './../actions/ACTION_TYPES';
import initialState from './initialState';

export default function portfolioReducer(state = initialState.portfolio, action) {
  switch (action.type) {
    case ACTION_TYPES.PORTFOLIO.CALCULATE_PORTFOLIO:
      return action.payload;
    case ACTION_TYPES.PORTFOLIO.LOAD_PORTFOLIO_FLOW:
      return action.payload;
    case ACTION_TYPES.PORTFOLIO.LOAD_PORTFOLIO_INFO:
      console.log('portfolio reducer entered with', action.payload);
      return action.payload;
    default:
      return state;
  }
}

