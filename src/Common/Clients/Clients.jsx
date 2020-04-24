import React from "react";
import { Row, Col } from "react-grid-system";

import BoxedLayout from "../BoxedLayout/BoxedLayout";
import clientsData from "../../Data/clientsData";

import "./Clients.scss";

export default function Testimonial() {
  const displayClients = clientsData.map((client, index) => {
    const className = client.name
      .split("&")
      .join("")
      .split("  ")
      .join(" ")
      .split(" ")
      .join("-")
      .toLowerCase();
    return (
      <Col md={4} sm={6} xs={12} key={index} className="column">
        <img
          className={`logo-${className}`}
          alt={client.name}
          src={client.img}
          height={client.height}
        ></img>
      </Col>
    );
  });

  return (
    <div className="clients">
      <BoxedLayout>
        <h2 className="title">Some of our clients</h2>
        <div className="clients-grid">
          <Row align="center">{displayClients}</Row>
        </div>
      </BoxedLayout>
    </div>
  );
}
