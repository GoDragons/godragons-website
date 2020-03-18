import React from "react";

import cx from "classnames";
import { Row, Col } from "react-grid-system";
import Button from "../../Common/Button/Button";
import Separator from "../../Common/Separator/Separator";

import "./TeamMember.scss";

export default function TeamMember({
  name,
  title,
  bio,
  linkedin,
  photo,
  alternateStyle = false
}) {
  const descriptionElement = (
    <Col sm={8}>
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
  );

  const portraitElement = (
    <Col sm={4}>
      <div className="portrait-container">
        <img src={photo} className="avatar" alt={`Portrait of ${name}`} />
      </div>
    </Col>
  );

  const rowClassName = cx("team-member", {
    regular: !alternateStyle,
    alternate: alternateStyle
  });

  return (
    <Row className={rowClassName} align="center">
      {alternateStyle ? (
        <>
          {descriptionElement} {portraitElement}
        </>
      ) : (
        <>
          {portraitElement}
          {descriptionElement}
        </>
      )}
    </Row>
  );
}
