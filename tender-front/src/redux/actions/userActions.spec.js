import { saveCurrentUser, removeCurrentUser, existCurrentUser } from './userActions';
import ACTION_TYPES from './ACTION_TYPES';
import { checkIsNewUser } from '../../api/api';

describe('USER ACTIONS - REDUX - Test set', () => {

  it('Should return an action type of SAVE_CURRENT_USER with the userId when method saveCurrentUser is called', () => {
    const userId = 'auth0|5f53d71242e345006db2cc02';
    const expectedResult = { type: ACTION_TYPES.USER.SAVE_CURRENT_USER, payload: userId };

    const testResult = saveCurrentUser(userId);

    expect(testResult).toEqual(expectedResult);
  });

  it('Should return an action type of REMOVE_CURRENT_USER when method removeCurrentUser is called', () => {
    const expectedResult = { type: ACTION_TYPES.USER.REMOVE_CURRENT_USER };

    const testResult = removeCurrentUser();

    expect(testResult).toEqual(expectedResult);
  });

  it('ESTE Should call existCurrentUser function with following arguments: userId', () => {
    const userId = 'auth0|5f53d71242e345006db2cc02';
    const userType = { type: 'recurrent' };

    const expectedResult = {
      type: ACTION_TYPES.USER.EXIST_CURRENT_USER,
      payload: userType
    }
    
    jest.mock('checkIsNewUser');
    checkIsNewUser.mockReturnValue(Promisify(userType));

    const dispatch = jest.fn();
    dispatch.mockReturnValueOnce(checkIsNewUser);
    existCurrentUser(userId)(dispatch);

    expect(checkIsNewUser).to.haveBeenCalledWith(expectedResult);
  });

  it('Should call existCurrentUser function with following arguments: userId', () => {
    const userId = 'auth0|5f53d71242e345006db2cc02';
    const userType = { type: 'recurrent' };

    const expectedResult = {
      type: ACTION_TYPES.USER.EXIST_CURRENT_USER,
      payload: userType
    }
    
    jest.mock('checkIsNewUser');
    checkIsNewUser.mockReturnValue(expectedResult);

    const dispatch = jest.fn();
    existCurrentUser(userId)(dispatch);

    expect(checkIsNewUser).to.haveBeenCalledWith(expectedResult);
  });

  it('Should throw an error if callback returns an error', () => {
    const userId = 'auth0|5f53d71242e345006db2cc02';
    const userType = { type: 'recurrent' };

    const expectedResult = new Error()
    
    jest.mock('checkIsNewUser');
    checkIsNewUser.mockReturnValue(expectedResult);

    const dispatch = jest.fn();
    existCurrentUser(userId)(dispatch);

    expect(checkIsNewUser).to.haveBeenCalledWith(expectedResult);
  });

  it('Should return an action type of EXIST_CURRENT_USER with type \'recurrent\' when method existCurrentUser is called with an existing userId', () => {
    const userId = 'auth0|5f53d71242e345006db2cc02';
    const userType = { type: 'recurrent' };

    const expectedResult = {
      type: ACTION_TYPES.USER.EXIST_CURRENT_USER,
      payload: userType
    }
    
    jest.mock('checkIsNewUser');
    checkIsNewUser.mockReturnValue(userType);

    existCurrentUser(userId)(jest.fn());

    expect(checkIsNewUser).to.haveBeenCalledWith(expectedResult);
  });

  it('Should return an action type of EXIST_CURRENT_USER with type \'new\' when method existCurrentUser is called with a new userId', () => {
    const userId = 'auth0|thisWillBeAlwaysANewUser';
    const userType = { type: 'new', created: 'successful', signupForm: false };

    const expectedResult = {
      type: ACTION_TYPES.USER.EXIST_CURRENT_USER,
      payload: userType
    }
    
    jest.mock('checkIsNewUser');
    checkIsNewUser.mockReturnValue(userType);

    const testResult = existCurrentUser(userId)();

    expect(testResult).toEqual(expectedResult);
  });

});