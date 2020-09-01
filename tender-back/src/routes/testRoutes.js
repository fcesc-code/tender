const express = require('express');

function router(Model){
  const testRoutes = express.Router();

  testRoutes
    .route('/')
    .post(methods(Model).create)
    .get(methods(Model).loadAll);

  testRoutes
    .all('/:itemId', (req, res, next) => {
      Model.findById(req.params.itemId, (error, item) =>{
        if (error) { res.send(error) }
        if (item) {
          req.item = item;
          next();
        } else {
          res.sendStatus(404);
        }
      })
    });

  testRoutes
    .route('/:itemId')
    .patch(itemMethods().updateMany)
    .delete(itemMethods().remove)
    .get(itemMethods().loadOne);

  return testRoutes;
}

module.exports = router;