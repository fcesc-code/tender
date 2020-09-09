import axios from 'axios';
import getHeaders from './getHeaders';

export function getProjectsByUserId(_userId) {
  const headers = getHeaders();
  // console.log('api getProjecstByUserId', headers);
  return axios.get(`http://localhost:3010/api/projects/byUser/${_userId}`, { headers } )
    .then( data=>{
      // console.log('%cDATA from db arrived at front @ getProjectsByUserId - api', 'color: blue')
      return data;
    })
    .catch(error=>{
      console.log(error);
      return error;
  });
}

export function getBudgetsByProjectId(_projectId) {
  const headers = getHeaders();
  return axios.get(`http://localhost:3010/api/budgets/byProject/${_projectId}`, { headers } )
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
  return axios.get(`http://localhost:3010/api/budgets/byUser/${_userId}`, { headers } )
    .then( data=>{
      console.log('%cDATA from db arrived at front @ getProjectsByUserId - api', 'color: blue')
      return data;
    })
    .catch(error=>{
      console.log(error);
      return error;
  });
}

export function getQuotationsByUserId(_userId) {
  const headers = getHeaders();
  return axios.get(`http://localhost:3010/api/quotations/byUser/${_userId}`, { headers } )
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
  return axios.get(`http://localhost:3010/api/quotations/byBudget/${_budgetId}`, { headers } )
    .then( data=>{
      console.log('%cDATA from db arrived at front @ getBudgetsByBudgetId - api', 'color: blue')
      return data;
    })
    .catch(error=>{
      console.log(error);
      return error;
  });
}

export function checkIsNewUser(user) {
  const headers = getHeaders();
  return axios.post(`http://localhost:3010/api/users/${user.sub}`, { user }, { headers } )
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
  return axios.get(`http://localhost:3010/api/projects/flow/byUser/${_userId}`, { headers } )
    .then( data=>{
      console.log('%cDATA from db arrived at front @ getQuotationsByUserId - api', 'color: blue')
      return data;
    })
    .catch(error=>{
      console.log(error);
      return error;
  });
}

export function getProjectFlowByUserId(_userId){
  const headers = getHeaders();
  return axios.get(`http://localhost:3010/api/budgets/flow/byUser/${_userId}`, { headers } )
    .then( data=>{
      console.log('%cDATA from db arrived at front @ getQuotationsByUserId - api', 'color: blue')
      return data;
    })
    .catch(error=>{
      console.log(error);
      return error;
  });
}