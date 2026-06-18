import React, { useState } from "react";
import Home from "./Home.jsx";
import Iridescence from "./Iridescence.jsx";
import Header from "./Header.jsx";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
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
