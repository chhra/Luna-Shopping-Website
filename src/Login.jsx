import React from "react";
import Iridescence from "./Iridescence.jsx";
import Header from "./Header.jsx";

function Login() {
  return (
    <div className="main">
      <h2>Welcome Back!</h2>
      <form action="">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$"
          title="Password must contain at least one number, one letter, one symbol, and be at least 8 characters long"
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;
