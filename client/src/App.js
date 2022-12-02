import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Navbar";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
