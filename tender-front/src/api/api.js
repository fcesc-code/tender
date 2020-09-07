import axios from 'axios';


function api(){
  console.log('entering api general function - frontend');
  const headers = { Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('USER_TOKEN'))}` };

  function getProjectsByUserId(_userId) {
    //console.log('%cgetProjects method called', 'color: blue');
    //console.log('%cHEADERS ', 'color: red', headers);
    return axios.get(`http://localhost:3010/api/projects/byUser/${_userId}`, { headers } )
      .then( data=>{
        console.log('%cDATA from db arrived at front - api', 'color: blue')
        return data;
      })
      .catch(error=>{
        console.log(error);
    });
  }

  function checkIsNewUser(user) {
    console.log('function check is new user from api - front - was called with:', user, headers);
    return axios.post(`http://localhost:3010/api/users/${user.sub}`, { user }, { headers } )
    .then( data=>{
      console.log('%cDATA from db arrived at front from axios result at checisnewuser, returning - api', 'color: blue')
      return data;
    })
    .catch(error=>{
      console.log(error);
  });
  }

  return { getProjectsByUserId, checkIsNewUser }
}

export default api;