import React from "react";

import { Row, Col } from "react-grid-system";

import services from "./servicesData.json";

import ServiceItem from "./ServiceItem/ServiceItem";

import "./ServicesGrid.scss";

export default function ServicesGrid() {
  const columnElements = services.map((service, index) => (
    <Col lg={4} md={6} sm={12} key={index}>
      <ServiceItem {...service} />
    </Col>
  ));

  return <Row>{columnElements}</Row>;
}
