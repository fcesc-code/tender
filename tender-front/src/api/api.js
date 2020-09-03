import axios from 'axios';

function api(){

  function getProjectsByUserId(_userId) {
    console.log('getProjects called');
    axios({
      method: 'GET',
      url: `http://localhost:3010/api/projects/byUser/${_userId}`
      })
      .then( data=>{
        console.log('DATA from db arrived at front - api')
        return data;
      })
      .catch(error=>{
        console.log(error);
    });
  }

  return { getProjectsByUserId }
}

export default api;