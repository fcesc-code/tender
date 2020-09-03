"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = apiCallStatusReducer;

var _ACTION_TYPES = _interopRequireDefault(require("./../actions/ACTION_TYPES"));

var _initialState = _interopRequireDefault(require("./initialState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

function apiCallStatusReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState["default"].apiCallsInProgress;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _ACTION_TYPES["default"].API.BEGIN_API_CALL) {
    return state + 1;
  } else if (action.type === _ACTION_TYPES["default"].API.ERROR_API_CALL || actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }

  return state;
}