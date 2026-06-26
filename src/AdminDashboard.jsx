import React from "react";
import { useAuth } from "./contexts/AuthContext";
import { useProductsContext } from "./contexts/ProductsContext";

function AdminDashboard() {
  const { products, setProducts } = useProductsContext();

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
  );
}
export default AdminDashboard;
