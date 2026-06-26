import React from "react";
// middleware/admin.middleware.js
export const adminOnly = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next(); // they're an admin, allow it
  } else {
    res.status(403).json({ message: "Admin access only" });
  }
};
