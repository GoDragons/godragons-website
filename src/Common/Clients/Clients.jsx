import React from "react";
import { Row, Col } from "react-grid-system";

import BoxedLayout from "../BoxedLayout/BoxedLayout";
import clientsData from "../../Data/clientsData";

import "./Clients.scss";

export default function Testimonial() {
  const displayClients = clientsData.map((client, index) => {
    return (
      <Col lg={4} md={6} sm={12} key={index}>
        <img alt={client.name} src={client.img} height={client.height}></img>
      </Col>
    );
  });

  return (
    <div className="clients">
      <BoxedLayout>
        <h2 className="title">Some of our clients</h2>
        <Row className="clients-grid">{displayClients}</Row>
      </BoxedLayout>
    </div>
  );
}
