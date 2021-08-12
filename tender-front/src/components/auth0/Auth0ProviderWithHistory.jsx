import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import PropTypes from "prop-types";
import CONNECTION_CONFIG from "./CONNECTION_CONFIG";

const Auth0ProviderWithHistory = ({ children }) => {
  const { domain, clientId } = CONNECTION_CONFIG;

  const history = useHistory();

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={`${window.location.origin}/profile`}
      audience={CONNECTION_CONFIG.audience}
      scope={CONNECTION_CONFIG.scope}
      onRedirectCallback={onRedirectCallback}
      useRefreshTokens={true}
    >
      {children}
    </Auth0Provider>
  );
};

Auth0ProviderWithHistory.propTypes = {
  children: PropTypes.any,
};

export default Auth0ProviderWithHistory;
