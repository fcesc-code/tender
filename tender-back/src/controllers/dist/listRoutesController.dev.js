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
              console.log('URRAH, ha entrado en la callback');
              _context.next = 4;
              return regeneratorRuntime.awrap(db(collection).findToArray(query));

            case 4:
              data = _context.sent;
              console.log('DATOS RECIBIDOS DE LA BD', data);
              res.status(200);
              res.json(data);
              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              res.status(404);
              res.send(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 10]]);
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