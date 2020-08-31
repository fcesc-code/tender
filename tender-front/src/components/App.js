import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Header from './common/Header';
import Footer from './common/Footer';
import Welcome from './welcome/Welcome';
import Profile from './profile/Profile';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <div className="main">
      <Header />
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/profile' component={Profile} />
          <Route component={PageNotFound} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
