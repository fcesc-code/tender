"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function api() {
  function getProjectsByUserId(_userId) {
    (0, _axios["default"])({
      method: 'get',
      url: "localhost:3010/api/projects/byUser/".concat(_userId)
    }).then(function (data) {
      return data;
    })["catch"](function (error) {
      console.log(error);
    });
  }

  return {
    getProjectsByUserId: getProjectsByUserId
  };
}

var _default = api;
exports["default"] = _default;