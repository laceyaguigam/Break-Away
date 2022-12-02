import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Navbar";
import { StoreProvider } from "./utils/GlobalState";
import Footer from "./components/Footer";
import { ApolloProvider } from "@apollo/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          {/* <header className="App-header"> */}
          <StoreProvider>
            <Nav />
            {/* </header> */}
              <Routes>
              <Route 
                  path="/" 
                element={<Home />} 
                />
                <Route 
                  path="/login" 
                element={<Login />}
                />
                <Route 
                  path="/signup" 
                element={<Signup />} 
                />
                <Route 
                  path="/orderHistory" 
                element={<OrderHistory />} 
                />
                <Route 
                  path="/products/:id" 
                element={<Detail />}
                />
                <Route 
                  path="*" 
                element={<NoMatch />}
                />
              </Routes>
            </StoreProvider>
          </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
