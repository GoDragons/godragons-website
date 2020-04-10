import React from "react";

import { Link } from "react-router-dom";
import { Hidden, Visible } from "react-grid-system";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../assets/godragons_logo_white_text-2.png";
import "./Header.scss";

import BoxedLayout from "../Common/BoxedLayout/BoxedLayout";

import headerData from "../Data/headerData";

function Header() {
  function displayChildren(item) {
    if (!item.children) {
      return null;
    }
    return displayMenuItemsRecursively(item.children);
  }

  function displayLabel(item) {
    if (!item.children) {
      return item.label;
    }

    return (
      <>
        {item.label}
        <FontAwesomeIcon icon="angle-down" className="has-children-icon" />
      </>
    );
  }

  function displayMenuItemsRecursively(level) {
    const elements = level.map((item) => (
      <li key={item.slug}>
        <Link to={`/${item.slug}`}>{displayLabel(item)}</Link>
        {displayChildren(item)}
      </li>
    ));
    return <ul>{elements}</ul>;
  }

  function displayDesktopNav() {
    return (
      <>
        <div className="logo-container">
          <Link to="/">
            <img className="logo" src={Logo} alt="godragons logo" />
          </Link>
        </div>
        <div className="nav-container">
          <nav className="main-menu">
            {displayMenuItemsRecursively(headerData)}
          </nav>
        </div>
      </>
    );
  }

  function displayMobileNav() {
    return (
      <>
        <div className="logo-container">
          <Link to="/">
            <img className="logo" src={Logo} alt="godragons logo" />
          </Link>
        </div>
      </>
    );
  }

  return (
    <header>
      <BoxedLayout>
        <Hidden xs sm>
          {displayDesktopNav()}
        </Hidden>
        <Visible xs sm>
          {displayMobileNav()}
        </Visible>
      </BoxedLayout>
    </header>
  );
}

export default Header;
