const express = require('express');
const listByUserMethods = require('../controllers/listByUserController');
const listByBudgetMethods = require('../controllers/listByBudgetController');

function router(collection){
  const quotationRoutes = express.Router();

  quotationRoutes
    .route('/byUser/:userId')
    .get(listByUserMethods(collection).getListByUser);

  quotationRoutes
    .route('/byBudget/:budgetId')
    .get(listByBudgetMethods(collection).getListByBudget);

  quotationRoutes
    .all('/:quotationId', (req, res, next)=>{
      const query = { '_id': ObjectID(req.params.quotationId) };
      // console.log('calling with query', query);
      (async function returnList(){
        try {
          const data = await db(collection).findToArray(query);
          req.data = data;
          next();
        } catch (error) {
          res.send(error);
        }
      })();
    })

  quotationRoutes
    .route('/:quotationId')
    //.patch(itemMethods(collection).updateMany) // not operative yet
    //.delete(itemMethods(collection).remove) // not operative yet
    .get(itemMethods(collection).readOne);

  return quotationRoutes;
}

module.exports = router;