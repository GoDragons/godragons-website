import React, { useState } from "react";

import cx from "classnames";

import { Link } from "react-router-dom";
import { Hidden, Visible } from "react-grid-system";
import Logo from "../assets/godragons_logo_white_text-2.png";
import "./Header.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BoxedLayout from "../Common/BoxedLayout/BoxedLayout";

function Header() {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  const [
    mobileNavBackgroundIsShowing,
    setMobileNavBackgroundIsShowing
  ] = useState(false);

  function displayDesktopHeader() {
    return (
      <div className="desktop-header">
        <div className="logo-container">
          <Link to="/">
            <img className="logo" src={Logo} alt="godragons logo" />
          </Link>
        </div>
        {displayNav()}
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
        <div className="hamburger-icon" onClick={toggleMobileNav}>
          <FontAwesomeIcon icon="bars" />
        </div>
      </div>
    );
  }

  function toggleMobileNav() {
    if (mobileNavIsOpen) {
      hideMobileNav();
    } else {
      showMobileNav();
    }
  }

  function hideMobileNav() {
    if (mobileNavIsOpen) {
      setMobileNavIsOpen(false);
      setTimeout(() => {
        setMobileNavBackgroundIsShowing(false);
      }, 500);
    }
  }

  function showMobileNav() {
    setMobileNavBackgroundIsShowing(true);
    setTimeout(() => {
      setMobileNavIsOpen(true);
    }, 500);
  }

  function displayNav() {
    return (
      <div className="nav-container" onClick={hideMobileNav}>
        <nav className="main-menu">
          <ul>
            <li>
              <Link to="/case-studies">Case Studies</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
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
      <aside
        className={cx("mobile-nav-background-1", {
          visible: mobileNavBackgroundIsShowing,
          hidden: !mobileNavBackgroundIsShowing
        })}
        onClick={hideMobileNav}
      />
      <aside
        className={cx("mobile-nav-background-2", {
          visible: mobileNavBackgroundIsShowing,
          hidden: !mobileNavBackgroundIsShowing
        })}
        onClick={hideMobileNav}
      />
      <aside
        className={cx("mobile-nav-background-3", {
          visible: mobileNavBackgroundIsShowing,
          hidden: !mobileNavBackgroundIsShowing
        })}
        onClick={hideMobileNav}
      />
      <div
        className={cx("mobile-nav", {
          visible: mobileNavIsOpen,
          hidden: !mobileNavIsOpen
        })}
        onClick={hideMobileNav}
      >
        {displayNav()}
      </div>
    </header>
  );
}

export default Header;
