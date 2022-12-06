// import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header";
// import Footer from "./components/footer";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import BreakupArtists from "./components/BreakupArtists";
import Pricing from "./components/pricing";
import Success from "./Pages/Success";
import Login from "./components/Login";
import Signup from "./components/Signup";

import "./App.css";

function App() {
  // const [token, setToken] = useState();
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <Router>
      <div className="main-flex">
        <Header />
        <div className="flex-grow">
          <Switch>
            <Route path="/homepage" component={HomePage} />
            <Route path="/profilepage" component={ProfilePage} />
            <Route path="/breakupartists" component={BreakupArtists} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="*" component={HomePage} />
            <Route path="/success" element={<Success />} />
          </Switch>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
