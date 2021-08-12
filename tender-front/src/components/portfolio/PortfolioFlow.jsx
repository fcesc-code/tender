import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CustomTimeLine from "../common/CustomTimeLine.jsx";
import { loadPortfolioFlowByUserId } from "../../redux/actions/portfolioActions";
import "./portfolioFlow.sass";
import Spinner from "../common/Spinner.jsx";
import formatFlow from "../../tools/formatFlow";

function PortfolioFlow({ dispatch, flow, userId }) {
  useEffect(() => {
    if (flow === undefined && userId !== undefined) {
      dispatch(loadPortfolioFlowByUserId(userId));
    }
  }, [userId]); // eslint-disable-line react-hooks/exhaustive-deps

  return flow === undefined ? (
    <Spinner />
  ) : (
    <div className="portfolioFlow__container">
      <h2>FLOW</h2>
      <CustomTimeLine timeline={flow} />
    </div>
  );
}

function mapStateToProps(state) {
  const formatedData =
    Object.keys(state.portfolio.flow).length === 0 &&
    state.portfolio.flow.constructor === Object
      ? undefined
      : state.portfolio.flow.map((e) => formatFlow(e));

  return {
    flow: formatedData,
    userId: state.user.uid,
  };
}

PortfolioFlow.propTypes = {
  dispatch: PropTypes.any,
  flow: PropTypes.any,
  userId: PropTypes.string,
};

export default connect(mapStateToProps)(PortfolioFlow);
