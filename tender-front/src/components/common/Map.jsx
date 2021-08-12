import React, { useEffect, useState } from "react";
import "./map.sass";
import PropTypes from "prop-types";
import {
  API_MAPS_EMBED,
  API_MAPS_EMBED_KEY,
} from "../auth0/API_GEOLOCATION_CONFIG";

function Map({ coordinates }) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    function urlBuilder() {
      return `${API_MAPS_EMBED.protocol}${API_MAPS_EMBED.host}${API_MAPS_EMBED.api}${API_MAPS_EMBED.mode}${API_MAPS_EMBED.keyPrefix}${API_MAPS_EMBED_KEY}${API_MAPS_EMBED.queryPrefix}${coordinates}`;
    }

    setUrl(urlBuilder());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <React.Fragment>
      <iframe
        className="iframe__map"
        width="600"
        height="450"
        frameBorder="0"
        src={`${url}`}
        allowFullScreen
        title="MapFrame"
      ></iframe>
    </React.Fragment>
  );
}

Map.propTypes = {
  coordinates: PropTypes.object,
};

export default Map;
