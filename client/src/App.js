
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Navbar";
// import Footer from "./components/Footer";

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
