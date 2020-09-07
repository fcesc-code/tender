"use strict";

var _ACTION_TYPES = _interopRequireDefault(require("./../actions/ACTION_TYPES"));

var _userReducer = _interopRequireDefault(require("./userReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('USER REDUCER test set', function () {
  it('Should add a new Current User to state when SAVE_CURRENT_USER action type is called', function () {
    var initialState = {};
    var testAction = {
      type: _ACTION_TYPES["default"].USER.SAVE_CURRENT_USER,
      payload: "auth0|5f53d71242e345006db2cc02"
    };
    var testResult = (0, _userReducer["default"])(initialState, testAction);
    expect(testResult.currentUser).toEqual(testAction.payload);
  });
  it('Should set currentUser to undefined when REMOVE_CURRENT_USER action type is called', function () {
    var initialState = {
      currentUser: "auth0|5f53d71242e345006db2cc02"
    };
    var testAction = {
      type: _ACTION_TYPES["default"].USER.REMOVE_CURRENT_USER
    };
    var testResult = (0, _userReducer["default"])(initialState, testAction);
    expect(testResult.currentUser).toEqual(undefined);
  });
  it('Should return a user type of \'new\' when called with a new user', function () {
    var initialState = {};
    var userType = {
      type: 'new',
      created: 'successful',
      signupForm: false
    };
    var testAction = {
      type: _ACTION_TYPES["default"].USER.EXIST_CURRENT_USER,
      payload: userType
    };
    var testResult = (0, _userReducer["default"])(initialState, testAction);
    expect(testResult).toEqual({
      currentUserType: userType
    });
  });
  it('Should return a user type of \'recurrent\' when called with a recurrent user id', function () {
    var initialState = {};
    var userType = {
      type: 'recurrent'
    };
    var testAction = {
      type: _ACTION_TYPES["default"].USER.EXIST_CURRENT_USER,
      payload: userType
    };
    var testResult = (0, _userReducer["default"])(initialState, testAction);
    expect(testResult).toEqual({
      currentUserType: userType
    });
  });
  it('Should return a state of userToCreate when a user is being updated in the db', function () {
    var initialState = {};
    var user = {
      name: 'John',
      user_sub: "auth0|5f53d71242e345006db2cc02"
    };
    var testAction = {
      type: _ACTION_TYPES["default"].USER.UPDATE_USER,
      payload: user
    };
    var testResult = (0, _userReducer["default"])(initialState, testAction);
    expect(testResult).toEqual({
      userToUpdate: user
    });
  });
  it('Should return a state of userToCreate = undefined and the unique user id into userToDelete state when before confirming a user will be permanently deleted in the db', function () {
    var initialState = {};
    var user = "auth0|5f53d71242e345006db2cc02";
    var testAction = {
      type: _ACTION_TYPES["default"].USER.DELETE_USER,
      payload: user
    };
    var testResult = (0, _userReducer["default"])(initialState, testAction);
    expect(testResult).toEqual({
      userToUpdate: undefined,
      userToDelete: user
    });
  });
  it('Should return previous state when called with an invalid action type', function () {
    var initialState = {};
    var testAction = {
      type: 'INVALID ACTION TYPE'
    };
    var testResult = (0, _userReducer["default"])(initialState, testAction);
    expect(testResult).toEqual(initialState);
  }); // it('Should return default initial state when called with no agument (only happens at initialization)', ()=>{ // DOES NOT WORK
  //   const expectedInitialState = {};
  //   const testAction = {
  //     type: 'INVALID ACTION TYPE'
  //   }
  //   jest.mock('userReducer');
  //   const testResult = userReducer();
  //   expect(testResult).toEqual(expectedInitialState);
  // });
});