import React from "react";

import { Row, Col } from "react-grid-system";
import Button from "../../Common/Button/Button";
import Separator from "../../Common/Separator/Separator";

import "./TeamMember.scss";

export default function TeamMember({ name, title, bio, linkedin, photo }) {
  return (
    <Row className="team-member" align="center">
      <Col sm={7}>
        <h3 className="name">{name}</h3>
        <h5 className="title">{title}</h5>
        <Separator />
        <p
          className="bio"
          dangerouslySetInnerHTML={{
            __html: bio
          }}
        />

        <a href={linkedin}>
          <Button
            type="primary"
            label="in"
            backgroundColor="red"
            className="linkedin"
          />
        </a>
      </Col>
      <Col sm={5}>
        <img
          src={photo}
          className="img-responsive avatar"
          alt={`Portrait of ${name}`}
        />
      </Col>
    </Row>
  );
}
