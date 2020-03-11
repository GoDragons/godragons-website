import React from "react";

import { withRouter } from "react-router-dom";

import "./FooterWidget.scss";

function FooterWidget({ title, children }) {
  return (
    <div className="footer-widget">
      <h4 className="title">{title}</h4>
      {children}
    </div>
  );
}

export default withRouter(FooterWidget);
