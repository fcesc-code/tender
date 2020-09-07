"use strict";

var _userActions = require("./userActions");

var _ACTION_TYPES = _interopRequireDefault(require("./ACTION_TYPES"));

var _api = _interopRequireDefault(require("../../api/api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var apiFunctions = (0, _api["default"])();
describe('USER ACTIONS - REDUX - Test set', function () {
  it('Should return an action type of SAVE_CURRENT_USER with the userId when method saveCurrentUser is called', function () {
    var userId = 'auth0|5f53d71242e345006db2cc02';
    var expectedResult = {
      type: _ACTION_TYPES["default"].USER.SAVE_CURRENT_USER,
      payload: userId
    };
    var testResult = (0, _userActions.saveCurrentUser)(userId);
    expect(testResult).toEqual(expectedResult);
  });
  it('Should return an action type of REMOVE_CURRENT_USER when method removeCurrentUser is called', function () {
    var expectedResult = {
      type: _ACTION_TYPES["default"].USER.REMOVE_CURRENT_USER
    };
    var testResult = (0, _userActions.removeCurrentUser)();
    expect(testResult).toEqual(expectedResult);
  });
  it('Should return an action type of EXIST_CURRENT_USER with type \'recurrent\' when method existCurrentUser is called with an existing userId', function () {
    var userId = 'auth0|5f53d71242e345006db2cc02';
    var userType = {
      type: 'recurrent'
    };
    var expectedResult = {
      type: _ACTION_TYPES["default"].USER.EXIST_CURRENT_USER,
      payload: userType
    };
    jest.mock('api');
    apiFunctions.checkIsNewUser.mockReturnValue(userType);
    var testResult = (0, _userActions.existCurrentUser)(userId)();
    expect(testResult).toEqual(expectedResult);
  });
  it('Should return an action type of EXIST_CURRENT_USER with type \'new\' when method existCurrentUser is called with a new userId', function () {
    var userId = 'auth0|thisWillBeAlwaysANewUser';
    var userType = {
      type: 'new',
      created: 'successful',
      signupForm: false
    };
    var expectedResult = {
      type: _ACTION_TYPES["default"].USER.EXIST_CURRENT_USER,
      payload: userType
    };
    jest.mock('api');
    apiFunctions.checkIsNewUser.mockReturnValue(userType);
    var testResult = (0, _userActions.existCurrentUser)(userId)();
    expect(testResult).toEqual(expectedResult);
  });
});