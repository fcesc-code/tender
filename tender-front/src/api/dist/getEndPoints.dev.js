"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function api() {
  function getProjectsByUserId(_userId) {
    axios({
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