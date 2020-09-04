const DATABASE_CONFIG = require('../../database/DATABASE_CONFIG');
const { MongoClient } = require('mongodb');
const debug = require('debug')('server:modules.js');
const chalk = require('chalk');

function db(selectedCollection){

  async function findToArray(searchCriteria){
    let client;
    try {
      client = await MongoClient.connect(DATABASE_CONFIG.url, { useNewUrlParser: true, useUnifiedTopology: true });
      const collection = client.db(DATABASE_CONFIG.dbName).collection(selectedCollection);

      const data = await collection.find(searchCriteria).toArray();
      const now = new Date();
      console.log(`${chalk.blueBright(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}:${now.getMilliseconds()} backend: `)}${chalk.greenBright('module.js:')} FindToArray method called successfully`);

      return data;
    } catch (error) {
      console.log('backend: FAILED CALL findToArray f in db f, modules.js - ERROR: ', error);
      debug(error);
    } finally {
      await client.close();
    }
  }

  return { findToArray }
}

module.exports = db;