import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import PortfolioInfo from "./PortfolioInfo.jsx";
import PortfolioFlow from "./PortfolioFlow.jsx";
import PortfolioProjectList from "./PortfolioProjectList.jsx";
import "./portfolio.sass";

function Portfolio() {
  return (
    <div className="portfolio__container">
      <div className="portfolio__side">
        <PortfolioFlow />
      </div>
      <div className="portfolio__main">
        <PortfolioInfo />
        <PortfolioProjectList />
      </div>
    </div>
  );
}

export default withAuthenticationRequired(Portfolio, {
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
