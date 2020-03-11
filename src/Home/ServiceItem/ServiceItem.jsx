import React from "react";

import { withRouter, Link } from "react-router-dom";
import cx from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ServiceItem.scss";

function ServiceItem({ title, body, icon, link }) {
  const iconClassName = cx(icon);
  return (
    <div className="service-item">
      <h4 className="title">{title}</h4>
      <div className="icon-container">
        <FontAwesomeIcon icon={icon} />
      </div>
      <p>{body}</p>
      <Link to={link}>
        Learn more{" "}
        <i className="fa-long-arrow-alt-right fas button-icon-right"></i>
      </Link>
    </div>
  );
}

export default withRouter(ServiceItem);
