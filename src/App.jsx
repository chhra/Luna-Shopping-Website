import React, { useState } from "react";
import Home from "./Home.jsx";
import Iridescence from "./Iridescence.jsx";
import Header from "./Header.jsx";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
import ProductList from "./ProductList.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Cart from "./Cart.jsx";
import Validation from "./ValidateDetails.jsx";
import AdminRoute from "./AdminRoute.jsx";
import AdminDashboard from "./AdminDashboard.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/validate" element={<Validation />} />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
      </Routes>
      <Iridescence
        color={[0.5, 0.6, 0.8]}
        mouseReact
        amplitude={0.1}
        speed={1}
      />
    </>
  );
}

export default App;
