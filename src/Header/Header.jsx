import React from "react";

import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header>
      <div className="boxed-layout">
        <div className="logo-container">
          <Link to="/">
            <img
              className="logo"
              src="https://godragons-website-assets.s3.eu-west-2.amazonaws.com/godragons_logo_white_text_low_res.png"
              alt="godragons logo"
            />
          </Link>
        </div>
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
    </header>
  );
}

export default Header;
