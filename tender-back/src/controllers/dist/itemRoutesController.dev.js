"use strict";

var _require = require('mongodb'),
    ObjectID = _require.ObjectID;

var db = require('../modules/modules.js');

var debug = require('debug')('server:itemRoutersController.js');

function itemMethods(collection) {
  function readOne(req, res) {
    // this works
    var data = res.data;
    res.status(200);
    res.json(data); // change to json
  }

  ; // function updateItemName (req, res) {
  // 	const { item } = req;
  // 	if (req && req.body && req.body.name) { 
  // 		item.name = req.body.name 
  // 	}
  // 	item.save((error) => {
  // 		if (error) { res.send(error);	}
  // 		res.status(204);
  // 		res.json(item);
  // 	});
  // };
  // function updateMany (req, res) {
  // 	const { item } = req;
  // 	if (req.body._id) {
  // 		delete req.body._id;
  // 	}
  // 	Object.entries(req.body).forEach((prop) => {
  // 		const key = prop[0];
  // 		const value = prop[1];
  // 		item[key] = value;
  // 	});
  // 	item.save((error) => {
  // 		if (error) { res.send(error);	}
  // 		res.status(204);
  // 		res.json(item);
  // 	});
  // };
  // function remove (req, res) {
  // 	const { item } = req;
  // 	item.deleteOne((error) => {
  // 		if (error) { res.send(error); }
  // 		res.sendStatus(204);
  // 	});
  // };
  // };

  return {
    readOne: readOne
  };
}

module.exports = itemMethods;