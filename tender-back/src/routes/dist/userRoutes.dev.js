"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var express = require('express');

var db = require('../modules/modules.js');

function router(collection) {
  var userRoutes = express.Router();
  userRoutes.route('/:userSub').all(function (req, res, next) {
    console.log('AQUI LA PUNYETERA REQ DEL USER DELS OUS', req.headers);
    next();
  }).post(function (req, res) {
    console.log('CONSULTANT EL POST DEL USER', req.params.userSub);
    var uniqueId = req.params.userSub;
    var query = {
      'user_sub': uniqueId
    };

    (function returnList() {
      var data, result, user;
      return regeneratorRuntime.async(function returnList$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              console.log('URRAH, ha entrado en la callback listo para llamar a la bd');
              _context.next = 4;
              return regeneratorRuntime.awrap(db(collection).findToArray(query));

            case 4:
              data = _context.sent;
              console.log('DATOS RECIBIDOS DE LA BD:', data, _typeof(data), data instanceof Array, data.length, data.join('').length);

              if (!(data.length === 0)) {
                _context.next = 14;
                break;
              }

              console.log('El usuario no existe. Lanzando nueva consulta a la BBDD');
              user = req.body.user;
              _context.next = 11;
              return regeneratorRuntime.awrap(db(collection).create({
                name: user.name,
                email: user.email,
                user_sub: uniqueId
              }));

            case 11:
              result = 'successful';
              _context.next = 15;
              break;

            case 14:
              console.log('El usuario sí existe');

            case 15:
              res.status(200);
              res.json(result);
              _context.next = 23;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](0);
              res.status(404);
              res.send(_context.t0);

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 19]]);
    })();
  });
  return userRoutes;
}

module.exports = router;