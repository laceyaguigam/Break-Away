import React from "react";

import { Link } from "react-router-dom";
import Logo from "../assets/images/breakaway-logo.png";

function Header() {
  return (
    <>
      <div className="signup-login-container">
        <ul className="signup-login-buttons">
          <li>
            <Link style={{ textDecoration: "none" }} to="signup">
              Signup
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="login">
              Login
            </Link>
          </li>
        </ul>
      </div>
      <header className="fixed-header">
        <div style={{ width: "100%" }}>
          <div className="logo-navbar">
            <img src={Logo} height={130} alt="Break Away" />
            {/* <br></br> */}
            <ul>
              <li>
                <Link style={{ textDecoration: "none" }} to="homepage">
                  Home
                </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "none" }} to="profilepage">
                  Profile Page
                </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "none" }} to="breakupartists">
                  Breakup Artists
                </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "none" }} to="pricing">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
