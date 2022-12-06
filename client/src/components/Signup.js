import React from "react";

function Signup() {
  return (
    <section>
      <div className="signup">
        <form>
          <label for="name"></label>
          <input type="text" id="name" name="name" placeholder="name" />

          <label for="email"></label>
          <input type="text" id="email" name="email" placeholder="email" />

          <label for="username"></label>
          <input
            type="text"
            id="uname"
            name="username"
            placeholder="username"
          />

          <label for="password"></label>
          <input
            type="text"
            id="password"
            name="email"
            placeholder="password"
          />

          <input type="submit" value="Signup" />
        </form>
      </div>
    </section>
  );
}

export default Signup;
