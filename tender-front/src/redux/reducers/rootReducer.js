import { combineReducers } from 'redux';
import project from './projectReducer';
import portfolio from './portfolioReducer';
import budget from './budgetReducer';
import position from './positionReducer';
import user from './userReducer';
import apiStatus from './apiCallStatusReducer';

const rootReducer = combineReducers({
  project,
  portfolio,
  budget,
  position,
  user,
  apiStatus
});

export default rootReducer;