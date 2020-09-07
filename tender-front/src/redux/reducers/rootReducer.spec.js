import rootReducer from './rootReducer';
import { combineReducers } from 'redux';
import project from './projectReducer';
import portfolio from './portfolioReducer';
import budget from './budgetReducer';
import position from './positionReducer';
import user from './userReducer';
import apiStatus from './apiStatusReducer';


describe('ROOT REDUCER test set', ()=>{
  
  it('Should return a constant with the result of a call to combineReducers method with a list of reducers', ()=>{
    jest.mock('combineReducers');
    const expectedResult = combineReducers({
      project,
      portfolio,
      budget,
      position,
      user,
      apiStatus
    });

    expect(rootReducer).toEqual(expectedResult);
  });

});








{
  project,
  portfolio,
  budget,
  position,
  user,
  apiStatus
}