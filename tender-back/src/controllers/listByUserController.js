const db = require('../modules/modules.js');
const debug = require('debug')('server:budgetController.js');

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
  
  return { getListByUser };

};

module.exports = listByUserMethods;
