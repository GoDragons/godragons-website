import React from "react";

import { withRouter, Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";

import { Hidden } from "react-grid-system";

import Button from "../Common/Button/Button";
import BoxedLayout from "../Common/BoxedLayout/BoxedLayout";
import ServicesGrid from "./ServicesGrid/ServicesGrid";
import Hero from "../assets/godragons-hero.png";
import Ideation from "../assets/godragons-ideation.png";
import "./Home.scss";

function Home() {
  return (
    <div className="page-home">
      <div className="hero segment">
        <BoxedLayout>
          <Container>
            <Row align="center">
              <Col md={7}>
                <h1>Solve real business problems with technology</h1>
                <h4>
                  We turn your problems into business opportunities with tech
                  solutions
                </h4>
                <Link to="/contact">
                  <Button type="primary" label="Get in touch" />
                </Link>
              </Col>
              <Hidden sm xs>
                <Col md={5}>
                  <img
                    className="img-responsive"
                    alt="GoDragons hero (people working on tech)"
                    src={Hero}
                  />
                </Col>
              </Hidden>
            </Row>
          </Container>
        </BoxedLayout>
      </div>
      <div className="segment">
        <BoxedLayout>
          <Container>
            <Row align="center">
              <Hidden sm xs>
                <Col md={5}>
                  <img
                    className="img-responsive"
                    alt="People assembling building blocks"
                    src={Ideation}
                  />
                </Col>
              </Hidden>
              <Col md={7}>
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
              <Col md={4}>
                <h2>Our Services</h2>
              </Col>
              <Col md={8}>
                <p>
                  From internal dashboards to real-time communication systems,
                  we build reliable, bespoke software solutions.
                </p>
              </Col>
            </Row>
            <ServicesGrid />
          </Container>
        </BoxedLayout>
      </div>
    </div>
  );
}

export default withRouter(Home);
