import { loadBudgetById, saveBudget, deleteBudget } from './budgetActions';
import ACTION_TYPES from './ACTION_TYPES';

describe('API STATUS ACTIONS - REDUX - Test set', () => {

  describe('LOAD BUDGETS BY PROJECT ID method test set', () => {

    it('test', async () => {
      const BUDGET_ID = '5f5692eec76df948689ed9ba';
      const expectedDispatchFirstCall = { type: ACTION_TYPES.API.BEGIN_API_CALL };
      const expectedDispatchSecondCall = { type: ACTION_TYPES.BUDGET.LOAD_BUDGET_SUCCESS };
      const expectedDispatchThirdCall = {
        type: ACTION_TYPES.BUDGET.LOAD_BUDGET,
        payload: { data: 'stuff' }
      }

      const dispatch = jest.fn();
      const returnedFunction = loadBudgetById(BUDGET_ID);
      await returnedFunction(dispatch);

      expect(dispatch.mock.calls[0][0]).toEqual(expectedDispatchFirstCall);
      expect(dispatch.mock.calls[1][0]).toEqual(expectedDispatchSecondCall);
      expect(dispatch.mock.calls[2][0].type).toBe(expectedDispatchThirdCall.type);
    })

  })

  // it('Should return an action type of ERROR_API_CALL when method apiCallError is called', () => {
  //   const testAction = { type: ACTION_TYPES.API.ERROR_API_CALL };

  //   const testResult = saveBudget();

  //   expect(testResult).toEqual(testAction);
  // });

})