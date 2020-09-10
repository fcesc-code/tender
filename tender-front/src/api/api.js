import axios from 'axios';
import getHeaders from './getHeaders';
const ROOT = 'http://localhost:3010/api';

export function getProjectsByUserId(_userId) {
  const headers = getHeaders();
  // console.log('api getProjecstByUserId', headers);
  return axios.get(`${ROOT}/projects/byUser/${_userId}`, { headers } )
    .then( data=>{
      // console.log('%cDATA from db arrived at front @ getProjectsByUserId - api', 'color: blue')
      return data;
    })
    .catch(error=>{
      console.log(error);
      return error;
  });
}

export function getProjectBySlug(slug) {
  const headers = getHeaders();
  console.log('api getProjectBySlug', headers);
  return axios.get(`${ROOT}/projects/bySlug/${slug}`, { headers } )
    .then( data=>{
      console.log('%cDATA from db arrived at front @ getProjectBySlug - api', 'color: blue')
      return data;
    })
    .catch(error=>{
      console.log(error);
      return error;
  });
}

export function getBudgetsByProjectId(_projectId) {
  const headers = getHeaders();
  return axios.get(`${ROOT}/budgets/byProject/${_projectId}`, { headers } )
    .then( data=>{
      console.log('%cDATA from db arrived at front @ getBudgetsByProjectId - api', 'color: blue')
      return data;
    })
    .catch(error=>{
      console.log(error);
      return error;
  });
}

export function getBudgetsByUserId(_userId) {
  const headers = getHeaders();
  return axios.get(`${ROOT}/budgets/byUser/${_userId}`, { headers } )
    .then( data=>{
      console.log('%cDATA from db arrived at front @ getBudgetsByUserId - api', 'color: blue')
      return data;
    })
    .catch(error=>{
      console.log(error);
      return error;
  });
}

export function getQuotationsByUserId(_userId) {
  const headers = getHeaders();
  return axios.get(`${ROOT}/quotations/byUser/${_userId}`, { headers } )
    .then( data=>{
      console.log('%cDATA from db arrived at front @ getQuotationsByUserId - api', 'color: blue')
      return data;
    })
    .catch(error=>{
      console.log(error);
      return error;
  });
}

export function getQuotationsByBudgetId(_budgetId) {
  const headers = getHeaders();
  return axios.get(`${ROOT}/quotations/byBudget/${_budgetId}`, { headers } )
    .then( data=>{
      console.log('%cDATA from db arrived at front @ getQuotationsByBudgetId - api', 'color: blue')
      return data;
    })
    .catch(error=>{
      console.log(error);
      return error;
  });
}

export function checkIsNewUser(user) {
  const headers = getHeaders();
  return axios.post(`${ROOT}/users/${user.sub}`, { user }, { headers } )
  .then( data=>{
    // console.log('%cDATA from db arrived at front from axios result @ checkIsNewUser - api', 'color: blue')
    return data;
  })
  .catch(error=>{
    console.log(error);
    return error;
  });
}

export function getPortfolioFlowByUserId(_userId){
  const headers = getHeaders();
  return axios.get(`${ROOT}/projects/flow/byUser/${_userId}`, { headers } )
    .then( data=>{
      // console.log('%cDATA from db arrived at front @ getPortfolioFlowByUserId - api', 'color: blue')
      return data;
    })
    .catch(error=>{
      console.log(error);
      return error;
  });
}

export function getProjectFlowByUserId(_userId){
  const headers = getHeaders();
  return axios.get(`${ROOT}/budgets/flow/byUser/${_userId}`, { headers } )
    .then( data=>{
      // console.log('%cDATA from db arrived at front @ getProjectFlowByUserId - api', 'color: blue')
      return data;
    })
    .catch(error=>{
      console.log(error);
      return error;
  });
}