// import React, { useState } from "react";

import React, { useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { CartContext, initialCartState } from "./utils/GlobalState";
import { reducer } from "./utils/reducers";
import Header from "./components/header";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import BreakupArtists from "./components/BreakupArtists";
import Pricing from "./components/pricing";
import Login from "./components/Login";
import Signup from "./components/Signup";

import Home from "./Pages/Home";
import Success from "./Pages/Success";
import OrderHistory from "./Pages/OrderHistory";
import Detail from "./Pages/Detail";
import Cart from "./components/Cart";

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
  const [state, dispatch] = useReducer(reducer, initialCartState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      <ApolloProvider client={client}>
        <Router>
          <div className="main-flex">
            <Header />
            <div className="flex-grow">
              <Switch>
                <Route path="/homepage" component={HomePage} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/success" component={Success} />
                <Route path="/orderhistory" component={OrderHistory} />
                <Route path="/detail" component={Detail} />
                <Route path="/profilepage" component={ProfilePage} />
                <Route path="/breakupartists" component={BreakupArtists} />
                <Route path="/pricing" component={Pricing} />
                <Route path="/home" component={Home} />
                <Route path="/cart" component={Cart} />
                <Route path="*" component={HomePage} />
              </Switch>
            </div>
          </div>
        </Router>
      </ApolloProvider>
    </CartContext.Provider>
  );
}

export default App;
