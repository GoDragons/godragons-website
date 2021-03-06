import React from "react";

import { withRouter } from "react-router-dom";

import "./Footer.scss";
import FooterWidget from "./FooterWidget/FooterWidget";
import NewsletterForm from "./NewsletterForm/NewsletterForm";
import BoxedLayout from "../Common/BoxedLayout/BoxedLayout";

function Footer() {
  return (
    <footer>
      <BoxedLayout>
        <NewsletterForm />
        <FooterWidget title="GET SUPPORT">
          <p>contact@godragons.com</p>
        </FooterWidget>
        <FooterWidget title="ADDRESS">
          <p>The Hop Exchange</p>
          <p>24 Southwark St</p>
          <p>London SE1 1TY</p>
        </FooterWidget>
      </BoxedLayout>
    </footer>
  );
}

export default withRouter(Footer);
