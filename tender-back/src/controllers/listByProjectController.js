const db = require('../modules/modules.js');
const debug = require('debug')('server:budgetController.js');

function listByProjectMethods(collection){
  function getListByProject (req, res) { // this works
    const query = { 'project_id': req.params.projectId };
    console.log('entering list by project methods, query:', query);
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
  
  return { getListByProject };

};

module.exports = listByProjectMethods;
