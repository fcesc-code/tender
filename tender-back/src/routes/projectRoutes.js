const express = require('express');
const listByUserMethods = require('../controllers/listByUserController');
const listBySlugMethods = require('../controllers/listBySlugController');
const itemMethods = require('../controllers/itemRoutesController');
const { ObjectID } = require('mongodb');
const db = require('../modules/modules.js');

function router(collection){
  const projectRoutes = express.Router();

  // projectRoutes
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

  // projectRoutes
  //   .route('/:itemId')
  //   .patch(itemMethods(collection).updateMany)
  //   .delete(itemMethods(collection).remove)
  //   .get(itemMethods(collection).readOne);

  // projectRoutes
  //   .route('byUser/')
  //   .post(listMethods(collection).create)
  //   .get(listMethods(collection).getList);

  // projectRoutes
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

  projectRoutes
    .route('/byUser/:userId')
    .get(listByUserMethods(collection).getListByUser);

  projectRoutes
    .route('/bySlug/:slug')
    .get(listBySlugMethods(collection).getItemBySlug);

  projectRoutes
    .route('/flow/byUser/:userId')
    .get(listByUserMethods(collection).getFlowByUser);

  projectRoutes
    .all('/:projectId', (req, res, next)=>{
      const query = { '_id': ObjectID(req.params.projectId) };
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

  projectRoutes
    .route('/:projectId')
    //.patch(itemMethods(collection).updateMany) // not operative yet
    //.delete(itemMethods(collection).remove) // not operative yet
    .get(itemMethods(collection).readOne);

  return projectRoutes;
}

module.exports = router;