"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadProjectsFlowFromPortfolioByUserIdSuccess = loadProjectsFlowFromPortfolioByUserIdSuccess;
exports.loadProjectsByUserId_success = loadProjectsByUserId_success;
exports.loadPortfolioFlowByUserId = loadPortfolioFlowByUserId;
exports.loadProjectsByUserId = loadProjectsByUserId;

var _ACTION_TYPES = _interopRequireDefault(require("./ACTION_TYPES"));

var _apiStatusActions = require("./apiStatusActions");

var _api = _interopRequireDefault(require("../../api/api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function loadProjectsFlowFromPortfolioByUserIdSuccess(projects) {
  return {
    type: _ACTION_TYPES["default"].PORTFOLIO.LOAD_PORTFOLIO_FLOW,
    payload: projects
  };
}

function loadProjectsByUserId_success(projects) {
  console.log('dispatching action LOAD_PORTFOLIO_INFO');
  return {
    type: _ACTION_TYPES["default"].PORTFOLIO.LOAD_PORTFOLIO_INFO,
    payload: projects
  };
}

function loadPortfolioFlowByUserId(_userid) {
  return function (dispatch) {
    dispatch((0, _apiStatusActions.beginApiCall)());
    return _api["default"].getProjectsFlowFromPortfolioByUserId(_userid).then(function (projects) {
      dispatch(loadProjectsFlowFromPortfolioByUserIdSuccess(projects));
    })["catch"](function (error) {
      dispatch((0, _apiStatusActions.apiCallError)(error));
      throw error;
    });
  };
}

function loadProjectsByUserId(_userId) {
  console.log('loadProjectsByUserId action called with userID', _userId);
  return function (dispatch) {
    console.log('callback from loadProjectsByUserId action called');
    dispatch((0, _apiStatusActions.beginApiCall)());
    console.log((0, _api["default"])());
    return (0, _api["default"])().getProjectsByUserId(_userId).then(function (projects) {
      console.log('data received from api into action, and ready for dispatch', projects);
      dispatch(loadProjectsByUserId_success(projects));
    })["catch"](function (error) {
      dispatch((0, _apiStatusActions.apiCallError)(error));
      throw error;
    });
  };
}
/* || pending ||
ACTION_TYPES.PORTFOLIO.CALCULATE_PORTFOLIO
*/