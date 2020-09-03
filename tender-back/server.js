const express = require('express');
const debug = require('debug')('server:server.js');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const DATABASE_CONFIG = require('./database/DATABASE_CONFIG');

const PORT = process.env.PORT || 3010;
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const projectRoutes = require('./src/routes/collectionRoutes')(DATABASE_CONFIG.projectsCollection);

server.use('/api/projects', projectRoutes);

server.listen(PORT, ()=>{ console.log(`Server listening on port ${chalk.blueBright(PORT)}`)});
