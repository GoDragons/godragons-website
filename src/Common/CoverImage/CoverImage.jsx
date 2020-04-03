import React from "react";

import cx from "classnames";

import "./CoverImage.scss";

function CoverImage({ path, title, subtitle, className }) {
  const style = {
    backgroundImage: `url(${path})`
  };

  let titleElement = null;
  let subtitleElement = null;

  if (title) {
    titleElement = <h1 className="title">{title}</h1>;
  }

  if (subtitle) {
    subtitleElement = <h2 className="subtitle">{subtitle}</h2>;
  }

  return (
    <div className={cx("cover-image-container", className)} style={style}>
      {titleElement}
      {subtitleElement}
    </div>
  );
}

export default CoverImage;
