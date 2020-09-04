import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import CONNECTION_CONFIG from './auth0/CONNECTION_CONFIG';
import { Auth0Provider } from "@auth0/auth0-react";

export const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={CONNECTION_CONFIG.domain}
      clientId={CONNECTION_CONFIG.clientId}
      redirectUri={window.location.origin}
      audience={CONNECTION_CONFIG.audience}
      scope={CONNECTION_CONFIG.scope}
      useRefreshTokens={true}
    >
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
