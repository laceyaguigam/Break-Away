import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed-header">
      <ul className="navbar-list-items">
        <li className="nav-bar-link">
          <Link to="homepage">Home</Link>
        </li>
        <li className="nav-bar-link">
          <Link to="breakupartists">Breakup Artists</Link>
        </li>
        <li className="nav-bar-link">
          <Link to="pricing">Pricing</Link>
        </li>
        <li className="nav-bar-link">
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <h1 className="fixed-site-title">Break Away</h1>
    </header>
  );
}
export default Navbar;
