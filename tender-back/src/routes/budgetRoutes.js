const express = require('express');
const listByUserMethods = require('../controllers/listByUserController');
const listByProjectMethods = require('../controllers/listByProjectController');

function router(collection){
  const budgetRoutes = express.Router();

  budgetRoutes
    .route('/byUser/:userId')
    .get(listByUserMethods(collection).getListByUser);

  budgetRoutes
    .route('/byProject/:projectId')
    .get(listByProjectMethods(collection).getListByProject);

  return budgetRoutes;
}

module.exports = router;