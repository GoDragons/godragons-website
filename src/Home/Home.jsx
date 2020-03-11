import React from "react";

import { withRouter, Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import Button from "../Common/Button/Button";
import BoxedLayout from "../Common/BoxedLayout/BoxedLayout";
import "./Home.scss";

function Home() {
  return (
    <div className="page-home">
      <div className="hero segment">
        <BoxedLayout>
          <Container>
            <Row align="center">
              <Col sm={6}>
                <h1>Solve real business problems with technology</h1>
                <h4>
                  We turn problems into business opportunities with custom
                  software solutions
                </h4>
                <Link to="/contact">
                  <Button type="primary" label="Get in touch" />
                </Link>
              </Col>
              <Col sm={6}>
                <img
                  className="img-responsive"
                  alt="GoDragons hero (people working on tech)"
                  src="https://godragons-website-assets.s3.eu-west-2.amazonaws.com/godragons-hero.png"
                ></img>
              </Col>
            </Row>
          </Container>
        </BoxedLayout>
      </div>
      <div className="segment">
        <BoxedLayout>
          <Container>
            <Row align="center">
              <Col sm={5}>
                <img
                  className="img-responsive"
                  alt="GoDragons hero (people working on tech)"
                  src="https://godragons-website-assets.s3.eu-west-2.amazonaws.com/godragons-building-blocks.png"
                ></img>
              </Col>
              <Col sm={7}>
                <h2>Who are we?</h2>
                <p>
                  GoDragons is an Agile tech consultancy based in London. We
                  build products, tools and platforms for small to medium-sized
                  companies.
                </p>
                <p>
                  Our experienced team provides an end-to-end service, from
                  requirements and design through to implementation and support.
                </p>
                <p>
                  Fast feedback is essential to success. We hold regular demos
                  with our clients and have a short iteration cycle.
                </p>
                <Link to="/services">
                  <Button type="secondary" label="Find out more"></Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </BoxedLayout>
      </div>
      <div className="purple segment">
        <BoxedLayout>
          <Container>
            <Row>
              <Col sm={4}>
                <h2>Our Services</h2>
              </Col>
              <Col sm={8}>
                <p>
                  From internal dashboards to real-time communication systems,
                  we build reliable, bespoke software solutions.
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm={4}></Col>
              <Col sm={4}></Col>
              <Col sm={4}></Col>
            </Row>
          </Container>
        </BoxedLayout>
      </div>
    </div>
  );
}

export default withRouter(Home);
