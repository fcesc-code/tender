const express = require('express');
const db = require('../modules/modules.js');

function router(collection){
  const userRoutes = express.Router();

  userRoutes
    .route('/:userSub')
    .all((req, res, next)=>{
      console.log('AQUI LA PUNYETERA REQ DEL USER DELS OUS', req.headers);
      next();
    })
    .post((req, res) => {
      console.log('CONSULTANT EL POST DEL USER', req.params.userSub);
      const uniqueId = req.params.userSub;
      const query = { 'user_sub': uniqueId };
      (async function returnList(){
        try {
          console.log('URRAH, ha entrado en la callback listo para llamar a la bd');
          const data = await db(collection).findToArray(query);
          console.log('DATOS RECIBIDOS DE LA BD:', data, typeof(data), data instanceof Array, data.length, data.join('').length);
          let result;
          if (data.length === 0){
            console.log('El usuario no existe en la BBDD. Lanzando nueva consulta a la BBDD');
            const user = req.body.user;
            await db(collection).create( { name: user.name, email: user.email, user_sub: uniqueId  } );
            result = { type: 'new', created: 'successful', signupForm: false };
          } else {
            console.log('El usuario sí existe en la BBDD.');
            result = { type: 'recurrent' }
          }
          res.status(200);
          res.json(result);
        } catch (error) {
          res.status(404);
          res.send(error);
        }
      })();
    });

  return userRoutes;
}

module.exports = router;