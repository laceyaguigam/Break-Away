// import React from "react";

// import React, { useState, useEffect } from "react";
// import { LOGIN_USER, ADD_USER } from "../utils/mutations";
// import { useMutation } from "@apollo/client";
// import Auth from "../utils/auth";

// import React, { Component, useState, useEffect } from "react";
// import LoginModal from "react-login-modal";

import React from "react";

function Login() {
  return (
    <div className="signup">
      <form>
        <label for="username"></label>
        <input type="text" id="uname" name="username" placeholder="username" />

        <label for="password"></label>
        <input type="text" id="password" name="email" placeholder="password" />

        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
