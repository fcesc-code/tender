"use strict";

var sinon = require('sinon');

var db = require('./modules');

var chai = require('chai');

var sinonChai = require('sinon-chai');

var expect = chai.expect;
chai.use(sinonChai);

var DATABASE_CONFIG = require('../../database/DATABASE_CONFIG');

describe('TEST SET modules', function () {
  describe('FIND TO ARRAY - test subset for module method', function () {
    it('Method findToArray should call find method with right query parameters', function () {
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
  });
});