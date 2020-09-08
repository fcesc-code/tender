import { combineReducers } from 'redux';
import project from './projectReducer';
import portfolio from './portfolioReducer';
import budget from './budgetReducer';
import quotation from './quotationReducer';
import user from './userReducer';
import apiCallsInProgress from './apiCallStatusReducer';

const rootReducer = combineReducers({
  project,
  portfolio,
  budget,
  quotation,
  user,
  apiCallsInProgress
});

export default rootReducer;