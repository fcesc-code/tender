const { ObjectID } = require('mongodb');
const db = require('../modules/modules.js');
const debug = require('debug')('server:itemRoutersController.js');

function itemMethods(collection){
	function readOne (req, res) {  // this works
		const query = { '_id': ObjectID(req.params.projectId) };
		console.log('calling with query', query);
		(async function returnList(){
      try {
				const data = await db(collection).findToArray(query);
				res.status(200);
				res.send(data);
				//json(data); change when functionality works
      } catch (error) {
        res.send(error);
      }
    })();
	};
	
	function updateItemName (req, res) {
		const { item } = req;

		if (req && req.body && req.body.name) { 
			item.name = req.body.name 
		}
	
		item.save((error) => {
			if (error) { res.send(error);	}
			res.status(204);
			res.json(item);
		});
	};
	
	function updateMany (req, res) {
		const { item } = req;
	
		if (req.body._id) {
			delete req.body._id;
		}
	
		Object.entries(req.body).forEach((prop) => {
			const key = prop[0];
			const value = prop[1];
			item[key] = value;
		});
		item.save((error) => {
			if (error) { res.send(error);	}
			res.status(204);
			res.json(item);
		});
	};
	
	function remove (req, res) {
		const { item } = req;
	
		item.deleteOne((error) => {
			if (error) { res.send(error); }
			res.sendStatus(204);
		});
	};

	function readOneByUser (req, res) {
		const query = { 'clearance.user_id': req.params.userId, '_id': req.params.projId };
		(async function returnList(){
      try {
				const data = await db(collection).findToArray(query);
				res.status(200);
				res.send(data);
				//json(data); change when functionality works
      } catch (error) {
        res.send(error);
      }
    })();
	};

	return  { remove, updateMany, updateItemName, readOne, readOneByUser }
}


module.exports = itemMethods;