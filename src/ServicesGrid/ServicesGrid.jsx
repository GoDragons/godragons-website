import React from "react";

import { Row, Col, Hidden } from "react-grid-system";

import services from "../Data/servicesData";

import ServiceItem from "./ServiceItem/ServiceItem";

import "./ServicesGrid.scss";

export default function ServicesGrid() {
  const columnElements = services.map((service, index) => (
    <Col lg={6} md={6} sm={12} key={index}>
      <ServiceItem {...service} />
    </Col>
  ));

  return (
    <div className="services-grid">
      <Row align="center">
        <Col xl={4} lg={5}>
          <h2 className="title">Our Services</h2>
        </Col>
        <Col xl={8} lg={7}>
          <h4 className="tagline">
            From internal dashboards to real-time communication systems, we
            build reliable, bespoke software solutions.
          </h4>
        </Col>
      </Row>
      <Hidden md sm xs>
        <br />
        <br />
      </Hidden>
      <Row className="actual-grid">{columnElements}</Row>
    </div>
  );
}
