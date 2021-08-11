import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.sass";
import Header from "./common/Header.jsx";
import Footer from "./common/Footer.jsx";
import Welcome from "./welcome/Welcome.jsx";
import Profile from "./profile/Profile.jsx";
import Portfolio from "./portfolio/Portfolio.jsx";
import Signup from "./signup/Signup.jsx";
import Project from "./project/Project.jsx";
import PageNotFound from "./PageNotFound.jsx";
import PageNotAuthorised from "./PageNotAuthorised.jsx";
import DonutChart from "./graphics/DonutChart.jsx";
import Map from "./common/Map.jsx";

function App() {
  return (
    <>
      <div className="main__container">
        <Header />
      </div>
      <div className="main__container">
        <main>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/login" component={Welcome} />
            <Route path="/profile" component={Profile} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/project/:projectSlug/:budgetId" component={Project} />
            <Route path="/project/:projectSlug" component={Project} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/401" component={PageNotAuthorised} />
            <Route path="/chart" component={DonutChart} />
            <Route path="/map" component={Map} />
            <Route component={PageNotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
