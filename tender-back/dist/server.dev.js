"use strict";

var express = require('express');

var debug = require('debug')('server:server.js');

var chalk = require('chalk');

var bodyParser = require('body-parser');

var DATABASE_CONFIG = require('./database/DATABASE_CONFIG');

var PORT = process.env.PORT || 3010;
var server = express();
server.use(bodyParser.urlencoded({
  extended: true
}));
server.use(bodyParser.json());
server.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
  next();
});

var projectRoutes = require('./src/routes/collectionRoutes')(DATABASE_CONFIG.projectsCollection);

server.use('/api/projects', projectRoutes);
server.listen(PORT, function () {
  console.log("Server listening on port ".concat(chalk.blueBright(PORT)));
});