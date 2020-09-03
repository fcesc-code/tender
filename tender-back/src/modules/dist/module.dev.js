"use strict";

var DATABASE_CONFIG = require('./../../database/DATABASE_CONFIG');

var _require = require('mongodb'),
    MongoClient = _require.MongoClient;

var debug = require('debug')('server:module.js');

function dbConnection(selectedCollection) {
  var client, collection, cursor;
  return regeneratorRuntime.async(function dbConnection$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(MongoClient.connect(DATABASE_CONFIG.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }));

        case 3:
          client = _context.sent;
          collection = client.db(DATABASE_CONFIG.dbName).collection(selectedCollection); // Make the appropriate DB calls

          _context.next = 7;
          return regeneratorRuntime.awrap(collection.find().toArray());

        case 7:
          cursor = _context.sent;
          return _context.abrupt("return", cursor);

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          debug(_context.t0);

        case 14:
          _context.prev = 14;
          _context.next = 17;
          return regeneratorRuntime.awrap(client.close());

        case 17:
          return _context.finish(14);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11, 14, 18]]);
}

module.exports = dbConnection; // const dbConnection = require('./src/module/module');
// dbConnection(DATABASE_CONFIG.projectsCollection)
//   .then(data=>{console.log(data)})
//   .catch(err=>{console.log(err)});