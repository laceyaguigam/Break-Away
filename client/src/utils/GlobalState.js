import React, { createContext, useContext } from "react";
import { QUERY_ALL_PRODUCTS } from "./queries";
import { useProductReducer } from "./reducers";
import { useQuery } from "@apollo/client";

const StoreContext = createContext();
const { Provider } = StoreContext;
export const CartContext = createContext();

export const initialCartState = {
  cart: [],
  cartOpen: false,
};

const StoreProvider = ({ value = [], ...props }) => {
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  console.log("query all products data", data);

  const [state, dispatch] = useProductReducer({
    cart: [],
    cartOpen: false,
    // categories: [],
    // currentCategory: "",
  });

  // use this to confirm it works!
  console.log(state);
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
