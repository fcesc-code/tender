const DATABASE_CONFIG = require('../../database/DATABASE_CONFIG');
const { MongoClient } = require('mongodb');
const debug = require('debug')('server:modules.js');

function db(selectedCollection){

  async function findToArray(searchCriteria){
    let client;
    try {
      client = await MongoClient.connect(DATABASE_CONFIG.url, { useNewUrlParser: true, useUnifiedTopology: true });
      const collection = client.db(DATABASE_CONFIG.dbName).collection(selectedCollection);

      const data = await collection.find(searchCriteria).toArray();
      console.log('AQUI DATA', data);

      return data;
    } catch (error) {
      console.log('FAILED CALL findToArray f in db f, modules.js - ERROR: ', error);
      debug(error);
    } finally {
      await client.close();
    }
  }

  return { findToArray }
}

module.exports = db;