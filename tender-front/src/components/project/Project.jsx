import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";
import ProjectInfo from "./ProjectInfo.jsx";
import ProjectFlow from "./ProjectFlow.jsx";
import ProjectBudgetsTab from "./ProjectBudgetsTab.jsx";
import ProjectBudgetsTabOptions from "./ProjectBudgetsTabOptions.jsx";
import ProjectBudgetBoard from "./ProjectBudgetBoard.jsx";
import ProjectBoard from "./ProjectBoard.jsx";
import { loadProjectBySlug } from "../../redux/actions/projectActions";
import "./project.sass";

function Project({ dispatch, userId }) {
  const urlQuery = useRouteMatch();
  const urlSlug = urlQuery.params.projectSlug;
  const [view, setView] = useState("");

  useEffect(() => {
    if (urlSlug !== undefined) {
      dispatch(loadProjectBySlug(urlSlug, userId));
    }
  }, [urlSlug]); // eslint-disable-line react-hooks/exhaustive-deps

  function renderCurrentTab() {
    if (view === "all") {
      return <ProjectBoard />;
    }
    return <ProjectBudgetBoard view={view} />;
  }

  return (
    <div className="project__container">
      <div className="project__side">
        <ProjectFlow />
      </div>
      <div className="project__main">
        <ProjectInfo />
        <ProjectBudgetsTabOptions
          view={(selectedView) => {
            setView(selectedView);
          }}
        />
        <ProjectBudgetsTab
          view={(selectedView) => {
            setView(selectedView);
          }}
        />
        {renderCurrentTab()}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    userId: state.user.uid,
  };
}

Project.propTypes = {
  dispatch: PropTypes.any,
  userId: PropTypes.string,
};

export default connect(mapStateToProps)(Project);
