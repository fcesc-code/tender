const { ObjectID } = require('mongodb');
const db = require('../modules/modules.js');
const debug = require('debug')('server:itemRoutersController.js');

function itemMethods(collection){
	function readOne (req, res) {  // this works
		const { data } = req;
		res.status(200);
		res.json(data); // change to json
	};
	
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

	return  { readOne }
}


module.exports = itemMethods;