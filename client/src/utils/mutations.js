import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $name: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      name: $name
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const HIRE_PRODUCTS = gql`
  mutation hireProduct($category: ID) {
    product(category: $category) {
      _id
      name
      description
      price
      quantity
      category {
        _id
      }
    }
  }
`;

export const HIRE_CHECKOUT = gql`
  mutation hireCheckout($product: [ID]!) {
    checkout(product: $product) {
      session
    }
  }
`;