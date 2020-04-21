import React from "react";

import "./DiscountTag.scss";

export default function DiscountTag({ line1, line2 }) {
  let line1FontSize = "3rem";
  let line2FontSize = "3rem";

  const TAG_WIDTH = 100;

  if (line1) {
    line1FontSize = TAG_WIDTH / line1.length / 13 + "rem";
  }

  if (line2) {
    // line2FontSize = TAG_WIDTH / line2.length / 9 + "rem";
    line2FontSize = "1.38rem";
  }

  return (
    <aside className="discount-tag">
      {line1 ? (
        <span className="line line1" style={{ fontSize: line1FontSize }}>
          {line1}
        </span>
      ) : null}
      {line2 ? (
        <span className="line line2" style={{ fontSize: line2FontSize }}>
          {line2}
        </span>
      ) : null}
    </aside>
  );
}
