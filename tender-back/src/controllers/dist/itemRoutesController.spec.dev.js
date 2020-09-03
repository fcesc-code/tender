"use strict";

var sinon = require('sinon');

var itemMethods = require('./itemRoutesController');

var chai = require('chai');

var sinonChai = require('sinon-chai');

var expect = chai.expect;
chai.use(sinonChai);

var DATABASE_CONFIG = require('../../database/DATABASE_CONFIG');

describe('TEST SET itemRoutesController', function () {
  describe('READ ONE - test subset for router callback', function () {
    it('Callback readOne should call res.json with one item', function () {
      var collection = DATABASE_CONFIG.projectsCollection;
      var req = {
        data: {
          name: 'testPropertyValue',
          id: 3
        }
      };
      var res = {
        status: function status() {},
        json: function foo(something) {
          something;
        }
      };
      var jsonSpy = sinon.spy(res, 'json');
      var methods = itemMethods(collection);
      methods.readOne(req, res);
      expect(jsonSpy).to.have.been.calledWith(req.data);
    });
    it('Callback readOne should return status 200 if there is an item', function () {
      var collection = DATABASE_CONFIG.projectsCollection;
      var req = {
        data: {
          name: 'testPropertyValue',
          id: 3
        }
      };
      var res = {
        status: function foo(code) {
          code;
        },
        json: function json() {}
      };
      var statusSpy = sinon.spy(res, 'status');
      var methods = itemMethods(collection);
      methods.readOne(req, res);
      expect(statusSpy).to.have.been.calledWith(200);
    });
  });
});