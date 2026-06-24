import React, { useState } from "react";

import { useProductsContext } from "./contexts/ProductsContext.jsx";
function Validation() {
  const { cart } = useProductsContext();
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    address: "",
  });
  const [status, setStatus] = useState("");
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("http://localhost:4000/api/v1/users/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form, // the customer's contact info
          items: cart, // ← the clothes they're buying
        }),
      });
      if (res.ok) {
        setStatus("Order confirmed! We'll be in touch.");
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("Something went wrong. Is the server running?");
    }
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <h2>By entering your details,</h2>
        <h2>
          you are confirming your purchase with <b>Yalidine</b>
        </h2>
        <img src="/images/yalidine-logo.png" alt="Yalidine" />

        <label htmlFor="first">First Name:</label>
        <input
          type="text"
          id="first"
          value={form.first}
          onChange={handleChange}
          required
        />

        <label htmlFor="last">Last Name:</label>
        <input
          type="text"
          id="last"
          value={form.last}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={form.address}
          onChange={handleChange}
          required
        />

        {status && <p>{status}</p>}
        <button type="submit">Confirm Order</button>
      </form>
    </div>
  );
}
export default Validation;
