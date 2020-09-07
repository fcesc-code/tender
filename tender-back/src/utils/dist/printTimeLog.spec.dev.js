"use strict";

var sinon = require('sinon');

var printTimeLog = require('./printTimeLog');

var chai = require('chai');

var sinonChai = require('sinon-chai');

var expect = chai.expect;
chai.use(sinonChai);

var DATABASE_CONFIG = require('../../database/DATABASE_CONFIG');

describe('UTILS - test set modules', function () {
  describe('printTimeLog', function () {
    it('Method findToArray should call find method with right query parameters', function () {
      var file = 'stuff.js';
      var method = 'someMethod';
      var expectedRegExp = new RegExp(/^\d{1,2}:\d{1,2}:\d{1,2}:\d{1,3} (stuff.js) (someMethod) (method called successfully)$/);
      var testResult = printTimeLog(file, method);
      expect(testResult).toMatch(expectedRegExp);
    });
  });
});