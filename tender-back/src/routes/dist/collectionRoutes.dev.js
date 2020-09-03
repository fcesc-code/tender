"use strict";

var express = require('express');

var listMethods = require('../controllers/listRoutesController');

var itemMethods = require('../controllers/itemRoutesController');

var _require = require('mongodb'),
    ObjectID = _require.ObjectID;

var db = require('../modules/modules.js');

function router(collection) {
  var collectionRoutes = express.Router(); // collectionRoutes
  //   .all('/:itemId', (req, res, next) => {
  //     Model.findById(req.params.itemId, (error, item) =>{
  //       if (error) { res.send(error) }
  //       if (item) {
  //         req.item = item;
  //         next();
  //       } else {
  //         res.sendStatus(404);
  //       }
  //     })
  //   });
  // collectionRoutes
  //   .route('/:itemId')
  //   .patch(itemMethods(collection).updateMany)
  //   .delete(itemMethods(collection).remove)
  //   .get(itemMethods(collection).readOne);
  // collectionRoutes
  //   .route('byUser/')
  //   .post(listMethods(collection).create)
  //   .get(listMethods(collection).getList);
  // collectionRoutes
  //   .all('byUser/:userId', (req, res, next) => {
  //     console.log('ENTERING ALL');
  //     Model.findById(req.params.userId, (error, user) =>{
  //       if (error) { res.send(error) }
  //       if (user) {
  //         req.user = user;
  //         console.log('HERE REQUEST FROM ALL', req);
  //         next();
  //       } else {
  //         res.sendStatus(404);
  //       }
  //     })
  //   });

  collectionRoutes.route('/byUser/:userId').get(listMethods(collection).getListByUser);
  collectionRoutes.all('/:projectId', function (req, res, next) {
    var query = {
      '_id': ObjectID(req.params.projectId)
    }; // console.log('calling with query', query);

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
              res.data = data;
              next();
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
  });
  collectionRoutes.route('/:projectId') //.patch(itemMethods(collection).updateMany) // not operative yet
  //.delete(itemMethods(collection).remove) // not operative yet
  .get(itemMethods(collection).readOne);
  return collectionRoutes;
}

module.exports = router;