import React, { useState } from "react";

import cx from "classnames";

import { Link } from "react-router-dom";
import { Hidden, Visible } from "react-grid-system";

import Logo from "../assets/godragons_logo_white_text-2.png";
import "./Header.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BoxedLayout from "../Common/BoxedLayout/BoxedLayout";

import headerData from "../Data/headerData";

function Header() {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  const [
    mobileNavBackgroundIsShowing,
    setMobileNavBackgroundIsShowing,
  ] = useState(false);

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

  function displayMobileMenuItems(level) {
    const elements = level.map((item) => (
      <li key={item.slug}>
        <Link to={`/${item.slug}`}>{item.label}</Link>
      </li>
    ));
    return <ul>{elements}</ul>;
  }

  function displayDesktopHeader() {
    return (
      <div className="desktop-header">
        <div className="logo-container">
          <Link to="/">
            <img className="logo" src={Logo} alt="godragons logo" />
          </Link>
        </div>
        <div className="nav-container" onClick={hideMobileNav}>
          <nav className="main-menu">
            {displayMenuItemsRecursively(headerData)}
          </nav>
        </div>
      </div>
    );
  }

  function displayMobileHeader() {
    return (
      <div className="mobile-header">
        <div className="logo-container">
          <Link to="/">
            <img className="logo" src={Logo} alt="godragons logo" />
          </Link>
        </div>
        <div className="hamburger-icon" onClick={showMobileNav}>
          <FontAwesomeIcon icon="bars" />
        </div>
      </div>
    );
  }

  function hideMobileNav() {
    if (mobileNavIsOpen) {
      setMobileNavIsOpen(false);
      setTimeout(() => {
        setMobileNavBackgroundIsShowing(false);
      }, 200);
    }
  }

  function showMobileNav() {
    setMobileNavBackgroundIsShowing(true);
    setTimeout(() => {
      setMobileNavIsOpen(true);
    }, 400);
  }

  function displayMobileNav() {
    return (
      <>
        <aside
          className={cx("mobile-nav-background-1", {
            visible: mobileNavBackgroundIsShowing,
            hidden: !mobileNavBackgroundIsShowing,
          })}
          onClick={hideMobileNav}
        />
        <aside
          className={cx("mobile-nav-background-2", {
            visible: mobileNavBackgroundIsShowing,
            hidden: !mobileNavBackgroundIsShowing,
          })}
          onClick={hideMobileNav}
        />
        <aside
          className={cx("mobile-nav-background-3", {
            visible: mobileNavBackgroundIsShowing,
            hidden: !mobileNavBackgroundIsShowing,
          })}
          onClick={hideMobileNav}
        />
        <button
          className={cx("mobile-nav-background-close-button", {
            visible: mobileNavBackgroundIsShowing,
            hidden: !mobileNavBackgroundIsShowing,
          })}
          onClick={hideMobileNav}
        >
          <FontAwesomeIcon icon="times" className="icon" color="#fefefe" />
        </button>

        <div
          className={cx("mobile-nav", {
            visible: mobileNavIsOpen,
            hidden: !mobileNavIsOpen,
          })}
          onClick={hideMobileNav}
        >
          <div className="nav-container" onClick={hideMobileNav}>
            <nav className="main-menu">
              {displayMobileMenuItems(headerData)}
            </nav>
          </div>
        </div>
      </>
    );
  }

  return (
    <header>
      <BoxedLayout>
        <Hidden xs sm>
          {displayDesktopHeader()}
        </Hidden>
        <Visible xs sm>
          {displayMobileHeader()}
        </Visible>
      </BoxedLayout>

      {displayMobileNav()}
    </header>
  );
}

export default Header;
