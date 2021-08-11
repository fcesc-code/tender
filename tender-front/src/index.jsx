import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Provider } from "react-redux";
// eslint-disable-next-line
import App from "./components/App.jsx";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./redux/configureStore";
import Auth0ProviderWithHistory from "./components/auth0/Auth0ProviderWithHistory.jsx";
import REDUCERS_INITIAL_STATE from "./redux/reducers/REDUCERS_INITIAL_STATE";

const store = configureStore(REDUCERS_INITIAL_STATE);
export default store;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
