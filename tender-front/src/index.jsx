import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';

export const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
