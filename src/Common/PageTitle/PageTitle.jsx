import React from "react";

import "./PageTitle.scss";
import cx from "classnames";

import BoxedLayout from "../BoxedLayout/BoxedLayout";

export default function PageTitle({ value, tagline, color }) {
  return (
    <BoxedLayout>
      <div className={cx("page-title-container", color)}>
        <h1 className="title">{value}</h1>
        {tagline ? <h4 className="tagline">{tagline}</h4> : null}
      </div>
    </BoxedLayout>
  );
}
