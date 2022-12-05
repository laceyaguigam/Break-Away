import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./components/HomePage";
// import ProfilePage from "./components/ProfilePage";
import BreakupArtists from "./components/BreakupArtists";
import Pricing from "./components/pricing";
import Reviews from "./components/reviews";
import Success from "./Pages/Success";

function App() {
  return (
    <Router>
      <div className="main-flex">
        <Header />
        <div className="flex-grow">
          <Switch>
            <Route path="/homepage" component={HomePage} />
            {/* <Route path="/profilepage" component={ProfilePage} /> */}
            <Route path="/breakupartists" component={BreakupArtists} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/reviews" component={Reviews} />
            <Route path="*" element={HomePage} />
            <Route path="/success" element={<Success />} />
          </Switch>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
