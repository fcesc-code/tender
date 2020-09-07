const DATABASE_CONFIG = require('../../database/DATABASE_CONFIG');
const { MongoClient } = require('mongodb');
const debug = require('debug')('server:modules.js');
const printTimeLog = require('./../utils/printTimeLog');

function db(selectedCollection){

  async function findToArray(searchCriteria){
    let client;
    try {
      client = await MongoClient.connect(DATABASE_CONFIG.url, { useNewUrlParser: true, useUnifiedTopology: true });
      const collection = client.db(DATABASE_CONFIG.dbName).collection(selectedCollection);

      const data = await collection.find(searchCriteria).toArray();
      const txt = `${chalk.blueBright(printTimeLog())} ${chalk.greenBright('module.js')} findToArray method called successfully`;
      console.log(txt);

      return data;
    } catch (error) {
      console.log('backend: FAILED CALL findToArray f in db f, modules.js - ERROR: ', error);
      debug(error);
    } finally {
      await client.close();
    }
  }

  async function createOne(entity){
    console.log('create function of modules -back- was called')
    let client;
    try {
      client = await MongoClient.connect(DATABASE_CONFIG.url, { useNewUrlParser: true, useUnifiedTopology: true });
      const collection = client.db(DATABASE_CONFIG.dbName).collection(selectedCollection);

      console.log('database is being called (insrtOne) with:', entity);
      await collection.insertOne(entity);
      const txt = `${chalk.blueBright(printTimeLog())} ${chalk.greenBright('module.js')} createOne method called successfully`;
      console.log(txt);

      return 'successfully';
    } catch (error) {
      console.log('backend: FAILED CALL create f in db f, modules.js - ERROR: ', error);
      debug(error);
    } finally {
      await client.close();
    }
  }

  async function deleteOne(entity){
    console.log('create function of modules -back- was called')
    let client;
    try {
      client = await MongoClient.connect(DATABASE_CONFIG.url, { useNewUrlParser: true, useUnifiedTopology: true });
      const collection = client.db(DATABASE_CONFIG.dbName).collection(selectedCollection);

      console.log('database is being called (insrtOne) with:', entity);
      await collection.deleteOne(entity);
      const txt = `${chalk.blueBright(printTimeLog())} ${chalk.greenBright('module.js')} deleteOne method called successfully`;
      console.log(txt);

      return 'successfully';
    } catch (error) {
      console.log('backend: FAILED CALL create f in db f, modules.js - ERROR: ', error);
      debug(error);
    } finally {
      await client.close();
    }
  }

  return { findToArray, createOne, deleteOne }
}

module.exports = db;