import React from "react";

import { withRouter } from "react-router-dom";

import "./Footer.scss";
import { Container, Row, Col } from "react-grid-system";
import FooterWidget from "./FooterWidget/FooterWidget";
import NewsletterForm from "./NewsletterForm/NewsletterForm";
import BoxedLayout from "../Common/BoxedLayout/BoxedLayout";

function Footer() {
  return (
    <footer>
      <BoxedLayout>
        <Container />
        <Row>
          <Col xs={12}>
            <NewsletterForm />
            <FooterWidget title="GET SUPPORT">
              <p>contact@godragons.com</p>
            </FooterWidget>
            <FooterWidget title="ADDRESS">
              <p>The Hop Exchange</p>
              <p>24 Southwark St</p>
              <p>London SE1 1TY</p>
            </FooterWidget>
          </Col>
        </Row>
        <Container />
      </BoxedLayout>
    </footer>
  );
}

export default withRouter(Footer);
