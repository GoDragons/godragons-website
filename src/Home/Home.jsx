import React from "react";

import { withRouter, Link } from "react-router-dom";
import { Row, Col, Hidden } from "react-grid-system";

import Button from "../Common/Button/Button";
import BoxedLayout from "../Common/BoxedLayout/BoxedLayout";
import ServicesGrid from "../ServicesGrid/ServicesGrid";
import Thumbnail from "../Common/Thumbnail/Thumbnail";
import PageTitle from "../Common/PageTitle/PageTitle";

import Hero from "../assets/godragons-hero.png";
import GymPhoto from "../assets/godragons-gym-4.jpg";
import Ideation from "../assets/godragons-building-blocks.png";
import "./Home.scss";

function Home() {
  return (
    <div className="page-home">
      <div className="hero segment">
        <BoxedLayout>
          <Row align="end">
            <Col md={7}>
              <h1>Solve real business problems with technology</h1>
              <p className="tagline">
                We turn your problems into business opportunities with tech
                solutions
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
                    src={Hero}
                  />
                </div>
              </Col>
            </Hidden>
          </Row>
        </BoxedLayout>
      </div>
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
                GoDragons is an Agile tech consultancy based in London. We build
                products, tools and platforms for small to medium-sized
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
        </BoxedLayout>
      </div>
      <div className="purple segment">
        <BoxedLayout>
          <ServicesGrid />
        </BoxedLayout>
      </div>

      <div>
        <BoxedLayout>
          <PageTitle value="Case Study" />
          <Thumbnail
            title="HIIT Tribe"
            subtitle="Using software to create a new kind of workout experience"
            img={GymPhoto}
            to="/case-studies/hiit-tribe"
          />
          <br />
          <br />
          <br />
        </BoxedLayout>
      </div>
    </div>
  );
}

export default withRouter(Home);
