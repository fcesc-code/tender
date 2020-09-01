"use strict";

var _ACTION_TYPES = _interopRequireDefault(require("../actions/ACTION_TYPES"));

var _apiStatusReducer = _interopRequireDefault(require("./apiStatusReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('API STATUS REDUCER test set', function () {
  it('Should return state + 1 when called with action type BEGIN_API_CALL', function () {
    var initialState = 0;
    var testAction = {
      type: _ACTION_TYPES["default"].API.BEGIN_API_CALL
    };
    var testResult = (0, _apiStatusReducer["default"])(initialState, testAction);
    expect(testResult).toEqual(initialState + 1);
  });
  it('Should return state - 1 when called with action type ERROR_API_CALL', function () {
    var initialState = 2;
    var testAction = {
      type: _ACTION_TYPES["default"].API.ERROR_API_CALL
    };
    var testResult = (0, _apiStatusReducer["default"])(initialState, testAction);
    expect(testResult).toEqual(initialState - 1);
  });
  it('Should return prveious state when called with an invalid action type', function () {
    var initialState = 0;
    var testAction = {
      type: 'INVALID ACTION TYPE'
    };
    var testResult = (0, _apiStatusReducer["default"])(initialState, testAction);
    expect(testResult).toEqual(initialState);
  });
});