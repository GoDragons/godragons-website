import React from "react";

import { withRouter } from "react-router-dom";
import { Row, Col, Hidden } from "react-grid-system";

import "../ServicesCommon.scss";
import PrototypingImage from "../../assets/godragons-prototyping.jpg";
import { prototyping } from "../servicesData.jsx";

import PricingTable from "../../Common/PricingTable/PricingTable";
import PageTitle from "../../Common/PageTitle/PageTitle";
import List from "../../Common/List/List";
import BoxedLayout from "../../Common/BoxedLayout/BoxedLayout";

function Services() {
  return (
    <div className="service-page prototyping-page">
      <PageTitle value="Prototyping" />
      <div className="service-info">
        <BoxedLayout>
          <Row align="center">
            <Col md={7}>
              {/* <h2 className="service-name">Prototyping</h2> */}
              <p>
                Creating a prototype to validate assumptions is a fast and
                cost-effective strategy to avoid making expensive mistakes.
              </p>
              <p>
                By starting the development process with a prototype, we get
                input from users and stakeholders very early on, which shapes
                the design process. Fast feedback is essential to success.
              </p>
              <List
                items={[
                  "Prototypes usually cost less than 3% of the total project.",
                  "It can range from creating wireframes for use in user and stakeholder interviews to building a dynamic proof of concept.",
                ]}
                icon="bullseye"
              />
            </Col>
            <Hidden xs sm>
              <Col md={5}>
                <img src={PrototypingImage} className="service-illustration" />
              </Col>
            </Hidden>
          </Row>
        </BoxedLayout>
      </div>
      <div className="pricing-table-container">
        <BoxedLayout>
          <PricingTable items={prototyping} />
        </BoxedLayout>
      </div>
    </div>
  );
}

export default withRouter(Services);
