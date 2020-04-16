import React from "react";

import BoxedLayout from "../Common/BoxedLayout/BoxedLayout";
import { Link } from "react-router-dom";
import { Row, Col, Hidden } from "react-grid-system";
import Ideation from "../assets/godragons-building-blocks.png";
import Button from "../Common/Button/Button";

export default function WhoAreWe() {
  return (
    <div className="segment">
      <BoxedLayout>
        <Row align="center" gutterWidth={50}>
          <Hidden sm xs>
            <Col md={5}>
              <img alt="People assembling building blocks" src={Ideation} />
            </Col>
          </Hidden>
          <Col md={7}>
            <h2>Who are we?</h2>
            <p>
              GoDragons is an Agile software house based in London. We build
              products, tools and platforms for small to medium-sized companies.
            </p>
            <p>
              Our experienced team provides an end-to-end service, from
              requirements and design through to implementation and support.
            </p>
            <p>
              Fast feedback is essential to success. We hold regular demos with
              our clients and have a short iteration cycle.
            </p>
            <Link to="/services">
              <Button type="secondary" label="Find out more"></Button>
            </Link>
          </Col>
        </Row>
      </BoxedLayout>
    </div>
  );
}
