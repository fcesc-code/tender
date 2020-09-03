const db = require('../modules/modules.js');
const debug = require('debug')('server:listRoutersController.js');

function listMethods(collection){

  // function create (req, res) {
  //   const item = new Model(req.body);
  //   if(!req.body.name){ 
  //     res.status(400);
  //     res.send('Item name is required');
  //   } else {
  //     item.save((err)=>{res.send(err)});
  //     res.status(201);
  //     res.json(item);
  //   }
  // }

  function getListByUser (req, res) { // this works
    const query = { 'clearance.user_id': req.params.userId };
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
  
  return { getListByUser };

};

module.exports = listMethods;


// dbConnection(DATABASE_CONFIG.projectsCollection)
//   .then(data=>{console.log(data)})
//   .catch(err=>{console.log(err)});