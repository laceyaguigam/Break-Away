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

//currently not being called anywhere but header is included in the Navbar

//could this be a hero section maybe? wireframe shows a hero div
