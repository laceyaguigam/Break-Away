import React from "react";

import Navbar from "./Navbar";

function Header() {
  return (
    <header className="fixed-header">
      <Navbar />
      <h1 className="fixed-site-title">
        BreakAway
      </h1>
    </header>
  );
}
export default Header;
