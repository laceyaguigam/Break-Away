import React from "react";

import Navbar from "./Navbar";

import Logo from "../assets/images/breakaway-logo.png";

function Header() {
  return (
    
    <header className="fixed-header" >
      <div class="custom-shape-divider-top-1670199520"></div>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
        <img src={Logo} height={100} alt="Break Away" />
        <Navbar />
        {/* <h1 className="fixed-site-title">BreakAway</h1> */}
  
    </header>

  );
}
export default Header;

//currently not being called anywhere but I copied the header contents and included it in Navbar.js

//could this be a hero section maybe? wireframe shows a hero div




   
