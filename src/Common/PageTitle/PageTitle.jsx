import React from "react";

import "./PageTitle.scss";

import BoxedLayout from "../BoxedLayout/BoxedLayout";

export default function PageTitle({ value, tagline }) {
  return (
    <BoxedLayout>
      <div className="page-title-container">
        <h1 className="title">{value}</h1>
        {tagline ? <h4 className="tagline">{tagline}</h4> : null}
      </div>
    </BoxedLayout>
  );
}
