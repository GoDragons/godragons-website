import React from "react";

import { withRouter } from "react-router-dom";
import { Row, Col, Hidden } from "react-grid-system";

import PricingTable from "../Common/PricingTable/PricingTable";
import PageTitle from "../Common/PageTitle/PageTitle";
import List from "../Common/List/List";
import BoxedLayout from "../Common/BoxedLayout/BoxedLayout";

import "./IndividualService.scss";

function IndividualService({ serviceData }) {
  function displayParagraphs() {
    if (!serviceData.paragraphs) {
      return null;
    }
    return serviceData.paragraphs.map((paragraph, index) => {
      console.log("paragraph = ", paragraph);
      return <p key={index}>{paragraph}</p>;
    });
  }

  return (
    <div className="service-page prototyping-page">
      <PageTitle value={serviceData.name} />
      <div className="service-info">
        <BoxedLayout>
          <Row align="center">
            <Col md={7}>
              {displayParagraphs()}
              <br />
              <List items={serviceData.bulletPoints} icon="asterisk" />
            </Col>
            <Hidden xs sm>
              <Col md={5}>
                <img
                  src={serviceData.illustration}
                  className="service-illustration"
                />
              </Col>
            </Hidden>
          </Row>
        </BoxedLayout>
      </div>
      <div className="pricing-table-container">
        <BoxedLayout>
          <PricingTable items={serviceData.pricing} />
        </BoxedLayout>
      </div>
    </div>
  );
}

export default withRouter(IndividualService);
