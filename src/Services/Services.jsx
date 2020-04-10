import React from "react";

import { withRouter } from "react-router-dom";

import "./Services.scss";

import BoxedLayout from "../Common/BoxedLayout/BoxedLayout";
import ServicesGrid from "../ServicesGrid/ServicesGrid";

function Services() {
  return (
    <div className="services-page">
      <BoxedLayout>
        <ServicesGrid />
      </BoxedLayout>
    </div>
  );
}

export default withRouter(Services);
