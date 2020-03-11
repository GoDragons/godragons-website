import React from "react";

import { withRouter, Link } from "react-router-dom";
import cx from "classnames";

import "./ServiceItem.scss";

function ServiceItem({ title, body, icon, link }) {
  const iconClassName = cx(icon, "fontawesome-icon", "circle-yes", "far");
  return (
    <div className="service-item">
      <h4 className="title">{title}</h4>
      <div className="align-right">
        <i
          className={iconClassName}
          style="border-color:rgba(255,255,255,0);background-color:rgba(65,47,205,0.8);font-size:26.4px;line-height:52.8px;height:52.8px;width:52.8px;margin-left:15px;color:#ffffff;"
        />
      </div>
      <p>{body}</p>
      <Link to={link}>
        Learn more <i class="fa-long-arrow-alt-right fas button-icon-right"></i>
      </Link>
      <div className="align-right">
        <i
          className={iconClassName}
          style="border-color:rgba(255,255,255,0);background-color:rgba(65,47,205,0.8);font-size:26.4px;line-height:52.8px;height:52.8px;width:52.8px;margin-left:15px;color:#ffffff;"
        />
      </div>
      <p>{body}</p>
      <Link to={link}>
        Learn more <i class="fa-long-arrow-alt-right fas button-icon-right"></i>
      </Link>
    </div>
  );
}

export default withRouter(ServiceItem);
