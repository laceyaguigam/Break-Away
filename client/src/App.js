import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
// import HomePage from "./components/HomePage";
// import ProfilePage from "./components/ProfilePage";
import BreakupArtists from "./components/BreakupArtists";
// import Pricing from "./components/pricing";
// import Reviews from "./components/reviews"

function App() {
  return (
    <Router>
      <div className="main-flex">
        <Navbar />
        <div className="flex-grow">
          <Switch>
            {/* <Route path="/homepage" component={HomePage} /> */}
            {/* <Route path="/profilepage" component={ProfilePage} /> */}
            <Route path="/breakupartists" component={BreakupArtists} />
            {/* <Route path="/pricing" component={Princing} /> */}
            {/* <Route path="/reviews" component={Reviews} /> */}
            {/* <Route path="*" element={<HomePage} /> */}
          </Switch>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
