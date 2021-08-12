import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./projectBudgetsTab.sass";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PropTypes from "prop-types";
import { loadBudgetsByProjectId } from "../../redux/actions/projectActions";
import Spinner from "../common/Spinner.jsx";

function ProjectBudgetTab({ dispatch, userId, budgets, projectId, view }) {
  useEffect(() => {
    if (
      projectId !== undefined &&
      userId !== undefined &&
      Object.keys(budgets).length === 0
    ) {
      dispatch(loadBudgetsByProjectId(projectId, userId));
    }
  }, [userId, projectId]); // eslint-disable-line react-hooks/exhaustive-deps

  return Object.keys(budgets).length === 0 && budgets.constructor === Object ? (
    <Spinner />
  ) : (
    <div className="projectBudgetList__tab">
      <ul>
        {budgets.map((budget, index) => {
          return (
            <li
              key={index}
              onClick={(event) => {
                event.preventDefault();
                view(budget._id);
              }}
            >
              {budget.title}
            </li>
          );
        })}
        <li className="specialRight">
          <ChevronRightIcon />
        </li>
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    budgets: state.project.data,
    userId: state.user.uid,
    projectId: state.project.current._id,
  };
}

ProjectBudgetTab.propTypes = {
  dispatch: PropTypes.any,
  userId: PropTypes.string,
  budgets: PropTypes.any,
  projectId: PropTypes.string,
  view: PropTypes.any,
};

export default connect(mapStateToProps)(ProjectBudgetTab);
