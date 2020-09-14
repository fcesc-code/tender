import React, { useEffect, useState } from 'react';
import './map.sass';
import { API_MAPS_EMBED, API_MAPS_EMBED_KEY } from './../../auth0/API_GEOLOCATION_CONFIG';

function Map( ) {
  const [ url, setUrl ] = useState('');

  const latitude = 46.618097;
  const longitude = 9.1756607;
  const COORDINATES = `${latitude},${longitude}`;

  function urlBuilder(){
    return `${API_MAPS_EMBED.protocol}${API_MAPS_EMBED.host}${API_MAPS_EMBED.api}${API_MAPS_EMBED.mode}${API_MAPS_EMBED.keyPrefix}${API_MAPS_EMBED_KEY}${API_MAPS_EMBED.queryPrefix}${COORDINATES}`;
  }

  useEffect(() => {
    setUrl(urlBuilder());
  }, [])

  return (
    <React.Fragment>
      <iframe className="iframe__map" width="600" height="450" frameBorder="0" src={`${url}`} allowFullScreen></iframe>
    </React.Fragment>
  )
}

export default Map;