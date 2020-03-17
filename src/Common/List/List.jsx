import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./List.scss";

export default function List({ items, icon }) {
  function displayItems() {
    return items.map((item, index) => (
      <li key={index}>
        {icon ? (
          <FontAwesomeIcon icon={icon} className="icon" color="#fefefe" />
        ) : null}
        <span className="label">{item}</span>
      </li>
    ));
  }

  return <ul className="list">{displayItems()}</ul>;
}
