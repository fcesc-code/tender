const DATABASE_CONFIG = require('./../../database/DATABASE_CONFIG');
const { MongoClient } = require('mongodb');
const debug = require('debug')('server:module.js');

async function dbConnection(selectedCollection){
  let client;
  try {
      client = await MongoClient.connect(DATABASE_CONFIG.url, { useNewUrlParser: true, useUnifiedTopology: true });
      const collection = client.db(DATABASE_CONFIG.dbName).collection(selectedCollection);
      // Make the appropriate DB calls
      const cursor = await collection.find().toArray();
      return cursor;
  } catch (error) {
      debug(error);
  } finally {
      await client.close();
  }
}

module.exports = dbConnection;

// const dbConnection = require('./src/module/module');
// dbConnection(DATABASE_CONFIG.projectsCollection)
//   .then(data=>{console.log(data)})
//   .catch(err=>{console.log(err)});