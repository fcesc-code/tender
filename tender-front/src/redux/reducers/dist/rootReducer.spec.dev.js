"use strict";

var _rootReducer = _interopRequireDefault(require("./rootReducer"));

var _redux = require("redux");

var _projectReducer = _interopRequireDefault(require("./projectReducer"));

var _portfolioReducer = _interopRequireDefault(require("./portfolioReducer"));

var _budgetReducer = _interopRequireDefault(require("./budgetReducer"));

var _positionReducer = _interopRequireDefault(require("./positionReducer"));

var _userReducer = _interopRequireDefault(require("./userReducer"));

var _apiStatusReducer = _interopRequireDefault(require("./apiStatusReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('ROOT REDUCER test set', function () {
  it('Should return a constant with the result of a call to combineReducers method with a list of reducers', function () {
    jest.mock('combineReducers');
    var expectedResult = (0, _redux.combineReducers)({
      project: _projectReducer["default"],
      portfolio: _portfolioReducer["default"],
      budget: _budgetReducer["default"],
      position: _positionReducer["default"],
      user: _userReducer["default"],
      apiStatus: _apiStatusReducer["default"]
    });
    expect(_rootReducer["default"]).toEqual(expectedResult);
  });
});
{
  _projectReducer["default"], _portfolioReducer["default"], _budgetReducer["default"], _positionReducer["default"], _userReducer["default"], _apiStatusReducer["default"];
}