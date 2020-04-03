import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./List.scss";

export default function List({
  items,
  icon,
  html = false,
  rich = false,
  ordered = false
}) {
  function displayItems() {
    return items.map((item, index) => {
      let content = null;
      if (html) {
        content = <div>{item}</div>;
      } else {
        let iconElement = null;
        if (icon) {
          iconElement = (
            <FontAwesomeIcon icon={icon} className="icon" color="#fefefe" />
          );
        }
        if (ordered) {
          iconElement = <span className="order">{index + 1}.</span>;
        }

        let labelElement = <p className="label">{item}</p>;
        if (rich) {
          labelElement = (
            <p className="label" dangerouslySetInnerHTML={{ __html: item }} />
          );
        }

        content = (
          <>
            {iconElement}
            {labelElement}
          </>
        );
      }

      return <li key={index}>{content}</li>;
    });
  }

  return <ul className="list">{displayItems()}</ul>;
}
