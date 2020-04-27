import React from "react";

import { withRouter } from "react-router-dom";
import { Row, Col, Hidden } from "react-grid-system";

import PricingTable from "../Common/PricingTable/PricingTable";
import PageTitle from "../Common/PageTitle/PageTitle";
import Thumbnail from "../Common/Thumbnail/Thumbnail";

import List from "../Common/List/List";
import Button from "../Common/Button/Button";
import BoxedLayout from "../Common/BoxedLayout/BoxedLayout";

import "./IndividualService.scss";

function IndividualService({ service }) {
  function scrollToPricing() {
    document.querySelector(".pricing-table-container").scrollIntoView({
      behavior: "smooth", // smooth scroll
      block: "start", // the upper border of the element will be aligned at the top of the visible part of the window of the scrollable area.
    });
  }

  function displayParagraphs() {
    if (!service.paragraphs) {
      return null;
    }
    return service.paragraphs.map((paragraph, index) => {
      return <p key={index}>{paragraph}</p>;
    });
  }

  function displayCaseStudy() {
    if (!service.caseStudy) {
      return null;
    }

    return (
      <div>
        <BoxedLayout>
          <PageTitle value="Case Study" />
          <Thumbnail {...service.caseStudy} />
          <br />
          <br />
          <br />
        </BoxedLayout>
      </div>
    );
  }

  return (
    <div className="service-page prototyping-page">
      <PageTitle value={service.name} />
      <div className="service-info">
        <BoxedLayout>
          <Row align="center">
            <Col md={7}>
              {displayParagraphs()}
              <List items={service.bulletPoints} icon="asterisk" />
              <Button
                type="secondary"
                label="See prices"
                className="see-prices-button"
                onClick={scrollToPricing}
              />
            </Col>
            <Hidden xs sm>
              <Col md={5} className="illustration-container">
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
      {displayCaseStudy()}
    </div>
  );
}

export default withRouter(IndividualService);
