import axios from 'axios';

function api(){

  function getProjectsByUserId(_userId) {
    console.log('%cgetProjects method called', 'color: blue');
    return axios(`http://localhost:3010/api/projects/byUser/${_userId}`)
      .then( data=>{
        console.log('%cDATA from db arrived at front - api', 'color: blue')
        return data;
      })
      .catch(error=>{
        console.log(error);
    });
  }

  return { getProjectsByUserId }
}

export default api;