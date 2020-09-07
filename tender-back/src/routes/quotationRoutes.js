const express = require('express');
const listByUserMethods = require('../controllers/listByUserController');

function router(collection){
  const quotationRoutes = express.Router();

  quotationRoutes
    .route('/byUser/:userId')
    .get(listByUserMethods(collection).getListByUser);

  return quotationRoutes;
}

module.exports = router;