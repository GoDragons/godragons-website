import React from "react";

import { Link } from "react-router-dom";
import { Hidden, Visible } from "react-grid-system";
import Logo from "../assets/godragons_logo_white_text-2.png";
import "./Header.scss";

import BoxedLayout from "../Common/BoxedLayout/BoxedLayout";

function Header() {
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
