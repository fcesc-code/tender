"use strict";

var _require = require('mongodb'),
    ObjectID = _require.ObjectID;

var db = require('../modules/modules.js');

var debug = require('debug')('server:itemRoutersController.js');

function itemMethods(collection) {
  function readOne(req, res) {
    // this works
    var query = {
      '_id': ObjectID(req.params.projectId)
    };
    console.log('calling with query', query);

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
              res.send(data); //json(data); change when functionality works

              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              res.send(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 8]]);
    })();
  }

  ;

  function updateItemName(req, res) {
    var item = req.item;

    if (req && req.body && req.body.name) {
      item.name = req.body.name;
    }

    item.save(function (error) {
      if (error) {
        res.send(error);
      }

      res.status(204);
      res.json(item);
    });
  }

  ;

  function updateMany(req, res) {
    var item = req.item;

    if (req.body._id) {
      delete req.body._id;
    }

    Object.entries(req.body).forEach(function (prop) {
      var key = prop[0];
      var value = prop[1];
      item[key] = value;
    });
    item.save(function (error) {
      if (error) {
        res.send(error);
      }

      res.status(204);
      res.json(item);
    });
  }

  ;

  function remove(req, res) {
    var item = req.item;
    item.deleteOne(function (error) {
      if (error) {
        res.send(error);
      }

      res.sendStatus(204);
    });
  }

  ;

  function readOneByUser(req, res) {
    var query = {
      'clearance.user_id': req.params.userId,
      '_id': req.params.projId
    };

    (function returnList() {
      var data;
      return regeneratorRuntime.async(function returnList$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return regeneratorRuntime.awrap(db(collection).findToArray(query));

            case 3:
              data = _context2.sent;
              res.status(200);
              res.send(data); //json(data); change when functionality works

              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              res.send(_context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 8]]);
    })();
  }

  ;
  return {
    remove: remove,
    updateMany: updateMany,
    updateItemName: updateItemName,
    readOne: readOne,
    readOneByUser: readOneByUser
  };
}

module.exports = itemMethods;