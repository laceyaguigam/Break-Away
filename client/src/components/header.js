import React from "react";

import { Link } from "react-router-dom";
import Logo from "../assets/images/breakaway-logo.png";

function Header() {
  return (
    <header className="fixed-header">
      <img src={Logo} height={130} alt="Break Away" />
      <ul>
        <li>
          <Link style={{textDecoration: "none"}} to="homepage">Home</Link>
        </li>
        <li>
          <Link style={{textDecoration: "none"}} to="profilepage">Profile Page</Link>
        </li>
        <li>
          <Link style={{textDecoration: "none"}} to="breakupartists">Breakup Artists</Link>
        </li>
        <li>
          <Link style={{textDecoration: "none"}} to="pricing">Pricing</Link>
        </li>
      </ul>
      <ul className="flex-row">
        <li className="mx-1">
          <Link to="signup">Signup</Link>
        </li>
        <li className="mx-1">
          <Link to="login">Login</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
