"use strict";

var express = require('express');

var debug = require('debug')('server:server.js');

var chalk = require('chalk');

var bodyParser = require('body-parser');

var DATABASE_CONFIG = require('./database/DATABASE_CONFIG');

var jwt = require('express-jwt');

var jwks = require('jwks-rsa');

var jwtAuthz = require('express-jwt-authz');

var JWT_CONFIG = require('./config/JWT_CONFIG');

var cors = require('cors');

var PORT = process.env.PORT || 3010;
var server = express();
server.use(bodyParser.urlencoded({
  extended: true
}));
server.use(bodyParser.json());
server.use(cors());
var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: JWT_CONFIG.cache,
    rateLimit: JWT_CONFIG.rateLimit,
    jwksRequestsPerMinute: JWT_CONFIG.jwksRequestsPerMinute,
    jwksUri: JWT_CONFIG.jwksUri
  }),
  audience: JWT_CONFIG.audience,
  issuer: JWT_CONFIG.issuer,
  algorithms: JWT_CONFIG.algorithms
});
server.get('/authorized', function (req, res) {
  res.send('Secured Resource');
});

var projectRoutes = require('./src/routes/collectionRoutes')(DATABASE_CONFIG.projectsCollection);

server.use('/api/projects', jwtCheck, projectRoutes);

var userRoutes = require('./src/routes/userRoutes')(DATABASE_CONFIG.usersCollection);

server.use('/api/users', jwtCheck, userRoutes);
server.listen(PORT, function () {
  console.log("Server listening on port ".concat(chalk.blueBright(PORT)));
});