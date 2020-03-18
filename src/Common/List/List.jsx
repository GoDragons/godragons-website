import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./List.scss";

export default function List({ items, icon, html }) {
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
        content = (
          <>
            {iconElement} <span className="label">{item}</span>
          </>
        );
      }

      return <li key={index}>{content}</li>;
    });
  }

  return <ul className="list">{displayItems()}</ul>;
}
