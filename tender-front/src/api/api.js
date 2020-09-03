import axios from 'axios';

function api(){

  function getProjectsByUserId(_userId) {
    axios({
      method: 'get',
      url: `localhost:3010/api/projects/byUser/${_userId}`
      })
      .then( (data)=>{
        return data;
      })
      .catch(error=>{
        console.log(error);
    });
  }

  return { getProjectsByUserId }
}

export default api;