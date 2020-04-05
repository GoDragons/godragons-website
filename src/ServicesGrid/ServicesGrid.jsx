import React from "react";

import { Row, Col, Hidden } from "react-grid-system";

import services from "./servicesData.json";

import ServiceItem from "./ServiceItem/ServiceItem";

import "./ServicesGrid.scss";

export default function ServicesGrid() {
  const columnElements = services.map((service, index) => (
    <Col lg={4} md={6} sm={12} key={index}>
      <ServiceItem {...service} />
    </Col>
  ));

  return (
    <>
      <Row align="center">
        <Col xl={4} lg={5}>
          <h2>Our Services</h2>
        </Col>
        <Col xl={8} lg={7}>
          <h4>
            From internal dashboards to real-time communication systems, we
            build reliable, bespoke software solutions.
          </h4>
        </Col>
      </Row>
      <Hidden md sm xs>
        <br />
        <br />
      </Hidden>
      <Row>{columnElements}</Row>
    </>
  );
}
