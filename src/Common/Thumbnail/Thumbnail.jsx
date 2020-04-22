import React from "react";

import cx from "classnames";
import { Link } from "react-router-dom";

import "./Thumbnail.scss";

function Thumbnail({ img, title, subtitle, className, to }) {
  let titleElement = null;
  let subtitleElement = null;

  if (title) {
    titleElement = <h2 className="title">{title}</h2>;
  }

  if (subtitle) {
    subtitleElement = <h4 className="subtitle">{subtitle}</h4>;
  }

  return (
    <Link to={to} className={cx("thumbnail-container", className)}>
      <div className="background" style={{ backgroundImage: `url(${img})` }} />

      {titleElement}
      {subtitleElement}
    </Link>
  );
}

export default Thumbnail;
