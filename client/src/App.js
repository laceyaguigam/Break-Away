
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Navbar";
// import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header"> */}
        <Nav />
        {/* </header> */}
        <div>
          <Routes></Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
