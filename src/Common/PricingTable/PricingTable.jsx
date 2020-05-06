import React from "react";

import "./PricingTable.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";

import List from "../List/List";
// import PageTitle from "../PageTitle/PageTitle";
import DiscountTag from "../DiscountTag/DiscountTag";

function PricingTable({ items }) {
  function displayPrice(item) {
    let priceFrequencyElement = null;

    if (item.priceFrequency) {
      priceFrequencyElement = (
        <h4 className="price-frequency">{item.priceFrequency}</h4>
      );
    }

    let priceElement = (
      <div className="price-container">
        <h2 className={cx("price", { "old-price": item.discount })}>
          {item.price}
        </h2>
      </div>
    );
    let newPriceElement;
    if (item.discount) {
      newPriceElement = (
        <div className="new-price-container">
          <h2 className="new-price">{item.discount.newPrice}</h2>
        </div>
      );
    }
    return (
      <>
        {priceElement}
        {newPriceElement}
        {priceFrequencyElement}
      </>
    );
  }

  function displayDiscountTag(item) {
    if (item.discount) {
      return (
        <DiscountTag line1={item.discount.line1} line2={item.discount.line2} />
      );
    }
  }

  function displayItems() {
    if (!items) {
      return null;
    }
    return items.map((item, index) => (
      <li className="item" key={index}>
        {/* {displayDiscountTag(item)} */}
        <div className="icon-container ">
          {item.icon ? (
            <FontAwesomeIcon
              icon={item.icon}
              className="icon"
              color="#fefefe"
            />
          ) : null}
          {item.image ? (
            <img src={item.image} className="icon" alt="item icon" />
          ) : null}
        </div>
        <h5 className="name">{item.name}</h5>
        <List items={item.list} />
        {/* {displayPrice(item)} */}
      </li>
    ));
  }

  const className = cx("pricing-table", `columns-${items.length}`);

  return (
    <div className="pricing-table-container">
      {/* <PageTitle value="Pricing" color="light" /> */}
      <ul className={className}>{displayItems()}</ul>
    </div>
  );
}

export default PricingTable;
