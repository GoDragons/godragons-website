import React from "react";

import { Link, withRouter } from "react-router-dom";
import { Row, Col, Hidden } from "react-grid-system";

import PricingTable from "../Common/PricingTable/PricingTable";
import PageTitle from "../Common/PageTitle/PageTitle";
import Thumbnail from "../Common/Thumbnail/Thumbnail";

import List from "../Common/List/List";
import Button from "../Common/Button/Button";
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

  const pageTitleProps = {
    value: service.name,
  };
  if (service.tagline) {
    pageTitleProps.tagline = service.tagline;
  }
  return (
    <div className="service-page prototyping-page">
      <PageTitle {...pageTitleProps} />
      <div className="service-info">
        <BoxedLayout>
          <Row align="center">
            <Col md={7}>
              {displayParagraphs()}
              <List items={service.bulletPoints} icon="asterisk" />
              <Link to="/contact">
                <Button
                  type="secondary"
                  label="Book a free consultation"
                  className="see-prices-button"
                />
              </Link>
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
      {displayCaseStudy()}
    </div>
  );
}

export default withRouter(IndividualService);
