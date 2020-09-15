import { 
  getProjectsByUserId, 
  getBudgetsByUserId, 
  getBudgetsByProjectId, 
  getQuotationsByUserId, 
  getQuotationsByBudgetId,
  getProjectBySlug,
  getPortfolioFlowByUserId,
  getProjectFlowByUserId,
  checkIsNewUser
 } from './api';
import axios from 'axios';

jest.mock('axios');
jest.mock('./getHeaders');

describe('API test set', ()=>{

  const ROOT = 'http://localhost:3010/api';

  describe('getProjectsByUserId method test set', () => { 
    
    // afterAll(() => {
    //   jest.restoreAllMocks();
    // });
    
    it('Should call axios with a specific endpoint', async ()=>{
      const USER_ID = '5f4faca78b141a231040efad';
      const ENDPOINT = `${ROOT}/projects/byUser/${USER_ID}`;
      
      axios.get.mockImplementationOnce(() => new Promise((resolve, reject)=>{resolve(DATA)}));
      await getProjectsByUserId(USER_ID);

      expect(axios.get.mock.calls[0][0]).toEqual(ENDPOINT);
    });

    it('Should call axios with a header', async ()=>{
      const USER_ID = '5f4faca78b141a231040efad';
      const DATA = { name: 'some project' };
      
      axios.get.mockImplementationOnce(() => new Promise((resolve, reject)=>{resolve(DATA)}));
      await getProjectsByUserId(USER_ID);

      expect(axios.get.mock.calls[0][1]).toBeTruthy();
    });

    it('Should return data if axios call was successful', async () => {
      const USER_ID = '5f4faca78b141a231040efad';
      const DATA = { name: 'some project' };

      axios.get.mockImplementationOnce(() => new Promise((resolve, reject)=>{resolve(DATA)}));

      const testResult = await getProjectsByUserId(USER_ID);

      expect(testResult).toEqual(DATA);
    });

    it('Should throw an error if axios call was unsuccessful', async () => {
      const USER_ID = '5f4faca78b141a231040efad';
      const ERROR = new Error('Ooops. Something went wrong.');

      axios.get.mockImplementationOnce(() => Promise.reject(ERROR));

      const testResult = await getProjectsByUserId(USER_ID);

      expect(testResult).toEqual(ERROR);
    });

  });

  describe('getProjectBySlug method test set', () => { 
    
    // afterAll(() => {
    //   jest.restoreAllMocks();
    // });
    
    it('Should call axios with a specific endpoint', async ()=>{
      const SLUG = 'house-spanish-wells-bahamas';
      const ENDPOINT = `${ROOT}/projects/bySlug/${SLUG}`;
      
      axios.get.mockImplementationOnce(() => new Promise((resolve, reject)=>{resolve(DATA)}));
      await getProjectBySlug(SLUG);

      expect(axios.get.mock.calls[0][0]).toEqual(ENDPOINT);
    });

    it('Should call axios with a header', async ()=>{
      const SLUG = 'house-spanish-wells-bahamas';
      const DATA = { name: 'some project' };
      
      axios.get.mockImplementationOnce(() => new Promise((resolve, reject)=>{resolve(DATA)}));
      await getProjectBySlug(SLUG);

      expect(axios.get.mock.calls[0][1]).toBeTruthy();
    });

    it('Should return data if axios call was successful', async () => {
      const SLUG = 'house-spanish-wells-bahamas';
      const DATA = { name: 'some project' };

      axios.get.mockImplementationOnce(() => new Promise((resolve, reject)=>{resolve(DATA)}));

      const testResult = await getProjectBySlug(SLUG);

      expect(testResult).toEqual(DATA);
    });

    it('Should throw an error if axios call was unsuccessful', async () => {
      const SLUG = 'house-spanish-wells-bahamas';
      const ERROR = new Error('Ooops. Something went wrong.');

      axios.get.mockImplementationOnce(() => Promise.reject(ERROR));

      const testResult = await getProjectsByUserId(SLUG);

      expect(testResult).toEqual(ERROR);
    });

  });


  describe('getBudgetsByProjectId method test set', () => { 
    
    it('Should call axios with a specific endpoint', async ()=>{
      const ID = '5f4fae868b141a231040efb5';
      const ENDPOINT = `${ROOT}/budgets/byProject/${ID}`;
      
      axios.get.mockImplementationOnce(() => new Promise((resolve, reject)=>{resolve(DATA)}));
      await getBudgetsByProjectId(ID);

      expect(axios.get.mock.calls[0][0]).toEqual(ENDPOINT);
    });

    it('Should call axios with a header', async ()=>{
      const ID = '5f4fae868b141a231040efb5';
      const DATA = { name: 'some project' };
      
      axios.get.mockImplementationOnce(() => new Promise((resolve, reject)=>{resolve(DATA)}));
      await getBudgetsByProjectId(ID);

      expect(axios.get.mock.calls[0][1]).toBeTruthy();
    });

    it('Should return data if axios call was successful', async () => {
      const ID = '5f4fae868b141a231040efb5';
      const DATA = { name: 'some project' };

      axios.get.mockImplementationOnce(() => new Promise((resolve, reject)=>{resolve(DATA)}));

      const testResult = await getBudgetsByProjectId(ID);

      expect(testResult).toEqual(DATA);
    });

    it('Should throw an error if axios call was unsuccessful', async () => {
      const ID = '5f4fae868b141a231040efb5';
      const ERROR = new Error('Ooops. Something went wrong.');

      axios.get.mockImplementationOnce(() => Promise.reject(ERROR));

      const testResult = await getBudgetsByProjectId(ID);

      expect(testResult).toEqual(ERROR);
    });

  });

  describe('getBudgetsByUserId method test set', () => { 
    
    it('Should call axios with a specific endpoint', async ()=>{
      const USER_ID = '5f4faca78b141a231040efad';
      const ENDPOINT = `${ROOT}/budgets/byUser/${USER_ID}`;
      
      axios.get.mockImplementationOnce(() => new Promise((resolve, reject)=>{resolve(DATA)}));
      await getBudgetsByUserId(USER_ID);

      expect(axios.get.mock.calls[0][0]).toEqual(ENDPOINT);
    });

    it('Should call axios with a header', async ()=>{
      const USER_ID = '5f4faca78b141a231040efad';
      const DATA = { name: 'some project' };
      
      axios.get.mockImplementationOnce(() => new Promise((resolve, reject)=>{resolve(DATA)}));
      await getBudgetsByUserId(USER_ID);

      expect(axios.get.mock.calls[0][1]).toBeTruthy();
    });

    it('Should return data if axios call was successful', async () => {
      const USER_ID = '5f4faca78b141a231040efad';
      const DATA = { name: 'some project' };

      axios.get.mockImplementationOnce(() => new Promise((resolve, reject)=>{resolve(DATA)}));

      const testResult = await getBudgetsByUserId(USER_ID);

      expect(testResult).toEqual(DATA);
    });

    it('Should throw an error if axios call was unsuccessful', async () => {
      const USER_ID = '5f4faca78b141a231040efad';
      const ERROR = new Error('Ooops. Something went wrong.');

      axios.get.mockImplementationOnce(() => Promise.reject(ERROR));

      const testResult = await getBudgetsByUserId(USER_ID);

      expect(testResult).toEqual(ERROR);
    });

  });

  describe('getQuotationsByBudgetId method test set', () => { 
    
    it('Should call axios with a specific endpoint', async ()=>{
      const ID = '5f4fae868b141a231040efb5';
      const ENDPOINT = `${ROOT}/quotations/byBudget/${ID}`;
      
      axios.get.mockImplementationOnce(() => new Promise((resolve, reject)=>{resolve(DATA)}));
      await getQuotationsByBudgetId(ID);

      expect(axios.get.mock.calls[0][0]).toEqual(ENDPOINT);
    });

    it('Should call axios with a header', async ()=>{
      const ID = '5f4fae868b141a231040efb5';
      const DATA = { name: 'some project' };
      
      axios.get.mockImplementationOnce(() => new Promise((resolve, reject)=>{resolve(DATA)}));
      await getQuotationsByBudgetId(ID);

      expect(axios.get.mock.calls[0][1]).toBeTruthy();
    });

    it('Should return data if axios call was successful', async () => {
      const ID = '5f4fae868b141a231040efb5';
      const DATA = { name: 'some project' };

      axios.get.mockImplementationOnce(() => new Promise((resolve, reject)=>{resolve(DATA)}));

      const testResult = await getQuotationsByBudgetId(ID);

      expect(testResult).toEqual(DATA);
    });

    it('Should throw an error if axios call was unsuccessful', async () => {
      const ID = '5f4fae868b141a231040efb5';
      const ERROR = new Error('Ooops. Something went wrong.');

      axios.get.mockImplementationOnce(() => Promise.reject(ERROR));

      const testResult = await getQuotationsByBudgetId(ID);

      expect(testResult).toEqual(ERROR);
    });

  });

  describe('getQuotationsByUserId method test set', () => { 
    
    it('Should call axios with a specific endpoint', async ()=>{
      const USER_ID = '5f4faca78b141a231040efad';
      const ENDPOINT = `${ROOT}/quotations/byUser/${USER_ID}`;
      
      axios.get.mockImplementationOnce(() => new Promise((resolve, reject)=>{resolve(DATA)}));
      await getQuotationsByUserId(USER_ID);

      expect(axios.get.mock.calls[0][0]).toEqual(ENDPOINT);
    });

    it('Should call axios with a header', async ()=>{
      const USER_ID = '5f4faca78b141a231040efad';
      const DATA = { name: 'some project' };
      
      axios.get.mockImplementationOnce(() => new Promise((resolve, reject)=>{resolve(DATA)}));
      await getQuotationsByUserId(USER_ID);

      expect(axios.get.mock.calls[0][1]).toBeTruthy();
    });

    it('Should return data if axios call was successful', async () => {
      const USER_ID = '5f4faca78b141a231040efad';
      const DATA = { name: 'some project' };

      axios.get.mockImplementationOnce(() => new Promise((resolve, reject)=>{resolve(DATA)}));

      const testResult = await getQuotationsByUserId(USER_ID);

      expect(testResult).toEqual(DATA);
    });

    it('Should throw an error if axios call was unsuccessful', async () => {
      const USER_ID = '5f4faca78b141a231040efad';
      const ERROR = new Error('Ooops. Something went wrong.');

      axios.get.mockImplementationOnce(() => Promise.reject(ERROR));

      const testResult = await getQuotationsByUserId(USER_ID);

      expect(testResult).toEqual(ERROR);
    });

  });

  describe('checkIsNewUser method test set', () => { 
    
    it('Should call axios with a specific endpoint', async ()=>{
      const USER_ID = '5f4faca78b141a231040efad';
      const ENDPOINT = `${ROOT}/users/${USER_ID}`;
      
      axios.post.mockImplementationOnce(() => new Promise((resolve, reject)=>{resolve(DATA)}));
      await checkIsNewUser(USER_ID);

      expect(axios.get.mock.calls[0][0]).toEqual(ENDPOINT);
    });

    it('Should call axios with a header', async ()=>{
      const USER_ID = '5f4faca78b141a231040efad';
      const DATA = { name: 'some project' };
      
      axios.post.mockImplementationOnce(() => new Promise((resolve, reject)=>{resolve(DATA)}));
      await checkIsNewUser(USER_ID);

      expect(axios.get.mock.calls[0][1]).toBeTruthy();
    });

    it('Should return data if axios call was successful', async () => {
      const USER_ID = '5f4faca78b141a231040efad';
      const DATA = { name: 'some project' };

      axios.post.mockImplementationOnce(() => new Promise((resolve, reject)=>{resolve(DATA)}));

      const testResult = await checkIsNewUser(USER_ID);

      expect(testResult).toEqual(DATA);
    });

    it('Should throw an error if axios call was unsuccessful', async () => {
      const USER_ID = '5f4faca78b141a231040efad';
      const ERROR = new Error('Ooops. Something went wrong.');

      axios.post.mockImplementationOnce(() => Promise.reject(ERROR));

      const testResult = await checkIsNewUser(USER_ID);

      expect(testResult).toEqual(ERROR);
    });

  });

  describe('getPortfolioFlow method test set', () => { 
    
    // afterAll(() => {
    //   jest.restoreAllMocks();
    // });
    
    it('Should call axios with a specific endpoint', async ()=>{
      const USER_ID = '5f4faca78b141a231040efad';
      const ENDPOINT = `${ROOT}/projects/flow/byUser/${USER_ID}`;
      
      axios.get.mockImplementationOnce(() => new Promise((resolve, reject)=>{resolve(DATA)}));
      await getPortfolioFlowByUserId(USER_ID);

      expect(axios.get.mock.calls[0][0]).toEqual(ENDPOINT);
    });

    it('Should call axios with a header', async ()=>{
      const USER_ID = '5f4faca78b141a231040efad';
      const DATA = { name: 'some project' };
      
      axios.get.mockImplementationOnce(() => new Promise((resolve, reject)=>{resolve(DATA)}));
      await getPortfolioFlowByUserId(USER_ID);

      expect(axios.get.mock.calls[0][1]).toBeTruthy();
    });

    it('Should return data if axios call was successful', async () => {
      const USER_ID = '5f4faca78b141a231040efad';
      const DATA = { name: 'some project' };

      axios.get.mockImplementationOnce(() => new Promise((resolve, reject)=>{resolve(DATA)}));

      const testResult = await getPortfolioFlowByUserId(USER_ID);

      expect(testResult).toEqual(DATA);
    });

    it('Should throw an error if axios call was unsuccessful', async () => {
      const USER_ID = '5f4faca78b141a231040efad';
      const ERROR = new Error('Ooops. Something went wrong.');

      axios.get.mockImplementationOnce(() => Promise.reject(ERROR));

      const testResult = await getPortfolioFlowByUserId(USER_ID);

      expect(testResult).toEqual(ERROR);
    });

  });

  describe('getProjectFlow method test set', () => { 
    
    // afterAll(() => {
    //   jest.restoreAllMocks();
    // });
    
    it('Should call axios with a specific endpoint', async ()=>{
      const USER_ID = '5f4faca78b141a231040efad';
      const ENDPOINT = `${ROOT}/projects/flow/byUser/${USER_ID}`;
      
      axios.get.mockImplementationOnce(() => new Promise((resolve, reject)=>{resolve(DATA)}));
      await getProjectFlowByUserId(USER_ID);

      expect(axios.get.mock.calls[0][0]).toEqual(ENDPOINT);
    });

    it('Should call axios with a header', async ()=>{
      const USER_ID = '5f4faca78b141a231040efad';
      const DATA = { name: 'some project' };
      
      axios.get.mockImplementationOnce(() => new Promise((resolve, reject)=>{resolve(DATA)}));
      await getProjectFlowByUserId(USER_ID);

      expect(axios.get.mock.calls[0][1]).toBeTruthy();
    });

    it('Should return data if axios call was successful', async () => {
      const USER_ID = '5f4faca78b141a231040efad';
      const DATA = { name: 'some project' };

      axios.get.mockImplementationOnce(() => new Promise((resolve, reject)=>{resolve(DATA)}));

      const testResult = await getProjectFlowByUserId(USER_ID);

      expect(testResult).toEqual(DATA);
    });

    it('Should throw an error if axios call was unsuccessful', async () => {
      const USER_ID = '5f4faca78b141a231040efad';
      const ERROR = new Error('Ooops. Something went wrong.');

      axios.get.mockImplementationOnce(() => Promise.reject(ERROR));

      const testResult = await getProjectFlowByUserId(USER_ID);

      expect(testResult).toEqual(ERROR);
    });

  });

})