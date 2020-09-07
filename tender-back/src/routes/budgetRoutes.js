const express = require('express');
const listByUserMethods = require('../controllers/listByUserController');

function router(collection){
  const budgetRoutes = express.Router();

  budgetRoutes
    .route('/byUser/:userId')
    .get(listByUserMethods(collection).getListByUser);

  return budgetRoutes;
}

module.exports = router;