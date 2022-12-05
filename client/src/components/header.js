import React from "react";

import { Link } from "react-router-dom";

import Logo from "../assets/images/breakaway-logo.png";

function Header() {
  return (
    
    <header className="fixed-header" >
      <img src={Logo} height={100} alt="Break Away" />
      <ul>
        <li>
          <Link to="homepage">Home</Link>
        </li>
        <li>
          <Link to="breakupartists">Breakup Artists</Link>
        </li>
        <li>
          <Link to="pricing">Pricing</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      {/* <h1 className="fixed-site-title">BreakAway</h1> */}
    </header>

  );
}
export default Header;

//currently not being called anywhere but I copied the header contents and included it in Navbar.js

//could this be a hero section maybe? wireframe shows a hero div
