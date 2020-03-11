import React from "react";

import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import Button from "../Common/Button/Button";
import BoxedLayout from "../Common/BoxedLayout/BoxedLayout";
import "./Home.scss";

function Home() {
  return (
    <div className="page-home">
      <div className="hero">
        <BoxedLayout>
          <Container>
            <Row>
              <Col sm={6}>
                <h1>Solve real business problems with technology</h1>
                <h4>
                  We turn problems into business opportunities with custom
                  software solutions
                </h4>
                <Button type="primary" label="Get in touch" />
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
    </div>
  );
}

export default withRouter(Home);
