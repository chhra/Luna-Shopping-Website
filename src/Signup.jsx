import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Iridescence from "./Iridescence.jsx";
import Header from "./Header.jsx";

function Signup() {
  const navigate = useNavigate();

  // state to hold what the user types

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:4000/api/v1/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: first + " " + last, // your backend expects username
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        navigate("/shop"); // success → send them to shop
      } else {
        setError(data.message); // show backend's error
      }
    } catch (err) {
      setError("Something went wrong. Is the server running?");
    }
  };
  return (
    <div className="main">
      <h2>Start Shopping at Luna!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first">First Name:</label>
        <input
          type="text"
          id="first"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          required
        />

        <label htmlFor="last">Last Name:</label>
        <input
          type="text"
          id="last"
          value={last}
          onChange={(e) => setLast(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$"
          title="Password must contain at least one number, one letter, one symbol, and be at least 8 characters long"
          required
        />
        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Signup</button>
      </form>
      <Iridescence />
    </div>
  );
}
export default Signup;
