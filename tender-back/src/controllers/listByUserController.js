const db = require('../modules/modules.js');
const debug = require('debug')('server:listByUserController.js');
const orderEventsFlow = require('./../utils/orderEventsFlow');

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
    const projection = { 'events': 1 };
    // console.log('enterinng getFlowByUser');
    (async function returnList(){
      try {
        const data = await db(collection).findProjectionToArray(query, projection);
        // console.log('URRAH! data from the db:', JSON.stringify(data));
        const filteredData = data.map(group => group.events);
        const result = orderEventsFlow(filteredData);
        // console.log('DATA has been transformed and is ready to be sent back to front', JSON.stringify(result));
        res.status(200);
        res.json(result);
      } catch (error) {
        res.status(404);
        res.send(error);
      }
    })();
  }
  
  return { getListByUser, getFlowByUser };
}

module.exports = listByUserMethods;
