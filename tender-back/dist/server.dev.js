"use strict";

var express = require('express');

var debug = require('debug')('server:server.js');

var chalk = require('chalk');

var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3010;
var server = express();
server.use(bodyParser.urlencoded({
  extended: true
}));
server.use(bodyParser.json());
server.get('/', function (req, res) {
  res.send("Server is working !");
});
server.listen(PORT, function () {
  console.log("Server listening on port ".concat(chalk.blueBright(PORT)));
});