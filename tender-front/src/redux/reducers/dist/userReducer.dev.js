"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = userReducer;

var _ACTION_TYPES = _interopRequireDefault(require("./../actions/ACTION_TYPES"));

var _initialState = _interopRequireDefault(require("./initialState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState["default"].user;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _ACTION_TYPES["default"].USER.CREATE_USER:
      return action.payload;

    case _ACTION_TYPES["default"].USER.UPDATE_USER:
      return action.payload;

    case _ACTION_TYPES["default"].USER.DELETE_USER:
      return {};

    case _ACTION_TYPES["default"].USER.LOAD_USER:
      return action.payload;

    case _ACTION_TYPES["default"].USER.SAVE_CURRENT_USER:
      return _objectSpread({}, state, {
        currentUser: action.payload
      });

    case _ACTION_TYPES["default"].USER.REMOVE_CURRENT_USER:
      return _objectSpread({}, state, {
        currentUser: undefined
      });

    default:
      return state;
  }
}