"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _projectReducer = _interopRequireDefault(require("./projectReducer"));

var _portfolioReducer = _interopRequireDefault(require("./portfolioReducer"));

var _budgetReducer = _interopRequireDefault(require("./budgetReducer"));

var _positionReducer = _interopRequireDefault(require("./positionReducer"));

var _userReducer = _interopRequireDefault(require("./userReducer"));

var _apiStatusReducer = _interopRequireDefault(require("./apiStatusReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducer = (0, _redux.combineReducers)({
  project: _projectReducer["default"],
  portfolio: _portfolioReducer["default"],
  budget: _budgetReducer["default"],
  position: _positionReducer["default"],
  user: _userReducer["default"],
  apiStatus: _apiStatusReducer["default"]
});
var _default = rootReducer;
exports["default"] = _default;