const express = require('express');
const listMethods = require('../controllers/listRoutesController');
const itemMethods = require('../controllers/itemRoutesController');

function router(collection){
  debugger;
  const collectionRoutes = express.Router();

  // collectionRoutes
  //   .all('/:itemId', (req, res, next) => {
  //     Model.findById(req.params.itemId, (error, item) =>{
  //       if (error) { res.send(error) }
  //       if (item) {
  //         req.item = item;
  //         next();
  //       } else {
  //         res.sendStatus(404);
  //       }
  //     })
  //   });

  // collectionRoutes
  //   .route('/:itemId')
  //   .patch(itemMethods(collection).updateMany)
  //   .delete(itemMethods(collection).remove)
  //   .get(itemMethods(collection).readOne);

  // collectionRoutes
  //   .route('byUser/')
  //   .post(listMethods(collection).create)
  //   .get(listMethods(collection).getList);

  // collectionRoutes
  //   .all('byUser/:userId', (req, res, next) => {
  //     console.log('ENTERING ALL');
  //     Model.findById(req.params.userId, (error, user) =>{
  //       if (error) { res.send(error) }
  //       if (user) {
  //         req.user = user;
  //         console.log('HERE REQUEST FROM ALL', req);
  //         next();
  //       } else {
  //         res.sendStatus(404);
  //       }
  //     })
  //   });

  collectionRoutes
    .route('/byUser/:userId')
    .get(listMethods(collection).getListByUser);

  collectionRoutes
    .route('/:projectId')
    .patch(itemMethods(collection).updateMany) // not operative yet
    .delete(itemMethods(collection).remove) // not operative yet
    .get(itemMethods(collection).readOne);

  return collectionRoutes;
}

module.exports = router;