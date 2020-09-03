"use strict";

var DATABASE_CONFIG = require('../../database/DATABASE_CONFIG');

var _require = require('mongodb'),
    MongoClient = _require.MongoClient;

var debug = require('debug')('server:modules.js');

function db(selectedCollection) {
  function findToArray(searchCriteria) {
    var client, collection, data;
    return regeneratorRuntime.async(function findToArray$(_context) {
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
            collection = client.db(DATABASE_CONFIG.dbName).collection(selectedCollection);
            _context.next = 7;
            return regeneratorRuntime.awrap(collection.find(searchCriteria).toArray());

          case 7:
            data = _context.sent;
            console.log('AQUI DATA', data);
            return _context.abrupt("return", data);

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            console.log('FAILED CALL findToArray f in db f, modules.js - ERROR: ', _context.t0);
            debug(_context.t0);

          case 16:
            _context.prev = 16;
            _context.next = 19;
            return regeneratorRuntime.awrap(client.close());

          case 19:
            return _context.finish(16);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 12, 16, 20]]);
  }

  return {
    findToArray: findToArray
  };
}

module.exports = db;