import React from "react";

import BoxedLayout from "../Common/BoxedLayout/BoxedLayout";
import { Row, Col, Hidden } from "react-grid-system";
import { Link } from "react-router-dom";

import Button from "../Common/Button/Button";
import HeroImage from "../assets/godragons-hero.png";

export default function Hero() {
  return (
    <div className="hero segment">
      <BoxedLayout>
        <Row align="end">
          <Col md={7}>
            <h1>Solve real business problems with technology</h1>
            <p className="tagline">
              We build apps and platforms in AWS and Google Cloud using React,
              Node.js and Go
            </p>
            <Link to="/contact">
              <Button type="primary" label="Get in touch" />
            </Link>
          </Col>
          <Hidden sm xs>
            <Col md={5}>
              <div className="illustration-container">
                <img
                  alt="GoDragons hero (people working on tech)"
                  src={HeroImage}
                />
              </div>
            </Col>
          </Hidden>
        </Row>
      </BoxedLayout>
    </div>
  );
}
