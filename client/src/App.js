import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header"> */}
        <Nav />
        {/* </header> */}
        <div>
          stuff
          {/* <Routes></Routes> */}
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
