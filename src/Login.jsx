import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Iridescence from "./Iridescence.jsx";
import Header from "./Header.jsx";
import { useAuth } from "./contexts/AuthContext.jsx";

function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";
      const res = await fetch(`${API_URL}/api/v1/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        login(data.user); // ← store the logged-in user
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
      <h2>Welcome Back!</h2>
      <form onSubmit={handleSubmit}>
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
          required
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;
