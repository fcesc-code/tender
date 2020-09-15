const sinon = require('sinon');
const listByBudgetMethods = require('./listByBudgetController');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
chai.use(sinonChai);
const DATABASE_CONFIG = require('../../database/DATABASE_CONFIG');
const db = require('../modules/modules');

describe('LIST BY USER CONTROLLER test set', ()=>{

  describe('GET LIST BY USER function', ()=>{

    afterEach(()=>{
      sinon.restore();
    });

    it('Callback getListByUser should return 200 status if a valid user id is provided', ()=>{
      const collection = DATABASE_CONFIG.projectsCollection;
      const req = {
        params: {
          id: '5f5692eec76df948689ed9ba'
        }
      }
      const res = {
        status: (code)=>{code},
        json: (something)=>{something},
        send: (something)=>{something},
        db: (collection)=>{
          return {
            collection,
            findToArray: (query)=>{query}
          }
        }
      };

      const jsonSpy = sinon.spy(res, 'status');

      const methods = listByBudgetMethods(collection);
      methods.getListByBudget(req, res);

      expect(jsonSpy).to.have.been.calledWith(200);
    })

  });

  it('Throw an exception when db call method fails', ()=>{
    const dbFake = sinon.fake.throws(new Error);
    sinon.replace(db, 'findToArray', dbFake);

    expect(()=>{listByBudgetMethods(DATABASE_CONFIG.projectsCollection).getListByBudget().to.throw()});
  });

})

