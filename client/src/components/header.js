import React from "react";

import Navbar from "./Navbar";

function Header() {
  return (
    <header className="fixed-header">
      <Navbar />
      <h1 className="fixed-site-title">BreakAway</h1>
    </header>
  );
}
export default Header;

//currently not being called anywhere but I copied the header contents and included it in Navbar.js

//could this be a hero section maybe? wireframe shows a hero div
