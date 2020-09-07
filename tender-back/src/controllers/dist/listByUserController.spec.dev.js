"use strict";

var sinon = require('sinon');

var listByUserMethods = require('./listByUserController');

var chai = require('chai');

var sinonChai = require('sinon-chai');

var expect = chai.expect;
chai.use(sinonChai);

var DATABASE_CONFIG = require('../../database/DATABASE_CONFIG');

var db = require('../modules/modules');

describe('TEST SET listByUserController', function () {
  describe('GET LIST BY USER function', function () {
    afterEach(function () {
      sinon.restore();
    });
    it('Callback getListByUser should return 200 status if a valid user id is provided', function () {
      var collection = DATABASE_CONFIG.projectsCollection;
      var req = {
        params: {
          id: '5f4faca78b141a231040efad'
        }
      };
      var res = {
        status: function status(code) {
          code;
        },
        json: function json(something) {
          something;
        },
        send: function send(something) {
          something;
        },
        db: function db(collection) {
          return {
            collection: collection,
            findToArray: function findToArray(query) {
              query;
            }
          };
        }
      };
      var jsonSpy = sinon.spy(res, 'status');
      var methods = listByUserMethods(collection);
      methods.getListByUser(req, res);
      expect(jsonSpy).to.have.been.calledWith(200);
    });
  });
  it('Throw an exception when db call method fails', function () {
    var dbFake = sinon.fake["throws"](new Error());
    sinon.replace(db, 'findToArray', dbFake);
    expect(function () {
      listByUserMethods(DATABASE_CONFIG.projectsCollection).getListByUser().to["throw"]();
    });
  });
});