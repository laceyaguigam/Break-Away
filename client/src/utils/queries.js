import { gql } from "@apollo/client";

//query products
export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      category {
        _id
      }
    }
  }
`;

export const GET_PRODUCT_BY_NAME = gql`
  query ProductByName($name: String) {
    productByName(name: $name) {
      _id
      name
      description
      price
      category {
        _id
      }
    }
  }
`;

//query checkout
export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

//query all products
export const QUERY_ALL_PRODUCTS = gql`
  query getAllProducts {
    products {
      _id
      name
      description
      price
      category {
        name
      }
    }
  }
`;

//query categories
export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

//query user
export const QUERY_USER = gql`
  {
    user {
      _id
      username
      email
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
        }
      }
    }
  }
`;
