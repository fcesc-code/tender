import { combineReducers } from 'redux';
import project from './projectReducer';
import portfolio from './portfolioReducer';
import budget from './budgetReducer';
import position from './positionReducer';
import user from './userReducer';
import auth from './authReducer';
import apiStatus from './apiStatusReducer';

const rootReducer = combineReducers({
  project,
  portfolio,
  budget,
  position,
  user,
  auth,
  apiStatus
});

export default rootReducer;