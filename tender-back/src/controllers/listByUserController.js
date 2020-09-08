const db = require('../modules/modules.js');
const debug = require('debug')('server:listByUserController.js');

function listByUserMethods(collection){
  function getListByUser (req, res) { // this works
    const query = { 'clearance.user_id': req.params.userId };
    (async function returnList(){
      try {
        const data = await db(collection).findToArray(query);
        res.status(200);
        res.json(data);
      } catch (error) {
        res.status(404);
        res.send(error);
      }
    })();
  }

  function getFlowByUser(req, res){
    const query = { 'clearance.user_id': req.params.userId };
    const projection = { events: 1 };
    (async function returnList(){
      try {
        const data = await db(collection).findProjectionToArray(query, projection);
        res.status(200);
        res.json(data);
      } catch (error) {
        res.status(404);
        res.send(error);
      }
    })();
  }
  
  return { getListByUser, getFlowByUser };
}

module.exports = listByUserMethods;
