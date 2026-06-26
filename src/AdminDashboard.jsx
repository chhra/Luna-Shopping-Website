import React, { useState } from "react";
import { useAuth } from "./contexts/AuthContext";
import { useProductsContext } from "./contexts/ProductsContext";

function AdminDashboard() {
  const { products, setProducts } = useProductsContext();

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
  });
  const [status, setStatus] = useState("");
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Adding...");
    try {
      const token = localStorage.getItem("token");
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";
      const res = await fetch(`${API_URL}/api/v1/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // proves admin
        },
        body: JSON.stringify({
          ...form,
          price: Number(form.price), // convert price to a number
          inStock: true, // new items are available
        }),
      });

      if (res.ok) {
        const newProduct = await res.json();
        setProducts((prev) => [...prev, newProduct]); // add to the list immediately
        setStatus("Product added!");
        setForm({ name: "", price: "", category: "", image: "" }); // clear form
      } else {
        setStatus("Failed to add product.");
      }
    } catch (err) {
      setStatus("Something went wrong.");
    }
  };
  const markSold = async (productId) => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        `http://localhost:4000/api/v1/products/${productId}/sold`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (res.ok) {
        const updatedProduct = await res.json();
        setProducts((prev) =>
          prev.map((p) => (p._id === productId ? updatedProduct : p)),
        );
      } else {
        console.error("Failed to mark as sold");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <>
      <div className="admin-dashboard">
        <h2>Admin Dashboard</h2>
        {products.map((product) => (
          <div key={product._id} className="admin-item">
            <img
              src={product.image}
              alt={product.name}
              className="admin-item-img"
            />
            <span className="admin-item-name">{product.name}</span>

            <span
              className={`admin-item-status ${
                product.inStock ? "status-available" : "status-sold"
              }`}
            >
              {product.inStock ? "Available" : "SOLD"}
            </span>
            {product.inStock && (
              <button
                className="mark-sold-btn"
                onClick={() => markSold(product._id)}
              >
                Mark as Sold
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="add-product">
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="price">Price (DA):</label>
          <input
            type="number"
            id="price"
            value={form.price}
            onChange={handleChange}
            required
          />

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={form.category}
            onChange={handleChange}
            required
          />

          <label htmlFor="image">Image Path:</label>
          <input
            type="text"
            id="image"
            value={form.image}
            onChange={handleChange}
            placeholder="/images/item.jpg"
          />

          {status && <p>{status}</p>}
          <button type="submit">Add Product</button>
        </form>
      </div>
    </>
  );
}

export default AdminDashboard;
