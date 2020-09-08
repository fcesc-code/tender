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
    const projection = { "events": 1 };
    (async function returnList(){
      try {
        const data = await db(collection).findProjectionToArray(query, projection);
        const reducer = (accumulated, current) => { accumulated.concat(current) };
        const order = function (a, b) {
          let firstTime;
          let secondTime;
          (a.time === '' || a.time === undefined) ? firstTime = a.est_time : firstTime = a.time;
          (b.time === '' || b.time === undefined) ? secondTime = b.est_time : secondTime = b.time;
          firstTime = new Date(firstTime);
          secondTime = new Date(secondTime);
          return firstTime - secondTime; 
        } // add logic to order depending on
        const result = data.map(group => group.events).reduce(reducer).sort(order);
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
