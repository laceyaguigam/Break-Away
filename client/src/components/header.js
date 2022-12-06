import React from "react";

import { Link } from "react-router-dom";
import Logo from "../assets/images/breakaway-logo.png";

function Header() {
  return (
    <header className="fixed-header">
      <img src={Logo} height={100} alt="Break Away" />
      <ul>
        <li>
          <Link to="homepage">Home</Link>
        </li>
        <li>
          <Link to="profilepage">Profile Page</Link>
        </li>
        <li>
          <Link to="breakupartists">Breakup Artists</Link>
        </li>
        <li>
          <Link to="pricing">Pricing</Link>
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
