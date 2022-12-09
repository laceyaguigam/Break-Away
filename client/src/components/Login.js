import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

function Login(props) {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [login] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await login({
      variables: {
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.login.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="signup">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username"></label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          onChange={handleChange}
        />

        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="*******"
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
