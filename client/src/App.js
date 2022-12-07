// import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

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

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // const [token, setToken] = useState();
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <ApolloProvider client={client}>
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
              <Route path="/success" component={<Success />} />
            </Switch>
          </div>
          {/* <Footer /> */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
