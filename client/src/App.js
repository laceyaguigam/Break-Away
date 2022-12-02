import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "./components/header";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import BreakupArtists from "./components/breakup-artists";

function App() {
  return (
    <Router>
      <div className="main-flex">
        <Navbar />
        <div className="flex-grow">
          <Switch>
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/profilepage" element={<ProfilePage />} />
            <Route path="/breakupartists" element={<BreakupArtists />} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
