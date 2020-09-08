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

  return quotationRoutes;
}

module.exports = router;