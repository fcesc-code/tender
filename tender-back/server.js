const express = require('express');
const debug = require('debug')('server:server.js');
const chalk = require('chalk');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3010;
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// const testRoutes = require('./src/routes/testRoutes')();

// server.use('/api/test', testRoutes);

server.get('/', (req, res)=>{
  res.send('Server is working !');
});

server.listen(port, ()=>{debug(`Listening on port, ${chalk.blueBright(port)}`)});
