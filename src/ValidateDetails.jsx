import React from "react";
import { div } from "framer-motion/client";
function Validation() {
  return (
    <div className="main">
      <form>
        <h2>By Entering your details,</h2>
        <h2>You are confirming your purchase with Yalidine.</h2>
        <img src=".\public\images\yalidine-logo.png" />
        <label htmlFor="first">First Name:</label>
        <input type="text" id="first" required />

        <label htmlFor="last">Last Name:</label>
        <input type="text" id="last" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />

        <label htmlFor="password">Phone Number:</label>
        <input type="password" id="password" />
        <label htmlFor="password">Adress:</label>
        <input type="password" id="password" />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
export default Validation;
