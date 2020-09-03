"use strict";

var db = require('../modules/modules.js');

var debug = require('debug')('server:listRoutersController.js');

function listMethods(collection) {
  // function create (req, res) {
  //   const item = new Model(req.body);
  //   if(!req.body.name){ 
  //     res.status(400);
  //     res.send('Item name is required');
  //   } else {
  //     item.save((err)=>{res.send(err)});
  //     res.status(201);
  //     res.json(item);
  //   }
  // }
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
              res.send(data);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              res.send(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 7]]);
    })();
  }

  return {
    getListByUser: getListByUser
  };
}

;
module.exports = listMethods; // dbConnection(DATABASE_CONFIG.projectsCollection)
//   .then(data=>{console.log(data)})
//   .catch(err=>{console.log(err)});