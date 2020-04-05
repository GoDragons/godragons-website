import React from "react";

import "./PricingTable.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";

import List from "../List/List";

function PricingTable({ items }) {
  function displayPrice(item) {
    let currencyLeftElement = null;
    let currencyRightElement = null;
    let priceFrequencyElement = null;

    if (item.currency && item.currencyPosition === "left") {
      currencyLeftElement = item.currency;
    } else if (item.currency && item.currencyPosition === "right") {
      currencyRightElement = item.currency;
    }

    if (item.priceFrequency) {
      priceFrequencyElement = (
        <h4 className="price-frequency">{item.priceFrequency}</h4>
      );
    }

    let priceElement = (
      <h2 className="price">
        {currencyLeftElement}
        {item.priceAmount}
        {currencyRightElement}
      </h2>
    );
    return (
      <>
        {priceElement}
        {priceFrequencyElement}
      </>
    );
  }

  function displayItems() {
    console.log(items);
    if (!items) {
      return null;
    }
    return items.map((item, index) => (
      <li className="item" key={index}>
        <div className="icon-container ">
          {item.icon ? (
            <FontAwesomeIcon
              icon={item.icon}
              className="icon"
              color="#fefefe"
            />
          ) : null}
          {item.image ? <img src={item.image} className="icon" /> : null}
        </div>
        <h5 className="name">{item.name}</h5>
        <List items={item.list} />
        {displayPrice(item)}
      </li>
    ));
  }

  const className = cx("pricing-table", `columns-${items.length}`);

  return (
    <div className="pricing-table-container">
      <ul className={className}>{displayItems()}</ul>
    </div>
  );
}

export default PricingTable;
