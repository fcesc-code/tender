"use strict";

var db = require('../modules/modules.js');

var debug = require('debug')('server:budgetController.js');

function listByUserMethods(collection) {
  function getListByUser(req, res) {
    // this works
    var query = {
      'clearance.user_id': req.params.userId
    };

    (function returnList() {
      var data;
      return regeneratorRuntime.async(function returnList$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(db(collection).findToArray(query));

            case 3:
              data = _context.sent;
              res.status(200);
              res.json(data);
              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              res.status(404);
              res.send(_context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 8]]);
    })();
  }

  return {
    getListByUser: getListByUser
  };
}

;
module.exports = listByUserMethods;