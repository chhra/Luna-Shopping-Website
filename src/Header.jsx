import React, { useState, useEffect } from "react";
import { Link, Links } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
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
          <Link to="/">
            <motion.li
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px #ff9ffc",
              }}
            >
              {" "}
              <a href="#about">About</a>
            </motion.li>
          </Link>
          <Link to="/signup">
            <motion.li
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px #ff9ffc",
              }}
            >
              <a href="/signup">Sign up</a>
            </motion.li>
          </Link>
          <motion.li
            whileHover={{
              scale: 1.1,

              textShadow: "0px 0px 8px #ff9ffc",
            }}
          >
            <a href="#Login">Login</a>
          </motion.li>

          <motion.li
            whileHover={{
              scale: 1.1,

              textShadow: "0px 0px 8px #ff9ffc",
            }}
          >
            <a href="#wardrobe">Wardrobe</a>
          </motion.li>
        </ul>
      </nav>
      <hr></hr>
    </motion.header>
  );
}

export default Header;
