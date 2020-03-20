import React from "react";

import "./PageTitle.scss";

export default function PageTitle({ value, tagline }) {
  return (
    <div className="page-title-container">
      <h1 className="title">{value}</h1>
      {tagline ? <h4 className="tagline">{tagline}</h4> : null}
    </div>
  );
}
