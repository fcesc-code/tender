import React from "react";
import PropTypes from "prop-types";
import "./notifier.sass";
import { Link } from "react-router-dom";

function UpdatesListItem({ item }) {
  return (
    <div className="notifier__updatesListItem">
      <Link to={`${item.root}${item.slug}`}>{item.title}</Link>
    </div>
  );
}

UpdatesListItem.propTypes = {
  item: PropTypes.any,
};

export default UpdatesListItem;
