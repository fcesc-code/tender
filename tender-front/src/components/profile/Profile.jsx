import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux';
import CONNECTION_CONFIG from './../../auth0/CONNECTION_CONFIG';
import LogoutButton from './../welcome/LogoutButton';
import { saveCurrentUser, existCurrentUser } from './../../redux/actions/userActions';

const Profile = ( { dispatch } ) => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [ userMetadata, setUserMetadata ] = useState(null);
  
  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = CONNECTION_CONFIG.domain;
  
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });
  
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
  
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        const { user_metadata } = await metadataResponse.json();

        // console.log('%cAQUI METADATA TOKEN - dentro de useEffect', 'color: green', accessToken)
        if(accessToken){
          // console.log('%cha entrado en el if !', 'color: red');
          //console.log('%ccomprobamos accesToken DENTRO del if', 'color: red', accessToken);
          sessionStorage.setItem('USER_TOKEN', JSON.stringify(accessToken));
          dispatch(saveCurrentUser(user.sub));
          dispatch(existCurrentUser(user));
        }
        
        setUserMetadata(user_metadata);
        //console.log('%cAQUI EL USER DE LAS NARICES', 'color: blue', user);
        // console.log('%cAQUI EL USER_ID único', 'color: blue', user.sub);
        
      } catch (error) {
        console.log(error.message);
      }
    };
    
    getUserMetadata();
  });
  
  //console.log('%cAQUI METADATA TOKEN - fuera de useEffect', 'color: green', JSON.parse(sessionStorage.getItem('USER_TOKEN')));


  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <h3>User Metadata</h3>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )}
        <p>User profile dummy page</p>
        <LogoutButton/>
      </div>
    )
  );
};

export default connect()(Profile);
