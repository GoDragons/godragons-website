import React from "react";

import { withRouter } from "react-router-dom";
import { Row, Col, Hidden } from "react-grid-system";

import PricingTable from "../Common/PricingTable/PricingTable";
import PageTitle from "../Common/PageTitle/PageTitle";
import List from "../Common/List/List";
import BoxedLayout from "../Common/BoxedLayout/BoxedLayout";

import "./IndividualService.scss";

function IndividualService({ service }) {
  function displayParagraphs() {
    if (!service.paragraphs) {
      return null;
    }
    return service.paragraphs.map((paragraph, index) => {
      return <p key={index}>{paragraph}</p>;
    });
  }

  return (
    <div className="service-page prototyping-page">
      <PageTitle value={service.name} />
      <div className="service-info">
        <BoxedLayout>
          <Row align="center">
            <Col md={7}>
              {displayParagraphs()}
              <br />
              <List items={service.bulletPoints} icon="asterisk" />
            </Col>
            <Hidden xs sm>
              <Col md={5}>
                <img
                  src={service.illustration}
                  className="service-illustration"
                  alt="service illustration"
                />
              </Col>
            </Hidden>
          </Row>
        </BoxedLayout>
      </div>
      <div className="pricing-table-container">
        <BoxedLayout>
          <PricingTable items={service.pricing} />
        </BoxedLayout>
      </div>
    </div>
  );
}

export default withRouter(IndividualService);
