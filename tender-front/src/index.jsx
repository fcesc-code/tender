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
import REDUCERS_INITIAL_STATE from './redux/reducers/REDUCERS_INITIAL_STATE';

export const store = configureStore(REDUCERS_INITIAL_STATE);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain={CONNECTION_CONFIG.domain}
        clientId={CONNECTION_CONFIG.clientId}
        redirectUri={`${window.location.origin}/profile`}
        audience={CONNECTION_CONFIG.audience}
        scope={CONNECTION_CONFIG.scope}
        useRefreshTokens={true}
      >
        <Router>
          <App />
        </Router>
      </Auth0Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
