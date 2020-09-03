"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = portfolioReducer;

var _ACTION_TYPES = _interopRequireDefault(require("./../actions/ACTION_TYPES"));

var _initialState = _interopRequireDefault(require("./initialState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function portfolioReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState["default"].portfolio;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _ACTION_TYPES["default"].PORTFOLIO.CALCULATE_PORTFOLIO:
      return action.payload;

    case _ACTION_TYPES["default"].PORTFOLIO.LOAD_PORTFOLIO_FLOW:
      return action.payload;

    case _ACTION_TYPES["default"].PORTFOLIO.LOAD_PORTFOLIO_INFO:
      console.log('portfolio reducer entered with', action.payload);
      return action.payload;

    default:
      return state;
  }
}