const db = require('../modules/modules.js');
const debug = require('debug')('server:listByBudgetController.js');

function listByBudgetMethods(collection){
  function getListByBudget (req, res) { // this works
    const query = { 'budget_id': req.params.budgetId };
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
  
  return { getListByBudget };

}

module.exports = listByBudgetMethods;