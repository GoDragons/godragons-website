import React from "react";

import { withRouter, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ServiceItem.scss";

function ServiceItem({ name, description, icon, slug }) {
  return (
    <Link className="service-item" to={`/services/${slug}`}>
      <h4 className="name">{name}</h4>
      <div className="icon-container">
        <FontAwesomeIcon icon={icon} className="icon" />
      </div>
      <p className="description">{description}</p>
      <p className="learn-more">
        Learn More <FontAwesomeIcon icon="angle-right" className="icon" />
      </p>
    </Link>
  );
}

export default withRouter(ServiceItem);
