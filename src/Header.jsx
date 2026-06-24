import React, { useState, useEffect } from "react";
import { Link, Links } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "./contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <motion.header
      initial={{ y: -250 }}
      animate={{ y: -10 }}
      transition={{ duration: 1 }}
    >
      <h1 className="HeaderLogo">
        <i>Luna</i>
      </h1>
      <nav>
        <ul>
          <motion.li
            whileHover={{ scale: 1.1, textShadow: "0px 0px 8px #ff9ffc" }}
          >
            <a href="/">About</a>
          </motion.li>
          {!user ? (
            <>
              <motion.li
                whileHover={{ scale: 1.1, textShadow: "0px 0px 8px #ff9ffc" }}
              >
                <Link to="/signup">Sign up</Link>
              </motion.li>

              <motion.li
                whileHover={{ scale: 1.1, textShadow: "0px 0px 8px #ff9ffc" }}
              >
                <Link to="/Login">Login</Link>
              </motion.li>
            </>
          ) : (
            <>
              <motion.li
                whileHover={{ scale: 1.1, textShadow: "0px 0px 8px #ff9ffc" }}
              >
                <Link to="/shop">Wardrobe</Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1, textShadow: "0px 0px 8px #ff9ffc" }}
              >
                <Link to="/cart">Cart</Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1, textShadow: "0px 0px 8px #ff9ffc" }}
              >
                <button onClick={handleLogout}>Logout</button>
              </motion.li>
            </>
          )}
        </ul>
      </nav>
      <hr></hr>
    </motion.header>
  );
}

export default Header;
