"use strict";

var DATABASE_CONFIG = require('../../database/DATABASE_CONFIG');

var _require = require('mongodb'),
    MongoClient = _require.MongoClient;

var debug = require('debug')('server:modules.js');

var chalk = require('chalk');

function db(selectedCollection) {
  function findToArray(searchCriteria) {
    var client, collection, data, now;
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
            now = new Date();
            console.log("".concat(chalk.blueBright("".concat(now.getHours(), ":").concat(now.getMinutes(), ":").concat(now.getSeconds(), ":").concat(now.getMilliseconds(), " backend: "))).concat(chalk.greenBright('module.js:'), " FindToArray method called successfully"));
            return _context.abrupt("return", data);

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            console.log('backend: FAILED CALL findToArray f in db f, modules.js - ERROR: ', _context.t0);
            debug(_context.t0);

          case 17:
            _context.prev = 17;
            _context.next = 20;
            return regeneratorRuntime.awrap(client.close());

          case 20:
            return _context.finish(17);

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 13, 17, 21]]);
  }

  function create(entity) {
    var client, collection, now;
    return regeneratorRuntime.async(function create$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log('create function of modules -back- was called');
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap(MongoClient.connect(DATABASE_CONFIG.url, {
              useNewUrlParser: true,
              useUnifiedTopology: true
            }));

          case 4:
            client = _context2.sent;
            collection = client.db(DATABASE_CONFIG.dbName).collection(selectedCollection);
            console.log('database is being called (insrtOne) with:', entity);
            _context2.next = 9;
            return regeneratorRuntime.awrap(collection.insertOne(entity));

          case 9:
            now = new Date();
            console.log("".concat(chalk.blueBright("".concat(now.getHours(), ":").concat(now.getMinutes(), ":").concat(now.getSeconds(), ":").concat(now.getMilliseconds(), " backend: "))).concat(chalk.greenBright('module.js:'), " Create method called successfully"));
            return _context2.abrupt("return", 'successfully');

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](1);
            console.log('backend: FAILED CALL create f in db f, modules.js - ERROR: ', _context2.t0);
            debug(_context2.t0);

          case 18:
            _context2.prev = 18;
            _context2.next = 21;
            return regeneratorRuntime.awrap(client.close());

          case 21:
            return _context2.finish(18);

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 14, 18, 22]]);
  }

  return {
    findToArray: findToArray,
    create: create
  };
}

module.exports = db;