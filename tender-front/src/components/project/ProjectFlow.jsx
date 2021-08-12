import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CustomTimeLine from "../common/CustomTimeLine.jsx";
import { loadProjectFlowByUserId } from "../../redux/actions/projectActions";
import "./projectFlow.sass";
import Spinner from "../common/Spinner.jsx";
import formatFlow from "../../tools/formatFlow";

function ProjectFlow({ dispatch, flow, userId }) {
  useEffect(() => {
    if (flow === undefined && userId !== undefined) {
      dispatch(loadProjectFlowByUserId(userId));
    }
  }, [userId]); // eslint-disable-line react-hooks/exhaustive-deps

  return flow === undefined ? (
    <Spinner />
  ) : (
    <div className="projectFlow__container">
      <h2>FLOW</h2>
      <CustomTimeLine timeline={flow} />
    </div>
  );
}

function mapStateToProps(state) {
  const formatedData =
    Object.keys(state.project.flow).length === 0 &&
    state.project.flow.constructor === Object
      ? undefined
      : state.project.flow.map((e) => formatFlow(e));

  return {
    flow: formatedData,
    userId: state.user.uid,
  };
}

ProjectFlow.propTypes = {
  dispatch: PropTypes.any,
  flow: PropTypes.any,
  userId: PropTypes.string,
};

export default connect(mapStateToProps)(ProjectFlow);
