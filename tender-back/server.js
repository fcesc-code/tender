const express = require('express');
const debug = require('debug')('server:server.js');
const chalk = require('chalk');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3010;
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.get('/', (req, res)=>{
  res.send(`Server is working !`);
});

server.listen(PORT, ()=>{ console.log(`Server listening on port ${chalk.blueBright(PORT)}`)});