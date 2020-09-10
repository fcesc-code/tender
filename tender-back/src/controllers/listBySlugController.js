const db = require('../modules/modules.js');
const debug = require('debug')('server:listBySlugController.js');

function listBySlugMethods(collection){
  function getItemBySlug (req, res) { // this works
    const query = { 'slug': req.params.slug };
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
  
  return { getItemBySlug };
}

module.exports = listBySlugMethods;
