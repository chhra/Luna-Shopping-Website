import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      initial={{ y: -250 }}
      animate={{ y: -10 }}
      transition={{ duration: 1 }}
    >
      <nav>
        <ul>
          <motion.li
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px #ff9ffc",
            }}
          >
            {" "}
            <a href="#about">About</a>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px #ff9ffc",
            }}
          >
            <a href="#Education">Education</a>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.1,

              textShadow: "0px 0px 8px #ff9ffc",
            }}
          >
            <a href="#Experience">Experience</a>
          </motion.li>

          <motion.li
            whileHover={{
              scale: 1.1,

              textShadow: "0px 0px 8px #ff9ffc",
            }}
          >
            <a href="#skills">Skills</a>
          </motion.li>
        </ul>
      </nav>
      <hr></hr>
    </motion.header>
  );
}

export default Header;
