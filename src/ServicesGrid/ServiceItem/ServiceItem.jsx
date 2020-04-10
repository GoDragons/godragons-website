import React from "react";

import { withRouter, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ServiceItem.scss";

function ServiceItem({ name, description, icon, slug }) {
  return (
    <div className="service-item">
      <h4 className="name">{name}</h4>
      <div className="icon-container">
        <FontAwesomeIcon icon={icon} />
      </div>
      <p className="description">{description}</p>
      <Link to={`/services/${slug}`}>
        Learn more <FontAwesomeIcon icon="angle-right" />
      </Link>
    </div>
  );
}

export default withRouter(ServiceItem);
