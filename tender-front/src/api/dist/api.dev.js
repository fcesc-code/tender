"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function api() {
  console.log('entering api general function - frontend');
  var headers = {
    Authorization: "Bearer ".concat(JSON.parse(sessionStorage.getItem('USER_TOKEN')))
  };

  function getProjectsByUserId(_userId) {
    //console.log('%cgetProjects method called', 'color: blue');
    //console.log('%cHEADERS ', 'color: red', headers);
    return _axios["default"].get("http://localhost:3010/api/projects/byUser/".concat(_userId), {
      headers: headers
    }).then(function (data) {
      console.log('%cDATA from db arrived at front - api', 'color: blue');
      return data;
    })["catch"](function (error) {
      console.log(error);
    });
  }

  function checkIsNewUser(user) {
    console.log('function check is new user from api - front - was called with:', user, headers);
    return _axios["default"].post("http://localhost:3010/api/users/".concat(user.sub), {
      user: user
    }, {
      headers: headers
    }).then(function (data) {
      console.log('%cDATA from db arrived at front from axios result at checisnewuser, returning - api', 'color: blue');
      return data;
    })["catch"](function (error) {
      console.log(error);
    });
  }

  return {
    getProjectsByUserId: getProjectsByUserId,
    checkIsNewUser: checkIsNewUser
  };
}

var _default = api;
exports["default"] = _default;